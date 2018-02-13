import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../main.html';
const config = require('../config');

let contractDoctor = web3.eth.contract(config.contractDoctors.abi).at(config.contractDoctors.address);
let contractPatient = web3.eth.contract(config.contractPatient.abi).at(config.contractPatient.address);
let contractInfo = web3.eth.contract(config.contractInfo.abi).at(config.contractInfo.address);


//var Patients  = [];
//var Patient = {};

var infoAdded = contractInfo.MessageH();

infoAdded.watch(function(error, result){
  if (!error){
    //location.reload();
  } else {
  }
});

/* Información sobre el Doctor */
//Template.doctorInfo.onCreated(function doctorInfoCreated() {});
Template.doctorInfo.helpers({

  doctorData() {
      var address = Template.instance();
      var name = Template.instance();
      var speciality = Template.instance();
      contractDoctor.myInfo(function (err, res){
      if(res[0]==""){
        document.getElementById("popupMM").style.display = "block";
      }
      else{
        TemplateVar.set(address, "address", res[2]);
        TemplateVar.set(name, "name", res[0]);
        TemplateVar.set(speciality, "speciality", res[1]);
      }
      });
    },

    getAllPatient() {
      var patientsSize = Template.instance();
    // var Patient = {};
    // patients = [];
      //var addressesDoctors = Template.instance();
      contractDoctor.getAllPatient(function(err,res){

        var array1 = []
        var array2 =[];
        let a = res[0].toString().split(',');
        let p = 0;

        for(z=0; z< res[0].length/2;z++){
          array1.push(a[p].toString(), a[p+1].toString().slice(-1));
          //var patient = {addressPatient : a[p].toString(), level :  a[p+1].toString().slice(-1) }
          p=p+2;
          array2.push(array1);
          //Patient patient = new Patient({addressPatient : a[p].toString, level :  a[p+1].toString().slice(-1) });
          //patient.push(patient);
          array1=[];
        }
        //console.log(patients);

        ///
        TemplateVar.set(patientsSize, "patientsSize", parseInt(res[0].length/2));
        ///

        // TABLA ALL DOCTORS
        table = document.getElementById("tablePatient");
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
Template.doctorInfo.events({
  'click #doctor' : function(){
    Router.go('/doctor');
  },
  'click #patient' : function(){
    Router.go('/patient');
  },
  'click #seeInfo' : function(){
    var addressP = $('#addressinfoP').val();
    if(addressP != ""){
      console.log(addressP);

       $("#detailsPatient").html("");
      contractPatient.myInfoToDoctor(addressP, function(err,res){
        console.log(res);
        if(!err && res[0] != "0x0000000000000000000000000000000000000000"){

          let addressI = '<p style="font-size:15px"><i class="fa fa-user-circle fa-fw w3-margin-right w3-large w3-text-teal" style="margin-top:17px"></i>'+res[0]+'</p>';
          let ageI = '<p><i class="fa fa-male fa-fw w3-margin-right w3-large w3-text-teal"></i>Age: '+res[1]+'</p>';
          let heightI = '<p><i class="fa fa-arrows-h fa-fw w3-margin-right w3-large w3-text-teal"></i>Height: '+ res[2]+'cm';
          let weight = '<p><i class="fa fa-arrows-v fa-fw w3-margin-right w3-large w3-text-teal"></i>Weight: '+res[3]+' Kg';
          let bloodtypeI = '<p><i class="fa fa-heart fa-fw w3-margin-right w3-large w3-text-teal"></i>Blood Type: '+res[4]+'</p>';

          $('#detailsPatient').append(addressI+ageI+heightI+weight+bloodtypeI+'<hr>');
        }
      });
      contractInfo.getMyInfotoDoctorLength(addressP, function(err,res){
        console.log("hola")
        let ninfo = parseInt(res.c[0]);
         $("#contenido").html("");
        for (j=ninfo-1; j >= 0 ; j--){
          console.log(j);
          contractInfo.getMyInfotoDoctor(addressP, j, function(err,res){
            let time = new Date(parseInt(res[1]+"000"));
            let options = {
                hour: "2-digit", minute: "2-digit", second: "2-digit"
            }
            let timeFormat = time.toLocaleDateString("es-ES",options);
            let stime = '<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>' ;
            let saddr ='</p><div style="font-size:100%; text-align:right; margin-bottom:17px" class="w3-opacity">' ;
            $('#contenido').append('<div id="a">'+stime+''+timeFormat+'</h6><p>'+res[0]+''+saddr+'</p>Doctor: '+res[2]+'</div></div>');
            //$('#contenido').append(time+'2013 - 2015</h6><p>Master Degree</p><div style="font-size:100%; text-align:right; margin-bottom:17px" class="w3-opacity">London Business School</div>');        });
          });
        }
      });
    }
  },
  'click #addInfo': function(){
    var addressP = $('#addressinfoP').val();
    var info = $('#info').val();
    if(addressP != "" && info != ""){
      contractInfo.addInfo(addressP, info, function(err,res){
      });
    }
  }

});
