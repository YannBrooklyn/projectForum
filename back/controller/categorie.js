const models = require('../models');
let jwt = require('jsonwebtoken')
const regexNameCategorie = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){6,45}$/; 
const regexId = /^([0-9]){1,}$/

module.exports = {
    newCateg : async (req, res) => {
        const {idTheme, nameCategorie} = req.body

        if (!regexNameCategorie.test(nameCategorie) || !regexId.test(idTheme) || idTheme == "0") {
            console.log(req.body)
            return res.status(400).json({message: "Merci de mettre des caractères valide, minimum 6 caractères."})
        }
        if (nameCategorie == null || nameCategorie == "" || nameCategorie == undefined) {
            return res.status(400).json({message: "Merci de mettre un nom de catégorie VALIDE !"});
        } 
        const newCateg = await models.categorie.create({nameCategorie: nameCategorie, idTheme: idTheme})
        
        if (newCateg) {
            return res.status(200).json({message: nameCategorie + " a bien été crée"})
        } else {
            return res.status(500).json({message: "Une erreur est survenu"})
        }
    },

    allCateg : async (req, res) => {
        await models.categorie.findAll()
        .then((categories)=> {
            return res.status(200).json({categories: categories})
        })
        .catch((error)=> {
            return res.status(400).json({message:"Categorie non trouvé "})
        })
    },

    delCateg : async (req, res) =>{
        console.log("ttototto")
        const idCategorie = req.params.idCategorie
        if (!regexId.test(idCategorie) || idCategorie == "0") {
            return res.status(400).json({message:"Erreur dans l'Id Categorie"})
        }
        const categorie = await models.categorie.findOne({
            attributes: ['id'],
            where: {id: idCategorie}
        })
        if (categorie) {
            await models.categorie.destroy({
                attributes: ['id'],
                where: {id: idCategorie}
            })
            .then(()=> {
                return res.status(200).json({message: "Categorie supprimer"})
            })
            .catch(()=>{
                return res.status(500).json({message: "Une erreur est survenu"})
            })
        }
    },

    editCateg: async (req, res) =>{
        const idCategorie = req.params.idCategorie
        const nameCategorie = req.body.nameCategorie
        const idTheme = req.body.idTheme
        if (!regexId.test(idCategorie) || idCategorie == "0" || !regexNameCategorie.test(nameCategorie) || idTheme == "0" || !regexId.test(idTheme)) {
            return res.status(400).json({message: "Merci de mettre des caractères valide."})
        }

        const categorie = await models.categorie.findOne({where: {id: idCategorie}})
        await categorie.update({
            nameCategorie: nameCategorie !== " " && nameCategorie !== "" || nameCategorie !== undefined || nameCategorie !== null ? nameCategorie : categorie.nameCategorie,
            idTheme: idTheme !== " " && idTheme !== "" || idTheme !== undefined || idTheme !== null ? idTheme : categorie.idTheme,
        })
        .then(()=> {
            return res.status(200).json({message: "Categorie modifié"})
        })
        .catch(()=>{
            return res.status(500).json({message: "Une erreur est survenu"})
        })
    },

    getCateg: async (req, res) => {
        const idCategorie = req.params.idCategorie
        
        console.log('eeeee',idCategorie)
        if (!regexId.test(idCategorie) || idCategorie == "0") {
            return res.status(400).json({message: "Merci de mettre des caractères valide."})
        }

        await models.categorie.findOne({
            where: {id: idCategorie},
            include: [{ 
                model: models.themes,
                required: false
            }]
        })
        .then((result)=>{
            return res.status(200).json({categorie: result})
        })
        .catch(()=>{
            return res.status(400).json({message: "Catégorie non trouvé"})
        })
    }
}