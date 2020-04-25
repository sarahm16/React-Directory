import React from 'react';
import RenderDepartmentsArray from './departmentsArray';
import Filter from './filter';

let departments = RenderDepartmentsArray();

function Dropdown() {
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                Filter Employees by Department
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {departments.map(department => (
                    <a className='dropdown-item' onClick={() => Filter(department)}>{department}</a>
                ))}
            </div>
        </div>
    )
}

export default Dropdown;