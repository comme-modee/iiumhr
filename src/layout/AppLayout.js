import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../component/Header';
import Footer from '../component/Footer';
import Contact from '../component/Contact';
import Map from '../component/Map';

const AppLayout = ({ children }) => {
    const location = useLocation();

    const isMainPath = location.pathname === '/';
    const isBusinessPath = location.pathname.includes('business');
    const isEmployeePath = location.pathname.includes('employee');

    const contactType = isBusinessPath ? 'business' : isEmployeePath ? 'employee' : '';

    return (
        <React.Fragment>
            <Header type={isMainPath && 'main'} />

            {children}

            {!isMainPath &&
                <>
                    <Contact type={contactType} />
                    <Map />
                </>
            }
            <Footer type={isMainPath && 'main'} />
        </React.Fragment>
    )
}

export default AppLayout