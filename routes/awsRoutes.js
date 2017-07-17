// // // var fs = require('fs');
// // // var express = require('express');
// // // var router = express.Router();
// // // var S3FS = require('s3fs');
// // // var s3fsImpl = new S3FS('eyadtestbucket123', {
// // //   accessKeyId: process.env.ACCESS_KEY_ID,
// // //   secretAccessKey: process.env.SECRET_ACCESS_KEY
// // // });
// // // var muiltiparty = require('connect-multiparty');
// // // multipartyMiddleware = muiltiparty();

// // // module.exports = function (app) {

// // //   app.post('/api/syllabi', function (req, res) {

// // //     s3fsImpl.create();
// // //     app.use(multipartyMiddleware);

// // //     var file = req.files.file;
// // //     var stream = fs.createReadStream(file.path);
// // //     return s3fsImpl.writeFile(file.originalFilename, stream).then(function () {
// // //       fs.unlink(file.path, function (err) {
// // //         if (err) console.error(error);
// // //         res.status(200).send("File was successfully uploaded");
// // //       });

// // //     });
// // //   });
// // // }

// // var AWS = require('aws-sdk');
// // var path = require('path'); 
// // var pathToJson = path.resolve(__dirname, '../config.json');
// // AWS.config.loadFromPath(pathToJson);
// // var s3 = new AWS.S3({apiVersion: '2006-03-01'});

// // var bucketParams = {
// //   Bucket: 'eyadtestbucket123'
// // };
// // s3.createBucket(bucketParams);

// // module.exports = function (app) {
// //   app.post('/api/syllabi', function (req, res) {
// //     var imageFile = req.body.test; 
// //     res.status(200).send("Document was succesfully uploaded"); 
// //     var s3Bucket = new AWS.S3({
// //       params: {
// //         Bucket: 'eyadtestbucket123'
// //       }
// //     }); 
// //     var data = {
// //       Key: 'test-pikachu',
// //       Body: imageFile
// //     };
// //     s3Bucket.putObject(data, function (err, data) {
// //       if (err) {
// //         console.log('Error uploading data: ', data);
// //       } else {
// //         console.log('succesfully uploaded the image!');
// //       }
// //     });
// //   });
// // }

// // // grab temporary urls to all images in bucket 
// // // ===========================================
// // var params = {Bucket: 'eyadtestbucket123'};
// // s3.listObjects(params, function(err, data){
// //   var bucketContents = data.Contents;
// //     for (var i = 0; i < bucketContents.length; i++){
// //       var urlParams = {Bucket: 'myBucket', Key: bucketContents[i].Key};
// //         s3.getSignedUrl('getObject',urlParams, function(err, url){
// //           console.log('the url of the image is', url);
// //         });
// //     }
// // });




// module.exports = function (app) {

//   var express = require("express");
//   var aws = require("aws-sdk");
//   var path = require("path");
//   var pathToJson = path.resolve(__dirname, '../config.json');
//   aws.config.loadFromPath(pathToJson);
//   var keys = path.join(__dirname + "../config.json");
//   var multers3 = require("multer-s3");
//   var multer = require("multer");
//   // var db = require("../models");

//   var s3 = new aws.S3();

//   var upload = multer({
//     storage: multers3({
//       s3: s3,
//       bucket: 'eyadtestbucket123',
//       key: function (req, file, cb) {
//         console.log(file);
//         cb(null, file.originalname);
//       }
//     })
//   });

//   app.post("/api/syllabi", upload.array('upl', 1), function (req, res, next) {
//     // res.status(200).send("File successfully uploaded");
//     console.log(req.files[0].location);
//     // db.Teacher.update({
//     // 	menu_download: req.files[0].location
//     // }, {
//     // 	where: {
//     // 		name: req.body.syllabus
//     // 	}
//     // }).then(function(syllabus) {
//     // 	res.redirect("/enter");
//     // });
//   });
// // }

// Work with this following route 
// ==========================================


// var express = require('express'),
//   aws = require('aws-sdk'),
//   bodyParser = require('body-parser'),
//   multer = require('multer'),
//   multerS3 = require('multer-s3'),
//   dotenv = require('dotenv');

// module.exports = function (app) {

//   dotenv.load();

//   aws.config.update({
//     secretAccessKey: process.env.accessKeyId,
//     accessKeyId: process.env.secretAccessKey,
//     region: process.env.region
//   });

//   s3 = new aws.S3({
//     apiVersion: '2006-03-01'
//   });

//   app.use(bodyParser.json());

//   var upload = multer({
//     storage: multerS3({
//       s3: s3,
//       bucket: 'bucket-name',
//       key: function (req, file, cb) {
//         console.log(file);
//         cb(null, file.originalname); //use Date.now() for unique file keys
//       }
//     })
//   });

//   //used by upload form
//   app.post('/upload', upload.array('upl', 1), function (req, res, next) {
//     res.send("Uploaded!");
//   });

// }

