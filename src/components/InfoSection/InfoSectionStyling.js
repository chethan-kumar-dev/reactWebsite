import styled from 'styled-components';

export const InfoSec=styled.div`
background-color:#101522;
display:flex;
flex-direction:row;
padding-top:70px;
flex-wrap:wrap;
padding-bottom:100px;
@media screen and (max-width:370px){
   overflow-y:hidden;
}
`
export const InfoContainer=styled.div`
display:flex;
flex-direction:column;
padding-top:100px;
flex-grow:1;
position:relative;
z-index:0;
background-color:#101522;
margin-left:5%;
width:300px;

`

export const TopLineHeading=styled.p`
color:white;

`
export const MainHeading=styled.h1`
color:white;
width:350px;
`
export const Button=styled.button`
color:white;
border-radius:10px;
padding:6px;
width:150px;
border:none;
background-color:#0000cc;
font-weight:bolder;
height:45px;

`
export const SubHeading=styled.p`
color:white;

`

export const ImageSection=styled.div`
padding-top:100px;
flex-grow:1;
background-color:#101522;
width:300px;
text-align:center;
`
export const ImageFile=styled.img`
width:400px;
@media screen and (max-width:960px){
   width:300px;
   height:200px;
}

`