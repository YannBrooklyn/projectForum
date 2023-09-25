const models = require('../models');
let jwt = require('jsonwebtoken')
const path = require('path')
const dotenv = require('dotenv').config({path: "././.env"});
const regexId = /^([0-9]){1,}$/


module.exports = {
    likeCom: async (req, res)=>{
        const {idUser, idPost, idCategorie, idCom} = req.body
        console.log(req.body)
        
        if (!regexId.test(idUser) || !regexId.test(idPost) || !regexId.test(idCategorie) || !regexId.test(idCom)) {
            return res.status(400).json({message: "Erreur dans les ID"})
        }
        console.log("yeeeeeeehh", req.body)

        const verifyLikeCom = await models.likescoms.findOne({
            where: {idUser: idUser, idPost: idPost, idCategorie: idCategorie, idCom: idCom}
        })
        if (verifyLikeCom) {
            await models.likescoms.destroy({
                where: {idUser: idUser, idPost: idPost, idCategorie: idCategorie, idCom: idCom}
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
                idCom: idCom
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
        const {idUser, idCategorie, idPost, idCom} = req.body
        console.log(req.body)
        console.log("yyyyyy",idCategorie)
        if (!regexId.test(idUser) || !regexId.test(idPost) || !regexId.test(idCategorie) || !regexId.test(idCom)) {
            return res.status(400).json({message: "Erreur dans les ID"})
        }
        await models.likescoms.findOne({
            where: {idCom: idCom, idUser: idUser, idPost: idPost, idCategorie: idCategorie}
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
        if (!regexId.test(idUser)) {
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