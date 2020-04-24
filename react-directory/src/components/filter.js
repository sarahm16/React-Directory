import React from 'react';
import employeeList from './employeeList';
import Table from './table';

//puts all unique departments into an array
function RenderDepartmentsArray() {
    let departments=[];
    for(let i=0; i<employeeList.length; i++) {
        if(departments.indexOf(employeeList[i].department) == -1) {
            departments.push(employeeList[i].department)
        }
    }
    return departments;
}

function Filter(department) {

    let list = employeeList.filter(e => e.department.includes('HR'))
    return <Table employees={list}></Table>
}

export default RenderDepartmentsArray;