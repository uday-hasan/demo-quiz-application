import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import styles from './Navbar.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false)
    const { navbar_title, nav_container, navigation_style, active_link, not_active_link, res_nav_icon } = styles
    const navigation = (
        <div className={navigation_style}>
            <Link className={({ isActive }) => isActive ? active_link : not_active_link} to='/'>Home</Link>
            <Link className={({ isActive }) => isActive ? active_link : not_active_link} to='/quizes'>Quizes</Link>
            <Link className={({ isActive }) => isActive ? active_link : not_active_link} to='/contacts'>Contact</Link>
        </div>
    )
    const handleNavMenu = () => {
        setOpenNav(!openNav)
    }
    return (
        <nav>
            <div className={res_nav_icon}><GiHamburgerMenu size={25} onClick={handleNavMenu} /></div>
            <section className={nav_container} style={openNav ? { left: '0px' } : { left: '-500px' }} >
                <div>
                    <p className={navbar_title}>Demo Quiz Application</p>
                </div>
                <div>
                    {
                        navigation
                    }
                </div>
            </section>
        </nav>
    );
};

export default Navbar;