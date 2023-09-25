let express = require ('express');
const likePostController = require('../controller/likepost.js');
const middleware = require('../middleware/middleware.js');
const router = express.Router();

// Create LikePost
router.post('/action/likepost', middleware.loged, likePostController.likePost);
// Obtenir information d'un like
router.post('/get/likepost', likePostController.getLikePost)
// Obtenir les informations de tout les likes
router.post('/getall/likepost', likePostController.getAllLikePost)
module.exports = router