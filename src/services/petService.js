const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`

const index = async () => {
    try {
        const res = await fetch(BASE_URL)
        return res.json()
    } catch(err) {
        console.log(err)
    }
}

const create = async (formData) => {
    console.log(formData)
    try {
         const res = await fetch(BASE_URL, {
        // creates pet
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(formData)
         })
       
        
    } catch { (err) 
        console.log(err)

    }
}

const update = async (formData, petId) => {
    try {
        const res = await fetch(`${BASE_URL}/${petId}`, {
            //updates 
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        return res.json()
    } catch (err) {
        console.log(err)
    }
}

const deletePet = async (petId) => {
    try {
        const res = await fetch(`${BASE_URL}/${petId}`, {
            method: 'DELETE',
        })
        return res.json()
    } catch (err) {
        console.log(err)
    }
}


export {
    index,
    create,
    update,
    deletePet,
}