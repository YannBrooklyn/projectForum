let express = require ('express');
const categController = require('../controller/categorie.js');
const middleware = require('../middleware/middleware.js');
const router = express.Router()
// const middleware = require ('../middleware/middleware.js')


router.post("/new/categorie", middleware.admin, categController.newCateg)

router.get("/get/categorie/all/categ", categController.allCateg)

router.get("/get/categorie/:idCategorie", categController.getCateg)

router.put('/edit/categorie/:idCategorie', middleware.admin, categController.editCateg)

router.delete('/delete/categorie/:idCategorie', middleware.admin, categController.delCateg)
module.exports = router