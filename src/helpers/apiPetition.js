import axios from "axios"

export const apiPetition = async(URL) => {  
     
    try {
        const petition = await axios.get(URL);
        return petition;
        
    } catch (error) {
        console.error('este es '+ error)
    }
}

