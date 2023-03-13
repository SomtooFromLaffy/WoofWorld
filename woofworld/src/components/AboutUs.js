import React from 'react'
import './AboutUsStyles.css'
import vision from '../assets/images/miss.jpg'
import mission from '../assets/images/his2.jpg'
import history from '../assets/images/vis.jpg'


const AboutUs = () => {
  return (
    <div>
        <section className="About" id="About">
            <h2 className="heading"> About Us </h2>
            <div className="mission-statements">
                <div className="mission-text">
                    <h2>Our History</h2>
                    <p>We began in 5th century CE when we first domesticated dogs.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Molestiae nisi nemo debitis assumenda saepe reiciendis nobis 
                    cumque mollitia et veniam quis eos ullam aperiam, quia magnam 
                    laboriosam ea quidem? Voluptates dolore quod ipsam ea quaerat 
                    voluptate aliquam veritatis explicabo. Accusantium laborum sunt 
                    repellendus fugit labore?
                    </p>
                    <div className='img-contain'>
                        <img src={history} alt=''></img>
                    </div>
                </div>
            
                <div className="mission-text">
                    <h2>Our Mission</h2>
                    <p>We began in 5th century CE when we first domesticated dogs.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Molestiae nisi nemo debitis assumenda saepe reiciendis nobis 
                    cumque mollitia et veniam quis eos ullam aperiam, quia magnam 
                    laboriosam ea quidem? Voluptates dolore quod ipsam ea quaerat 
                    voluptate aliquam veritatis explicabo. Accusantium laborum sunt 
                    repellendus fugit labore?
                    </p>
                    <div className='img-contain'>
                        <img src={mission} alt=''></img>
                    </div>
                </div>
            
                <div className="mission-text">
                    <h2>Our Vision</h2>
                    <p>We began in 5th century CE when we first domesticated dogs.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Molestiae nisi nemo debitis assumenda saepe reiciendis nobis 
                    cumque mollitia et veniam quis eos ullam aperiam, quia magnam 
                    laboriosam ea quidem? Voluptates dolore quod ipsam ea quaerat 
                    voluptate aliquam veritatis explicabo. Accusantium laborum sunt 
                    repellendus fugit labore?
                    </p>
                    <div className='img-contain'>
                        <img src={vision} alt=''></img>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutUs
