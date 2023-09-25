const models = require('../models');
let jwt = require('jsonwebtoken')
const path = require('path')
const dotenv = require('dotenv').config({path: "././.env"});
const regexId = /^([0-9]){1,}$/


module.exports = {
    likePost: async (req, res)=> {
        const {idUser, idPost, idCategorie} = req.body
        console.log("yeeeeeehhhh", req.body)
        if (!regexId.test(idUser) || !regexId.test(idPost) || !regexId.test(idCategorie)) {
            return res.status(400).json({message: "Erreur dans les ID"})
        }
        const verifyLikePost = await models.likesposts.findOne({
            where: {idUser: idUser, idPost: idPost, idCategorie: idCategorie}
        })
        if (verifyLikePost) {
            await models.likesposts.destroy({
                where: {idPost: idPost, idUser: idUser, idCategorie: idCategorie}
            })
            .then((result)=>{
                return res.status(200).json({message: "like retirer"})
            })
            .catch((error)=>{
                return res.status(500).json({message: "Une erreur est survenu"})
            })
        }
        else if (!verifyLikePost) {
            await models.likesposts.create({
                idUser: idUser,
                idPost: idPost,
                idCategorie: idCategorie
            })
            .then((result)=>{
                return res.status(200).json({message: "Liker"})
            })
            .catch((error)=>{
                console.log(error)
                return res.status(500).json({message: "erreur"})
            })
        }
    },

    getLikePost: async (req, res)=>{
        const {idUser, idCategorie, idPost} = req.body
        console.log(req.body)
        console.log(!regexId.test(idUser) , !regexId.test(idPost) , !regexId.test(idCategorie))
        if (!regexId.test(idUser) || !regexId.test(idPost) || !regexId.test(idCategorie)) {
            return res.status(400).json({message: "Erreur dans les ID"})
        }
        console.log(idCategorie)
        await models.likesposts.findOne({
            where: {idUser: idUser, idPost: idPost, idCategorie: idCategorie}
        })
        .then((result)=>{
            return res.status(200).json({result})
        })
        .catch((error)=>{
            console.log(error)
            return res.status(500).json({message: "erreur"})
        })
    },

    getAllLikePost: async (req, res) => {
        const idUser = req.body.idUser

        if (!regexId.test(idUser)) {
            return res.status(400).json({message: "Erreur dans les ID"})
        }

        await models.likesposts.findAll({
            where: {idUser: idUser}
        })
        .then((result)=>{
            return res.status(200).json({message: result})
        })
        .catch((error)=>{
            console.log(error)
            return res.status(500).json({message: "erreur"})
        })
    }
}