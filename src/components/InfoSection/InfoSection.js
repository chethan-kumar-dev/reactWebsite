import React from 'react'
import image from '../../images/svg-1.svg'
import { InfoSec,InfoContainer,TopLineHeading,MainHeading,SubHeading,Button,ImageSection,ImageFile } from './InfoSectionStyling';

function InfoSection () {
   return (
      <>
         <InfoSec>
            <InfoContainer>
               <TopLineHeading>
                  Business Development
               </TopLineHeading>
               <MainHeading>
                  WE HELP BUSINESSES TO GROW IN DIFFERENT HEIGHTS.
               </MainHeading>
               <SubHeading>
                  We know what are the main secrets of achievin in life as an enterprenure. Join us and acquire the knowledge.
               </SubHeading>
               <Button>GET STARTED</Button>
            </InfoContainer>
            <ImageSection>
               <ImageFile src={image}>

               </ImageFile>
            </ImageSection>
         </InfoSec>
      </>
   )
}
export default InfoSection;
