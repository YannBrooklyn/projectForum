const models = require('../models');
let jwt = require('jsonwebtoken')
const path = require('path')
const dotenv = require('dotenv').config({path: "././.env"});
const regexId = /^([0-9]){1,}$/


module.exports = {
    likeCom: async (req, res)=>{
        const {idUser, idPost, idCategorie, idCom, idTheme} = req.body
        
        
        if (idUser == "0" || idPost == "0" || idCategorie == "0" || idCom == "0" || idTheme == "0" || !regexId.test(idTheme) || !regexId.test(idUser) || !regexId.test(idPost) || !regexId.test(idCategorie) || !regexId.test(idCom)) {
            return res.status(400).json({message: "Erreur dans les ID"})
        }
        

        const verifyLikeCom = await models.likescoms.findOne({
            where: {idUser: idUser, idPost: idPost, idCategorie: idCategorie, idCom: idCom}
        })
        if (verifyLikeCom) {
            await models.likescoms.destroy({
                where: {idUser: idUser, idPost: idPost, idCategorie: idCategorie, idCom: idCom, idTheme: idTheme}
            })
            .then((result)=>{
                return res.status(200).json({message: "like retirer"})
            })
            .catch((error)=>{
                console.log(error)
                return res.status(500).json({message: "error"})
            })
        } 
        else if (!verifyLikeCom) {
            await models.likescoms.create({
                idUser: idUser,
                idPost: idPost,
                idCategorie: idCategorie,
                idCom: idCom,
                idTheme: idTheme
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

    getLikeCom: async (req, res)=>{
        const {idUser, idCategorie, idPost, idCom, idTheme} = req.body
        console.log(req.body)
        console.log("yyyyyy",idCategorie)
        if (idUser == "0" || idCategorie == "0" || idPost == "0" || idCom == "0" || idTheme == "0" || !regexId.test(idUser) || !regexId.test(idPost) || !regexId.test(idCategorie) || !regexId.test(idCom)) {
            return res.status(400).json({message: "Erreur dans les ID"})
        }
        await models.likescoms.findOne({
            where: {idCom: idCom, idUser: idUser, idPost: idPost, idCategorie: idCategorie, idTheme: idTheme}
        })
        .then((result)=>{
            return res.status(200).json({message: result})
        })
        .catch((error)=>{
            console.log(error)
            return res.status(500).json({message: "erreur"})
        })
    },

    getAllLikeCom: async (req, res) => {
        const {idUser} = req.body
        if (!regexId.test(idUser) ||idUser == "0") {
            return res.status(400).json({message: "Erreur dans l'IdUser"})
        }
        console.log(req.body)
        await models.likescoms.findAll({
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