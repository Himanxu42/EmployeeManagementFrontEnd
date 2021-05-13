import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import ControlCameraIcon from '@material-ui/icons/ControlCamera'; 
import DescriptionIcon from '@material-ui/icons/Description';
import EventNoteIcon from '@material-ui/icons/EventNote';

 const Sidebardata =[
	{
		title:"Employee List",
		icon:<AutorenewIcon />,
		link:"/admin/dashboard"
	},
	{
		title:"Position List",
		icon:<ControlCameraIcon />,
		link:"/admin/position"
	},
	{
		title:"Department List",
		icon:<DescriptionIcon />,
		link:"/admin/department"
	},
	{
		title:"Payroll List",
		icon:<EventNoteIcon />,
		link:"/admin/payrol"
	}
]

export default Sidebardata;