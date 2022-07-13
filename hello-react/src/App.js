import React from 'react';
import Conuter from './chapter16/Conuter';
import Todos from './chapter16/Todos';

function App() {
	return (
    <>
      <Conuter number={0}/>
      <hr/>
      <Todos />
    </>
	);
}

export default App;
