# 7장 컴포넌트의 라이프사이클 메서드


## 라이프사이클의 메서드 종류는 총 9가지

 - Will 어떤 작업을 작동하기 "전"에 실행되는 메서드
 - Did 어떤 작업을 작동한 "후"에 실행되는 메서드

### 라이크사이클은 총 3가지
마운트, 업데이트, 언마운트

#### 마운트
DOM이 생성된 후 웹브라우저에 나타나는 것
* constructor : 컴포넌터를 새로 만들 때마다 호출되는 '클래스'생성자 메서드
* getDerivedStateFromProps :  props에 있는 값을 state에 넣을 때 사용하는 메서드
* render : UI를 렌더링하는 메서드

* componentDidMount : 웹 브라우저상에 컴퍼넌트가 나타난 '후' 호출하는 메서드

#### 업데이트
컴포넌트가 업데이트하는 경우 4가지
1. props가 바뀔 때
2. state가 바뀔 떄
3. 부모 컴포넌트가 리렌더링 될 떄
4. this.forceUpdate로 강제 렌더링을 트리거할 떄
* getDerivedStateFromProps : 마운트 과정 + 업데이트 시작 전 호출, props의 변화에 따라 
  state값에도 변화를 주고 싶을 때 사용.
* shouldComponentUpdate : 컴포넌트를 리렌더링 할지 말지 결정하는 메서드 (true,false)
    - true 다음 라이프사이클 메서드를 계속 실행
    - false 작업 중지 (리렌더링 없음)
    - this.forceUpdate() 함수 호출시 이 과정을 생략하고 바로 render함수를 호출
* getSnapshotBeforeUpdate : 조화과정(컴포넌트 변화)를 DOM에 반영하기 직전에 호출하는 메서드
* componentDidUpdate : 컴포넌트 업데이트 작업히 끝난 '후' 호출하는 메소드

#### 언마운트
컴포넌트를 DOM에서 제거하는 것
* componentWillUnmount : 웹 브라우저상에서 컴포넌트가 사라지기 전에 호출 하는 메서드


## 1. render() 함수
``` javascript
    render() {}
```
컴포넌트의 모양을 정의, 유일한 필수 메서드
리액트요소를 반환, this.props, this.state에 접근
render 안에는 setState를 사용하면 안되고, 브라우저의 DOM에 접근해서도 안됨
DOM정보를 가져오거나 state에 변화를 줄때는 componentDidMount 에서 처리

## 2. constructor 메서드
``` javascript
    constructor(props) {}
```
초기 state를 정할 수 있다.

## 3. getDerivedStateFromProps 메서드
16.3v 이 후 업데이트 됨
props로 받아 온 값을 state에 동기회 시키는 용도로 사용, 컴포넌트가 마운트, 업데이트시 호출

``` javascript
    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.value != = prevState.value) { // 조건에 따라 특정 값 동기화
            return { value: nextProps.value };
        }
        return null; // state를 변경할 필요가 없다면 null을 반환
    }
```

## 4. componentDidMount 메서드
``` javascript
    componentDidMount() {}
```
컴포넌트를 만들고, 첫 렌더링을 마친 후 실행
자바스크립트 라이브러리 또는 프레임워크의 함수 호출, 이벤트 등록, 네트워크요청(비동기),
setTimeout, setInterval 등.. 여기서 처리

## 5. shouldComponentUpdate 메서드
``` javascript
    shouldComponentUpdate(nextProps, nextState) {}
```
props 또는 State를 변경할 떄, 리렌더링을 시작할지 여부를 지정하는 메서드
true, false값만 반환, 기본은 true 
현재 props와 state는 this.props와 this.state로 접근하고,
새로 설정될 props 또는 state는 nextProps와 nextState로 접근

프로젝트 성능을 최적화 할 때, 상황에 맞는 알고리즘을 작성하여 리렌더링을 방지할 때는 false값을 반하게 한다.

## 6. getSnapshotBeforeUpdate 메서드
``` javascript
    getSnapshotBeforeUpdate(prevProps, prevState) {
        if(prevState.array != = this.state.array) {
            const { scrollTop, scrollHeight } = this.list
            return { scrollTop, scrollHeight };
        }
    }
```
16.3v 이 후 업데이트 됨.
render로 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출된다.
메서드가 반환하는 값은 componentDidUpdate에서 세번째 파라미터인 snapshot값으로 전달 받을 수 있다.
주로 업데이트하기 직전의 값을 참고할 일이 있을 때 활용된다.(ex. 스크롤바 위치)

## 7. componentDidUpdate 메서드
``` javascript
    componentDidUpdate(prevProps, prevState, snapshot) { ... }
```
리렌더링을 완료 한 후 실행. 
엡데이트가 끝난 직후이므로 DOM 관련 처리를 해도 무방.
prevProps, prevState를 사용하여 컴포넌트가 이전에 가졌던 데이터에 접근 할 수 있다.
getSnapshotBeforeUpdate에서서 반환한 값이 있다면 여기서 snapshot값을 전달 받을 수 있다.

## 8. componentWillUnmount 메서드
``` javascript
    componentWillUnmount() { ... }
```
DOM에서 컴포넌트를 제거할 때 실행
componentDidMount에서 등록한 이벤트 , 타이머, 생성한 DOM이 있다면 여기서 제거 작업을 해야한다.

## 9. componentDidCatch 메서드
``` javascript
    componentDidCatch(error, info) {
        this.setState({
            error: true
        });
        console.log({ error, info });   
    }
```
16v에서 새롭게 도입
렌더링도중 에러가 발생했을 때, 먹통이 되지 않고 오류 UI를 보여줄 수 있도록 한ㄴ다.
error는 어떤 에러인지, 
info 어디에 오류가 났는지.
컴포넌트 자신에게 발생하는 에러는 잡아낼 수 없고
this.props.cildren으로 전달되는 컴포넌트에서 발생하는 에러만 잡아낸다.

