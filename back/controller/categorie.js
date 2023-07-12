const models = require('../models');
let jwt = require('jsonwebtoken')

module.exports = {
    newCateg : async (req, res) => {
        const namecategorie = req.body.namecategorie
        if (namecategorie == null || namecategorie == "" || namecategorie == undefined) {
            return res.status(500).json({message: "Merci de mettre un nom de catégorie VALIDE !"});
        } 
        const newCateg = await models.categorie.create({nameCategorie: namecategorie})
        
        if (newCateg) {
            return res.status(200).json({message: namecategorie + " a bien été crée"})
        } else {
            return res.status(400).json({message: "erreur"})
        }
    }
}