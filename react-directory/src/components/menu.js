import React from 'react';
import '../App.css';
import Button from './button.js';
import onClick from './onclick.js';

function Menu() {
    return (
        <div className="menu">
            <h4>What would you like to do?</h4>
            <div className="buttons">
                <Button task="View All Employees" handleBtnClick={onClick}/><br />
                <Button task="Filter Employees by Name" handleBtnClick={onClick}/><br />
                <Button task="Sort Employees by Name" handleBtnClick={onClick}/><br />
            </div>
        </div>
    )
}

export default Menu;