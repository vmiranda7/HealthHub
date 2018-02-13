// 0x3a7282e93397e94a08bab251e078a7587f9d1ea8
// 0xe3b263edca6cff404593e83479a078cf60515a83
// 0x2ec8fe8d4ba29b6cd0a2c5d09f424034e9ec4d5f


//0x94799ef44e483af0f30856ad660559e180c37cca
//0xae058fb7fe09ea5b968ea82c209dd3b1bce07dc6
//0x9c7546f1830e89f3ca34ceaff8bd266420827e10



// 0x94799ef44e483af0f30856ad660559e180c37cca
// 0x825e717eb95070c39ce0418c7571fe9650976f67
// 0xd00705e00ef3169af48e8e9f06d2eb8a03568dce

module.exports= {
  contractDoctors : {
    address : "0x94799ef44e483af0f30856ad660559e180c37cca",
    abi : [
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
			},
			{
				"name": "IDlength",
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
		"inputs": [],
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
		"name": "Message",
		"type": "event"
	}
]
},
  contractPatient : {
    address : "0x825e717eb95070c39ce0418c7571fe9650976f67",
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
      address : "0xd00705e00ef3169af48e8e9f06d2eb8a03568dce",
      abi : [
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
				"name": "_patientContract",
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
				"name": "msg",
				"type": "string"
			}
		],
		"name": "MessageH",
		"type": "event"
	}
]
    }
}
