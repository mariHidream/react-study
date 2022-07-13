import React from 'react';

const TodosItem = ({todo, onToggle, onRemove}) => {
    return (
        <div>
            <input type="checkbox"/>
            <span>예제 텍스트</span>
            <button>삭제</button>
        </div>
    );
};

const Todos = ({
    input,
    todos,
    onChangeInput,
    oninsert,
    onToggle,
    onRemove,
}) => {
    const onSubmit = e =>{
        e.preventDefault();
    };
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input/>
                <button type="submit"> 등록 </button>
            </form>
            <div>
                <TodosItem />
                <TodosItem />
                <TodosItem />
                <TodosItem />
                <TodosItem />
            </div>
        </div>
    )
};

export default Todos;