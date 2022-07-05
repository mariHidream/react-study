import React, { useReducer } from 'react';

function reducer(state, action){
    console.log(action)
    switch (action.type) {
        case 'INCREMENT':
          return { value: state.value + 1 };
        case 'DECREMENT':
          return { value: state.value - 1 };
        default:
          // 아무것도 해당되지 않을 때 기존 상태 반환
          return state;
      }
}

const Counter = () => {
    const [state, despatch] = useReducer(reducer, {value : 0})
    return (
        <div>
            <p >{state.value}</p>

            <button onClick={()=>despatch({type : 'INCREMENT'})}> +1</button>
            <button onClick={()=>despatch({type : 'DECREMENT'})}> -1</button>
        </div>
    );
};

export default Counter;