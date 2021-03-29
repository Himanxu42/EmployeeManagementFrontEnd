import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import ControlCameraIcon from '@material-ui/icons/ControlCamera'; 
import DescriptionIcon from '@material-ui/icons/Description';
import EventNoteIcon from '@material-ui/icons/EventNote';

 const Sidebardata =[
	{
		title:"Home",
		icon:<HomeIcon />,
		link:"/home"
	},
	{
		title:"Employee List",
		icon:<AutorenewIcon />,
		link:"/emplist"
	},
	{
		title:"Position List",
		icon:<ControlCameraIcon />,
		link:"/positionlist"
	},
	{
		title:"Department List",
		icon:<DescriptionIcon />,
		link:"/departmentlist"
	},
	{
		title:"Payroll List",
		icon:<EventNoteIcon />,
		link:"/payrolllist"
	}
]

export default Sidebardata;