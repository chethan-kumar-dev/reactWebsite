import React,{useState} from 'react';
import { NavbarSection } from './NavbarStyling';
import {NavLogo,NavLogoSubTitle,NavSub,HamburgerMenu,NavMenu,NavItem,NavLink,Button} from './NavbarStyling';
import {FaBars,FaTimes} from 'react-icons/fa';
function Navbar(){
   var [click,updateClickStatus]=useState(false);
   function handleClickstatus(){
      updateClickStatus(!click);
   }
   return(
      <div>
         <NavbarSection>
            <NavLogoSubTitle>
               <NavLogo></NavLogo>
               <NavSub>INCREDIBLE</NavSub>
            </NavLogoSubTitle>
            <NavMenu onClick={handleClickstatus} click={click}>
               <NavItem>
                  <NavLink to='/' >
                     Home
                  </NavLink>
               </NavItem>
               <NavItem >
                  <NavLink to='/desc'>
                     Business Desc
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink to='/owner'>
                     Owner
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink to='/article'>
                     Article
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink to='pricing'>
                     Pricing
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink to='/Contact'>
                     Contact
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink>
                     <Button>SIGN UP</Button>
                  </NavLink>
               </NavItem>
            </NavMenu>
            <HamburgerMenu onClick={handleClickstatus}>
               {click?<FaTimes></FaTimes>:<FaBars></FaBars>}
            </HamburgerMenu>
           
         </NavbarSection>
      </div>
   )
}
export default Navbar;