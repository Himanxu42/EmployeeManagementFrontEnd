import { logout } from '../Auth/helper';
function Logout({ history }) {
	return (
		<section>
			<button 
				className="btn btn-warning"
				onClick={() => {
					logout();
					history.push('/');
				}}
			>
				<span className='font-medium uppercase '>LogOut</span>
			</button>
		</section>
	);
}

export default Logout;
