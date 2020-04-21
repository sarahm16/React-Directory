import React from 'react';
import Button from './button';


function allEmployees() {
    return(
        <div>
            <h2>Here are all of your employees</h2>
            <div className='buttons'>
                <Button task="Filter Employees by Name" page='/filter'/><br />
                <Button task="Sort Employees by Name" page='/sort' /><br />
            </div>
        </div>
    )
}

export default allEmployees;