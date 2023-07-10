let express = require ('express');
const postController = require('../controller/post.js')
const router = express.Router();


// Article

// New Article
router.post('/new/actualite', postController.newActu)
// Obtenir un article
router.get('/get/actualite/:idactualite', postController.getActu)
// Obtenir tout les article
router.get('/get/actualite/all/actu', postController.allActu)

module.exports = router