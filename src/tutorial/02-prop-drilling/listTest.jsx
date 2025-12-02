const List = ({people, removePerson}) =>{
    return (
        <>
        {people.map((person) =>{
            return(
                <SinglePerson 
                    key = {person.id} 
                    removePerson = {removePerson} 
                    {...person}
                />
            )
        })}
        </>
    )
}

export default List