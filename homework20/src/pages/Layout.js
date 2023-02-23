import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';


const Layout = (props) => {
    
    return (
        <div>
            <nav className='main-nav'>
                <ul>
                    <li>
                        <NavLink to='/' className={(navData) => (navData.isActive ? 'active' : '')}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/blogs'>Blogs</NavLink>
                    </li>
                    <li>
                        <NavLink to='/photos' >Photos</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' >Contact</NavLink>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </div>
    )
};

export default Layout;
