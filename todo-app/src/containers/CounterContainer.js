import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Conuter from '../components/Conuter';
import { increase, decrease } from "../modules/counter";

const CounterContainer = ({number, increase, decrease}) => {
    return <Conuter number={number} onIncrease={increase} onDecrease={decrease} />
};
/*
    connect 사용방법1
    const mapStateToProps = state => ({ // 현재 스토어가 지니고 있는 상태를 가리킨다.
        number : state.counter.number
    });

    const mapDispatchToProps = dispatch => ({ //
        increase : () => {
            dispatch(increase());
        },
        decrease : () => {
            dispatch(decrease())
        }
    })

    export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
*/

/* connect 사용방법1 */
export default connect(
state => ({
    number : state.counter.number,
}),
dispatch => 
    bindActionCreators(
        {
            increase,
            decrease
        },
        dispatch,
))(CounterContainer);




/* 
    리덕스와 연동하기 위해 react-redux의 connect함수 사용.
    * 사용방법 
    connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)

    - mapStateToProps : 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
    - mapDispatchToProps :  액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수


    함수를 호출하면 다른 함수를 반환합니다.
    반환된 함수에 컴포넌트를 파라미터로 넣어 주면 리덕스와 연동된 컴포넌트가 만들어진다.

*/

/* 
    bindActionCreators 리덕스에서 제공하는 유틸함수

*/