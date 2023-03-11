import React from 'react';
import styles from '../styleConstants';
import { discount, robot } from '../assets';

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex:col ${styles.paddingY}`} >
      <div className={`${styles.flexStart} flex-1 flex-col xl:px-0 sm:px-16 px-6`} >
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2' >
          <img src={discount} className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`} >
            <span className='text-white' >20%</span> Fiscount For {" "}
            <span className='text-white' >1 Month</span>  Account
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero