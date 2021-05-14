import React from 'react'
import image from '../../images/svg-2.svg'
import { InfoSec,InfoContainer,TopLineHeading,MainHeading,SubHeading,Heading,QualitiesList,QualitiesPoint,ImageSection,ImageFile } from './ProfileStyling';

function InfoSection () {
   return (
      <>
         <InfoSec>
            <InfoContainer>
               <MainHeading>
                  We reveal all the secrets of a successful enterpreneurs.
               </MainHeading>
               <SubHeading>
                  We know what are the main secrets of achievin in life as an enterpreneur. Join us and acquire the knowledge.
               </SubHeading>
               <Heading>Some of the good qualities</Heading>
               <QualitiesList>
                  <QualitiesPoint>
                     Taking risks
                  </QualitiesPoint>
                  <QualitiesPoint>
                     Leadership skills
                  </QualitiesPoint>
                  <QualitiesPoint>
                     Take initiative
                  </QualitiesPoint>
                  <QualitiesPoint>
                     Work on your communication skills
                  </QualitiesPoint>
               </QualitiesList>
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
