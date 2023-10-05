let express = require ('express');
const settingController = require('../controller/setting.js');
const middleware = require('../middleware/middleware.js');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: '../front/public/image/icone/' })


router.put("/update/setting", upload.fields([{name: "iconeLikeTrue", maxCount: 1}, {name: "iconeLikeFalse", maxCount:1}, {name: "iconeDeletePost", maxCount:1}, {name: "iconeUpdatePost", maxCount:1}]), middleware.admin, settingController.putSet)
router.get("/get/setting", settingController.getSet)
router.post("/post/new/setting", upload.fields([{name: "iconeLikeTrue", maxCount: 1}, {name: "iconeLikeFalse", maxCount:1}, {name: "iconeDeletePost", maxCount:1}, {name: "iconeUpdatePost", maxCount:1}]), middleware.admin, settingController.newSet)
router.put("/update/change/:idSetting", upload.fields([{name: "iconeLikeTrue", maxCount: 1}, {name: "iconeLikeFalse", maxCount:1}, {name: "iconeDeletePost", maxCount:1}, {name: "iconeUpdatePost", maxCount:1}]), middleware.admin, settingController.changeSet)
router.get("/get/all/setting", settingController.allSet)

module.exports = router