import React from 'react'
import image from '../../images/profile.jpg'
import { OwnerSection,OwnerImage,DisplayImage,ExperienceDesc,CoFounderDescription,CoFounderName,OtherInfo,FaFirefox,Button,VisitSite } from './OwnerStyling'
const Owner = () => {
   return (
      <>
      <OwnerSection>
         <OwnerImage>
            <DisplayImage src={image} >

            </DisplayImage>
         </OwnerImage>
         <CoFounderDescription>
            <CoFounderName>
               DIANA ANGELINE
            </CoFounderName>
            <ExperienceDesc>
                  I have 15 years of experience in Business Development and have helped 1000+ business men to achieve their goals. I have also worked as an accountant for some years.
            </ExperienceDesc>
            <OtherInfo>
               If you want to be one of the best enterpreneurs in the world then you're at the right place. Purchase our membership plan for the online learnings.
            </OtherInfo>
            <VisitSite>
               <p>For more info</p>
               <Button><FaFirefox/> <span>   </span>VISIT</Button>
            </VisitSite>
         </CoFounderDescription>
      </OwnerSection>
         
      </>
   )
}

export default Owner
