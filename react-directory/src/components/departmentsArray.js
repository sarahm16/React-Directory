import employeeList from './employeeList';

//puts all unique departments into an array
function RenderArray(item) {
    let array=[];
    for(let i=0; i<employeeList.length; i++) {
        if(array.indexOf(employeeList[i][item]) === -1) {
            array.push(employeeList[i][item])
        }
    }
    return array;
}

export default RenderArray;