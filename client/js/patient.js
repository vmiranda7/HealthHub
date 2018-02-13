import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../main.html';
const config = require('../config');

let contractDoctor = web3.eth.contract(config.contractDoctors.abi).at(config.contractDoctors.address);
let contractPatient = web3.eth.contract(config.contractPatient.abi).at(config.contractPatient.address);
let contractInfo = web3.eth.contract(config.contractInfo.abi).at(config.contractInfo.address);

/*
let arrayDoctor=[];
let arrayDoctor2=[];
let aarrayDoctor=[];
let aarrayarrayDoctor=[];
var arrayarrayDoctor = [];*/



/// FUNCTION ON CREATE

  /*
Template.patientInfo.onCreated(function() {


  this.location = new ReactiveVar;

  var self = this;
  this.autorun(function() {
    return console.log('location changed!', self.location.get());
  })
});*/

var change = contractPatient.MessageChangeData();
var addDoctorDelegate = contractPatient.Message();

change.watch(function(error, result){
  if (!error){
    location.reload();
  } else {
  }
});

addDoctorDelegate.watch(function(error, result){
  if (!error){
    location.reload();
  } else {
  }
});


/* Patient */
Template.patientInfo.helpers({

  patientData() {
      var address = Template.instance();
      var name = Template.instance();
      var age = Template.instance();
      var height = Template.instance();
      var weight = Template.instance();
      var bloodType = Template.instance();
      contractPatient.myInfo(function (err, res){
        if(res[1]==""){
          document.getElementById("popupMM").style.display = "block";
        }
        else{
          TemplateVar.set(address, "address", res[0]);
          TemplateVar.set(name, "name", res[1]);
          TemplateVar.set(age, "age", res[2]);
          TemplateVar.set(height, "height", res[3]);
          TemplateVar.set(weight, "weight", res[4]);
          TemplateVar.set(bloodType, "bloodType", res[5]);
        }
      });
    },

  getAllDoctor() {
    var doctors = Template.instance();
    //var addressesDoctors = Template.instance();
    contractPatient.getAllDoctor(function(err,res){

      var array1 = []
      var array2 =[];
      let a = res[0].toString().split(',');
      let p = 0;

      for(z=0; z< res[0].length/2;z++){
        array1.push(a[p].toString(), a[p+1].toString().slice(-1));
        p=p+2;
        array2.push(array1);
        array1=[];
      }

      ///
      TemplateVar.set(doctors, "doctors", parseInt(res[0].length/2));
      ///

      // TABLA ALL DOCTORS
      table = document.getElementById("tableDoctor");
      for(var i = 0; i < array2.length; i++)
      {
          var newRow = table.insertRow(table.length);
          for(var k = 0; k < array2[i].length; k++)
          {
              var cell = newRow.insertCell(k);
              cell.innerHTML = array2[i][k];
          }
      }

    });
  },


  getAllDelegate() {
    var delegates = Template.instance();
    //var addressesDelegates = Template.instance();
    contractPatient.getAllDelegate(function(err,res){

      var array1 = []
      var array2 =[];
      let a = res[0].toString().split(',');
      let p = 0;

      for(z=0; z< res[0].length/2;z++){
        array1.push(a[p].toString(), a[p+1].toString().slice(-1));
        p=p+2;
        array2.push(array1);
        array1=[];
      }
      ///
      TemplateVar.set(delegates, "delegates", parseInt(res[0].length/2));
      ///

      // TABLA ALL DELEGATES
      table = document.getElementById("tableDelegate");
      for(var i = 0; i < array2.length; i++)
      {
          var newRow = table.insertRow(table.length);
          for(var k = 0; k < array2[i].length; k++)
          {
              var cell = newRow.insertCell(k);
              cell.innerHTML = array2[i][k];
          }
      }

    });
  },


  getAllDelegated(){
    var delegated = Template.instance();
    //var addressesDelegates = Template.instance();
    contractPatient.getAllDelegated(function(err,res){

      var array1 = []
      var array2 =[];
      let a = res[0].toString().split(',');
      let p = 0;

      for(z=0; z< res[0].length/2;z++){
        array1.push(a[p].toString(), a[p+1].toString().slice(-1));
        p=p+2;
        array2.push(array1);
        array1=[];
      }
      if (parseInt(res[0].length/2) <= 1){
          document.getElementById("add").style.visibility = "visible";
      }

      ///
      TemplateVar.set(delegated, "delegated", parseInt(res[0].length/2));
      ///

      // TABLA ALL DELEGATES
      table = document.getElementById("tableDelegated");
      for(var i = 0; i < array2.length; i++)
      {
          var newRow = table.insertRow(table.length);
          for(var k = 0; k < array2[i].length; k++)
          {
              var cell = newRow.insertCell(k);
              cell.innerHTML = array2[i][k];
          }
      }

    });
  },

  getAllInfo(){
    var infos = Template.instance();
    contractInfo.getMyInfoLength(function(err,res){
      TemplateVar.set(infos, "infos", res.c[0]);
      let ninfo = parseInt(res.c[0]);
      for (j=ninfo-1; j>=0 ; j--){
        contractInfo.getMyInfo(j, function(err,res){
          let time = new Date(parseInt(res[1]+"000"));
          let options = {
              hour: "2-digit", minute: "2-digit", second: "2-digit"
          }
          let timeFormat = time.toLocaleDateString("es-ES",options);
          let stime = '<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>' ;
          let saddr ='</p><div style="font-size:100%; text-align:right; margin-bottom:17px" class="w3-opacity">' ;
          $('#contenido').append(stime+''+timeFormat+'</h6><p>'+res[0]+''+saddr+'</p>Doctor: '+res[2]+'</div>');
          //$('#contenido').append(time+'2013 - 2015</h6><p>Master Degree</p><div style="font-size:100%; text-align:right; margin-bottom:17px" class="w3-opacity">London Business School</div>');        });
      });
    }
  });
}

  /*
      getPatientLength() {
        var patients = Template.instance();
        var addresses = Template.instance();
        contractDoctor.getMyPatientsLength( function (err, res){
          TemplateVar.set(patients, "patients", res);
          let npatient= parseInt(res);
          let arrayPatient = [];
          for (j=0; j< npatient ; j++){
            // comprobar getallPatient
            contractDoctor.getMyPatients(j, function (err, res){
              //console.log(res);
              arrayPatient.push(res.toString());
              //console.log(arrayPatient);
              TemplateVar.set(addresses, "addresses", arrayPatient);
            });
          }
        });
      },*/

});

