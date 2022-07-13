const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = () => ({type : INCREASE})
export const decrease = () => ({type : DECREASE})

const initialState = {
    number : 0 // 초기 상태 값을 설정
}

function counter(state = initialState, action) { // 리듀서함수
    switch (action.type) {
        case INCREASE:
            return {
                number: state.number + 1
            };
        case DECREASE:
            return {
                number: state.number - 1
            };
        default:
            return state;
    }
}

export default counter;



/* 
    불러오는 방법
    
    import counter from ‘./counter‘;
    import { increase, decrease } from ‘./counter‘;
    * 한꺼번에 불러오고 싶을 때
    import counter, { increase, decrease } from ‘./counter‘;

*/