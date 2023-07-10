const models = require('../models');
let jwt = require('jsonwebtoken')

module.exports = {
    newActu: async (req , res) => {
        const {title, text} = req.body
        const idUser = jwt.decode(req.headers.authorization)
        if (title == "" || text == "") {
            return res.status(500).json({message: "Merci de bien vouloir remplir TOUT LES CHAMPS !"})
        }

        const newPost = await models.actualites.create({attributes: ['titleActualite', 'textActualite', 'idUser'],
            titleActualite: title,
            textActualite: text,
            idUser: parseInt(idUser.id)
        })
        if (newPost) {
            return res.status(200).json({message: title + ' a bien été crée'})
        } else {
            return res.status(400).json({message: 'erreur'})
        }
    },

    getActu : async (req, res) => {
        const idActualite = req.params.idactualite
        await models.actualites.findOne({ attributes:['idActualite', 'titleActualite', 'textActualite', 'idUser'], where:{idActualite: idActualite}})
       .then((actualite)=> {
        return res.status(200).json({post: actualite})
       }).catch((error) =>{
        return res.status(400).json({message:"Actualite pas trouvé"})
       }) 
    },

    allActu : async (req, res) => {

        await models.actualites.findAll({ attributes:['idActualite', 'titleActualite', 'textActualite', 'idUser']})
        .then((actualite) => {
            return res.status(200).json({post: actualite})

        }).catch((error) =>{
            return res.status(400).json({message:"Actualite pas trouvé " + error})
        })
    }
}
