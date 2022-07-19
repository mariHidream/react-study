import React from 'react';
import { connect } from 'react-redux';
// import { changeInput, insert, toggle, remove } from "../modules/todos";
import { AddTodos, RemoveTodos, Insert  } from "../modules/todos";
import Todos from '../components/Todos';


const TodosContainer = ({todos, AddTodos, RemoveTodos, Insert}) => {
    return (
        <Todos
            todos={todos}
            AddTodos={AddTodos}
            RemoveTodos={RemoveTodos}
            Insert={Insert}
        />
    );
};

export default connect(({todos})=>({
    todos : todos.todos,
}),{
   AddTodos,
   RemoveTodos,
   Insert
})(TodosContainer);