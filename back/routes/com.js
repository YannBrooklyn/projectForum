let express = require ('express')
const comController = require ('../controller/com.js');
const middleware = require('../middleware/middleware.js');
const router = express.Router();




// New Com
router.post('/new/com', middleware.loged, comController.newCom)
// Obtenir tout les commentaires
router.get('/get/com/all/com', comController.allCom)
// Supprimer un commantaire
router.delete('/delete/com/:idCom', middleware.updateDelComs, comController.delCom)
// Editer un commentaire
router.put('/put/com/:idCom', middleware.updateDelComs, comController.putCom)
// Recupéré un commentaire
router.get('/get/com/:idCom', comController.getCom)


module.exports = router