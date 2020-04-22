import React from 'react';
import renderEmployees from './renderEmployees.js';

function Button(props) {
    return (
        <button onClick={() => renderEmployees(props.page)}>{props.task}</button>
    )

}

export default Button;