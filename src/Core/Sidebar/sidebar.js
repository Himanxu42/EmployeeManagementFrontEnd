import React from 'react'
import "../../Styles/Styles.css";
import Sidebardata from '../Sidebardata/sidebarData';

 function Sidebar() {
    return (
    	<div>
        
             <div className=" Sidebars">
             <ul className="SideList">
            {Sidebardata.map((val, key)=>{
        	return <li key={key}
        	className="row"
        	id={window.pathname === val.link ? "active":""} 
        	onClick={()=>{window.location.pathname=val.link;
        	}}>
            <div className='sidebar-item'>
        	<div id="icon">{val.icon}</div>
            <div id="title">{val.title}</div>
            </div> 
        	</li>;
        })}
        </ul>
             
         </div> 
        
        </div>
    );
}

export default Sidebar;