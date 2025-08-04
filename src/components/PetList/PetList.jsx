const PetList = (props) => {

    return (
        <>
            <h1>Pet List</h1>
            <div>
            {props.pets.length ? (
            <ul>
                {props.pets.map((pet) => 
                <li key={pet._id}
                    style={{ cursor: 'pointer', color: "#646CFF" }}
                    onClick={() => props.handleSelect(pet)}
                >
                    {pet.name}
                </li>
                )}
            </ul>
            ) : (
                <h2>No Pets Yet</h2>
            )}
          
            </div>
        </>
    )
}

export default PetList