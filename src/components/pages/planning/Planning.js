import React from 'react';
import '../../../App.css';
import NavbarAll from '../../nav_bars/NarvbarAll';
import TodoList from './TodoList';
import MonthTodoList from './MonthTodoList';
import './styles/Planning.css';
import Scheduler from './Scheduler';

function Planning () {
    return (
        <>
            <NavbarAll/>
            <h1 className='planning'>PLANNING</h1>;
            <Scheduler />
            <div className="to-do">
                <div className="todo-app">
                    <TodoList />
                </div>
                <div className="month-todo-app">
                    <MonthTodoList />
                </div>
	    </div>
        </>
    )
}

export default Planning;
