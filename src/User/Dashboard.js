import Logout from '../Components/Logout';
import { getAUser,checkPaid} from './helper/userapicalls';
import { authenticated } from '../Auth/helper';
import { useEffect, useState } from 'react';
import { Fragment } from 'react';
import Headers from '../Core/Headers/Headers';
import styled from 'styled-components';

function Dashboard(props) {
	const [ User, setUser ] = useState({
		email: '',
		phone: '',
		address: '',
		salary: '',
		name: '',
		department: '',
		position: '',
		salary_date:''
	});
	const getUser = async () => {
		const UserObj = authenticated();
		try {
			const user = await getAUser(UserObj.user.id);
			const data = user.data;
			console.log(data);
			setUser({
				...User,
				email: data.email,
				phone: data.phone,
				address: data.address,
				salary: data.salary,
				name: data.name,
				department: data.department,
				position: data.position,
				salary_date:data.salary_date
			});
		} catch (error) {
			console.log('INTERNAL SERVER ERROR');
		}
	};
	useEffect(() => {
		getUser();
		console.log('WHY I RAN FIRST');
	}, []);
	const dashBoardForm = () => {
		return (
			<Fragment>
				<Headers props={props} />
				<div className="m-2 bg-gray-200 rounded-lg h-1/4 md:mx-80 p-4 shadow-xl transform duration-300 md:hover:scale-105 ">
					<div className="flex items-center ">
						<span className="block rounded-full  h-12 flex w-12 bg-blue-400">
							<span className="block my-auto font-bold text-2xl text-white mx-auto">{User.name[0]}</span>
						</span>
						<span className="ml-3 text-3xl font-medium text-gray-600">{User.name}</span>
					</div>
					<hr class="border-0 bg-blue-300 text-gray-500 h-px" />
					<div className="grid md:grid-cols-2">
						<span>
							<span className="block text-2xl mt-6 font-medium">
								Email:<span className="ml-3 text-blue-500">{User.email}</span>
							</span>
							<span className="block text-2xl mt-12 font-medium">
								Phone:<span className="ml-3 text-blue-500">{User.phone}</span>
							</span>
							<span className="block text-2xl mt-12 font-medium">
								Department:<span className="ml-3 text-blue-500">{User.department}</span>
							</span>
							<span className="block text-2xl mt-12 font-medium">
								Position:<span className="ml-3 text-blue-500">{User.position}</span>
							</span>
							<span className="block text-2xl mt-12 font-medium">
								Address:<span className="ml-3 text-blue-500">{User.address}</span>
							</span>
						</span>
						<span className="flex block overflow-hidden">
							<VerticalLine />
							<span className="block text-2xl md:ml-3 mt-6 font-medium">
								Salary:{User.salary === '0' || checkPaid(User.salary_date)? (
									<span className="text-red-600 ml-2">Unpaid</span>
								) : (
									<span className="text-green-600 ml-2"> Paid</span>
								)}
							</span>
						</span>
					</div>
				</div>
			</Fragment>
		);
	};
	return (
		<Fragment>{dashBoardForm()}</Fragment>
		// <div className='flex justify-between px-12 items-center '>

		// 	<h1>User Dashboard</h1>
		// 	{<Logout history={props.history} />}
		// 	<h1>{User.email||"OK"}</h1>
		// </div>
	);
}

export default Dashboard;

const VerticalLine = styled.div`
	width: 1px;
	background-color: #93c5fd;
	height: 100%;
	margin-top: 1.5rem;
`;
