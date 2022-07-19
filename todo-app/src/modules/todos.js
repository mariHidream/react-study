const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 item 등록
const REMOVE = 'todos/REMOVE'; // item 제거
const ADDTODOS = "todos/ADDTODOS"; // 섹션 todo 추가
const REMOVETODOS = "todos/REMOVETODOS"; //섹션 todo 삭제
const MOVEITEMS = "todos/MOVEITEMS"; //섹션 todo 삭제

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

export const Insert = (todo, list) => ({
    type: INSERT,
    todo,
    list
});
export const Remove = (todo,item) => ({
    type: REMOVE,
    todo,
    item
});

function todos(state = initialState, action) {
    switch (action.type) {
        case ADDTODOS:
            state.todoidx++;
            return {
                ...state,
                todos : state.todos.concat([{
                    todoIndex : `todo_${state.todoidx++}`,
                    name : 'To-do',
                    items : [{
                        id : state.itemidx,
                        text : `테스트_${state.itemidx}`,
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
        case INSERT:
            state.itemidx ++;
            return {
                ...state,
                todos : state.todos.map((el)=>{
                    if(el.todoIndex === action.todo.todoIndex){
                       return {
                            ...el,
                            items : el.items ? el.items.concat({
                                ...action.list,
                                id : state.itemidx,
                                done : false
                            }) : []
                       }
                    }else{
                        return el;
                    }
                })
            }

        case CHANGE_INPUT:
            console.log(action.type)
        case REMOVE:
            return {
                ...state,
                todos : state.todos.map((el)=>{
                    if(el.todoIndex === action.todo.todoIndex){
                        return {
                            ...el,
                            items : el.items.filter((el)=>{
                                return el.id !== action.item.id
                            })
                        }
                    }else{
                        return el;
                    }
                })
            }
        case MOVEITEMS:
            console.log(action.type)
        default:
            return state;
    }
}

export default todos;
