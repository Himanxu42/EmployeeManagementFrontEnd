import React from 'react';
import PropTypes from 'prop-types';
import '../../Styles/Styles.css';
import styled from 'styled-components';
import Logout from '../../Components/Logout';

const Header = ({props}) => {
    return (
        <div>
             <div>
                 <nav className="navbar navbar-expand-lg navbar-primary bg-primary flex justify-between py-2 items-center">
             	 <div className="text-white font-bold col-md-10" style={{fontSize:"23px", marginTop:'1px'}}>Employee Management System</div>
                    {<Logout history={props.history} />}
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