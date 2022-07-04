import React, {useState} from 'react'

const EventPractice = () =>{
	const [username, setUsername] = useState('');
	const [message, setMessage] = useState('');

	const onChangeUsername = e => setUsername(e.target.value);
	const onChangeMessage = e => setMessage(e.tartget.value);

	const onClick = () =>{
		alert(username + message);
		setUsername('');
		setMessage('');
	};
	const onKeyPress = e =>{
		if(e.key === 'Enter'){
			onClick();
		}
	}


    // 심화 스프레드 연산자, 비구조할당 이용하기

	const [form, setForm] = useState({
		username : '',
		message : ''
	});
	
	const {username, message} = form; //비구조할당..!!

	const DeeponChange = e => {
		const nextForm = {
			...form, //스프레드 연산자..!!
			[e.target.name] : e.target.value;		
		};
		setForm(nextForm);
	}

    const DeeponClick = () =>{
		alert('심화' + username + message);
		setForm({
			username : '',
			message : ''
		});
	}
    
    // 심화 스프레드 연산자, 비구조할당 이용하기
	
return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChangeUsername} //심화 {DeeponChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChangeMessage} // 심화 {DeeponChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};
export default EventPractice;