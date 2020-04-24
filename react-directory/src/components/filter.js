import React from 'react';
import employeeList from './employeeList';
import Table from './table';

function Filter(department) {

    let list = employeeList.filter(e => e.department.includes('HR'))
    return <Table employees={list}></Table>
}

export default Filter;