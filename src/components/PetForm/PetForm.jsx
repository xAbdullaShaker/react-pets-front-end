import { prototypejs } from "globals"
import { useState } from "react"
 

const PetForm = (props) => {

    const initialState = {
        name: '', 
        age: '',
        breed: '',
    }

    const [formData, setFormData] = useState(initialState)

    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }

const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddPet(formData)
    setFormData(initialState)
}

    return (
        <>
            <h1>Pet Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor= "name">Name</label>
                <input type= "text" name="name" id="name" value={formData.name}
                onChange= {handleChange}/>

                 <label htmlFor= "age">Age</label>
                <input type= "text" name="age" id="age" value={formData.age}
                onChange= {handleChange}/>

                 <label htmlFor= "breed">Breed</label>
                <input type= "text" name="breed" id="breed" value={formData.breed}
                onChange= {handleChange}/>  
                <button type="submit">Add Pet</button>
                </form>
            
        </>
    )
}

export  default PetForm