import React, {Component} from 'react';
import './styles.css';

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
               const { id, name, email, department } = employee //destructuring
               return (
                  <tr key={id}>
                     <td>{name}</td>
                     <td>{email}</td>
                     <td>{department}</td>
                  </tr>
               )
            })
        }
    
        render() {
            return (
               <div>
                  <h1 id='title'>Employee Roster</h1>
                  <table id='employees'>
                     <tbody>
                        {this.renderTableData()}
                     </tbody>
                  </table>
               </div>
            )
        }
    }

export default Table;