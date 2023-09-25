const models = require('../models');
let jwt = require('jsonwebtoken')
const regexNameCategorie = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){6,45}$/; 
const regexId = /^([0-9]){1,}$/

module.exports = {
    newCateg : async (req, res) => {
        const nameCategorie = req.body.nameCategorie

        if (!regexNameCategorie.test(nameCategorie)) {
            return res.status(400).json({message: "Merci de mettre des caractères valide, minimum 6 caractères."})
        }
        if (nameCategorie == null || nameCategorie == "" || nameCategorie == undefined) {
            return res.status(400).json({message: "Merci de mettre un nom de catégorie VALIDE !"});
        } 
        const newCateg = await models.categorie.create({nameCategorie: nameCategorie})
        
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
            return res.status(400).json({message:"Categorie non trouvé " + error})
        })
    },

    delCateg : async (req, res) =>{
        console.log("ttototto")
        const idCategorie = req.params.idCategorie
        if (!regexId.test(idCategorie)) {
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

        if (!regexId.test(idCategorie) || !regexNameCategorie.test(nameCategorie)) {
            return res.status(400).json({message: "Merci de mettre des caractères valide."})
        }

        const categorie = await models.categorie.findOne({where: {id: idCategorie}})
        await categorie.update({
            nameCategorie: nameCategorie !== " " && nameCategorie !== "" || nameCategorie !== undefined || nameCategorie !== null ? nameCategorie : categorie.nameCategorie,
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
        if (!regexId.test(idCategorie)) {
            return res.status(400).json({message: "Merci de mettre des caractères valide."})
        }

        await models.categorie.findOne({where: {id: idCategorie}})
        .then((result)=>{
            return res.status(200).json({categorie: result})
        })
        .catch(()=>{
            return res.status(400).json({message: "Catégorie non trouvé"})
        })
    }
}