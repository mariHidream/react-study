import React, { Component } from "react";

class EventPractice extends Component {
	
	state = {
		message : ''
	}

    // constructor(props) { // 화살표 함수로 처리 하여 사용하지 않음
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleChange(e) {
    //     this.setState({
    //       message: e.target.value
    //     });
    // }
    handleChange = (e) {
        this.setState({
          message: e.target.value
        });
    }
    
    handleClick = () => {
        alert(this.state.message);
        this.setState({
        message: ''
        });
    }


  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
				<input 
				 type="text"
				 name="message"
				 placeholder="메세지입력하기"
				 value={this.state.message}	
				//  onChange={(e)=>{
				//   this.setState({
				// 		message: e.target.value
				// 	})
				//  }} 
                onChange = {this.handleChange}
				/>
				<button onClick={this.handleClick}> 확인 </button>


				{/* <button onClick={() => {
					alert(this.state.message);
                    this.setState({
                        message:''
                    });
				}}> 확인 </button> */}
      </div>
    );
  }
}
export default EventPractice;