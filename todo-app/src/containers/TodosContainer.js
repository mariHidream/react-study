import React from 'react';
import { connect } from 'react-redux';
// import { changeInput, insert, toggle, remove } from "../modules/todos";
import { AddTodos, RemoveTodos, Insert, Remove  } from "../modules/todos";
import Todos from '../components/Todos';


const TodosContainer = ({todos, AddTodos, RemoveTodos, Insert, Remove}) => {
    return (
        <Todos
            todos={todos}
            AddTodos={AddTodos}
            RemoveTodos={RemoveTodos}
            Insert={Insert}
            Remove={Remove}
        />
    );
};

export default connect(({todos})=>({
    todos : todos.todos,
}),{
   AddTodos,
   RemoveTodos,
   Insert,
   Remove
})(TodosContainer);