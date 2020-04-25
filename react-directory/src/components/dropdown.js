import React from 'react';
import RenderDepartmentsArray from './departmentsArray';
import Filter from './filter';

let departments = RenderDepartmentsArray();

function Dropdown(props) {
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                Filter Employees by Department
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {departments.map(department => (
                    <button className='dropdown-item' onClick={() => props.onClick}>{department}</button>
                ))}
            </div>
        </div>
    )
}

export default Dropdown;