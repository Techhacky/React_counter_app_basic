import React, { useState } from "react";

function Counter() {
  const [count, setcount] = useState(0);
  const [ShowCount, setShowCount] = useState(false);
  return (
    <div>
      <button onClick={() => setShowCount(!ShowCount)}>{ShowCount ? 'hide show count':'SHOW COUNT'}</button>
      {ShowCount ? (
        <>
          <h1>counter show open</h1>
          <h1>counter is - {count}</h1>
          <button  onClick={() => setcount(count+1)}>increment</button>
          <button  onClick={() => setcount(count-1)}>decrement</button>

        </>
      ) : null}
    </div>
  );
}

export default Counter;
