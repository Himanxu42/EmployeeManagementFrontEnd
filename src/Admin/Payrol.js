import React, { useState, useEffect } from 'react';
import Sidebar from '../Core/Sidebar/sidebar';
import Header from '../Core/Headers/Headers';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import { getAllEmp, updateEmployee } from '../Admin/helper/adminapicalls';
import Table from 'react-bootstrap/Table';
import moment from 'moment';

const Button = styled.button`margin-right: 5px;`;
const Payrol = (props) => {
	const [ employees, setEmployees ] = useState([]);
	const [ reload, setreload ] = useState(false);

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

	const EmployeeForm = () => (
		<div>
			<Header props={props} />

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
								<th>Salary</th>
							</tr>
						</thead>
						<tbody>
							{employees && employees.length > 0 ? (
								employees.map((emp, index) => (
								  emp.role===0 &&	<tr key={index}>
										<td>{index + 1}</td>
										<td>{emp.name} </td>
										<td>{emp.email}</td>

										<td>
										
											{emp.salary === '0'||!moment().isBefore(moment(JSON.parse(emp.salary_date))) ? (
												<div>
													<div>
														<input
															onClick={() => {
																setreload(!reload);
															}}
															class="form-check-input"
															type="checkbox"
															value=""
															id="flexCheckDefault"
														/>
														<label class="form-check-label" for="flexCheckDefault">
															Pay
														</label>
													</div>
													<button
														className="btn btn-sm btn-success"
														onClick={() => {
															console.log('clicked');
															if (reload) {
																emp.salary = '1';
																emp.salary_date= JSON.stringify(moment().add(30,'s')) ;
																updateEmployee(emp);
																setreload(!reload);
															}
														}}
													>
														Submit
													</button>
												</div>
											) : (
												<h5>Paid</h5>
											)}
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
			</div>
		</div>
	);

	return <div>{EmployeeForm()}</div>;
};

export default Payrol;
