
import { NavBar } from "../../NavBar/NavBar"
import {useDispatch} from 'react-redux'
import { ACTIONS } from "../../../redux/constants"
import { useEffect } from "react"



export const HomePage = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch({type: ACTIONS.GET_USERS})
    },[])

    return(
        <NavBar/>
    )
}