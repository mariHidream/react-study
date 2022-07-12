# 16장 Redux(리덕스)의 이해

## Redux란?  
- 자바스크립트 **상태관리 라이브러리**  
- 전역 상태 관리(저장소)라고도 부르는..  
- react의 데이터상속의 복잡성을 보안하기 위해서 상태관리 라이브러리를 사용한다.  
    - 자식 컴포넌트들(형제들) 간의 다이렉트 데이터전달이 불가능함을 보안  
    - 특히나 자식들이 많아지면 복잡해지는데 상위컴포넌트에서 계속 내려받는 데이터들을 관리가 하기가 복잡해진다.  
    - 즉 Prop Drilling(프로퍼티 내려꽂기) 이슈때문에 사용   
        > Prop Drilling 은 props를 오로지 하위 컴포넌트로 전달하는 용도로만 쓰이는 컴포넌트들을 거치면서
        > React Component 트리의 한 부분에서 다른 부분으로 데이터를 전달하는 과정을 의미  
    - redux, mobX, React Context, recoil등이 있음.  
        
## 리덕스의 기본개념 : 3가지 규칙  
1. single source of truth(단일 스토어)  
    - 동일한 데이터는 항상 같은 곳에서 가지고 온다.  
    - 하나의 애플리케이션 안에는 하나의 스토어만 있다.  
2. State is read-only(읽기 전용 상태)  
    - 리덕스 상태는 읽기 전용. 상태를 업데이트할 때 기존의 객체는 건드리지 않고 새로운 객체를 생성  
    - 내부적으로 데이터가 변경되는 것을 감지하기 위해 얕은 비교(shallow equality) 검사를 하기 때문에 *불변성 유지* 필요.  
3. Changes are made with pure function(변화는 순수 함수로 작성되어야한다)  
    - 순수 리듀서를 작성해야한다.  
    - 리듀서와 연관되는 개념이다.  
        - 변화를 일으키는 리듀서 함수는 순수한 함수여야하고 리듀서 작성할 때 아래 4가지를 주의해야한다.  
            1. 리듀서 함수는 이전 상태와 액션 객체를 파라미터로 받습니다  
            2. 파라미터 외의 값에는 의존하면 안 됩니다.  
            3. 이전 상태는 절대로 건드리지 않고, 변화를 준 새로운 상태 객체를 만들어서 반환합니다.  
            4. 똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과 값을 반환해야 합니다.  
            * 주로 네트워크 요청과 같은 비동기 작업은 미들웨어를 통해 관리 *   
    - Store - Action - Reducer  
        - Store(스토어)  
            > 저장소는 애플리케이션의 상태 트리를 가지고 있는 객체  
            >> 컴포넌트에서 상태 정보가 필요할 때 스토어에 접근  
            >> Redux 앱에는 단 하나의 저장소만 있어야 한다.  
        ``` javascript
            type Store = {
                dispatch: Dispatch,
                getState: () => State,
                subscribe: (listener: () => void) => () => void,
                replaceReducer: (reducer: Reducer) => void
            }
        ```
        **_dispatch(action)_** 기본 디스패치 함수  
        **_getState()_** 저장소의 현재 상태를 반환  
        **_subscribe(listener)_** 상태가 바뀔 때 호출될 함수를 등록  
        **_replaceReducer(nextReducer)_** 핫 리로딩과 코드 분할을 구현할때 사용(사용하지 않음.)  
        ``` javascript
            import { createStore } from 'redux'
            let store = createStore(todos, ['Use Redux'])

            function addTodo(text) {
            return {
                type: 'ADD_TODO',
                text
            }
            }

            store.dispatch(addTodo('Read the docs'))
            store.dispatch(addTodo('Read about the middleware'))
        ```
        - Action(액션)  
            > 액션은 상태를 변화시키려는 의도를 표현하는 평범한 객체  
            >> 앱에서 스토어에 운반할 데이터를 말한다.   
            >> 자바스크립트 객체 형식으로 되어있다.  
            액션은 저장소에 데이터를 넣는 유일한 방법.  
            UI 이벤트에서 왔든, 네트워크 콜백에서 왔든, 웹소켓과 같은 다른 소스에서 왔든 모든 데이터는 액션으로써 보내진다.  
        ``` javascript
            type Action = Object
        ```
        - Reducer(리듀서)  
            > 리듀서(리듀싱 함수)는 누적값과 값을 받아서 새로운 누적값을 반환하는 함수  
            >> Action(액션)을 Store(스토어)에 바로 전달하는 것이 아니다.  
            >> Action(액션)을 Reducer(리듀서)에 전달해야한다.  
            >> Reducer(리듀서)가 주문을 보고 Store(스토어)의 상태를 업데이트하는 것이다.  
            >> Action(액션)을 Reducer(리듀서)에 전달하기 위해서는 dispatch() 메소드를 사용해야한다.  
            >>> API 호출을 리듀서 안에 넣지 마세요.  
        ``` javascript
            type Reducer<S, A> = (state: S, action: A) => S   
        ```
        
    