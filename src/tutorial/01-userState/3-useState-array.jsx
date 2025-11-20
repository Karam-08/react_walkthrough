import {useState} from 'react'
import {data} from '../../data'

const UseStateArray = () =>{
    const [people, setPeople] = useState(data)

    const removeItem = (id) =>{
        let newPeople = people.filter((person) => person.id !== id)
        setPeople(newPeople)
    }
    return (
        <>
            {people.map((person) =>{
                const {id, first_name} = person
                return (
                    <div key={id} className="item">
                        <h4>{first_name}</h4>
                        <button className="btn" onClick={()=> removeItem(id)}>Remove {first_name}?</button>
                    </div>
                )
            })}
                
            <button className="btn" onClick={()=> setPeople([])}>
                Clear Items    
            </button>
        </>
    )
}

export default UseStateArray