'use strict';

const bc_client = require('../blockchain_sample_client');
const bcrypt = require('bcryptjs');
var bcSdk = require('../src/blockchain/blockchain_sdk');
var user = 'risabh.s';
var affiliation = 'fundraiser';
//exports is used here so that registerUser can be exposed for router and blockchainSdk file
exports.registerUser = (id,name,email,phone,pan,aadhar,usertype,upi,passpin)=>
new Promise((resolve,reject) => {
	

	const newUser =({
            id : id,
			name : name,
			email : email,
			phone : phone,
			pan : pan,
            aadhar : aadhar,
			usertype : usertype,
			upi : upi,
			passpin : passpin

		});
		
	console.log("ENTERING THE Userregisteration from register.js to blockchainSdk");
	  
	    bcSdk.UserRegisteration({user: user, UserDetails: newUser})



	.then(() => resolve({ status: 201, message: usertype }))

		.catch(err => {

			if (err.code == 11000) {
						
				reject({ status: 409, message: 'User Already Registered !' });

			} else {
				conslole.log("error occurred" + err);

				reject({ status: 500, message: 'Internal Server Error !' });
			}
		});
	}
	);
	
