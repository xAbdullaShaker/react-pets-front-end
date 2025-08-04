const PetDetail = (props) => {
    if (props.selected) {
        return <>
                <h1>{props.selected.name}</h1>
                <h2>breed: {props.selected.breed}</h2>
              </>
    }
    
    return (
        <h1>Pet Detail</h1>
    )
}

export default PetDetail