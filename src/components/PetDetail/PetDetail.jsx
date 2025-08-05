//read only 

const PetDetail = (props) => {
    if (props.selected) {
        return (
        <>
            <h1>{props.selected.name}</h1>
            <h2>Breed: {props.selected.breed}</h2>
            <h2>
                Age: {props.selected.age}
            </h2>
            <button onClick={() => props.handleDeletePet(props.selected._id)}>
          Delete
        </button>
        </>
    )
    }
    return (
        <>
            <h2>NO DETAILS</h2>
        </>
    )
}

export default PetDetail