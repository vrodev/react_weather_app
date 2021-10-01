import React from 'react';
import { Nav, NavLink, NavMenu } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to='/home'>
                        Home
                    </NavLink>
                    <NavLink to='/favorite_city'>
                        Favorite
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;