import React from 'react';
import Button from './button';
import Table from './table';

function Employees() {
    return(
        <wrapper>
            <Table page='all'/>
            <div className='buttons'>
                <Button task="Filter Employees by Name" page='filter'/><br />
                <Button task="Sort Employees A-Z" page='sort' /><br />
            </div>
        </wrapper>
    )
}

export default Employees;