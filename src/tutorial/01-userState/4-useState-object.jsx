import {useState} from 'react'

const UseStateObject = () =>{
    const [person, setPerson] = useState(
        {
            name: 'Carmen Winstead',
            age: 17,
            message: "Send this message to 15 people or you will die."
        }
    )
    const changeMessage = () =>{
        (person.message === "Send this message to 15 people or you will die.") ? setPerson({...person, message: "You died."}):setPerson({...person, message: "You survived!"})
    }
    return (
        <div>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
            <button className="btn" onClick={()=> changeMessage()}>Change Message</button>
        </div>
    )
}

export default UseStateObject