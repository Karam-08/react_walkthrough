import {useState} from 'react'

const ErrorExample = () =>{
    const [state, setState] = useState(true);
    const [title, setTitle] = useState(0)

    const handleClick = () =>{
        setTitle(title + 1)
        console.log(title)

        setState(!state)
        console.log(state)

        if(state){
            document.getElementById("root").style.background = "red";
        }else{
            document.getElementById("root").style.background = "green";
        }
    }
    
  return (
    <>
        <h2>{state.toString()}</h2>
        <h2>{title}</h2>
        <button className="btn" onClick={handleClick}>Change Title</button>
    </>
  )
}

export default ErrorExample

