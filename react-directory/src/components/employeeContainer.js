import React, { Component } from 'react';
import employeeList from './employeeList';
import Table from './renderTable';
import compare from './sort';
import Dropdown from './dropdown';
import RenderDepartmentsArray from './departmentsArray';
import Filter from './filter';

let departments = RenderDepartmentsArray();
//import Button from './button';

class EmployeeContainer extends Component {
    state = {
        employees: employeeList
    }

    handleSortBtn = event => {
        this.setState({
            employees: employeeList.sort(compare)
        })
    }

    handleFilterBtn = event => {
        //let department = event.target['data-value'];
        console.log(event.target.value)
        //console.log(department)
        // this.setState({
        //     employees: Filter(department)
        // })
    }

    render() {
        return(
            <div>
                <Table employees={this.state.employees} />
                <button onClick={this.handleSortBtn}>Sort Employees A-Z</button>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                        Filter Employees by Department
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {departments.map(department => (
                            <button value={department} className='dropdown-item' onClick={this.handleFilterBtn}>{department}</button>
                        ))}
                    </div>
                </div>
                {/* <button onClick={this.handleFilterBtn}>Filter employees by Department</button> */}
            </div>
        )
    }
}

export default EmployeeContainer;