import {useState} from 'react'

const ErrorExample = () =>{
    const [title, setTitle] = useState(0)

    const handleClick = () => {
        setTitle(title + 1)
        console.log(title)
    }
  return (
    <>
        <h2>{title}</h2>
        <button className="btn" onClick={handleClick}>Change Title</button>
    </>
  )
}

export default ErrorExample