let express = require ('express');
const categController = require('../controller/categorie.js')
const router = express.Router()
// const middleware = require ('../middleware/middleware.js')


router.post("/new/", categController.newCateg)

module.exports = router