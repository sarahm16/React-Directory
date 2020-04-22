import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Employees from './components/employeeContainer.js';
import Sort from './components/sort';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Employees}></Route>
      <Route exact path='/sort' component={Sort}></Route>
      <Route exact path='/filter'></Route>
    </Router>
  );
}

export default App;