import styled from 'styled-components';
import {DiDojo} from 'react-icons/di';
import {Link} from 'react-router-dom'
export const NavbarSection=styled.div`
width:100%;
height:90px;
background-color:#101522;
top:0px;
position:fixed;
z-index:2;
@media screen and (max-width:600px){
   height:60px;
}
`

export const NavLogo=styled(DiDojo)`
top:0px;
font-size:40px;
color:white;
`

export const NavLogoSubTitle=styled.h3`
color:white;
display:flex;
flex-direction:row;
position:absolute;
top:0px;
left:5%;
background-color:#101522;
height:60px;
@media screen and (max-width:600px){
   height:40px;
   top:-10px;

}
`
export const NavSub=styled.h4`
color:white;
`
export const HamburgerMenu=styled.div`
display:none;
@media screen and (max-width:960px){
   display:block;
   position:absolute;
   right:0px;
   color:white;
   font-size:35px;
   margin:15px 15px 0px 0px;
}
`
export const NavMenu=styled.ul`

   display:block;
   position:absolute;
   right:0px;
   top:10px;
   @media screen and (max-width:960px){
   position:absolute;
   top:60px;
   width:100%;
   height:100vh;
   background-color:#101522;
   left:0px;
   left:${({click})=>(click?'0':'-100%')};
   padding-top:100px;
   transition:all 1s ease;
   padding-left:0px;
   text-align:center;
   z-index:999;
}
@media screen and (max-width:600px){
   top:40px;
}
`
export const NavItem=styled.li`
display:inline;
@media screen and (max-width:960px){
   width:100%;
   list-style-type:none;
   &:hover{
      border:none;
   }
}
`
export const NavLink=styled(Link)`
color:white;
list-style:none;
text-decoration:none;
margin:15px;
display:inline;
text-align:center;
@media screen and (max-width:960px){
   display:block;
   height:60px;
   background-color:transparent;
   &:hover{
      border:none;
   }
}
`
export const Button = styled.button`
background-color:#0000cc;
border:none;
border-radius:10px;
padding:6px;
color:white;
text-align:center;
height:40px;

@media screen and (max-width:960px){
background-color:#0000cc;
border:none;
border-radius:10px;
padding:6px;
color:white;
width:200px;
height:45px;

}
`
