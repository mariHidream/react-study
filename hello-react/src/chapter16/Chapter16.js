import React from 'react';
import './style.css';
import { createStore } from 'redux';

// 주로 대문자로 작성. 액션이름은 고유해야함.
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

const initialState = {
  toggle: false,
  counter: 0
};

function counter(state = initialState, action) {
     switch (action.type) {
        case TOGGLE_SWITCH:
        return {
            ...state, // 불변성 유지를 해 주어야 합니다.
            toggle : !state.toggle
        };
        case INCREASE:
        return {
            ...state,
            counter: state.counter + action.difference
        };
        case DECREASE:
        return {
            ...state,
            counter: state.counter - 1
        };
        default:
        return state
    }
}

function counter2(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
let store = createStore(counter)

const render = () => {
    const state = store.getState();
    console.log(state);
    if(state.toggle){
        
    }
}

render();




const Chapter16 = () => {
    return (
        <div>
            <div className="toggle"></div>
            <hr />
            <h1>0</h1>
            <button id="increase">+1</button>
            <button id="decrease">-1</button>
        </div>
    );
};

export default Chapter16;