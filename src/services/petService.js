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

export {
    index,
    create,
}