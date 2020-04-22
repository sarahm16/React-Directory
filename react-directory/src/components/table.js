import React, {Component} from 'react';

class Table extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = {
           employees: props.employees
       };
    }

    renderTableData() {
        console.log('rendering')
        return this.state.employees.map((employee, index) => {
           const { id, name, age, email } = employee //destructuring
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{age}</td>
                 <td>{email}</td>
              </tr>
           )
        })
    }

    render() {
        return (
           <div>
              <h1 id='title'>Here are all of your employees</h1>
              <table id='students'>
                 <tbody>
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        )
    }
}

export default Table;