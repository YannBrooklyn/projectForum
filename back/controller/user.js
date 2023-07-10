const thedb = require('../config/dbconfig')
let models = require('../models')
let asyncLib = require ('async')
let bcryptjs = require('bcryptjs')
let jwt = require('jsonwebtoken')
const { where } = require('sequelize')

module.exports = {
    regUser : async (req, res) => {
        const {email, password, pseudonyme, passwordconfirm} = req.body
        if (email == "" || pseudonyme == "" || password == "" || passwordconfirm == "") {
            return res.status(500).json ({message: "Merci de bien remplir les champs REQUIS !"});
        }
        if (password !== passwordconfirm) {
            return res.status(500).json ({message: "Vous n'avez pas mit le même mot de passe !"});
        }
        const user = await models.users.findOne ({attributes: ['email'], where : {email : email}});
        if (user === null) {
            const salt = bcryptjs.genSaltSync(8)
            const hashedpassword = bcryptjs.hashSync(password, salt)
            const newUser = await models.users.create({
                email: email,
                password: hashedpassword,
                pseudonyme: pseudonyme
            })
            if (newUser) {
                return res.status(200).json({message: "Vous êtes enregistrer"})
            } else {
                return res.status(503).json({message: "erreur général, veuillez réesayer ultérieurement."})
            }
        } 
        else if (user !== null) {
            return res.status(500).json({message: "Email déjà utilisé."})
        } else {
            return res.status(503).json({message: "erreur général, veuillez réesayer ultérieurement."})
        }
    },

    logUser : async (req, res) => {
        const {email, password} = req.body

        if (email == "" || password == "") {
            return res.status(500).json({message: "Merci de remplir les champs requis."})
        } 

        const user = await models.users.findOne({ attributes: ['id', 'email', 'password'], where : {email : email} });
        if (user) {
            const passwordVerify = await bcryptjs.compare(password, user.password)
            if (passwordVerify) {
                token = jwt.sign({id : user.id}, process.env.JSECRET);
                
                return res.status(200).json({token: token});
            } 
            else if (!passwordVerify) {
                return res.status(400).json({error: "Wrong Password"});
            } else {
                return res.status(503).json({ error: "Erreur général, veuillez réesayez ultérieurement"})
            }
        } else if (!user) {
            return res.status(404).json({error: "Cette utilisateur existe pas"})
        } else {
            return res.status(503).json({ error: "Erreur général, veuillez réesayez ultérieurement"})
        }
    }, 

    ediUser : async (req, res) => {
        const idUser = req.params.iduser
        const {pseudonyme, email} = req.body
        if (pseudonyme == "" || email == "") {
            return res.status(500).json({message: "Merci de remplir les champs requis."})
        }
        const user = await models.users.findOne({attributes: ['pseudonyme', 'email'], where: {id: idUser} })
        await user.update({ attributes: ['pseudonyme', 'email'],
            id: parseInt(idUser),
            pseudonyme: pseudonyme ? pseudonyme : user.pseudonyme,
            email: email ? email : user.email,
        }).then(() => {
            return res.status(200).json({ message: "Utilisateur modifié" + user})
        }).catch((error) => {
            console.log(error)
            return res.status(400).json({message: "erreur" + error})
        })
    },

    delUser : async (req, res) => {
        const idUser = req.params.iduser;
        const user = await models.users.findOne({ attributes: ['id'], where: {id: idUser} });
        if (user) {
            await models.users.destroy({
                attributes:['id'], where:{id: idUser}
            }).then(()=> {
                return res.status(200).json({ message: 'utilisateur supprimé'})
            }).catch((error) => {
                return res.status(400).json({message: "erreur lors de la suppression " + error})
            })
        }
    },

    getUser : async (req, res) => {
        const authorization = req.headers.authorization
        const idUser = jwt.decode(authorization)
        if (!idUser || idUser == null || idUser == undefined) {
            return res.status(400).json({message: "vous n'etes pas connecté"})
        }

        await models.users.findOne({attributes: ['pseudonyme'], where: {id: idUser.id}})
        .then((user) => {
            return res.status(200).json({user: user})
        }).catch((error)=> {
            console.log(idUser)
            return res.status(400).json({message: "utilisateur pas trouvé "+ error})
        }) 

    },

    allUser : async (req, res) => {
        await models.users.findAll({attributes: ['pseudonyme']})
        .then((users)=> {
            return res.status(200).json({users: users})
        })
        .catch((error)=> {
            return res.status(400).json({message: "erreur "+ error})
            
        })
    }
}




























// module.exports = {

//     logUser : (req, res) => {
//         let email = req.body.email
//         let password = req.body.password
//         let pseudonyme = req.body.pseudonyme

//         asyncLib.waterfall([
//             (done) => {
//                 models.users.findOne({
//                     attributes: ['email'],
//                     where: { email: email}
//                 })
//                 .then((userFound) => {
//                     done(null, userFound);
//                 })
//                 .catch((error) => {
//                     console.log(error)
//                     return res.status(500).json({'error': 'unable to verify user'});
//                 });
//             },
//             (userFound, done) => {
//                 if(!userFound) {
//                     console.log("yo")
//                     done(null, userFound);
                    
//                     asyncLib.waterfall([

//                         (done) => {
//                             models.users.create({
//                                 pseudonyme : pseudonyme,
//                                 email : email,
//                                 password : password,
//                             })
//                             .then((newUser) => {
//                                 done(newUser);
//                             })
//                             .catch((error) => {
//                                 console.log('error', error)
//                                 return res.status(500).json({'error': 'on peut pas rajouter'});
//                             });
                            
//                         }
//                     ], (newUser) => {
//                         if(newUser) {
//                             return res.status(201).json({
//                                 'idUser' : newUser.idUser,
//                                 'message': "c'est bon",
//                             });
//                         } else {
//                             console.log("salut yo")
//                             return res.status(500).json({'error': 'non'})
//                         }
//                     })
//                 } else {
//                     return res.status(409).json({ 'error': 'email already exists'})
//                 }
//             }
//         ])
//     } 
// }