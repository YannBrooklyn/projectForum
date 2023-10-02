let express = require ('express');
const themeController = require('../controller/theme.js');
const middleware = require('../middleware/middleware.js');
const router = express.Router()


router.post('/new/theme', middleware.admin, themeController.newTheme);

router.get('/get/theme/all/theme', themeController.allTheme);

router.get('/get/theme/:idTheme', themeController.getTheme);

router.put('/edit/theme/:idTheme', middleware.admin, themeController.putTheme);

router.delete('/delete/theme/:idTheme', middleware.admin, themeController.delTheme)

module.exports = router