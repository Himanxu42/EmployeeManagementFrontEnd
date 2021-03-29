import React from 'react';
import Sidebar from '../Core/Sidebar/sidebar';
import Header from '../Core/Headers/Headers';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';

const Button = styled.button`margin-right: 5px;`;
const EmployeeList = () => {
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
								<th className="text-white">Email</th>

								<th>Action</th>
							</tr>
						</thead>
						<tbody>
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
