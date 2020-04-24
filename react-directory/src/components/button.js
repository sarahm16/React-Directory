import React from 'react';

function Button(props) {
    return (
        <a href={props.page}><button className='btn btn-secondary'>{props.title}</button></a>
    )
}

export default Button;