const models = require ('../models');
const path = require('path')
const dotenv = require('dotenv').config({path: "././.env"});
const regexTextTopic = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){8,255}$/;
const regexId = /^([0-9]){1,}$/
const regexImage = /^([a-zA-Z_.\d\s-]{1,25})\.(?:jpg|gif|png|bmp)$/


module.exports = {

    emptyImageCom: async (req, res)=>{
        const idCom = req.params.idCom
        if (!regexId.test(idCom) || idCom == "0") {
            return res.status(400).json({message: "Une erreur dans l'Id Com."})
        }
        const result = await models.coms.findOne({ where: {id: idCom}})

        if (result) {
             result.update({
                imageComs: null
            })
            .then((result)=>{
                return res.status(200).json({message: "Image retirer"})

            })
            .catch(()=>{
                return res.status(500).json({message: "Une erreur est suvenu."})
            })
        } else {
            return res.status(400).json({message:"Commentaire non trouvée"})
        }
    },

    newCom: async (req, res)=> {
        const {text, idUser, idCategorie, idTopic, idTheme} = req.body
        console.log(req.file)
        function imagesComs() {
            if (req.file) {
                if (regexImage.test(req.file.originalname)){

                    return req.file.filename
                } else {
                    return res.status(400).json({message: "Caractères invalide"})
                }
            } else {
                return null
            }
        }
        console.log(imagesComs())
        if (!regexTextTopic.test(text) || idUser == "0" || idCategorie == "0" || idTopic == "0" || idTheme == "0" || !regexId.test(idUser) || !regexId.test(idCategorie) || !regexId.test(idTopic)) {
            return res.status(400).json({message: "Merci de mettre des caractères valide."})
        }
        console.log(req.body)
        if (text == "" || text == " " || text === null || text === undefined) {
            return res.status(400).json({message: "Merci de bien vouloir remplir les champs !"})
        } else {
            const newCom = await models.coms.create({
                textComs: text,
                idUser: idUser,
                idCategorie: idCategorie,
                idPost: idTopic,
                idTheme: idTheme,
                imageComs: imagesComs()
            })
            if (newCom) {
                return res.status(200).json({ message: text + ' a bien été crée', com: newCom})
            } else {
                res.status(500).json({message: 'Une erreur est survenu.'})
            }
        }
    },

    allCom: async (req, res) => {
        await models.coms.findAll({
                include: [{
                    model: models.posts,
                    required: false
                },
                {
                    model: models.users,
                    required: false
                },
                {
                    model: models.themes,
                    required: false
                }],
                order: [
                    ['id', 'ASC']
                ]
            })
        .then((result)=>{
            return res.status(200).json({coms: result})
        })
        .catch((error)=>{
            return res.status(400).json({message:"Aucun commentaire trouvé "})
        })
    },

    delCom: async (req, res) => {
        const idCom = req.params.idCom
        if (!regexId.test(idCom) || idCom == "0") {
            return res.status(400).json({message: "Erreur dans l'Id Topic"})
        }
        const verifyCom = await models.coms.findOne({
            where: {id: idCom}
        })
        if (verifyCom) {
            await models.coms.destroy({
                where: {id: idCom}
            })
            .then((result) =>{
                console.log(idCom)
                return res.status(200).json({message: "commentaire supprimer " + result})
            })
            .catch((error)=> {
                console.log(error)
                return res.status(500).json({message: "erreur"})
            })
        } else {
            return res.status(500).json({message: "commentaire non trouvé"})
        }
    },

    getCom: async (req, res) => {
        console.log("REGARDE MOI MON GARS")
        const idCom = req.params.idCom
        console.log("eeeellfv", idCom)
        if (!regexId.test(idCom) || idCom == "0") {
            return res.status(400).json({message: "Erreur dans l'idCom"})
        }
        await models.coms.findOne({ 
            where: {id: idCom},
            include: [{ 
                model: models.users,
                required: false
            }, {
                model: models.posts,
                required: false
            },
            {
                model: models.themes,
                required: false
            }]
        })
       .then((com)=> {
        console.log(com)
        console.log("SALUUUUUUUUUUUUTTTTT")
        return res.status(200).json({com: com})
       }).catch((error) =>{
        console.log('ERREUR REGARDE')
        console.log("error",error)
        return res.status(400).json({message:"Commentaire pas trouvé"})
       }) 
    },

    putCom: async (req, res) =>{
        const idCom = req.params.idCom
        const text = req.body.text
        console.log("burger", req.file)
        
        console.log("sandwich", regexImage.test(req.file.originalname))
        function imagesComs() {
            if (req.file) {
                if (regexImage.test(req.file.originalname)) {

                    return req.file.filename
                } else {
                    return res.status(400).json({message: "Image contenant caractères invalide"})
                }
            } else {
                return null
            }
        }

        if (!regexId.test(idCom) || idCom == "0" || !regexTextTopic.test(text)) {
            return res.status(400).json({message: "Merci de mettre des caractères valide."})
        }
        
        if (text == "" || text == " ") {
            console.log('rorrororor', idCom)
            return res.status(400).json({message: "Merci de remplir le champs de texte"})
        }

        const verifyCom = await models.coms.findOne({
            where: {id: idCom}
        })
        if (verifyCom){
            console.log("loooook", verifyCom)
            await verifyCom.update({
                textComs: text ? text : verifyCom.textComs,
                imageComs: imagesComs() !== null ? imagesComs() : verifyCom.imageComs
            })
            .then((result)=>{
                return res.status(200).json({message: "Commentaire modifié", result})
            })
            .catch((error)=>{
                return res.status(500).json({message: "erreur commentaire non modifié"})
            })
        } else {
            return res.status(500).json({message: "Erreur"})
        }
    }
}