let express = require ('express');
const postController = require('../controller/post.js');
const middleware = require('../middleware/middleware.js');
const router = express.Router();


// Article

// New Topic
router.post('/new/post', middleware.loged, postController.newPost)
// Obtenir un Topic
router.get('/get/post/:idTopic', postController.getPost)
// Obtenir tout les Topics
router.get('/get/all/post', postController.allPost)
// Supprimer un Topic
router.delete('/delete/post/:idTopic', middleware.updateDelPost, postController.delPost)
// Modifier un Topic
router.put('/put/post/:idTopic', middleware.updateDelPost, postController.putPost)

module.exports = router