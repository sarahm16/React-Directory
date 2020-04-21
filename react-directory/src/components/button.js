import React from 'react';

function Button(props) {
    return (
        <button onClick={props.handleBtnClick}>{props.task}</button>
    )

}

export default Button;