import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Filter from './components/filter.js';
import Sort from './components/sort.js';
import allEmployees from './components/employees.js';

function App() {
  return (
    <Router>
      <Route exact path='/' component={allEmployees} />
      <Route exact path='/filter' component={Filter} />
      <Route exact path='/sort' component={Sort} />
    </Router>
  );
}

export default App;
