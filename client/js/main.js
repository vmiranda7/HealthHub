import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../main.html';
const config = require('../config');

let contractDoctor = web3.eth.contract(config.contractDoctors.abi).at(config.contractDoctors.address);
let contractPatient = web3.eth.contract(config.contractPatient.abi).at(config.contractPatient.address);

/*
console.log(window.location.pathname)

if (window.location.pathname == "/"){
  particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles Loaded');
  });
}*/



/* Index */
Template.index.onCreated(function indexreated() {
/*
  particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles Loaded');
  });
*/
var category;

var createdPatient = contractPatient.Message();

createdPatient.watch(function(error, result){
  if (!error){
    document.getElementById("loader").style.display = "none";
    document.getElementById("myModal").style.display = "none";
    $('.modal-backdrop').remove();
    Router.go('/patient');
  } else {
    document.getElementById("loader").style.display = "none";
  }
})

});
Template.index.helpers({
  bloodType: function(){
        return ["A+", "B+", "AB+", "0+","A-", "B-", "AB-", "0-"]
    }

});

Template.index.events({
  'click #doctor' : function(){
    Router.go('/doctor');
  },
  'click #patient' : function(){
    Router.go('/patient');
  },
  "change #category-select": function (event, template) {
    category = $(event.currentTarget).val();
  },
  'click #signup' : function(){
    var name = $('#name').val();
    var age = $('#age').val();
    var height = $('#heightP').val();
    var weight = $('#weightP').val();
    if(name != undefined && age != undefined && height != undefined && weight != undefined && category != undefined ){
      contractPatient.addPeople(name, age, height, weight, category, function (err, res){
        if(!err){
            document.getElementById("loader").style.display = "block";
        }
      });
    }
  },
});
