import React from 'react';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';


function App() {
	return (
    <>
      <CounterContainer number={0}/>
      <hr/>
      <TodosContainer />
    </>
	);
}

export default App;
