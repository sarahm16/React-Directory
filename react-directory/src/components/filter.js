import React from 'react';
import employeeList from './employeeList';
import Table from './table';
let departments=[];

//puts all unique departments into an array
function renderDepartmentsArray() {
    for(let i=0; i<employeeList.length; i++) {
        if(departments.indexOf(employeeList[i].department) == -1) {
            departments.push(employeeList[i].department)
        }
    }
    console.log(departments)
}

function Filter(department) {

    let list = employeeList.filter(e => e.department.includes('HR'))
    return <Table employees={list}></Table>
}

export default Filter;