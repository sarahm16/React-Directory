import employeeList from './employeeList';

function Filter(department) {
    let list = employeeList.filter(e => e.department.includes(department))
    return list
}

export default Filter;