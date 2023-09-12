import { BrowserRouter } from 'react-router-dom'

import { Header } from '../components/Header'
import { AuthRoutes } from './auth.routes'

export function Routes() {
    return(
        <BrowserRouter>
        <Header />
        </BrowserRouter>
    )
}