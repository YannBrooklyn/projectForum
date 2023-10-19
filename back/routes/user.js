let express = require ('express');
const userController = require('../controller/user.js')
const router = express.Router()
const multer = require('multer');
const middleware = require('../middleware/middleware.js');
const upload = multer({ dest: '../front/public/avatar/' })


// Enregister un utilisateur
router.post('/register', middleware.logout, userController.regUser);
// // Supprimer un utilisateur
router.delete('/delete/:iduser', middleware.admin,userController.delUser);
// Modifier un utilisateur
router.put('/edit/confidentialite/:iduser', middleware.loged, userController.ediConfidUser);
// Modifier la Photo de Profil d'un utilisateur
router.put('/edit/photoprofil/:iduser',  upload.single('avatar'), middleware.loged ,userController.ediPPUser);
// Modifier la Photo de Profil d'un utilisateur
router.put('/edit/banner/:iduser', upload.single('banner'), middleware.loged ,userController.ediBNUser);
// // Connexion utilisateur
router.post('/login', middleware.logout, userController.logUser);
// Récuperer information d'un utilisateur
router.get('/get/user/:idUser', userController.getUser);
// Récuperer les information de tout les utilisateur
router.get('/get/all', userController.allUser);
// Modifier utilisateur depuis le panel
router.put('/edit/user/:idUser', upload.fields([{name: 'avatar', maxCount: 1}, {name: 'banniere', maxCount: 1}]), middleware.admin, userController.editUser)
// 
router.put('/edit/online/user/:idUser', middleware.loged, userController.onlineUser)

router.put('/edit/offline/user', userController.offlineAllUsers)


module.exports = router