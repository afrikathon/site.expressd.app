var express = require('express');
var router = express.Router();


/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Disposed! \n\nPublic IP is '+res.locals.myPublicIp+'. ENV.custom_key='+process.env.custom_key});
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Express Disposed! \n\nPublic IP is '+res.locals.myPublicIp+'. ENV.custom_key='+process.env.custom_key});
});
router.get('/accueil', function(req, res, next) {
  res.render('index', { title: 'Express Disposed! \n\nPublic IP is '+res.locals.myPublicIp+'. ENV.custom_key='+process.env.custom_key});
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express Disposed! \n\nPublic IP is '+res.locals.myPublicIp+'. ENV.custom_key='+process.env.custom_key});
});
router.get('/contacts', function(req, res, next) {
  res.render('contact', { title: 'Express Disposed! \n\nPublic IP is '+res.locals.myPublicIp+'. ENV.custom_key='+process.env.custom_key});
});
router.get('/call', function(req, res, next) {
  res.render('contact', { title: 'Express Disposed! \n\nPublic IP is '+res.locals.myPublicIp+'. ENV.custom_key='+process.env.custom_key});
});
router.get('/*', function(req, res, next) {
  res.render('error', { title: 'Express Disposed! \n\nPublic IP is '+res.locals.myPublicIp+'. ENV.custom_key='+process.env.custom_key});
});

module.exports = router;