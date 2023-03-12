import React from 'react'
import './ServicesStyles.css'
import vet from '../assets/vet.png'
import vaccine from '../assets/vaccine.png'
import kennel from '../assets/kennel.png'
import walk from '../assets/walk.png'
import groom from '../assets/grooming.png'
import leash from '../assets/leash.png'

const Services = () => {
  return (
    <div>
        <section className="services" id="services">
            <h2 className="heading"> Our Services </h2>
            <div className="services-grid">
                
                <div className="service">
                    <div className="service-image">
                        <img src={vet} alt='vet icon'></img>
                    </div>
                    <div className="service-details">
                        <span>Service Name</span>
                        <p>Allow us to provide this luxury service to your canine.
                            You know he needs it. We know he needs it.
                            Give us your money so we'll both be happy. We'll be happier than
                            you though
                        </p>
                    </div>
                </div>

                <div className="service">
                    <div className="service-image">
                        <img src={vaccine} alt='vaccine icon'></img>
                    </div>
                    <div className="service-details">
                        <span>Service Name</span>
                        <p>Allow us to provide this luxury service to your canine.
                            You know he needs it. We know he needs it.
                            Give us your money so we'll both be happy. We'll be happier than
                            you though
                        </p>
                    </div>
                </div>

                <div className="service">
                    <div className="service-image">
                        <img src={kennel} alt='kennel icon'></img>
                    </div>
                    <div className="service-details">
                        <span>Service Name</span>
                        <p>Allow us to provide this luxury service to your canine.
                            You know he needs it. We know he needs it.
                            Give us your money so we'll both be happy. We'll be happier than
                            you though
                        </p>
                    </div>
                </div>

                <div className="service">
                    <div className="service-image">
                        <img src={walk} alt='Dog walk icon'></img>
                    </div>
                    <div className="service-details">
                        <span>Service Name</span>
                        <p>Allow us to provide this luxury service to your canine.
                            You know he needs it. We know he needs it.
                            Give us your money so we'll both be happy. We'll be happier than
                            you though
                        </p>
                    </div>
                </div>

                <div className="service">
                    <div className="service-image">
                        <img src={groom} alt='Grooming icon'></img>
                    </div>
                    <div className="service-details">
                        <span>Service Name</span>
                        <p>Allow us to provide this luxury service to your canine.
                            You know he needs it. We know he needs it.
                            Give us your money so we'll both be happy. We'll be happier than
                            you though
                        </p>
                    </div>
                </div>

                <div className="service">
                    <div className="service-image">
                        <img src={leash} alt='Accesories icon'></img>
                    </div>
                    <div className="service-details">
                        <span>Service Name</span>
                        <p>Allow us to provide this luxury service to your canine.
                            You know he needs it. We know he needs it.
                            Give us your money so we'll both be happy. We'll be happier than
                            you though
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Services
