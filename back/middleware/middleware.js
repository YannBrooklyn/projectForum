const models = require('../models');
let jwt = require('jsonwebtoken')


module.exports = {
    admin: async (req, res, nex)=>{
        const token = req.body.token
        const regexToken = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){2,}$/; 
        
        if (!token) {
            console.log(token)
            return res.status(400).json({message: "Vous n'êtes pas connecté."})
        }
        if (!regexToken.test(token)) {
            return res.status(400).json({message: "Une erreur au niveau du Token"})
        } else {
            jwt.verify(token, process.env.JSECRET, async (err, dec) => {
                if (err) {
                    return res.status(400).json({message: "Erreur"})
                } else {

                    const idUser = jwt.decode(token)

                    await models.users.findOne({where: {id: idUser.id, idRole: 1}})
                    .then(()=>{
                        nex()
                    })
                    .catch(()=>{
                        return res.status(400).json({message: "Vous n'êtes pas administrateur."})
                    })
                }
            })
        }

    },

    moderation: async (req, res, nex)=>{
        const token = req.body.token
        const regexToken = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){2,}$/; 
        
        if (!regexToken.test(token)) {
            return res.status(400).json({message: "Une erreur au niveau du Token"})
        }

        if (!token) {
            return res.status(400).json({message: "Vous n'êtes pas connecté."})
        } else {
            jwt.verify(token, process.env.JSECRET, async (err, dec) => {
                if (err) {
                    return res.status(400).json({message: "Erreur"})
                } else {

                    const idUser = jwt.decode(token)

                    await models.users.findOne({where: {id: idUser.id, idRole: 1 && 2}})
                    .then(()=>{
                        nex()
                    })
                    .catch(()=>{
                        return res.status(400).json({message: "Vous n'êtes pas administrateur."})
                    })
                }
            })
        }

    },

    loged: async (req, res, nex) =>{
        const token = req.body.token
        const regexToken = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){2,}$/; 
        
        if (!regexToken.test(token)) {
            return res.status(400).json({message: "Une erreur au niveau du Token"})
        }
        if (!token) {
            return res.status(400).json({message: "Vous n'êtes pas connecté."})
        } else {
            jwt.verify(token, process.env.JSECRET, async (err, dec) => {
                if (err) {
                    return res.status(400).json({message: "Erreur"})
                } else {

                    const idUser = jwt.decode(token)
                    await models.users.findOne({where: {id: idUser.id}})
                    .then(()=>{
                        nex()
                    })
                    .catch(()=>{
                        return res.status(400).json({message: "Vous n'êtes pas enregistrer chez nous."})
                    })
                }
            })
        }
    },

    

    logout: async (req, res, nex) =>{
        const token = req.body.token
        const regexToken = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){0,}$/; 
        
        if (!regexToken.test(token)) {
            return res.status(400).json({message: "Une erreur au niveau du Token"})
        }

        if (!token) {
            nex()
        } else {
            return res.status(400).json({message: "Vous êtes déjà connecté."})
        }
    },

    updateDelPost: async (req, res, nex)=>{
        
        const token = req.body.token
        const idTopic = req.params.idTopic
        const regexToken = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){2,}$/; 
        const regexID = /^([0-9]){1,}$/
        if (!regexToken.test(token) || !regexID.test(idTopic)) {
            return res.status(400).json({message: "Une erreur au niveau du Token et de l'ID Topic"})
        }
        if (!token) {
            return res.status(400).json({message: "Vous n'êtes pas connecté."})
        } else {
            jwt.verify(token, process.env.JSECRET, async (err, dec) => {
                if (err) {
                    return res.status(400).json({message: "Erreur"})
                } else {

                    const idUser = jwt.decode(token)

                    await models.users.findOne({where: {id: idUser.id}})
                    .then((result)=>{
                        models.posts.findOne({where: {id: idTopic}})
                        .then((resultPost)=>{
                            if (resultPost.idUser == idUser.id || result.idRole == 1 || result.idRole == 2) {
                                nex()
                            } else {
                                return res.status(400).json({message: "Vous n'avez pas la permission de modifier ou supprimer ce message."})
                            }
                        })
                    })
                    .catch(()=>{
                        return res.status(400).json({message: "Vous n'avez pas la permission de modifier ou supprimer ce message."})
                    })
                }
            })
        }

    },

    updateDelComs: async (req, res, nex)=>{
        const token = req.body.token
        console.log(token)
        console.log("jour de paie", req.body)
        const idCom = req.params.idCom
        const regexToken = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){2,}$/; 
        const regexID = /^([0-9]){1,}$/
        if (!regexToken.test(token) || !regexID.test(idCom)) {
            return res.status(400).json({message: "Une erreur au niveau du Token et de l'ID Com"})
        }
        console.log("BRIGADE",!regexToken.test(token), !regexID.test(idCom))
        if (!token) {
            return res.status(400).json({message: "Vous n'êtes pas connecté."})
        } else {
            jwt.verify(token, process.env.JSECRET, async (err, dec) => {
                if (err) {
                    return res.status(400).json({message: "Erreur"})
                } else {

                    const idUser = jwt.decode(token)

                    await models.users.findOne({where: {id: idUser.id}})
                    .then((result)=>{
                        models.coms.findOne({where: {id: idCom}})
                        .then((resultComs)=>{
                            if (resultComs.idUser == idUser.id || result.idRole == 1 || result.idRole == 2) {
                                console.log("iii",resultComs.dataValues.idUser)
                                console.log("iiipp",resultComs)
                                console.log("iiipp",resultComs.idUser)
                                console.log("iiioo",result.idRole)
                                nex()
                            } else {
                                return res.status(400).json({message: "Vous n'avez pas la permission de modifier ou supprimer ce message."})
                            }
                        })
                    })
                    .catch(()=>{
                        return res.status(400).json({message: "Vous n'avez pas la permission de modifier ou supprimer ce message."})
                    })
                }
            })
        }

    },

}