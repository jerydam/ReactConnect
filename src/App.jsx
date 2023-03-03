import React, { useState } from 'react';
import Token from './Token';

function App() {
  // const [count, setCount] = useState(0)

  // function increClick (){
  //   setCount(count => count + 1);
  //   return
  // }

  
  // function decreClick(){
  //   setCount(count => count -1);
  //   return
  // }

  return (
    <div>
    <Token />
     {/* <h1>current count is : {count}</h1>
     <button onClick={() => setCount(count + 1)}>increment</button>
     <button onClick={() => setCount(count - 1)}>decrement</button> */}
    </div>
  );
}

export default App;
