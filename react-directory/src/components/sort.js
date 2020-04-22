import employeeList from './employeeList';
import React from 'react';
import Table from './table';
import compare from './compare';

function Sort() {
    return(
        <Table employees={employeeList.sort(compare)}></Table>
    )
}

export default Sort;