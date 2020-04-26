import React, { Component } from 'react';
import employeeList from './employeeList';
import Table from './renderTable';
import compare from './sort';
import Dropdown from './dropdown';
import RenderDepartmentsArray from './departmentsArray';
import Title from './title';

let departments = RenderDepartmentsArray();

class EmployeeContainer extends Component {
    state = {
        employees: employeeList
    }

    handleSortBtn = event => {
        this.setState({
            employees: employeeList.sort(compare)
        })
        console.log(this.state.employees)
    }

    handleFilterBtn = event => {
        let dep = event.target.value;
        let filtered = employeeList.filter(e => e.department.includes(dep));
        for(let i=0; i<filtered.length; i++) {
            employeeList[i] = filtered[i]
        }
        employeeList.splice(filtered.length, employeeList.length-filtered.length)
        
        this.setState({
            
        })
    }

    render() {
        return(
            <div>
                <Title />
                <Table employees={this.state.employees} />
                <button onClick={this.handleSortBtn} className='btn btn-secondary'>Sort Employees A-Z</button>
                <Dropdown handleFilterBtn={this.handleFilterBtn}/>                
            </div>
        )
    }
}

export default EmployeeContainer;