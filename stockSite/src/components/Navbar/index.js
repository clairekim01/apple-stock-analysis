import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';
import appleStock from './appleStockLogo.png';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
        
		<NavMenu>
        <NavLink to='/' activeStyle>
        <img src ={appleStock} height = "52" width = "48" alt = "Apple"/> 
        <NavLink to='/' activeStyle>appleStock</NavLink>
		</NavLink>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/sources' activeStyle>
			Sources
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
        {/* 
		<NavBtn>
		<NavBtnLink to='/signin'>ignore</NavBtnLink>
		</NavBtn> */}
	</Nav>
	</>
);
};

export default Navbar;
