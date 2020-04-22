//import sort function
//import filter function

//import compare from './sort';

let employeeList =  [
    { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
    { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
    { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
    { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
]

function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
        comparison = 1;
    } else if (nameA < nameB) {
        comparison = -1;
    }
    return comparison;
}

function renderEmployees(task) {
    switch (task) {
        case 'sort':
            return employeeList.sort(compare)
        case 'all':
            return employeeList
    }
}

export default renderEmployees;

//function (props.page)
//switch (sorted or filtered)
//return employee list, sorted or filtered