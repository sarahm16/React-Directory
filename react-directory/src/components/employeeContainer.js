import React from 'react';
import Button from './button';
import Table from './table';
import employeeList from './employeeList';
import RenderDepartmentsArray from './departmentsArray';

let departments = RenderDepartmentsArray();

function Employees() {
    return(
        <div>
            <Table employees={employeeList}/>
            {/* {renderTable()}; */}
            <div className='buttons'>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Filter Employees by Department
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {/* <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a> */}
                        {departments.map(department => (
                            <a className='dropdown-item'>{department}</a>
                        ))}
                    </div>
                </div>
                {/* <div>
                    <ul>
                        {departments.map(department => (
                            <li><Button task={department}></Button></li>
                        ))}
                    </ul>
                </div>                */}
                <Button task="Sort Employees A-Z" page='sort' /><br />
            </div>
        </div>
    )
}

export default Employees;