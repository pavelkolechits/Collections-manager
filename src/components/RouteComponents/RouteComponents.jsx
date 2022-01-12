import {HomePage} from '../Pages/HomePge/HomePage'

import { RegistrationModal } from '../ModalWindows/Registration';
import {LoginModal} from '../ModalWindows/LoginModal'

import { Router, BrowserRouter, Route } from "react-router-dom";
import { useRoutes } from 'react-router-dom';


export const RouteComponents = () => {
    const routes = useRoutes([
        {path: '/registration', element: <RegistrationModal/>},
        {path: '/', element: <></>},
        {path: '/login' , element: <LoginModal/>}
    ])
    return routes
}


