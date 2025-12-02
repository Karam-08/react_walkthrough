const SinglePerson = ({id, first_name, removePerson}) =>{
    return (
        <div className="item">
            <h4>{first_name}</h4>
            <button onClick={() => removePerson(id)}>Remove</button>
        </div>
    )
}