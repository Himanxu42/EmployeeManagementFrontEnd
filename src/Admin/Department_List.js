import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Headers from '../Core/Headers/Headers';
import Sidebar from '../Core/Sidebar/sidebar';

import Alert from 'react-bootstrap/Alert';
import { getDepts, delDept, AddDept } from '../Admin/helper/adminapicalls';
const Table = styled.div``;
const Row = styled.div`margin-top: 10px;`;
const HR = styled.hr`
	border: 0.125rem solid white;
	margin-top = 5px ;
	`;
const table = styled.table`border: 1px solid black;`;
const Label = styled.label`padding-top: 1rem;`;

class Department_List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			newitem: '',
			list: []
		};
		getDepts().then((data) => {
			if (data !== undefined) {
				var list = [];
				list = data;
				console.log(list);
				this.setState({ list, newitem: '' });
				//console.log(this.state.list)
			}
		});
	}
	addDept = (value) => {
		if (value !== undefined) {
			AddDept(value).then((data) => {
				//console.log(data);
				if (data !== undefined) {
					const newdpt = {
						id: Date.now(),
						name: value
					};
					const list = [ ...this.state.list ];
					list.push(newdpt);
					this.setState({
						list,
						name: ''
					});
				} else {
					//IF NAME ALREADY EXIST
					this.setState({ visible: true });
				}
			});
		}
	};
	deleteDpt = (id, name) => {
		console.log(name);
		delDept(name).then((data) => {
			console.log(data);
			if (data !== undefined) {
				const list = [
					...this.state.list.filter((item) => {
						return item._id !== id;
					})
				];
				this.setState({ list });
			}
		});
	};

	changeHandler = (value) => {
		this.setState({ name: value });
	};

	render() {
		return (
			<div>
				<Headers props={this.props}/>
				<div className="">
					<Row className="row">
						<div className="col-md-3">
							<Sidebar />
						</div>

						<div className="col-md-2  dptform">
							<div class="cards  ">
								<div class="form-group">
									<Label for="comment">
										{this.props.formname ? this.props.formname : 'Department Form'}
									</Label>
									<HR />
									<h6>Name</h6>
									<input
										type="text"
										placeholder="Type..."
										class="form-control"
										rows="2"
										value={this.state.name}
										onChange={(e) => this.changeHandler(e.target.value)}
										id="comment"
									/>
								</div>
								<button
									type="button"
									class="btn btn-primary"
									onClick={(e) => this.addDept(this.state.name)}
								>
									Save
								</button>
							</div>
						</div>
						<div className="col-md-7 dptform  border ">
							<Table>
								<table className="table table-bordered">
									<thead>
										<th scope="col">#</th>
										<th scope="col" colSpan="2">
											{this.props.formtitle ? this.formtitle : 'Department'}
										</th>
										<th scope="col">Action</th>
									</thead>
									<tbody>
										{this.state.list.map((item, index) => {
											return (
												<tr key={index}>
													<th scope="row">{index + 1}</th>
													<td colSpan="2">{item.name} </td>
													<td>
														<button
															type="button"
															class="btn btn-danger"
															onClick={(e) => this.deleteDpt(item._id, item.name)}
														>
															Delete
														</button>
													</td>
												</tr>
											);
										})}
									</tbody>
								</table>
							</Table>
						</div>
					</Row>
				</div>
			</div>
		);
	}
}

Department_List.propTypes = {};

export default Department_List;
