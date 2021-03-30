import React, { useState, useEffect } from 'react';
import Sidebar from '../Core/Sidebar/sidebar';
import Header from '../Core/Headers/Headers';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import { getAllEmp, delEmp } from '../Admin/helper/adminapicalls';
import Table from 'react-bootstrap/Table';

const Button = styled.button`margin-right: 5px;`;
const EmployeeList = () => {
	const [ employees, setEmployees ] = useState([]);

	useEffect(() => {
		const onLoad = () => {
			getAllEmp().then((data) => {
				if (data !== undefined) {
					setEmployees(data);
				}
			});
			//console.log(employees);
		};
		onLoad();
	}, []);

	const deleteEmployee = (id, employee) => {
		var list = [];
		list = employees;
		list.filter((item) => {
			return item._id !== id;
		});
		setEmployees({ list });
		delEmp(employee);
	};

	//to do edit

	//to do view

	const EmployeeForm = () => (
		<div>
			<Header />

			<div className="row ">
				<div className="col-sm-3">
					<Sidebar />
				</div>

				<div className="col-sm-7 dptform">
					<Table bordered hover responsive>
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Email</th>

								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{employees && employees.length > 0 ? (
								employees.map((emp, index) => (
									<tr key={index}>
										<td>{index + 1}</td>
										<td>{emp.name} </td>
										<td>{emp.email}</td>

										<td>
											<Button
												className="btn btn-info"
												onClick={(e) => {
													deleteEmployee(emp._id, emp);
												}}
											>
												Delete
											</Button>
											<Button className="btn btn-info">Edit</Button>
											<Button className="btn btn-info">View</Button>
										</td>
									</tr>
								))
							) : (
								<tr>
									<td>1</td>
									<td>Lawra Client </td>
									<td>lawraclient@gamil.com</td>

									<td>
										<Button className="btn btn-info">Delete</Button>
										<Button className="btn btn-info">Edit</Button>
										<Button className="btn btn-info">View</Button>
									</td>
								</tr>
							)}
						</tbody>
					</Table>
				</div>
				<div className="col-sm-2">
					<div>
						<Link className="btn btn-primary btn-lg" to="/addnew">
							{' '}
							<AddIcon /> Add New
						</Link>
					</div>
				</div>
			</div>
		</div>
	);

	return <div>{EmployeeForm()}</div>;
};

EmployeeList.propTypes = {};

export default EmployeeList;
