const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, path.join(__dirname, './uploads'));
    },
    filename: function (req, res, cb) {
        const uniquename = Date.now() + "-" + res.originalname;
        cb(null, uniquename);
    }
})
exports.upload = multer({ storage: storage });