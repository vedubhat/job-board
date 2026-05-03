import { useState } from "react"
import LoadContext from "../context/loadContext"

export const LoadProvider = ({children}) => {
    const [loadCount, setLoadCount] = useState(9)
    return (
        <LoadContext.Provider value = {{loadCount,setLoadCount}}>
            {children}
        </LoadContext.Provider>
    )
}