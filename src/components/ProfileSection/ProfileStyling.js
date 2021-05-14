import styled from 'styled-components';

export const InfoSec=styled.div`
width:100%;
background-color:white;
display:flex;
flex-direction:row;
flex-wrap:wrap;
color:black;
padding-bottom:150px;
`
export const InfoContainer=styled.div`
display:flex;
flex-direction:column;
padding-top:100px;
flex-grow:1;
position:relative;
width:300px;
z-index:0;
background-color:white;
margin-left:5%;
color:black;

`

export const TopLineHeading=styled.p`
color:black;

`
export const MainHeading=styled.h1`
color:black;
`
export const Button=styled.button`
color:white;
border-radius:10px;
padding:6px;
width:150px;
border:none;
background-color:#0000cc;
font-weight:bolder;
`
export const SubHeading=styled.p`
color:black;

`

export const ImageSection=styled.div`
padding-top:100px;
flex-grow:1;
background-color:white;
width:300px;
text-align:center;
@media screen and (max-width:690px){
   padding-top:0px;
}
`
export const ImageFile=styled.img`
max-width:100%;
@media screen and (max-width:960px){
   width:300px;
}

`
export const QualitiesList=styled.ul`
list-style:disc;

`
export const QualitiesPoint=styled.li`

`
export const Heading=styled.h2`

`