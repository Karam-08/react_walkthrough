import {useState, useEffect} from 'react'

// By default useEffect runs after every re-render

const UseEffectBasics = () =>{
    const [value, setValue] = useState(0)

    useEffect(() => {
      console.log('Call useEffect')
      if(value > 0) {document.title = `New Message(${value})`}    
}, )
    console.log("Render Component")
    return(
        <>
            <h1>{value}</h1>
            <button className="btn" onClick={() => setValue(value + 1)}>Click Me!</button>
        </>
    )
}

export default UseEffectBasics
/* 
You are running your app in strict mode. Go to index.js and comment the strict mode tag out and you'll find a single render

This happens to be an intentional feature of the react.strictmode. It only happens in development mode and should help to find the accidental side effects in the render phase

FROM THE DOCS:

Strict mode cannon automatically detect side effects for you, but it can help you spot them by making them a little more deterministic. This is done by intentionally double-invoking the functions
*/