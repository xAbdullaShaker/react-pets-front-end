const PetDetail = (props) => {
    if (props.selected) {
        <>
        <h1>{props.selected.name}</h1>
        <h2>breed: {props.selected.breed}</h2>
        <h2>
            
        </h2>
        </>
    }
    return (
        <h1>Pet Detail</h1>
    )
}

export default PetDetail