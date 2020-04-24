import employeeList from './employeeList';

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

export default RenderDepartmentsArray;