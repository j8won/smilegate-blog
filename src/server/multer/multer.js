const router = require('express').Router();
const multer = require("multer");

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/gif"
  ) {
    cb(null, true);
  } else {
    req.fileValidationError = "jpg, jpeg, png, gif, webp 파일만 업로드 가능합니다.";
    cb(null, false);
  }
};

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, done) => {
      done(null, __dirname + '../images');
    },
    filename: (req, file, done) => {
      const ext = path.extname(file.originalname);
      // aaa.txt => aaa+&&+129371271654.txt
      const fileName = path.basename(file.originalname, ext) + Date.now() + ext;
      done(null, fileName);
    },
  }),
  fileFilter : fileFilter,
});

router.route('/').post(upload.single('image'), (req, res) => {
  res.status(200).send({
    message: 'uploadImage',
    filename: req.file.filename,
  });
});

module.exports = router;
