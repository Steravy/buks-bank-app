import React from 'react';
import { feedback } from '../constants/staticTexts';
import styles from '../styleConstants';

const Testimonials = () => {

  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`} >
      {/* TODO */}

      <div className={`w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]`} >
        <h1 className={`${styles.heading2}`} >
          What are people <br className={` sm:block hidden`} /> saying about us
        </h1>

        <div className={`w-full md:mt-0 mt-6`} >
          <p className={`${styles.paragraph} text-left max-w-[450px]`} >
            Et ut commodo pariatur occaecat non occaecat velit laborum Lorem nisi eu exercitation consectetur. 
            
          </p>

        </div>

      </div>

    </section>
  )
}

export default Testimonials;