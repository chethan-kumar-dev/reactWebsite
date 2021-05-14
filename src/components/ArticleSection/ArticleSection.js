import React,{useEffect,useRef} from 'react'
import image from '../../images/deal.svg';
import lottie from 'lottie-web'
import { ArticleContainer,BusinessLogo,ArticleSec,ImageDisplay } from './ArticleSectionStyling'
import { DiRequirejs } from 'react-icons/di';
import jsonFile from '../../json/39387-business-team.json';
const ArticleSection = () => {
   const container=useRef(null);
useEffect(()=>{
lottie.loadAnimation({
   container:container.current,
   renderer:'svg',
   loop:true,
   autoplay:true,
   animationData:jsonFile
})
},[])
   return (
      <>
         <ArticleContainer>
            <ArticleSec>
               <h1>MOTIVATION IN BUSINESS FIELD</h1>
            Many people believe starting a business is a mysterious process. They know they want to start a business, but they don't know the first steps to take. In this chapter, you're going to find out how to get an idea for a business--how you figure out exactly what it is you want to do and then how to take action on it.
            
But before we get started, <br></br>let's clear up one point: People always wonder if this is a good time to start their business idea. The fact is, there's really never a bad time to launch a business.<br></br> It's obvious why it's smart to launch in strong economic times. People have money and are looking for ways to spend it. But launching in tough or uncertain economic times can be just as smart. If you do your homework, presumably there's a need for the business you're starting. Because many people are reluctant to launch in tough times, your new business has a better chance of getting noticed. And, depending on your idea, in a down economy there is often equipment (or even entire businesses!) for sale at bargain prices.

Estimates vary,<br></br> but generally more than 600,000 businesses are started each year in the United States. Yet for every American who actually starts a business, there are likely millions more who begin each year saying "OK, this is the year I am going to start a business," and then don't.
            </ArticleSec>
            <BusinessLogo ref={container}>

            </BusinessLogo>
         </ArticleContainer>
      </>
   )
}

export default ArticleSection
