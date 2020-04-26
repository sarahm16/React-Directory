import React, { Component } from 'react';
import employeeList from './employeeList';
import Table from './renderTable';
import compare from './sort';
import Dropdown from './dropdown';
import RenderDepartmentsArray from './departmentsArray';
import Title from './title';

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

    viewAll = () => {
        this.setState({
            employees: employeeList
        })
    }

    handleFilterBtn = event => {
        let dep = event.target.value;
        let filtered = employeeList.filter(e => e.department.includes(dep));
        for(let i=0; i<filtered.length; i++) {
            employeeList[i] = filtered[i]
        }
        employeeList.splice(filtered.length, employeeList.length-filtered.length)

        this.setState({})
    }

    render() {
        return(
            <div>
                <Title />
                <Table employees={this.state.employees} />
                <div className='buttons'>
                    <button onClick={this.handleSortBtn} className='btn btn-secondary'>Sort Employees A-Z</button>
                    <Dropdown list='department' handleFilterBtn={this.handleFilterBtn}/>
                    <Dropdown list='role' handleFilterBtn={this.handleFilterBtn}/>
                </div>        
            </div>
        )
    }
}

export default EmployeeContainer;