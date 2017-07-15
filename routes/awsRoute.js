var fs = require('fs');
var router = express.Router();
var S3FS = require('s3fs');
var muiltiparty = require('connect-multiparty');
multipartyMiddleware = muiltiparty();

var s3fsImpl = new S3FS('eyadtestbucket123', {
  accessKeyId: process.env.DB_ACCESS_KEY,
  secretAccessKey: process.env.SECRET_ACCESS_KEY
});

s3fsImpl.create();
router.use(multipartyMiddleware);

router.post('/api/syllabi', function (req, res) {
  var file = req.files.file;

  var stream = fs.createReadStream(file.path);
  return s3fsImpl.writeFile(file.originalFilename, stream).then(function () {
    fs.unlink(file.path, function (err) {
      if (err) console.error(error);
    });

    // res.redirect('/profile');
  });
});

module.exports = router;

