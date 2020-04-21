import React from 'react';
import Button from './button';
import Table from './table';

function allEmployees() {
    return(
        <div>
            <h2>Here are all of your employees</h2>
            <Table />
            <div className='buttons'>
                <Button task="Filter Employees by Name" page='/filter'/><br />
                <Button task="Sort Employees A-Z" page='/sort' /><br />
            </div>
        </div>
    )
}

export default allEmployees;