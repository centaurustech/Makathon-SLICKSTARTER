var models = require('../models');
var express = require('express');
var router = express.Router();

router.post('/create', function(req, res){
  console.log(req.body.username);
  console.log(req.body.lastname);
  models.Student.create({
    firstName: req.param('username'),
    lastName: req.param('lastname'),
    email: req.param('email')
  }).success(function(){
    res.redirect('/');
  });
});

router.post('/:student_id/projects/create', function (req, res) {
  console.log(req.body.project)
  models.Student.find({
    where: { id: req.param('student_id') }
  }).success(function(student) {
    models.Project.create({
      name: req.param('project'),
      description: req.param('description'),
      raise: req.param('raise')
    }).success(function(name) {
      name.setStudent(student).success(function() {
        res.redirect('/');
      });
    });
  });
});

router.get('/:student_id/projects/:project_id/destroy', function (req, res) {
  models.Student.find({
    where: { id: req.param('student_id') }
  }).success(function(student) {
    models.Project.find({
      where: { id: req.param('project_id') }
    }).success(function(project) {
      project.setStudent(null).success(function() {
        project.destroy().success(function() {
          res.redirect('/');
        });
      });
    });
  });
});

module.exports = router;
