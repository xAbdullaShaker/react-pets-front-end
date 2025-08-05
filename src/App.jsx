import { useEffect, useState } from "react";
import * as petService from './services/petService'
import PetDetail from "./components/PetDetail/PetDetail";
import PetList from "./components/PetList/PetList";
import PetForm from "./components/PetForm/PetForm"

const App = () => {
  const [pets, setPets] = useState([])
  const [selected, setSelected] = useState(null)
  
  useEffect(() => {
    const fetchPets = async() => {
      try {
        const fetchedPets = await petService.index()
        setPets(fetchedPets)
      } catch (err) {
        console.log(err)
      }
    }
    fetchPets()
  }, [])

  const handleSelect = (pet) => {
    setSelected(pet)
  }

  const handleAddPet = async (formData) => {
   const newPet = await petService.create(formData)
   setPets([newPet, ...pets])
    // console.log(formData)
  }
  
  const handleUpdatePet = async (formData, petId) => {
    const updatedPet = await petService.update(formData, petId)
    console.log(updatedPet)
  }

const handleDeletePet = async (petId) => {
  try {
    await petService.deletePet(petId)
    setPets(pets.filter((pet) => pet._id !== petId))
    setSelected(null)
  } catch (err) {
    console.log("Error deleting pet:", err)
  }
}

  return (
    <>
      <PetList pets={pets} handleSelect={handleSelect} />
      <hr />
      <PetForm selected={selected} 
        handleAddPet={handleAddPet} 
        handleUpdatePet={handleUpdatePet}
        setSelected={setSelected} />
      <hr />
      <PetDetail selected={selected} 
        handleDeletePet={handleDeletePet} />
    </>
  )
}

export default App