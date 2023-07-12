let express = require ('express');
const postController = require('../controller/post.js')
const router = express.Router();


// Article

// New Article
router.post('/new/actualite', postController.newPost)
// Obtenir un article
router.get('/get/actualite/:idactualite', postController.getPost)
// Obtenir tout les article
router.get('/get/actualite/all/actu', postController.allPost)

module.exports = router