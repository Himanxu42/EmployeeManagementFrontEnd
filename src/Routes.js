import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Core/Home/Home';
import Signin from './Auth/Signin';
import DepartmentList from './Admin/Department_List';
import PositionList from './Admin/PositionList';
import Sidebar from './Core/Sidebar/sidebar';
import EmployeeList from './Admin/EmployeeList'
import AddNew from './Admin/AddNew'
import PropTypes from 'prop-types';

const Routes = () => {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/" exact component={Signin} />
					<Route path="/departmentlist" exact component={DepartmentList} />
					<Route path="/positionlist" exact component={PositionList} />
					<Route path="/sidebar" exact component={Sidebar} />
					<Route path="/emplist" exact component={EmployeeList} />
					<Route path ="/addnew" exact component = {AddNew}/>
					
				</Switch>
			</Router>
		</div>
	);
}

Routes.propTypes = {};

export default Routes;
