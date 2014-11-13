// var models = require('../models');
// var express = require('express');
// var router = express.Router();
//
// router.post('create', function(req, res){
//   models.Student.create({
//     username: req.param('username')
//   }).success(function(){
//     res.redirect('/');
//   });
// });
//
// router.post('/:student_id/projects/create', function (req, res) {
//   models.Student.find({
//     where: { id: req.param('student_id') }
//   }).success(function(student) {
//     models.Project.create({
//       name: req.param('name')
//     }).success(function(name) {
//       name.setStudent(student).success(function() {
//         res.redirect('/');
//       });
//     });
//   });
// });
//
// router.get('/:student_id/projects/:project_id/destroy', function (req, res) {
//   models.Student.find({
//     where: { id: req.param('student_id') }
//   }).success(function(student) {
//     models.Project.find({
//       where: { id: req.param('project_id') }
//     }).success(function(project) {
//       project.setStudent(null).success(function() {
//         project.destroy().success(function() {
//           res.redirect('/');
//         });
//       });
//     });
//   });
// });
//
// module.exports = router;


var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  models.Student.findAll({
    include: [ models.Project ]
  }).success(function(students) {
    res.render('students', {
      title: 'Slickstarter Projects',
      students: students
    });
  });
});

router.get('/projects/:project_id', function(req, res) {
  models.Project.findAll({
      where: { id: req.param('project_id') }
  }).success(function(students){
    res.render('projects', {
      title: 'Slickstarter Projects',
      students: students
    });
  });
});

router.get('/students/:student_id')

module.exports = router;
