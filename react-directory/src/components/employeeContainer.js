import React, { Component } from 'react';
import employeeList from './employeeList';
import Table from './renderTable';
import compare from './sort';
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

    render() {
        return(
            <div>
                <Table employees={this.state.employees} />
                <button onClick={this.handleSortBtn}>Sort</button>
            </div>
        )
    }
}

export default EmployeeContainer;