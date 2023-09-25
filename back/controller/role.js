


const models = require('../models');
let jwt = require('jsonwebtoken')

const regexNameRole = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){4,50}$/; 
const regexColorRole = /^#+([a-zA-Z0-9]){6,6}$/
const regexNameRoleUpdate = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){0,50}$/; 
const regexColorRoleUpdate= /^#+([a-zA-Z0-9]){0,6}$/
const regexID = /^([0-9]){1,}$/


module.exports = {
    newRole: async (req, res) => {
        console.log("coucou")
        const {name, color} = req.body
        console.log(req.body)

        if (!regexColorRole.test(color) || !regexNameRole.test(name)) {
            return res.status(400).json({message: "Merci de mettre des caractères valide."})
        }

        if (name == "" || name == " " || name === undefined || name === null) {
            console.log("rooo")
            return res.status(400).json({message: "Merci de bien remplir les champs."})
        }
        const role = await models.roles.findOne({
            attributes: ['nameRole'],
            where: {nameRole: name}
        })
        if (role !== null) {
            console.log("geeeeeeeee")
            console.log(role)
            return res.status(400).json({message: "Nom de role déjà crée"})
        } else {
            const newRole = await models.roles.create({
                nameRole: name,
                colorRole: color
            })
            console.log("rrfff")
            if (newRole) {
                return res.status(200).json({message: "Nouveau role crée"})
            } else {
                return res.status(500).json({message: "Une erreur est survenu"})
            }
        }
    },
    allRole: async (req, res) => {
        console.log("baki")
        await models.roles.findAll()
        .then((result)=>{
            return res.status(200).json({roles: result})
        })
        .catch((error)=>{
            return res.status(500).json({message: "Une erreur est survenu"})
        })
    },

    editRole: async (req, res)=>{
        const idRole = req.params.idRole
        const {name, color} = req.body
        

        function regexColor() {
            if (color == "") {
                return color
            } else {
                return regexColorRoleUpdate.test(color)
            }
        }

        if (!regexNameRoleUpdate.test(name) || regexColor === false || !regexID.test(idRole)) {
            return res.status(400).json({message: "Merci de mettre des caractères valide."})
        }

        const roleSearch = await models.roles.findOne({ where : {nameRole: name}})
        if (roleSearch !== null) {
            return res.status(400).json({message: "Nom de role déjà pris"})
        }
        

        const role = await models.roles.findOne({where: {id: idRole}})
        await role.update({
            nameRole: name !== " "  && name !== "" && name !== undefined && name !== null ? name : role.nameRole,
            colorRole: color !== " " && color !== "" && color !== undefined && color !== null ? color : role.colorRole,
        })
        .then(()=> {
            return res.status(200).json({message: "Role modifié"})
        })
        .catch(()=>{
            return res.status(500).json({message: "Une erreur est survenu"})
        })
    },
    
    delRole: async (req, res)=> {
        console.log("totot")
        const idRole = req.params.idRole;
        if (!regexID.test(idRole)) {
            return res.status(400).json({message: "Erreur dans IdRole."})
        }
        const role = await models.roles.findOne({
            attributes: ['id'],
            where: {id: idRole}
        })
        if (role) {
            await models.roles.destroy({
                attributes:['id'],
                where:{id: idRole}
            })
            .then(()=>{
                return res.status(200).json({message: "Role supprimer"})
            })
            .catch(()=>{
                return res.status(500).json({message: "Une erreur est survenu"})
            })
        }
    },
}