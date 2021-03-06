import React, { useEffect, useRef, useState } from 'react';
import '../style/style.css'

const Item = ({item, removeItem}) => {
    return (
        <div className='todo'>
            <input type="checkbox" checked={item.done} readOnly/>
            <span>{item.text}</span>
            <button type="button" onClick={()=>removeItem(item)}>삭제</button>
        </div>
    )
}

const TodoItem = ({todo, RemoveTodos, Insert, Remove}) => {

    var {name, todoIndex} = todo;

    const [todoName, setTodoName] = useState(name);
    const [inputState, setInputState] = useState(false);
    const [itemText, setItemText] = useState('');
    const [text, setText] = useState('');
    const [insetState, setInsetState] = useState(false);
    const ref = useRef();

    const addItem = ()=>{
        const list = {
            text : itemText
        }
        Insert(todo, list);
        setText('')
        setItemText('')
        ref.current.focus()
    }
    
    const changeName = (e) => {
        const {value} = e.target
        setTodoName(value)
    }

    const removeItem = (item)=>{
        Remove(todo,item)
    }

    useEffect(()=>{

        if(!itemText) setInsetState(false)
        else setInsetState(true)

        if(inputState) ref.current.focus()

    },[itemText, inputState])
    
    const onItemText = (e)=>{
        const {value} = e.target;
        setItemText(value)
        setText(value)
    }

    return (
        <div className='todoBoard'>
            <div className={`${todoIndex}`}>
                <h2><input type="text" value={todoName} onChange={changeName}/></h2>
                {
                   todo.items && todo.items.map(item => (
                        <Item key={item.id} item={item} removeItem={removeItem}></Item>
                    ))
                }
           </div>
           {
                inputState && <div className='todoInset'>
                    <input type="textarea" value={text} onChange={onItemText} ref={ref}/>
                    <button type="button" className={`${insetState ? 'on' : 'off'}`} onClick={addItem}>확인</button>
                </div>
           }
           <div className='buttons'>
                <button type="button" className='todoAdd' onClick={()=> setInputState(!inputState)}>
                    {
                        inputState ? '리스트추가닫기' : '리스트추가열기'
                    }
                </button>
                <button type="button" className='remove' onClick={()=> RemoveTodos(todoIndex)}>섹션삭제</button>
           </div>
        </div>
    );
};

const Todos = ({
    todos,
    AddTodos,
    RemoveTodos,
    Insert,
    Remove
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
                                RemoveTodos={RemoveTodos}
                                Insert={Insert}
                                Remove={Remove}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default Todos;