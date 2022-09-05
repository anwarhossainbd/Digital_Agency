import React from 'react'
import "../../styles/about.css"

const chooseData =[

    {
        icon:'ri-wifi-line',
        title:'First working process',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
    },


    {
        icon:'ri-wifi-line',
        title:'First working process',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
    },

    {
        icon:'ri-wifi-line',
        title:'First working process',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
    },




]

const About = () => {
  return (
   <section id="about">
      <div className="container">
        <div className="about__wrapper">
           <div className="about__content">
              <h6 className="subtitle"> Why choose us</h6>
              <h2 className="highlight">financial challenges</h2>
              <p className="description about__content-desc">
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
              </p>

              <div className="choose__us-item">
                <span className="choose__us-icon">
                   <i class="ri-wifi-line"></i>
                </span>

                <div>
                    <h4 className="choose__us-title">First working process</h4>
                    <p className="description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,

                    </p>
                </div>
              
              </div>


           </div>

           <div className="about__img"></div>

        </div>
      </div>
   </section>
  )
}

export default About