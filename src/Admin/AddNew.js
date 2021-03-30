import React, { useState, useEffect } from 'react';
import Sidebar from '../Core/Sidebar/sidebar';
import Header from '../Core/Headers/Headers';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { addEmp } from './helper/adminapicalls';
import { Redirect } from 'react-router-dom';
import 'react-phone-number-input/style.css';

import { getDepts, getPos } from '../Admin/helper/adminapicalls';
import PropTypes from 'prop-types';
const Form = styled.form`
	background-color: #e9e7e6;
	margin-left: 130px;
	margin-right: 100px;
	margin-top: 20px;
	border-radius: 10px;
`;
const Error = styled.p`color: red;`;
const Button = styled.button`margin-left: 40%;`;
const AddNew = (props) => {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => {
		console.log(data);
		addEmp(data).then(data => {
			if (data !== undefined) {
				console.log("OK");
				props.history.push('/emplist');
			}
			
		})
	}

	const [ employee, setEmployee ] = useState({
		salary: false,
		departments: [],
		positions: []
	});
	//destructure employee
	var { departments, positions } = employee;
	//load values on load

	useEffect(() => {
		const loadDept = () => {
			//Learnt a new thing ->
			// Array value get changed back initial value when u go out of scope where u changed its value

			getDepts().then((dept) => {
				if (dept !== undefined) {
					getPos().then((pos) => {
						if (pos !== undefined) {
							//	console.log('ok')
							setEmployee({ ...employee, departments: dept, positions: pos });
						}
					});
				}
			});
		};
		// eslint-disable-next-line no-restricted-globals

		loadDept();
	}, []);
	function isNumeric(phone) {
		return /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/.test(phone);
	}
	function checkDept(dept) {
		return dept !== 'Department';
	}
	function checkPos(pos) {
		return pos !== 'Position';
	}
	const addNewForm = () => (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<div className="addform">
				<label class="form-label">Full Name</label>
				<input
					type="text"
					class="form-control "
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					placeholder="Name"
					name="name"
					ref={register({ required: true })}
				/>
				{errors.name && <Error>Name Field Required</Error>}
				<label class="form-label">Email</label>
				<input
					type="Email"
					class="form-control "
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					placeholder="Email"
					name="email"
					ref={register({ required: true })}
				/>
				{errors.email && <Error>Email Required</Error>}
				<label class="form-label">Password</label>
				<input
					type="password"
					class="form-control "
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					placeholder="Password"
					name="password"
					ref={register({ required: true })}
				/>
				{errors.password && <Error>Password is Required</Error>}
				<label class="form-label">Phone</label>
				<input
					type="tel"
					class="form-control "
					name="phone"
					ref={register({ required: true, validate: isNumeric })}
				/>
				{errors.phone && <Error>Phone Number Invalid</Error>}
				<label class="form-label">Address</label>
				<textarea
					class="form-control "
					placeholder="Address"
					id="floatingTextarea2"
					rows="3"
					name="address"
					ref={register({ required: true })}
				/>
				{errors.address && <Error>Address is Required</Error>}
				<select
					className="form-control"
					name="department"
					ref={register({ required: true, validate: checkDept })}
				>
					<option selected disabled>
						Department
					</option>
					{departments && departments.length > 0 ? (
						departments.map((dept, index) => <option key={index}>{dept.name}</option>)
					) : (
						<option>No Department Found</option>
					)}
				</select>
				{errors.department && <Error>Department is Required</Error>}
				<select
					className="form-control "
					name="position"
					placeholder="Category"
					ref={register({ required: true, validate: checkPos })}
				>
					<option selected disabled>
						Position
					</option>
					{positions && positions.length > 0 ? (
						positions.map((pos, index) => <option key={index}>{pos.name}</option>)
					) : (
						<option>No Position Found Found</option>
					)}
				</select>
				{errors.position && <Error>Position is Required</Error>}
				<input value='0' name="salary" ref={register()} hidden />
				<input value='0' name="role" ref={register()} hidden/>
				<br />
				<Button className="btn btn-success">Submit</Button>
			</div>
		</Form>
	);
	return (
		<div>
			<Header />
			<div className="row">
				<div className="col-sm-3">
					<Sidebar />
				</div>
				<div className="col-sm-7 ">{addNewForm()}</div>
			</div>
		</div>
	);
};

AddNew.propTypes = {};

export default AddNew;
