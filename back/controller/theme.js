const models = require('../models');
let jwt = require('jsonwebtoken');
const theme = require('../models/theme');
const regexTheme = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){6,45}$/; 
const regexId = /^([0-9]){1,}$/

module.exports = {
    newTheme: async (req, res)=>{
        const nameTheme = req.body.nameTheme

        if (!regexTheme.test(nameTheme)) {
            return res.status(400).json({message: "Merci de mettre des caractères valide, minimum 6 caractères."})
        }
        if (nameTheme == null || nameTheme == "" || nameTheme == undefined) {
            return res.status(400).json({message: "Merci de mettre un nom de catégorie VALIDE !"});
        } 
        const newTheme = await models.themes.create({nameTheme: nameTheme})
        
        if (newTheme) {
            return res.status(200).json({message: nameTheme + " a bien été crée"})
        } else {
            return res.status(500).json({message: "Une erreur est survenu"})
        }
    },

    allTheme: async (req, res) => {
        await models.themes.findAll({
            include: [{
                model: models.categorie,
                required: false
            }]
        })
        .then((theme)=> {
            return res.status(200).json({themes: theme})
        })
        .catch((error)=> {
            return res.status(400).json({message:"Categorie non trouvé "})
        })
    },

    delTheme : async (req, res) =>{
        const idTheme = req.params.idTheme
        if (!regexId.test(idTheme) || idTheme == "0") {
            return res.status(400).json({message:"Erreur dans l'Id Theme"})
        }
        const theme = await models.themes.findOne({
            attributes: ['id'],
            where: {id: idTheme}
        })
        if (theme) {
            await models.themes.destroy({
                attributes: ['id'],
                where: {id: idTheme}
            })
            .then(()=> {
                return res.status(200).json({message: "Theme supprimer"})
            })
            .catch(()=>{
                return res.status(500).json({message: "Une erreur est survenu"})
            })
        }
    },

    putTheme: async (req, res) =>{
        const idTheme = req.params.idTheme
        const nameTheme = req.body.nameTheme

        if (!regexId.test(idTheme) || !regexTheme.test(nameTheme) || idTheme == "0") {
            return res.status(400).json({message: "Merci de mettre des caractères valide."})
        }

        const theme = await models.themes.findOne({where: {id: idTheme}})
        await theme.update({
            nameTheme: nameTheme !== " " && nameTheme !== "" || nameTheme !== undefined || nameTheme !== null ? nameTheme : theme.nameTheme,
        })
        .then(()=> {
            return res.status(200).json({message: "Theme modifié"})
        })
        .catch(()=>{
            return res.status(500).json({message: "Une erreur est survenu"})
        })
    },

    getTheme: async (req, res) => {
        const idTheme = req.params.idTheme
        if (!regexId.test(idTheme) || idTheme == '0') {
            return res.status(400).json({message: "Merci de mettre des caractères valide."})
        }

        await models.themes.findOne({where: {id: idTheme}})
        .then((result)=>{
            return res.status(200).json({theme: result})
        })
        .catch(()=>{
            return res.status(400).json({message: "Theme non trouvé"})
        })
    }
}