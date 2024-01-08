import { useEffect, useState } from "react"
import { API_URL } from "../../../config/api"

const getGames = (platform:string, category:string, sortBy: string) => {

    const [result, setResult] = useState()
    
    console.log(platform, category, sortBy)
    useEffect(() => {
        fetch(`${API_URL}/games?platform=${platform}&category=${category}&sort-by=${sortBy}`,
            { method: 'GET' })
            .then((response) => response.json())
            .then((data) =>  setResult(data))
            .catch((err) => console.error(err))
    }, [platform, category, sortBy])
    
    return result;
}

export default getGames;