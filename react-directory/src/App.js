import React from 'react';
import EmployeeContainer from './components/employeeContainer';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Employees from './components/employeeContainer.js';
// import Sort from './components/sort';
// import Filter from './components/filter';

//let department = 'Management';

function App() {
  return (
    // <Router>
    //   <Route exact path='/' component={Employees}></Route>
    //   <Route exact path='/sort' component={Sort}></Route>
    //   <Route exact path={`/filter/${department}`} component={Filter}></Route>
    // </Router>
    <EmployeeContainer />
  );
}

export default App;