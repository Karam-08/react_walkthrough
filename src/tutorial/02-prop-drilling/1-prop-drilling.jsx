import {useState} from 'react'
import {data} from '../../data'
import List from './listTest'
import SinglePerson from './singlePerson'

const PropDrilling = () => {
    const [people, setPeople] = useState(data)

    // remove person function
    const removePerson = (id) =>{
        setPeople(() =>{
            return people.filter((person) => person.id !== id)
        })
    }
    return (
        <section>
            <h3>PropDrilling</h3>
            <List people = {people} removePerson={removePerson}/>
        </section>
    )
}

export default PropDrilling