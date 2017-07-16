// // var fs = require('fs');
// // var express = require('express');
// // var router = express.Router();
// // var S3FS = require('s3fs');
// // var s3fsImpl = new S3FS('eyadtestbucket123', {
// //   accessKeyId: process.env.ACCESS_KEY_ID,
// //   secretAccessKey: process.env.SECRET_ACCESS_KEY
// // });
// // var muiltiparty = require('connect-multiparty');
// // multipartyMiddleware = muiltiparty();

// // module.exports = function (app) {

// //   app.post('/api/syllabi', function (req, res) {

// //     s3fsImpl.create();
// //     app.use(multipartyMiddleware);

// //     var file = req.files.file;
// //     var stream = fs.createReadStream(file.path);
// //     return s3fsImpl.writeFile(file.originalFilename, stream).then(function () {
// //       fs.unlink(file.path, function (err) {
// //         if (err) console.error(error);
// //         res.status(200).send("File was successfully uploaded");
// //       });

// //     });
// //   });
// // }

var AWS = require('aws-sdk');
var path = require('')
AWS.config.loadFromPath(path.join(_dirname, '../config.json'));
var s3 = new AWS.S3({apiVersion: '2006-03-01'});


var bucketParams = {
  Bucket: 'eyadtestbucket123'
};
s3.createBucket(bucketParams);

module.exports = function (app) {
  app.post('/api/syllabi', function (req, res) {
    console.log(req.body); 
    res.status(200).send("Document was succesfully uploaded"); 
  //   var s3Bucket = new AWS.S3({
  //     params: {
  //       Bucket: 'eyadtestbucket123'
  //     }
  //   }); 
  //   var data = {
  //     Key: imageName,
  //     Body: imageFile
  //   };
  //   s3Bucket.putObject(data, function (err, data) {
  //     if (err) {
  //       console.log('Error uploading data: ', data);
  //     } else {
  //       console.log('succesfully uploaded the image!');
  //     }
  //   });
  });
}

// // grab temporary urls to all images in bucket 
// // ===========================================
// // var params = {Bucket: 'eyadTest1'};
// // s3.listObjects(params, function(err, data){
// //   var bucketContents = data.Contents;
// //     for (var i = 0; i < bucketContents.length; i++){
// //       var urlParams = {Bucket: 'myBucket', Key: bucketContents[i].Key};
// //         s3.getSignedUrl('getObject',urlParams, function(err, url){
// //           console.log('the url of the image is', url);
// //         });
// //     }
// // });



// // var express = require("express");
// // var aws = require("aws-sdk");
// // var path = require("path");
// // // var keys = path.join(__dirname + "../config.json");
// // // var router = express.Router();
// // var multers3 = require("multer-s3");
// // var multer = require("multer");
// // // var db = require("../models");

// // // aws.config.loadFromPath(keys);
// // aws.config.update({
// //   signatureVersion: "v4"
// // });

// // var s0 = new aws.S3({
// //   accessKeyId: process.env.accessKeyId,
// //   secretAccessKey: process.env.secretAccessKey
// // });

// // var upload = multer({
// //   storage: multers3({
// //     s3: s0,
// //     bucket: "eyadtestbucket123",
// //     acl: "public-read",
// //     metadata: function (req, file, cb) {
// //       cb(null, {
// //         fieldName: file.fieldname
// //       });
// //     },
// //     key: function (req, file, cb) {
// //       console.log(file);
// //       cb(null, Date.now().toString() + file.originalname);
// //     }
// //   })
// // });

// // module.exports = function (app) {
// //   app.post("/api/syllabi", upload.any(), function (req, res, next) {
// //     console.log(req.files[0].location);
// //     // db.Foodtrucks.update({
// //     // 	menu_download: req.files[0].location
// //     // }, {
// //     // 	where: {
// //     // 		name: req.body.truckname
// //     // 	}
// //     // }).then(function(dbFoodtrucks) {
// //     // 	res.redirect("/enter");
// //     // });
// //     res.status(200).send("File successfully uploaded)");
// //   });
// // }

