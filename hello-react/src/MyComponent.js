import React, { useState } from 'react'; // 1. useState 선언 꼭 확인하기.

 
const MyComponent = ({ name, children }) => {

  const [message, setMessage] = useState(''); 
  const [color, setColor] = useState('coral')

  const onClickEnter = () => setMessage('안녕하세요!');

  return (
		<>
			<div onClick={onClickEnter}></div>
            <div style={{backgroundColor : color}} onClick={() => setColor('coral')}>
            안녕하세요, 제 이름은 {name}입니다. <br />
            children 값은 {children}
            입니다.
            </div>
		</>
  );
};
 

export default MyComponent;