let express = require ('express')
const comController = require ('../controller/com.js');
const middleware = require('../middleware/middleware.js');
const router = express.Router();
const multer = require('multer')
const upload = multer({ dest: '../front/public/imagepost/' })




// New Com
router.post('/new/com',  upload.single('imagesComs'),middleware.loged, comController.newCom)
// Obtenir tout les commentaires
router.get('/get/com/all/com', comController.allCom)
// Supprimer un commantaire
router.delete('/delete/com/:idCom', middleware.updateDelComs, comController.delCom)
// Editer un commentaire
router.put('/put/com/:idCom', upload.single('imagesComs'), middleware.updateDelComs, comController.putCom)
// Recupéré un commentaire
router.get('/get/com/:idCom', comController.getCom)

router.put('/put/image/com/:idCom', middleware.updateDelComs, comController.emptyImageCom)


module.exports = router