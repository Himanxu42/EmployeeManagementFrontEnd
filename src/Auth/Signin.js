import React, { useState } from 'react';
import { loginUser,authenticate,authenticated } from './helper'
import '../Styles/Styles.css';
import { Fragment } from 'react';
import { Redirect} from 'react-router-dom'

const Signin = (props) => {
	const [email, setEmail] = useState('')
	const [password, setpassword] = useState('');
	
	const handleSubmit = (event) => {
		event.preventDefault();
		if (email && password) {
			loginUser({ email, password })
				.then(data => {
					console.log(data.data)
					authenticate(data.data);
					PerformRedirect();
				})
				.catch(err => {
				console.log(err)
			})
		}
	}

	const PerformRedirect = async () => {
		const user = authenticated();
		if (user && user.user.role === 1) {
			console.log("madarchod")
			props.history.push('/admin/dashboard')
		}
				else if (user && user.user.role === 0)
				props.history.push('/user/dashboard')
	
				return <Redirect to='/' />
	} 

	const signInForm = () => {
	  return	<div className="row signinform  ">
				<div className="col-sm-4" />
				<div className="col-sm-4">
					<form onSubmit ={handleSubmit}>
						<div class="form-group">
							<label for="exampleDropdownFormEmail2">Email address</label>
							<input
								type="email"
								class="form-control"
								id="exampleDropdownFormEmail2"
								placeholder="email@example.com"
								onChange={(e) => {
									setEmail(e.target.value) 
								}}
							/>
						</div>
						<div class="form-group">
							<label for="exampleDropdownFormPassword2">Password</label>
							<input
								type="password"
								class="form-control"
								id="exampleDropdownFormPassword2"
								placeholder="Password"
								onChange={(e) => {
									setpassword(e.target.value) 
								}}
							/>
						</div>

						<button type="submit" class="btn btn-primary">
							Sign in
						</button>
					</form>
				</div>
			</div>
	}
	return (
		<Fragment>
			{signInForm()}
		</Fragment>
	);
};


export default Signin;
