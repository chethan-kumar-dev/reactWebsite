import React from 'react'
import InfoSection  from '../components/InfoSection/InfoSection';
import ProfileSection from '../components/ProfileSection/ProfileSection'
import Footer from '../components/Footer/Footer'
import Owner from '../components/Owner/Owner';
import Pricing from '../components/Pricing/Pricing'
import ArticleSection  from '../components/ArticleSection/ArticleSection';
const HomePage = () => {
   return (
      <div>
         <InfoSection></InfoSection>
         <ProfileSection></ProfileSection>
         <Owner></Owner>
         <Pricing></Pricing>
         <ArticleSection></ArticleSection>
         <Footer></Footer>
      </div>
   )
}

export default HomePage
