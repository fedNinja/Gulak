import React from 'react'

export default function fetchUsers() {
	fetch('http://localhost:8080/api/users')
		.then(function(res){
			console.log("inside api",res);			
	})
};
