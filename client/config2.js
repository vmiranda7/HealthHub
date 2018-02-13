// 0x60f6d5d944f83594f85a04729b7e1f83b0214664
// 0xe97c2b1af5bccc19731a1596c2987b5fed7a8393
// 0x2163464494a98c787eb1af40968570aeff5e38ce

// Paciente
//"Sergio Perez Sevillano", "24", "183", "65", "0+"
// Medico
// "Jorge Merino", "Cirujano", "0x64a2ae2302f5f094855bb999d8c710e63b66dfcb"

//0x121f0c8d0ab8332c05bdf35d653d533e648b3fab
//0xf91c0cd6c5b35eeed8d292324adc1cb96e1c0dd3
//0xf5a4be74aefb3de50b51b175f6f757af41b309db

module.exports= {
  contractDoctors : {
    address : "0x121f0c8d0ab8332c05bdf35d653d533e648b3fab",
    abi : [
	{
		"constant": true,
		"inputs": [
			{
				"name": "_doctorAddress",
				"type": "address"
			}
		],
		"name": "searchDoctor",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "getMyPatients",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_patientAddress",
				"type": "address"
			}
		],
		"name": "getMyPatientLevel",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getAllPatient",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			},
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_doctoraddress",
				"type": "address"
			}
		],
		"name": "existDoctor",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "myInfo",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "doctors",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "speciality",
				"type": "string"
			},
			{
				"name": "doctorAddress",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "msgs",
				"type": "string"
			}
		],
		"name": "Message",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_speciality",
				"type": "string"
			},
			{
				"name": "_doctorAddress",
				"type": "address"
			}
		],
		"name": "addDoctor",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_patientAddress",
				"type": "address"
			},
			{
				"name": "_doctorAddress",
				"type": "address"
			},
			{
				"name": "_level",
				"type": "uint256"
			}
		],
		"name": "addPatient",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_patientAddress",
				"type": "address"
			},
			{
				"name": "_doctorAddress",
				"type": "address"
			}
		],
		"name": "delPatient",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]
},
  contractPatient : {
    address : "0xf91c0cd6c5b35eeed8d292324adc1cb96e1c0dd3",
    abi :[
	{
		"constant": true,
		"inputs": [],
		"name": "getAllDoctor",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			},
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_patientAddress",
				"type": "address"
			}
		],
		"name": "myInfoToDoctor",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getAllDelegate",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			},
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_weight",
				"type": "uint256"
			}
		],
		"name": "changeWeight",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_doctorAddress",
				"type": "address"
			},
			{
				"name": "_level",
				"type": "uint256"
			}
		],
		"name": "addDoctor",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_doctorAddress",
				"type": "address"
			}
		],
		"name": "delDoctor",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_delegateAddress",
				"type": "address"
			},
			{
				"name": "_level",
				"type": "uint256"
			}
		],
		"name": "addDelegate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_doctorAddress",
				"type": "address"
			},
			{
				"name": "_patientAddress",
				"type": "address"
			}
		],
		"name": "addDoctorBeingDelegate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_delegateAddress",
				"type": "address"
			},
			{
				"name": "_patientAddress",
				"type": "address"
			}
		],
		"name": "delDelegated",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_age",
				"type": "uint256"
			},
			{
				"name": "_height",
				"type": "uint256"
			},
			{
				"name": "_weight",
				"type": "uint256"
			},
			{
				"name": "_bloodType",
				"type": "string"
			}
		],
		"name": "addPeople",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "getMyDoctorL",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "myInfo",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_height",
				"type": "uint256"
			}
		],
		"name": "changeHeight",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_doctorAddress",
				"type": "address"
			}
		],
		"name": "getMyPatientLevel",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "getMyDoctor",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getAllDelegated",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			},
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_delegateAddress",
				"type": "address"
			}
		],
		"name": "delDelegate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_patientAddress",
				"type": "address"
			},
			{
				"name": "_doctorAddress",
				"type": "address"
			}
		],
		"name": "isDoctor",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_patientAddress",
				"type": "address"
			},
			{
				"name": "_doctorAddress",
				"type": "address"
			}
		],
		"name": "addInfo",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_doctorContract",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "msgs",
				"type": "string"
			}
		],
		"name": "MessageExistDoctor",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "msgs",
				"type": "string"
			}
		],
		"name": "MessageError",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "msgs",
				"type": "string"
			}
		],
		"name": "Message",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "msgs",
				"type": "uint256"
			}
		],
		"name": "MessageChangeData",
		"type": "event"
	}
]
    },
    contractInfo : {
      address : "0xf5a4be74aefb3de50b51b175f6f757af41b309db",
      abi : [
	{
		"constant": true,
		"inputs": [
			{
				"name": "_patientAddress",
				"type": "address"
			}
		],
		"name": "getMyInfotoDoctorLength",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_patientAddress",
				"type": "address"
			},
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "getMyInfotoDoctor",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getMyInfoLength",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "getMyInfo",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "msg",
				"type": "string"
			}
		],
		"name": "MessageH",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_patientAddress",
				"type": "address"
			},
			{
				"name": "_info",
				"type": "string"
			}
		],
		"name": "addInfo",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_healthpersonContract",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]
    }
}
