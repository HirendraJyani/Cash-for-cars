import React from 'react'
import './Section2.css'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


import Card from './Card';
function Section2() {
    return (
        <div className="section2">
            <div className="heading2">
               
            <ScrollAnimation animateIn="animate__slideInLeft"  animateOut="animate__slideOutRight">
            <h1>Why Aussie Express Car Removal ?</h1>
           </ScrollAnimation>
              
            </div>
            <ScrollAnimation animateIn="animate__zoomIn" animateOut="animate__zoomOut">
            <div className="four">
               
             <Card
             imgsrc="https://aussieexpresscarremoval.com.au/wp-content/uploads/2020/12/Cash-For-Used-Cars.jpg"
             head="Best Cash For Used Cars"
             para="We are a registered car junking service that accepts and buys junk and used cars and assures unbelievable cash and we have the same day car removal service. 
             We offer the best deals in the town for your junk."
             />
             <Card
             imgsrc="https://aussieexpresscarremoval.com.au/wp-content/uploads/2020/12/Scrap-Car-Recycling.jpg"
             head="Scrap Car Recycling"
             para="We offer a responsible car recycling service near me ensuring we reuse and recycle as much of the scrap car as possible. We use the latest method to remove any hazardous materials from the car safely."
             />
             <Card
             imgsrc="https://aussieexpresscarremoval.com.au/wp-content/uploads/2020/12/customer-love.jpg"
             head="Our Customers Love Us"
             para="We have thousands of happy customers. If you need help to scrap your car online, our Customer Services Team is just a call away! Call now and get rid of your junked car for instant cash.
             "
             />
              </div>
           </ScrollAnimation>
           
        </div>
    )
}

export default Section2;
