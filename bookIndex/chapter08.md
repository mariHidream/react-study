# 8장 Hooks
v16.8 새로 도입된 기능으로 기존의 함수형 컴포넌트에서 할 수 없었던 다양한 작업을 할 수 있게 해준다.

- useState(상태의 기본값 설정)
- useEffect
- useReducer
- userMemo
- useCallback
- useRef

## 1. useState 
하나의 상태 값만 관리 할 수 있다.
컴포넌트에서 관리해야 할 상태가ㅏ 여러개라면 useState를 여러번 사용하면 된다.
``` javascript
    const [example, setExample] = useState('')
```
## 2. useEffect
렌더링 될 때마다 특정 작업을 수행하도록 설정하는 Hook이다.
클래스컴포넌트의 componentDidMount, componentDidUpdate를 합친 형태
``` javascript
    useEffect(()=>{
        //실행문
    })
```
* 마운트 될만 실행하고 싶다면 두번째 파라미터에 비어있는 배열을 넣어준다 useEffect(()=>{},[]) - 최초 1회만 발생
* 특정 값이 업데이트 될때마다 실행하고 싶다면, 두번째 파라미터의 배열안에 검사하고 싶은 배열값을 넣어준다. useEffect(()=>{},[example])
    - 배열안에는 useState를 통해 관리하고 있는 상태를 넣어주어도 괜찮고 props를 전달 받은 값을 넣어주어도 된다.
* useEffect의 뒷정리 (Clean-up) : 기본적으로 렌더링 난 직후마다 실행되며, 두번째 배열에 무엇을 넣는지에 따라 실행조건이 달라진다.
컴포넌트가 언마운트(컴포넌트삭제) 전이나 업데이트 직전에 작업을 수행하고 싶다면 뒷정리 함수를 반환해주어야한다. render() => {}
    - 언마운트 될 때만 뒷정리 함수를 호출 하고 싶다면 두번째 파라미터에 빈배열([])을 넣으면 된다.
## 3. useReducer
useState보다 더 다양한 상태를 다른 값으로 업데이트 해주고 싶을 때 사용한다.
현재상태, 업데이트를 위해 필요한 정보를 담는 액션값을 전달받아 새로운 상태를 변환하는 함수
사용시 불변성을 반드시 지켜주어야 한다.
``` javascript
    function reducer(state, action){
        return {}; //불변성을 지키면서 업데이트한 새로운 상태 반환
        //state => 현재 가리키고 있는 상태(함수) 
        //action => 액션을 발생시키는 함수
    } //함수를 만들어서 사용

    const [state, despatch] = useReducer(reducer, {value : 0})
```
첫번째 파라미터 (state) 에는 리듀서 함수, 두번째 파라미터 (action) 에는 리듀서의 기본값
* 가장큰 장점은 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼냄!

## 4. useMemo
함수 컴포넌트 내부에서 발생하는 연산을 최적화 할 수 잇다.
``` javascript
    const avg = seMemo(() => getAverage(list), [list]);
```
* 숫자, 문자, 객체처럼 일반 값을 재사용할 떄 사용

## 5. useCallback
useMemo와 비슷한 함수이며, 렌더링 성능을 최적화 할 때 사용한다.
이벤트 핸들러 함수를 필요할 때만 생성할 수 있다.
``` javascript
    const onChange = useCallback(e => {
        setNumber(e.target.value);
    },[])
```
* 함수를 재사용할 떄 사용.

첫번째 파라미터에는 생성하고 싶은 함수, 
두번째 파라미터에는 배열을 넣음 -> 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시한다.
    - [] 빈 배열일 경우, 렌더링될 때 단 한번만 함수를 생성
    - [props, state 등등] 해당 값이 변경될 때마다 함수가 생성된다.  

## 6. useRef
``` javascript
    const inputEl = useRef(null)
    
    // inputEl.current.focus()
    .
    .
    .
    <input ref={inputEl}></input>
```
원하는 태그에 설정하면, 해당 객체안의 current값이 실제 엘리먼트를 가리킨다.
* 컴포넌트 로컬 변수(렌더링과 상관 없이 바뀔 수 있는 값)로도 사용 + 활용할 수있다.
* useRef는 값이 바뀌어도 컴포넌트가 렌더링 되지 않는다.


• https://nikgraf.github.io/react-hooks/
• https://github.com/rehooks/awesome-react-hooks
