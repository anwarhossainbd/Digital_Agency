import React from 'react'
import "../../styles/hero.css"
import heroDarkImg from "../../images/hero-img.png"

const Hero = () => {
  return (
     <section className="hero__section">
       <div className="container">
          <div className="hero__wrapper">
             <div className="hero__content">
                <div>
                    <h2>We are Creating Perfect </h2>
                    <h2>Digital Products To </h2>
                    <h2 className="highlight"> Promote Your Brand </h2>
                </div>

                <p className="description">
                
                Digital agencies are strategic and creative marketing agencies focused on user
                experience.

                </p>

                <div className="hero__btns">
                    <button className="primary__btn">Get Started Now</button>
                    <button className="secondary__btn">Discover More</button>

                </div>

             </div>


             <div className="hero__img">
                <img src={heroDarkImg} alt="hero-img" />
             </div>





          </div>
       </div>
     </section>
  )
}

export default Hero