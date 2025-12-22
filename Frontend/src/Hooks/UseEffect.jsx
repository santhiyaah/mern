import React from 'react'

const UseEffect = () => {
const [count,setCount]=useState(0);
const [value,setValue]=useState("");
    useEffect(()=> {
        console.log("UseEffect Mounted")
    }, [count,value]);
    return (
    <>
      <h1>{value}</h1>
            <input type="text" onChange={(e)=> setValue (e.target.value)} />
            <h1>{count}</h1>
    <div>useEffect</div>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default UseEffect