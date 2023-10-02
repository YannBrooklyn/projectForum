
let models = require('../models')
let bcryptjs = require('bcryptjs')
let jwt = require('jsonwebtoken')
const path = require('path')
const dotenv = require('dotenv').config({path: "././.env"});
const multer = require('multer')
const upload = multer({ dest: 'static/images/' })
const regexPseudo = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){5,15}$/; 
const regexPassword = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){6,255}$/; 
const regexEmail = /^([-._A-Za-z\d]){3,100}@([a-zA-Z]){3,15}\.([a-zA-Z]){2,15}$/
const regexPseudoUpdate = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){0,15}$/; 
const regexPasswordUpdate = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){0,255}$/; 
const regexEmailUpdate = /^([-._A-Za-z\d]){0,100}@([a-zA-Z]){0,15}\.([a-zA-Z]){0,15}$/
const regexRoleUpdate = /^([0-9]{1,})$/
const regexImage = /^([a-zA-Z_.\d\s-]{1,25})\.(?:jpg|gif|png|bmp)$/
const regexID = /^([0-9]){1,}$/



module.exports = {
    regUser : async (req, res) => {
        const {email, password, pseudo, confirmPassword} = req.body
       

        if ( confirmPassword == " " || password == " " || email == " " || pseudo == " " || password === null || password === undefined || confirmPassword === null || confirmPassword === undefined ||email == "" || pseudo == "" || password == "") {
            return res.status(400).json ({message: "Merci de bien remplir les champs REQUIS !"});
        }
        if (!regexPassword.test(password) || !regexEmail.test(email) || !regexPseudo.test(pseudo)) {
            return res.status(400).json({message: "Merci de remplir les champs avec des caractères VALIDE !"})
        }


        if (confirmPassword !== password) {
            return res.status(400).json({message: "Les mots de passe ne sont pas les même."})
        }
        const user = await models.users.findOne ({attributes: ['email'], where : {email : email}});
        if (user === null) {
            const salt = bcryptjs.genSaltSync(8)
            const hashedpassword = bcryptjs.hashSync(password, salt)
            const newUser = await models.users.create({
                email: email,
                password: hashedpassword,
                pseudo: pseudo
            })
            if (newUser) {
                return res.status(200).json({message: "Vous êtes enregistrer"})
            } else {
                return res.status(500).json({message: "erreur général, veuillez réesayer ultérieurement."})
            }
        } 
        else if (user !== null) {
            return res.status(400).json({message: "Email déjà utilisé."})
        } else {
            return res.status(500).json({message: "erreur général, veuillez réesayer ultérieurement."})
        }
    },

    logUser : async (req, res) => {
        const {email, password} = req.body

        if (!regexEmail.test(email) || !regexPassword.test(password)) {
            return res.status(400).json({message: "Merci de remplir les champs avec des caractères valide !"})
        }

        if (email == "" || password == "" || email == " " || password == " " || email === null || email === undefined || password === undefined || password === null) {
            return res.status(400).json({message: "Merci de remplir les champs requis."})
        } 

        const user = await models.users.findOne({attributes: ['password', 'id', 'email', 'pseudo'], where : {email : email} });
        if (user) {
            const passwordVerify = await bcryptjs.compare(password, user.password)
            if (passwordVerify) {
               
                token = jwt.sign({id : user.id}, process.env.JSECRET);
                
                return res.status(200).json({token: token});
            } 
            else if (!passwordVerify) {
                return res.status(400).json({message: "Mot de passe incorrect."});
            } else {
                return res.status(500).json({ message: "Erreur général, veuillez réesayez ultérieurement"})
            }
        } else if (!user) {
            return res.status(404).json({message: "Cette utilisateur existe pas"})
        } else {
            return res.status(500).json({ message: "Erreur général, veuillez réesayez ultérieurement"})
        }
    },

    editUser : async (req, res)=>{
        const idUser = req.params.idUser
        
        const {pseudo, email, password, role} = req.body
    
        
        if (!regexID.test(idUser)) {
            return res.status(400).json({message: "Erreur dans l'ID User"})
        }

        function emailRegex () {
            if (email !== "") {
                return regexEmailUpdate.test(email)
            } else {
                return email
            }
        }

        function regexRole() {
            if (role == "0" || role === "" || role === "NaN") {
                return role
            } else {
                return regexRoleUpdate.test(role)
            }
        }
        if (emailRegex() === false ||  !regexPasswordUpdate.test(password) || !regexPseudoUpdate.test(pseudo) || regexRole() === false) {
            return res.status(400).json({message: "Merci de mettre des caractères valide."})
        }

   
        if (req.files.avatar) {
            if (!regexImage.test(req.files.avatar[0].originalname)) {
                return res.status(400).json({message: "Merci de mettre des caractères valide pour l'avatar, nous acceptons seulement les images jpg png gif bmp."})
            }
        }

        if (req.files.banniere) {
            if (!regexImage.test(req.files.banniere[0].originalname)) {
                return res.status(400).json({message: "Merci de mettre des caractères valide pour la bannière, nous acceptons seulement les images jpg png gif bmp."})
            }
        }

        const user = await models.users.findOne({where: {id: idUser}})
        

        function avatar() {
            if (req.files.avatar) {
                return req.files.avatar[0].filename
            } else {
                return null
            }
        }

        function banniere() {
            if (req.files.banniere) {
                return req.files.banniere[0].filename
            } else {
                return null
            }
        }
        

        function hashingPassword() {
            if (password)  {
                const salt = bcryptjs.genSaltSync(8)
                const hashedpassword = bcryptjs.hashSync(password, salt)
                return hashedpassword
            } else {
                return user.password
            }
        }

        
        await user.update({
            pseudo: pseudo !== " " && pseudo !== "" && pseudo !== undefined && pseudo !== null ? pseudo : user.pseudo,
            email: email !== " " && email !== "" && email !== undefined && email !== null ? email : user.email,
            password: password !== " " && password !== "" && password !== undefined && password !== null ? hashingPassword() : user.password,
            avatar: avatar() !== " " && avatar() !== "" && avatar() !== "" && avatar() !== undefined && avatar() !== null ? avatar() : user.avatar,
            banner: banniere() !== " " && banniere() !== ""  && banniere() !== undefined && banniere() !== null ? banniere() : user.banner,
            idRole: role !== undefined && role !== 0 &&  role !== "NaN" && role !== "" && role !== " " && role !== null ? role : user.idRole
        })
        .then(()=> {
            return res.status(200).json({message: "Utilisateur modifié avec succès"})
        })
        .catch((err)=>{
            return res.status(500).json({message: "Une erreur est survenu"})
        })
    },

    ediConfidUser : async (req, res) => {
        const idUser = req.params.iduser
        
        const {pseudo, email, password, confirmPassword} = req.body

        function emailRegex () {
            if (email !== "") {
                return !regexEmailUpdate.test(email)
            } else {
                return email
            }
        }

        if ( confirmPassword == " " || password == " " || email == " " || pseudo == " " || password === null || password === undefined || confirmPassword === null || confirmPassword === undefined ) {
            return res.status(400).json ({message: "Merci de bien remplir les champs REQUIS !"});
        }

        if (confirmPassword !== password) {
            return res.status(400).json({message: "Les mots de passe ne sont pas les même."})
        }

        if (!regexID.test(idUser)) {
            return res.status(400).json({message: "Vous n'êtes pas connecté."})
        }

        if (!regexPasswordUpdate.test(password) || emailRegex() === false || !regexPseudoUpdate.test(pseudo)) {
            return res.status(400).json({message: "Merci de remplir les champs avec des caractères VALIDE !"})
        }

        console.log(req.body)
        const user = await models.users.findOne({where: {id: idUser} })
        

        function hashingPassword() {
            if (password === confirmPassword)  {
                const salt = bcryptjs.genSaltSync(8)
                const hashedpassword = bcryptjs.hashSync(password, salt)
                return hashedpassword
            } else {
                return user.password
            }
        }

        if (user) {

            await user.update({
                
                pseudo: pseudo !== " " && pseudo !== "" && pseudo !== undefined &&  pseudo !== null ? pseudo : user.pseudo,
                email: email !== " " && email !== "" &&  email !== undefined &&  email !== null ? email : user.email,
                password: password !== " " && password !== "" &&  password !== undefined &&  password !== null ? hashingPassword() : user.password 
                
            
            }).then(() => {
                return res.status(200).json({ message: "Utilisateur modifié"})
            }).catch((error) => {
                console.log(error)
                return res.status(500).json({message: "Une erreur est survenu"})
            })
        } else {
            return res.status(400).json({message: "Utilisateur non trouvé"})
        }
    },

    ediPPUser: async (req, res) => {
        const idUser = req.params.iduser
        if (!regexID.test(idUser)) {
            return res.status(400).json({message: "Une erreur est survenu"})
        }
        console.log(req.file)
        if (req.file) {
            if (!regexImage.test(req.file.originalname)) {
                return res.status(400).json({message: "Merci de mettre des caractères valide pour l'avatar, nous acceptons seulement les images jpg png gif bmp."})
            }
        }
        console.log(req.file)
        function avatar() {
            if (req.file) {
                return req.file.filename
            } else {
                return null
            }
        }
        const user  = await models.users.findOne({where: {id: idUser}})
        await user.update({
            avatar: avatar() !== " " && avatar() !== "" && avatar() !== "" && avatar() !== undefined && avatar() !== null ? avatar() : user.avatar
        })
        .then (()=> {
            return res.status(200).json({ message: "Avatar modifié avec succès"})
        })
        .catch((error)=>{
            console.log(error)
            return res.status(500).json({message: "Une erreur est survenu."})
        })
    },

    onlineUser : async (req, res) =>{
        const idUser = req.params.idUser
        const statsUser = req.body.statsUser
        if (!regexID.test(idUser)) {
            return res.status(400).json({message: "Vous n'êtes pas connecté."})
        }
        
        if (!regexID.test(statsUser)) {
            console.log('wssssssss')
            return res.status(400).json({message: "Erreur de paramètre"})
        }

        if (statsUser != 1 && statsUser != 0) {
            console.log('rrrrrrrr958')
            console.log(statsUser)
            return res.status(400).json({message: "Erreur de paramètre"})
        }

        const user  = await models.users.findOne({where: {id: idUser}})
        await user.update({
            online: statsUser !== " " && statsUser !== ""  && statsUser !== undefined && statsUser !== null ?  statsUser : user.online
        })
        .then (()=> {
            return res.status(200).json({ message: "Status modifié avec succès"})
        })
        .catch((error)=>{
            console.log(error)
            return res.status(500).json({message: "Une erreur est survenu."})
        })
    },

    offlineAllUsers : async (req, res) =>{
        

        const user = await models.users.findOne({where: {online: 1}})

        if (user !== null) {

            await user.update({
                online: 0
            })
            .then (()=> {
                return res.status(200).json({ message: "Status modifié avec succès"})
            })
            .catch((error)=>{
                console.log(error)
                return res.status(500).json({message: "Une erreur est survenu."})
            })
        }
    },

    ediBNUser : async (req, res) => {
        const idUser = req.params.iduser
        if (!regexID.test(idUser)) {
            return res.status(400).json({message: "Vous n'êtes pas connecté."})
        }

        if (req.file) {
            if (!regexImage.test(req.file.originalname)) {
                return res.status(400).json({message: "Merci de mettre des caractères valide pour la bannière, nous acceptons seulement les images jpg png gif bmp."})
            }
        }

        console.log(req.file)
        function banniere() {
            if (req.file) {
                return req.file.filename
            } else {
                return null
            }
        }
        const user  = await models.users.findOne({where: {id: idUser}})
        await user.update({
            banner: banniere() !== " " && banniere() !== ""  && banniere() !== undefined && banniere() !== null ? banniere() : user.banner
        })
        .then (()=> {
            return res.status(200).json({ message: "Bannière modifié avec succès"})
        })
        .catch((error)=>{
            console.log(error)
            return res.status(500).json({message: "Une erreur est survenu."})
        })
    },

    delUser : async (req, res) => {
        console.log('oooo')
        const idUser = req.params.iduser;

        if (idUser === undefined || idUser === null || idUser == "" || idUser == " "){
            return res.status(400).json({message: "Aucune ID"})
        }
        

        if (!regexID.test(idUser)) {
            return res.status(400).json({message: "Erreur dans l'ID User"})
        }
        const user = await models.users.findOne({ attributes: ['id'], where: {id: idUser} });
        if (user) {
            await models.users.destroy({
                attributes:['id'], where:{id: idUser}
            }).then(()=> {
                return res.status(200).json({ message: 'utilisateur supprimé'})
            }).catch((error) => {
                return res.status(500).json({message: "erreur lors de la suppression "})
            })
        }
    },

    getUser : async (req, res) => {
        const idUser = req.params.idUser

        if (!idUser || idUser == null || idUser == undefined) {
            return res.status(400).json({message: "Erreur dans l'ID Utilisateur"})
        }
        if (!regexID.test(idUser)) {
            return res.status(400).json({message: "Caractères invalide dans l'ID"})
        }
        await models.users.findOne({
            where: {id: idUser},
            include: [{
                model: models.posts,
                required: false
            },
            {
               model: models.coms,
               required: false
            },
            {
                model: models.roles,
                required: false
            },
            {
                model: models.likesposts,
                required: false
            },
            {
                model: models.likescoms,
                required: false
            }]
        })
        .then((user) => {
            return res.status(200).json({user: user})
        }).catch((error)=> {
            return res.status(500).json({message: "utilisateur pas trouvé "})
        }) 

    },

    allUser : async (req, res) => {
        console.log('wsssshhh')
        await models.users.findAll({
            include: [{
                model: models.posts,
                required: false
            },
            {
                model: models.coms,
                required: false
            },
            {
                model: models.roles,
                required: false
            },
            {
                model: models.likesposts,
                required: false
            },
            {
                model: models.likescoms,
                required: false
            }]
        })
        .then((users)=> {
            return res.status(200).json({users: users})
        })
        .catch((error)=> {
            return res.status(500).json({message: "erreur "+ error}) 
        })
    }
}




























// module.exports = {

//     logUser : (req, res) => {
//         let email = req.body.email
//         let password = req.body.password
//         let pseudo = req.body.pseudo

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
//                                 pseudo : pseudo,
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