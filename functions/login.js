'use strict';

//const user = require('../blockchai');
var user= "risabh_login";
var bcSdk = require('../src/blockchain/blockchain_sdk.js');


exports.loginUser = (email1, passpin) => 

	new Promise((resolve,reject) => {
		const ui_login =({

			email: email1,
			passpin: passpin

			
		});
		console.log("ENTERING THE login MODULE");
            return bcSdk.User_login({ ui_login})

			.then(() => resolve({ status: 201, message: 'User signed in Sucessfully !',token:token }))

			.catch(err => {

			if (err.code == 11000) {
						
				reject({ status: 409, message: 'User Already Registered !' });

			} else {
				conslole.log("error occurred" + err);

	}
					})
	});

	/*	user.find({email: email})

		.then(users => {

			if (email.length == 0) {

				reject({ status: 404, message: 'User Not Found !' });

			} else {

				return users[0];
				
			}
		})

		.then(user => {

			const hashed_password = user.hashed_password;

			if (bcrypt.compareSync(password, hashed_password)) {

				resolve({ status: 200, message: email });

			} else {

				reject({ status: 401, message: 'Invalid Credentials !' });
			}
		})

		.catch(err => reject({ status: 500, message: 'Internal Server Error !' }));

	});
*/

	
