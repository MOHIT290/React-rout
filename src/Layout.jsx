import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import UsercontextProvider from './components/Context/UsercontextProvider'


function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>

    )
}

export default Layout



