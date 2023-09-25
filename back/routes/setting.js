let express = require ('express');
const settingController = require('../controller/setting.js');
const middleware = require('../middleware/middleware.js');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: '../front/public/image/icone/' })


router.put("/update/setting/:idSetting", upload.fields([{name: "iconeLikeTrue", maxCount: 1}, {name: "iconeLikeFalse", maxCount:1}, {name: "iconeDeletePost", maxCount:1}, {name: "iconeUpdatePost", maxCount:1}]), middleware.admin, settingController.putSet)
router.get("/get/setting/:idSetting", settingController.getSet)


module.exports = router