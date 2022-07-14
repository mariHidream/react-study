const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo를 체크/체크 해제함
const REMOVE = 'todos/REMOVE'; // todo를 제거함'
const ADDTODOS = "todos/ADDTODOS"; //리스트 섹션 추가
const REMOVETODOS = "todos/REMOVETODOS"; //리스트 섹션 추가

const initialState = {
    todoidx : 0,
    itemidx : 0,
    todos : []
}

export const AddTodos = () => ({
    type: ADDTODOS
});

export const RemoveTodos = (todoIndex) => ({
    type: REMOVETODOS,
    todoIndex
});

function todos(state = initialState, action) {
    switch (action.type) {
        case ADDTODOS:
            state.todoidx++;
            return {
                ...state,
                todos : state.todos.concat([{
                    todoIndex : `todo_${state.todoidx++}`,
                    items : [{
                        id : state.itemidx,
                        text : 'text',
                        done : false
                    }]
                }])
            }
        case REMOVETODOS:
            return {
                ...state,
                todos : state.todos.filter((todo)=>{
                    return todo.todoIndex !== action.todoIndex
                })
            }
        case CHANGE_INPUT:
            console.log(action.types)
        case INSERT:
            console.log(action.types)
        case TOGGLE:
            console.log(action.types)
        case REMOVE:
            console.log(action.types)
        default:
            return state;
    }
}

export default todos;


/* 
export const changeInput = input => ({
    type : CHANGE_INPUT,
    input,
})

let id = 3; //inser가 호출될 때마다 1씩 더해주기
export const insert = text => ({
    type : INSERT,
    todo : {
        id : id++,
        text,
        done : false
    }
});

export const toggle = id => ({
    type : TOGGLE,
    id
});

export const remove = id => ({
    type : REMOVE,
    id
})

const initialState  = {
    input : '',
    todos : [
        {
            id : 1,
            text : '리덕스 기초 배우기',
            done : true
        },
        {
            id : 2,
            text : '리액트와 리덕스 사용하기',
            done : false
        },
    ]
};

function todos (state = initialState, action){
    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                input : action.input
            };
        case INSERT : 
            return {
                ...state,
                todos : state.todos.concat(action.todo)
            };
        case TOGGLE : 
            return {
                ...state,
                todos : state.todos.map(todo => 
                    todo.id === action.id ? {...todo, done : !todo.done} : todo    
                )
            };
        case REMOVE : 
            return {
                ...state,
                todos : state.todos.filter(todo => todo.id !== action.id)
            };
        default:
            return state;
    }
}

export default todos; */