const models = require ('../models');
const path = require('path')
const dotenv = require('dotenv').config({path: "././.env"});
const regexTextTopic = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){8,255}$/;
const regexId = /^([0-9]){1,}$/

module.exports = {
    newCom: async (req, res)=> {
        const {text, idUser, idCategorie, idTopic, idTheme} = req.body
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
                idTheme: idTheme
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
        return res.status(200).json({com: com})
       }).catch((error) =>{
        console.log("error",error)
        return res.status(400).json({message:"Commentaire pas trouvé"})
       }) 
    },

    putCom: async (req, res) =>{
        const idCom = req.params.idCom
        const text = req.body.text

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
                textComs: text ? text : verifyCom.textComs
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