import React from 'react';
import '../style/style.css'

const Item = ({item}) => {
    return (
        <div className='todo'>
            <input type="checkbox"
                checked={item.done}
                readOnly={true}
            />
            <span>{item.text}</span>
            <button type="button">삭제</button>
        </div>
    )
}


const TodoItem = ({todo, todoIndex, RemoveTodos}) => {
    return (
        <div className='todoBoard'>
            <div className={`${todoIndex}`}>
                <h2><input type="text" value={todo.name}/></h2>
                {
                    todo.items.map(item => (
                        <Item key={item.id} item={item}></Item>
                    ))
                }
           </div>
           <div className='buttons'>
                <button type="button" className='todoAdd' onClick={()=> RemoveTodos(todoIndex)}>리스트추가</button>
                <button type="button" className='remove' onClick={()=> RemoveTodos(todoIndex)}>섹션삭제</button>
           </div>
        </div>
    );
};

const Todos = ({
    todos, // 할 일 목록이 들어 있는 객체
    AddTodos,
    RemoveTodos
}) => {
    return(
        <div>
            <div>
                <button type="button" className='add' onClick={AddTodos}>섹션추가</button>
                <hr/>
                <div className="listBody">
                    {
                        todos.map(todo => (
                            <TodoItem
                                todo={todo}
                                key={todo.todoIndex}
                                todoIndex={todo.todoIndex}
                                RemoveTodos={RemoveTodos}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default Todos;