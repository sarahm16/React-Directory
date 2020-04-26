import React from 'react';
import RenderArray from './departmentsArray';
import './styles.css';

function Dropdown(props) {
    let array = RenderArray(props.list);
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                Filter by {props.list}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {array.map(item => (
                    <button value={item} name={props.list} className='dropdown-item' onClick={props.handleFilterBtn}>{item}</button>
                ))}
            </div>
        </div>
    )
}

export default Dropdown;