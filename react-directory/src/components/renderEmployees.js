import employeeList from './employeeList';
//import sort function
//import filter function

function renderEmployees(event) {
    switch (event) {
        case 'sort':
            return console.log('sort adsf')
        case 'filter':
            return console.log('filter asdf')
        default:
            return employeeList
    }
}

export default renderEmployees;