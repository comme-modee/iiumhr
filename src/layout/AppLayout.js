import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../component/Header';
import Footer from '../component/Footer';
import Contact from '../component/Contact';
import Map from '../component/Map';

const AppLayout = ({ children }) => {
    const location = useLocation();
    const [isTablet, setIsTablet] = useState(window.innerWidth <= 768);

    const isMainPath = location.pathname === '/';
    const isBusinessPath = location.pathname.includes('business');
    const isEmployeePath = location.pathname.includes('employee');

    const contactType = isBusinessPath ? 'business' : isEmployeePath ? 'employee' : '';


    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            setIsTablet(true)
        } else {
            setIsTablet(false)
        }
    })
    useEffect(() => {
        if (isMainPath) {
            document.body.style.marginTop = '0px';
        } else {
            if (isTablet) {
                document.body.style.marginTop = '60px';
            } else {
                document.body.style.marginTop = '90px';
            }
        }
    }, [isMainPath, isTablet])

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