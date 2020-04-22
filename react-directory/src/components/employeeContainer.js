import React from 'react';
import Button from './button';
import Table from './table';

function allEmployees() {
    return(
        <div>
            <Table page='all'/>
            <div className='buttons'>
                <Button task="Filter Employees by Name" page='/filter'/><br />
                <Button task="Sort Employees A-Z" page='/sort' /><br />
            </div>
        </div>
    )
}

export default allEmployees;