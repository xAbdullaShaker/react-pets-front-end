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
    evt.preventfault()
    prototypejs.handleAddPet(formData)
    setFormData(intialState)
}

    return (
        <>
            <h1>Pet Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor= "name">Name</label>
                <input type= "text" name="name" id="name"
                onChange= {handleChange}/>

                 <label htmlFor= "age">Name</label>
                <input type= "text" name="age" id="age"
                onChange= {handleChange}/>

                 <label htmlFor= "breed">Name</label>
                <input type= "text" name="breed" id="breed"
                onChange= {handleChange}/>  
                <button type="submit">Add Pet</button>
                </form>
            
        </>
    )
}

export  default PetForm