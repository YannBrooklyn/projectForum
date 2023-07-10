let express = require ('express');
const userController = require('../controller/user.js')
const router = express.Router()
// const middleware = require ('../middleware/middleware.js')
let jwt = require('jsonwebtoken')

let thedb = require('../config/dbconfig.js')


// Enregister un utilisateur
router.post('/register', userController.regUser);
// // Supprimer un utilisateur
router.delete('/delete/:iduser', userController.delUser);
// // Modifier un utilisateur
router.put('/edit/:iduser', userController.ediUser);
// // Connexion utilisateur
router.post('/login', userController.logUser);
// Récuperer ces propre information
router.get('/get/me', userController.getUser);
// Récuperer les information de tout les utilisateur
router.get('/get/all', userController.allUser);


module.exports = router