import {useState} from 'react'
// Reviewing:
// Short-circuit evaluation and ternary operations
const ShortCircuit = () =>{
    const [text, setText] = useState("")
    const [isError, setIsError] = useState(false)
    // Ternary Playground:
    // const firstValue = text || "Hello World"
    // const secondValue = "Hello Wario" && text

    return(
        <div>
            {/* <h1>{firstValue}</h1>
            <h1>Value: {secondValue}</h1> */}
            <h1>{text || "John Doe"}</h1>
            <button className="btn" onClick={() =>setIsError(!isError)}>Toggle Error</button>
            {isError && <h1>Error...</h1>}
            {isError ? (<p>There is an error...</p>):(<div><h2>There is no Error</h2></div>)}
        </div>
    )
}

export default ShortCircuit