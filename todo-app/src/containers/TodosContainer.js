import React from 'react';
import { connect } from 'react-redux';
// import { changeInput, insert, toggle, remove } from "../modules/todos";
import { AddTodos, RemoveTodos  } from "../modules/todos";
import Todos from '../components/Todos';


const TodosContainer = ({todos,AddTodos,RemoveTodos}) => {
    return (
        <Todos
            todos={todos}
            AddTodos={AddTodos}
            RemoveTodos={RemoveTodos}
        />
    );
};

export default connect(({todos})=>({
    todos : todos.todos,
}),{
   AddTodos,
   RemoveTodos
})(TodosContainer);