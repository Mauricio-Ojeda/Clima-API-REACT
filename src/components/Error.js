import React from 'react';
import PropTypes from 'prop-types';

const Error = ({mensaje}) => {
    return (
        
             <p className="error #e53935 red darken-1">{mensaje}</p> 
             
    )
}

Error.propTypes = {
    apiValue : PropTypes.string.isRequired
}

export default Error;
