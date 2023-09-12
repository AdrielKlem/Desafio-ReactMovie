import { BrowserRouter } from 'react-router-dom'

import { Home } from '../pages/Home'
import { AuthRoutes } from './auth.routes'

export function Routes() {
    return(
        <BrowserRouter>
        <Home />
        </BrowserRouter>
    )
}