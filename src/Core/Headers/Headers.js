import React from 'react';
import PropTypes from 'prop-types';
import '../../Styles/Styles.css';
import  styled  from 'styled-components';
const Header = () => {
    return (
        <div>
             <div>
                 <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
             	 <div className="text-white col-md-10" style={{fontSize:"23px", marginTop:'1px'}}>Employee Management System</div>
        	     <Button className="btn btn-info" >Sign Out</Button>
		        </nav>
             </div>
        </div>
    );
};

Header.propTypes = {};
const Button = styled.button`
 margin-top : 5px;
 margin-left:120px
`
export default Header;