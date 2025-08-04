import { useEffect, useState } from "react";
import * as petservice from './services/petService'
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
    // await petService.create()
    console.log(formData)
  }

  return (
    <>
      <PetList pets={pets} handleSelect={handleSelect} />
      <hr />
      <PetForm handleAddPet={handleAddPet} />
      <hr />
      <PetDetail selected={selected} />
    </>
  )
}

export default App