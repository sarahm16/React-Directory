import React from 'react';

function Button(props) {
    return (
        <a href={props.page}><button onClick={props.handleBtnClick}>{props.task}</button></a>
    )

}

export default Button;