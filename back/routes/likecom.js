let express = require ('express');
const likeComController = require('../controller/likecom.js');
const middleware = require('../middleware/middleware.js');
const router = express.Router();

// Create LikePost
router.post('/action/likecom', middleware.loged, likeComController.likeCom)
router.post('/get/likecom', likeComController.getLikeCom)
router.post('/getall/likecom', likeComController.getAllLikeCom)

module.exports = router