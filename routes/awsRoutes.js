var fs = require('fs');
var express = require('express');
var router = express.Router();
var S3FS = require('s3fs');
var muiltiparty = require('connect-multiparty');
multipartyMiddleware = muiltiparty();

module.exports = function (app) {

  app.post('/api/syllabi', function (req, res) {
    var s3fsImpl = new S3FS('eyadtestbucket123', {
      accessKeyId: process.env.ACCESS_KEY_ID,
      secretAccessKey: process.env.SECRET_ACCESS_KEY
    });

    s3fsImpl.create();
    app.use(multipartyMiddleware);

    console.log('test');
    var file = req.files.file;

    var stream = fs.createReadStream(file.path);
    return s3fsImpl.writeFile(file.originalFilename, stream).then(function () {
      fs.unlink(file.path, function (err) {
        if (err) console.error(error);
      });

      return res.status(200).send("File was successfully uploaded");
    });
  });
}

