import React from 'react';
import PropTypes from 'prop-types';

const pop = (props) => {
    console.log(props.value);
    return (
        <div className="alert alert-success">
        <h4> Created Successfully</h4>
        </div>
    );
};

pop.propTypes = {};

export default pop;