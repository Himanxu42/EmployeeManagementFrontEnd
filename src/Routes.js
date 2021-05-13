import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Core/Home/Home';
import Signin from './Auth/Signin';
import DepartmentList from './Admin/Department_List';
import PositionList from './Admin/PositionList';
import EmployeeList from './Admin/EmployeeList'
import AddNew from './Admin/AddNew'
import Payrol from './Admin/Payrol';
import AdminRoute from './Auth/AdminRoute';
import UserRoutes from './Auth/UserRoute'
import UserDashboard from './User/Dashboard'

const Routes = () => {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/" exact component={Signin} />
					<AdminRoute path='/admin/dashboard' exact component={EmployeeList} />
					<AdminRoute path='/admin/department' exact component={DepartmentList} />
					<AdminRoute path='/admin/addnew' exact component={AddNew} />
					<AdminRoute path='/admin/payrol' exact component={Payrol} />
					<AdminRoute path='/admin/position' exact component={PositionList} />
					<UserRoutes path='/user/dashboard' exact component={UserDashboard}/>
				</Switch>
			</Router>
		</div>
	);
}

export default Routes;