Template.patientInfo.events({
  'click #doctor' : function(){
    Router.go('/doctor');
  },
  'click #patient' : function(){
    Router.go('/patient');
  },

  'click #changeHeight' : function(){
    var height = $('#height').val();
    console.log(height)
    if(height != ""){
      contractPatient.changeHeight(height, function (err, res){
      });
    }
  },

  'click #changeWeight' : function(){
    var weight = $('#weight').val();
    if(weight != ""){
      contractPatient.changeWeight(weight, function (err, res){
      });
    }
  },

  'click #addDoctor' : function(){
    var addressD = $('#addressD').val();
    var levelD = $('#levelD').val();
    if(addressD != "" && levelD!= "" ){
      contractPatient.addDoctor(addressD,levelD, function (err, res){
      });
    }
  },

  'click #delDoctor' : function(){
    var DaddressD = $('#DaddressD').val();
    if(DaddressD != ""){
      contractPatient.delDoctor(DaddressD, function (err, res){
      });
    }
  },

  'click #addDelegate' : function(){
    var addressDe = $('#addressDe').val();
    var levelDe = $('#levelDe').val();
    if(addressDe != "" && levelDe!= "" ){
      contractPatient.addDelegate(addressDe,levelDe, function (err, res){
      });
    }
  },

  'click #delDelegate' : function(){
    var DaddressDe = $('#DaddressDe').val();
    if(DaddressDe != ""){
      contractPatient.delDelegate(DaddressDe, function (err, res){
      });
    }
  },
  'click #1': function(){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById("a").style.display = "block";

  },
  'click #2': function(){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById("b").style.display = "block";
  },
  'click #addDoctorD' : function(){
    var addressD = $('#daddress').val();
    var addressP = $('#paddress').val();
    if(addressP != undefined && addressD != undefined ){
      contractPatient.addDoctorBeingDelegate(addressD, addressP, function (err, res){
        if(!err){
            document.getElementById("loader").style.display = "block";
        }
      });
    }
  },
});
