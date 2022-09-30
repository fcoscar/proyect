import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Navbar } from '../components/navigations/Navbar'
import { Footer } from '../components/navigations/Footer'
import { check_authenticated, refresh, getCurrenteUser } from '../redux/actions/auth'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const Layout = (props) => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(refresh())
        dispatch(check_authenticated())
        dispatch(getCurrenteUser())
    })
    
    
    return(
        <div>
            <Navbar />
            <ToastContainer autoClose={5000} />
            {props.children}
            <Footer />
        </div>

    )
}

export default Layout