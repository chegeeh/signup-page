import React, {useState} from 'react' ;
import {Form ,Button, Checkbox } from 'semantic-ui-react';
import './App.css';

export default function App() {

const [email, setEmail] = useState("");
const [password,setPassword] = useState("");
const values = [email, password];


function handleSubmit(data){
	console.log(values);
	alert(JSON.stringify(values, null, 2));
}


return (
	<div>
	<Form className="main" onSubmit={handleSubmit}>
	<h1 className="main-header"><u>Login To Your Account</u></h1>
	<Form.Field className="create-form" required>
	<label>Email</label>
	<input
	type = "email"
	name = "email"
	placeholder= 'Enter your Email'
	onChange = {(event) =>setEmail(event.target.value)}
	/>
	</Form.Field>
	<Form.Field className = "create-form" required>
	<label>Password</label>
	<input
	type = "password"
	name = "password"
	placeholder = "Enter your Password"
	onChange = {(event) => setPassword(event.target.value)}
	/>
	</Form.Field>
	<Form.Field className="create-form">
	<Checkbox label="I accept the terms and conditions"/>
	</Form.Field>
	<Button onSubmit={handleSubmit}>Login</Button>
	</Form>
	</div>
  )
}


