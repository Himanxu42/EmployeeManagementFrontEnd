import React from 'react';
import '../Styles/Styles.css';
import PropTypes from 'prop-types';

const Signin = () => {
	return (
		<div>
			<div className="row signinform  ">
				<div className="col-sm-4" />
				<div className="col-sm-4">
					<form>
						<div class="form-group">
							<label for="exampleDropdownFormEmail2">Email address</label>
							<input
								type="email"
								class="form-control"
								id="exampleDropdownFormEmail2"
								placeholder="email@example.com"
							/>
						</div>
						<div class="form-group">
							<label for="exampleDropdownFormPassword2">Password</label>
							<input
								type="password"
								class="form-control"
								id="exampleDropdownFormPassword2"
								placeholder="Password"
							/>
						</div>

						<button type="submit" class="btn btn-primary">
							Sign in
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

Signin.propTypes = {};

export default Signin;
