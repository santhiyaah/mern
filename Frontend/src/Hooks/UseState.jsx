import React from 'react'

const useState = () => {
    const [count,setCount] =useState(0);
    const [value,setValue]=useState("");
    const handIncrement =()=>{
        setCount(count + 1) }
    const handleDecrement =()=>{
        setCount(count - 1) }
        const handleReset =()=>{
            setCount(0)
         }
    return (
        <div>
            <h1>{value}</h1>
            <input type="text" onChange={(e)=> setValue (e.target.value)} />
            <h1>{count}</h1>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>

        </div>
    )
}
export default useState
