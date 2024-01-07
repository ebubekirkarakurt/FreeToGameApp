import { useEffect, useState } from "react"
import { API_URL } from "../../../config/api"


const getGames = () => {

    const [result, setResult] = useState()

    useEffect(() => {
        fetch(API_URL, { method: 'GET' })
            .then((response) => response.json())
            .then((data) =>  setResult(data))
            .catch((err) => console.error(err))
    }, [])
    
    return result;
}

export default getGames;