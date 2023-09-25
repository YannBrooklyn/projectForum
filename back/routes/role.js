let express = require ('express');
const roleController = require('../controller/role.js');
const middleware = require('../middleware/middleware.js');
const router = express.Router();

router.post('/new/role', middleware.admin, roleController.newRole)

router.get('/all/role', roleController.allRole)

router.put('/edit/role/:idRole', middleware.admin, roleController.editRole)

router.delete('/delete/role/:idRole', middleware.admin, roleController.delRole)




module.exports = router