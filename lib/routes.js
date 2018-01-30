import {Router} from 'meteor/iron:router';

Router.route('', function(){
  this.render('index');

})
Router.route('/doctor', function(){
  this.render('doctorInfo');

})
Router.route('/patient', function(){
  this.render('patientInfo');

})
