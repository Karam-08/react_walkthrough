import {useState} from 'react';
// Invoke inside


const UseStateBasics = () =>{
    const [text, setText] = useState('Beetle Juice');
    const handleClick = () =>{
        if(text === 'random pants'){
            setText("Those are mine!")
        }else{
            setText("Beetle Juice is Scawy uwu")
        }
    }
    return (
        <>
            <h1>{text}</h1>
            <button className="btn" onClick={handleClick}>Change Title</button>
        </>
    )
}

export default UseStateBasics;