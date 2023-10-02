const models = require('../models');
let jwt = require('jsonwebtoken')
const path = require('path')
const dotenv = require('dotenv').config({path: "././.env"});
const regexTitleTopic = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){8,45}$/; 
const regexTextTopic = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){8,255}$/;
const regexId = /^([0-9]){1,}$/


module.exports = {
    newPost: async (req , res) => {
        const {title, text, idUser, idCategorie, idTheme} = req.body
        
        if (title == "0" || text == "0" || idUser == "0" || idCategorie == "0" || idTheme == "0" || !regexTextTopic.test(text) || !regexTitleTopic.test(title) || !regexId.test(idUser) || !regexId.test(idCategorie)) {
            return res.status(400).json({message: "Merci de mettre des caractères valide."})
        }
        
        if (title == "" || text == "" || text == " " || title == " ") {
            return res.status(400).json({message: "Merci de bien vouloir remplir TOUT LES CHAMPS !"})
        } else {

            
            const newPost = await models.posts.create({attributes:['titlePost', 'textPost'],
                titlePost: title,
                textPost: text,
                idUser: idUser,
                idCategorie: idCategorie,
                idTheme: idTheme
            })
            if (newPost) {
                return res.status(200).json({message: title +  ' a bien été crée.', post: newPost})
            } else {
                return res.status(500).json({message: 'Une erreur est survenu.'})
            }
        }
    },

    getPost: async (req, res) => {
        
        const idTopic = req.params.idTopic
        if (!regexId.test(idTopic) || idTopic == "0") {
            return res.status(400).json({message: "Erreur dans l'IdTopic"})
        }
        await models.posts.findOne({ 
            attributes:['id', 'idUser', 'titlePost', 'textPost'], 
            where: {id: idTopic},
            include: [{ 
                model: models.users,
                required: false
            },
            {
                model: models.themes,
                required: false
            }]
        })
       .then((actualite)=> {
        console.log(idTopic)
        return res.status(200).json({post: actualite})
       }).catch((error) =>{
        console.log(error)
        return res.status(400).json({message:"Post pas trouvé"})
       }) 
    },

    allPost : async (req, res) => {

        await models.posts.findAll({
            include: [{
                model: models.users,
                required: false
            },
            {
                model: models.coms,
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
        .then((actualite) => { 
            return res.status(200).json({post: actualite})

        })
        .catch((error) =>{
            return res.status(500).json({message:"Topic pas trouvé "})
        })
    },

    delPost : async (req , res)=> {
        const idTopic = req.params.idTopic
        if (!regexId.test(idTopic) || idTopic == "0") {
            return res.status(400).json({message: "Erreur dans l'Id"})
        }
        const verifyPost = await models.posts.findOne({
            where: { id: idTopic}
        })
        if (verifyPost) {
            await models.posts.destroy({
                where: {id: idTopic}
            })
            .then((result)=> {
                return res.status(200).json({message: "post supprimer"})
            })
            .catch((error)=>{
                return res.status(500).json({message: 'Une erreur est survenu'})
            })
        } else {
            return res.status(400).json({message: "Post non trouvé"})
        }
    },

    putPost : async (req, res) => {
        const idTopic = req.params.idTopic
        const {title, text} = req.body
        if (idTopic == "0" || !regexId.test(idTopic) || !regexTextTopic.test(text) || !regexTitleTopic.test(title)) {
            return res.status(400).json({message: "Merci de mettre des caractères valide."})
        }
        if (title == "" || text == "" || title == " " || text == " ") {
            return res.status(400).json({message: "Merci de bien vouloir REMPLIR TOUT LES CHAMPS !!!"})
        }
        const verifyPost = await models.posts.findOne({
            where: {id: idTopic}
        })
        if (verifyPost) {
            await verifyPost.update({
                titlePost: title ? title : verifyPost.titlePost,
                textPost: text ? text : verifyPost.textPost,
            })
            .then((result)=>{
                return res.status(200).json({message: "Topic modifié avec succès"})
            })
            .catch((error)=>{
                console.log("back idTopic",title + text)
                return res.status(500).json({message: "erreur Topic non modifié"})
            })
        }
    }
}
