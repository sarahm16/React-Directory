import React from 'react';
import Button from './button';
import Table from './table';
import employeeList from './employeeList';

function Employees() {
    return(
        <div>
            <Table employees={employeeList}/>
            {/* {renderTable()}; */}
            <div className='buttons'>
                <Button task="Filter Employees by Department" page='filter'/><br />
                <Button task="Sort Employees A-Z" page='sort' /><br />
            </div>
        </div>
    )
}

export default Employees;