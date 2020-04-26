import React from 'react';
import RenderDepartmentsArray from './departmentsArray';

let departments = RenderDepartmentsArray();

function Dropdown(props) {
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                Filter by Department
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {departments.map(department => (
                    <button value={department} className='dropdown-item' onClick={props.handleFilterBtn}>{department}</button>
                ))}
            </div>
        </div>
    )
}

export default Dropdown;