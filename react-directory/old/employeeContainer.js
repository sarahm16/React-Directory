import React from 'react';
import Button from './button';
import Table from './table';
import employeeList from './employeeList';
import Dropdown from './dropdown'

function Employees() {
    return(
        <div>
            <Table employees={employeeList}/>
            <div className='buttons'>
                <Dropdown />
                <Button title="Sort Employees A-Z" page='sort' /><br />
            </div>
        </div>
    )
}

export default Employees;