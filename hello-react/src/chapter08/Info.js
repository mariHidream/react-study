import React, { useReducer } from 'react';
import useInputs from './useInput';

// function reducer(state, action) {
//     console.log(action);
//     return {
//       ...state,
//       [action.name]: action.value
//     };
//   }
  

const Info = () => {

    // const [state, dispatch] = useReducer(reducer, {
    //     name: '',
    //     nickname: ''
    //   });
    //   const { name, nickname } = state;
    //   const onChange = e => {
    //     dispatch(e.target);
    //   };

    // Hook 만들기
    const [state, onChange] = useInputs({
        name : '',
        nickname : ''
    })
    const {name, nickname} = state

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>   
                    <b>닉네임: </b>
                    {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;