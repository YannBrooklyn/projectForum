const models = require('../models');
let jwt = require('jsonwebtoken')
const path = require('path')
const dotenv = require('dotenv').config({path: "././.env"});
const regexColor = /^#+([a-zA-Z0-9]){6,6}$/
const regexId = /^([0-9]){1,}$/
const regexImage = /^([-a-zA-Z_.\d\s]{1,255})\.(?:jpg|gif|png|bmp)$/
const regexNameForum = /^([A-Za-zËÊÈéèêëÄÂÀÃãàâäÎÏÌîïìÜÛÙùüûÖÔÒôöõòÿ!_.'?\d\s-]){5,25}$/; 


module.exports = {
    putSet: async (req, res) => {
        const {nameForum, generalTextColor, backgroundColorThird , navbarTextColor, nameForumColor, textColorGeneralButton,	textColorDeleteButton, textColorUpdateButton, textColorCardMember, backgroundColorNavbar, backgroundColorFirst, backgroundColorSecond, backgroundColorCadre, backgroundColorCategorie, backgroundColorButtonBurger, backgroundColorGeneralButton, backgroundColorDeleteButton, backgroundColorUpdateButton, backgroundColorCardMember, backgroundColorZoneText} = req.body
        // const idSetting = req.params.idSetting
        // if (!regexId.test(idSetting)) {
        //     return res.status(400).json({message: "Une erreur est survenu sur l'Id"})
        // }
        console.log("rrrrrrrrrrrrrrr", req.files)

        function regexIconeDeletePost() {
            if (!req.files.iconeDeletePost) {
                
                return null
            } else {
                return regexImage.test(req.files.iconeDeletePost[0].originalname)
            }
        }
    
        function regexIconeUpdatePost() {
            if (!req.files.iconeUpdatePost) {
                
                return null
            } else {
                return regexImage.test(req.files.iconeUpdatePost[0].originalname)
            }
        }
    
        function regexIconeLikeTrue() {
            if (!req.files.iconeLikeTrue) {
               
                return null
            } else {
                return regexImage.test(req.files.iconeLikeTrue[0].originalname)
            }
        }
    
        function regexIconeLikeFalse() {
            if (!req.files.iconeLikeFalse) {
                
                return null
            } else {
                return regexImage.test(req.files.iconeLikeFalse[0].originalname)
            }
        }


        if (regexIconeDeletePost() === false && regexIconeLikeFalse() === false && regexIconeLikeTrue() === false && regexIconeUpdatePost() === false && !regexNameForum.test(nameForum) && !regexColor.test(generalTextColor) && !regexColor.test(navbarTextColor) && !regexColor.test(nameForumColor) &&!regexColor.test(textColorGeneralButton) && !regexColor.test(textColorUpdateButton) && !regexColor.test(textColorDeleteButton) && !regexColor.test(textColorCardMember) && !regexColor.test(backgroundColorNavbar) && !regexColor.test(backgroundColorFirst) && !regexColor.test(backgroundColorSecond) && !regexColor.test(backgroundColorThird) && !regexColor.test(backgroundColorCadre) && !regexColor.test(backgroundColorCategorie) && !regexColor.test(backgroundColorButtonBurger) && !regexColor.test(backgroundColorGeneralButton) && !regexColor.test(backgroundColorDeleteButton) && !regexColor.test(backgroundColorUpdateButton) && !regexColor.test(backgroundColorZoneText) && !regexColor.test(backgroundColorCardMember)) {
            return res.status(400).json({message: "Il y a du contenu invalide dans les requêtes envoyer."})
        }


        function iconeDeletePost() {
            if (req.files.iconeDeletePost) {
                
                return req.files.iconeDeletePost[0].filename
            } else {
                return null
            }
        }
    
        function iconeUpdatePost() {
            if (req.files.iconeUpdatePost) {
                
                return req.files.iconeUpdatePost[0].filename
            } else {
                return null
            }
        }
    
        function iconeLikeTrue() {
            if (req.files.iconeLikeTrue) {
               
                return req.files.iconeLikeTrue[0].filename
            } else {
                return null
            }
        }
    
        function iconeLikeFalse() {
            if (req.files.iconeLikeFalse) {
                
                return req.files.iconeLikeFalse[0].filename
            } else {
                return null
            }
        }
        console.log("aaaaaaaaaaadee5555", iconeDeletePost())
        console.log("mario", req.files)


        const setting = await models.settings.findOne({where: {activate: 1}})
        await setting.update({
            generalTextColor: generalTextColor !== " " && generalTextColor !== "" && generalTextColor !== null && generalTextColor !== undefined ? generalTextColor : setting.generalTextColor, 
            navbarTextColor: navbarTextColor !== " " && navbarTextColor !== "" && navbarTextColor !== null && navbarTextColor !== undefined ? navbarTextColor : setting.navbarTextColor,  
            nameForumColor: nameForumColor !== " " && nameForumColor !== "" && nameForumColor !== null && nameForumColor !== undefined ? nameForumColor : setting.nameForumColor, 
            textColorGeneralButton: textColorGeneralButton !== " " && textColorGeneralButton !== "" && textColorGeneralButton !== null && textColorGeneralButton !== undefined ? textColorGeneralButton : setting.textColorGeneralButton,
            textColorDeleteButton: textColorDeleteButton !== " " && textColorDeleteButton !== "" && textColorDeleteButton !== null && textColorDeleteButton !== undefined ? textColorDeleteButton : setting.textColorDeleteButton,
            textColorUpdateButton: textColorUpdateButton !== " " && textColorUpdateButton !== "" && textColorUpdateButton !== null && textColorUpdateButton !== undefined ? textColorUpdateButton : setting.textColorUpdateButton,
            textColorCardMember: textColorCardMember !== " " && textColorCardMember !== "" && textColorCardMember !== null && textColorCardMember !== undefined ? textColorCardMember : setting.textColorCardMember,
            backgroundColorNavbar: backgroundColorNavbar !== " " && backgroundColorNavbar !== "" && backgroundColorNavbar !== null && backgroundColorNavbar !== undefined ? backgroundColorNavbar : setting.backgroundColorNavbar,
            backgroundColorFirst: backgroundColorFirst !== " " && backgroundColorFirst !== "" && backgroundColorFirst !== null && backgroundColorFirst !== undefined ? backgroundColorFirst : setting.backgroundColorFirst, 
            backgroundColorSecond: backgroundColorSecond !== " " && backgroundColorSecond !== "" && backgroundColorSecond !== null && backgroundColorSecond !== undefined ? backgroundColorSecond : setting.backgroundColorSecond,
            backgroundColorCadre: backgroundColorCadre !== " " && backgroundColorCadre !== "" && backgroundColorCadre !== null && backgroundColorCadre !== undefined ? backgroundColorCadre : setting.backgroundColorCadre,
            backgroundColorCategorie: backgroundColorCategorie !== " " && backgroundColorCategorie !== "" && backgroundColorCategorie !== null && backgroundColorCategorie !== undefined ? backgroundColorCategorie : setting.backgroundColorCategorie, 
            backgroundColorButtonBurger: backgroundColorButtonBurger !== " " && backgroundColorButtonBurger !== "" && backgroundColorButtonBurger !== null && backgroundColorButtonBurger !== undefined ? backgroundColorButtonBurger : setting.backgroundColorButtonBurger,
            backgroundColorGeneralButton: backgroundColorGeneralButton !== " " && backgroundColorGeneralButton !== "" && backgroundColorGeneralButton !== null && backgroundColorGeneralButton !== undefined ? backgroundColorGeneralButton : setting.backgroundColorGeneralButton,
            backgroundColorDeleteButton: backgroundColorDeleteButton !== " " && backgroundColorDeleteButton !== "" && backgroundColorDeleteButton !== null && backgroundColorDeleteButton !== undefined ? backgroundColorDeleteButton : setting.backgroundColorDeleteButton, 
            backgroundColorUpdateButton: backgroundColorUpdateButton !== " " && backgroundColorUpdateButton !== "" && backgroundColorUpdateButton !== null && backgroundColorUpdateButton !== undefined ? backgroundColorUpdateButton : setting.backgroundColorUpdateButton,
            backgroundColorCardMember: backgroundColorCardMember !== " " && backgroundColorCardMember !== "" && backgroundColorCardMember !== null && backgroundColorCardMember !== undefined ? backgroundColorCardMember : setting.backgroundColorCardMember,
            backgroundColorZoneText: backgroundColorZoneText !== " " && backgroundColorZoneText !== "" && backgroundColorZoneText !== null && backgroundColorZoneText !== undefined ? backgroundColorZoneText : setting.backgroundColorZoneText,
            backgroundColorThird: backgroundColorThird !== " " && backgroundColorThird !== "" && backgroundColorThird !== null && backgroundColorThird !== undefined ? backgroundColorThird : setting.backgroundColorThird,
            nameForum: nameForum !== " " && nameForum !== "" && nameForum !== null && nameForum !== undefined ? nameForum : setting.nameForum,
            iconeLikeTrue: iconeLikeTrue() !== " " && iconeLikeTrue() !== "" && iconeLikeTrue() !== null && iconeLikeTrue() !== undefined ? iconeLikeTrue() : setting.iconeLikeTrue,
            iconeLikeFalse: iconeLikeFalse() !== " " && iconeLikeFalse() !== "" && iconeLikeFalse() !== null && iconeLikeFalse() !== undefined ? iconeLikeFalse() : setting.iconeLikeFalse,
            iconeDeletePost: iconeDeletePost() !== " " && iconeDeletePost() !== "" && iconeDeletePost() !== null && iconeDeletePost() !== undefined ? iconeDeletePost() : setting.iconeDeletePost,
            iconeUpdatePost: iconeUpdatePost() !== " " && iconeUpdatePost() !== "" && iconeUpdatePost() !== null && iconeUpdatePost() !== undefined ? iconeUpdatePost() : setting.iconeUpdatePost
        })
        .then((test)=>{
            console.log(test)
           return  res.status(200).json({message: "Paramètre forum modifié avec succès."})
        })
        .catch(()=>{
            return res.status(500).json({message: "Une erreur est survenu"})
        })
    
    },

    changeSet: async (req, res)=>{
        const idSetting = req.params.idSetting
        const sets = await models.settings.findOne({where: {activate: 1}})
        if (sets) {
            sets.update({
                activate: 0
            })
        }
        const changeSet = await models.settings.findOne({where: {id: idSetting}})
        changeSet.update({
            activate: 1
        })
        .then((result)=>{
            return  res.status(200).json({message: "Paramètre forum modifié avec succès."})
        })
        .catch(()=>{
            return res.status(500).json({message: "Une erreur est survenu"})
        })
    },

    newSet: async (req,res) => {
        const {nameForum, generalTextColor, backgroundColorThird , navbarTextColor, nameForumColor, textColorGeneralButton,	textColorDeleteButton, textColorUpdateButton, textColorCardMember, backgroundColorNavbar, backgroundColorFirst, backgroundColorSecond, backgroundColorCadre, backgroundColorCategorie, backgroundColorButtonBurger, backgroundColorGeneralButton, backgroundColorDeleteButton, backgroundColorUpdateButton, backgroundColorCardMember, backgroundColorZoneText} = req.body
        const nameSetting = req.body.nameSetting
        const newSet = await models.settings.create({
            nameSetting: nameSetting,
            generalTextColor: generalTextColor,
            navbarTextColor: navbarTextColor,
            nameForumColor: nameForumColor,
            textColorGeneralButton: textColorGeneralButton,
            textColorDeleteButton:textColorDeleteButton,
            textColorUpdateButton: textColorUpdateButton,
            textColorCardMember:textColorCardMember,
            backgroundColorNavbar: backgroundColorNavbar,
            backgroundColorFirst:backgroundColorFirst,
            backgroundColorSecond:backgroundColorSecond,
            backgroundColorCadre: backgroundColorCadre,
            backgroundColorCategorie: backgroundColorCategorie,
            backgroundColorButtonBurger: backgroundColorButtonBurger,
            backgroundColorGeneralButton: backgroundColorGeneralButton,
            backgroundColorDeleteButton: backgroundColorDeleteButton,
            backgroundColorUpdateButton: backgroundColorUpdateButton,
            backgroundColorCardMember: backgroundColorCardMember,
            backgroundColorZoneText: backgroundColorZoneText,
            backgroundColorThird:backgroundColorThird,
            nameForum: nameForum,
            iconeLikeTrue: req.files.iconeLikeTrue[0].filename,
            iconeLikeFalse: req.files.iconeLikeFalse[0].filename,
            iconeDeletePost:req.files.iconeDeletePost[0].filename,
            iconeUpdatePost: req.files.iconeUpdatePost[0].filename
        })

        if (newSet) {

        return res.status(200).json({message: nameSetting +  " a bien été crée"})
        } else {
        return res.status(500).json({message: "Une erreur est survenu"})
        }
    },

    allSet: async (req, res)=>{
        await models.settings.findAll()
        .then((setting)=> {
            console.log("zzzz",setting)
            return res.status(200).json({settings: setting})
        })
        .catch(()=>{
            return res.status(500).json({message: "Une erreur est survenu"})
        })
    },

    getSet: async (req, res)=> {
        
        const result = await models.settings.findOne({where: {activate: 1}})
        .then((result)=>{
            return res.status(200).json({setting: result})
        })
        .catch((error)=>{
            return res.status(400).json({message: "Une erreur est survenu"})
        })
    }
}