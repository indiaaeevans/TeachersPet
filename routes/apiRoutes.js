var fs = require('fs');
var S3FS = require('s3fs');
var muiltiparty = require('connect-multiparty');
// require('env2')('../.env');
multipartyMiddleware = muiltiparty();

module.exports = function(app) {
  var s3fsImpl = new S3FS('eyadtestbucket123', {
    accessKeyId: process.env.DB_ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
  });

  s3fsImpl.create();

  app.use(multipartyMiddleware);

  app.post('/api/syllabi', function(req, res) {
    var file = req.files.file;

    var stream = fs.createReadStream(file.path);
    return s3fsImpl.writeFile(file.originalFilename, stream).then(function() {
      fs.unlink(file.path, function(err) {
        if (err) console.error(error);
      });

      res.redirect('/profile');
    });
  });
};

// var express = require("express");
// var aws = require("aws-sdk");
// var path = require("path");
// var router = express.Router();
// var multers3 = require("multer-s3");
// var multer = require("multer");

// // aws.config.loadFromPath(keys);
// aws.config.update({
// 	signatureVersion: "v4"
// });

// var s0 = new aws.S3({
// 	 accessKeyId: process.env.accessKeyId,
//   secretAccessKey: process.env.secretAccessKey
// });

// var upload = multer({
// 	storage: multers3({
// 		s3: s0,
// 		bucket: "teachersInfo",
// 		acl: "public-read",
// 		metadata: function(req, file, cb) {
// 			cb(null, {fieldName: file.fieldname});
// 		},
// 		key: function (req, file, cb) {
// 			console.log(file);
// 			cb(null, Date.now().toString() + file.originalname);
// 		}
// 	})
// });

// router.post("/api/syllabi", upload.any(), function(req, res, next) {
// 	console.log(req.body.syllabus);
// 	console.log(req.files[0].location);
// });

// module.exports = router;
