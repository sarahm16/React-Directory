import React, { Component } from 'react';
import employeeList from './employeeList';
import Table from './renderTable';
import compare from './sort';
import Dropdown from './dropdown';
import Title from './title';

class EmployeeContainer extends Component {
    state = {
        employees: employeeList
    }

    // componentDidMount() {
    //     console.log(employeeList)
    //     this.setState({
    //         employees: employeeList
    //     })
    // }

    handleSortBtn = () => {
        this.setState({
            employees: employeeList.sort(compare)
        })
    }

    handleFilterBtn = event => {
        let item = event.target.value;
        let filtered = employeeList.filter(e => e[event.target.name].includes(item));
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
                    <button onClick={this.handleSortBtn} className='btn btn-secondary'>Sort A-Z</button>
                    <Dropdown list='department' handleFilterBtn={this.handleFilterBtn}/>
                    <Dropdown list='role' handleFilterBtn={this.handleFilterBtn}/>
                </div>        
            </div>
        )
    }
}

export default EmployeeContainer;