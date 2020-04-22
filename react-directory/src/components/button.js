import React from 'react';

function Button(props) {
    return (
        <a href={props.page}><button>{props.task}</button></a>
    )
}

export default Button;