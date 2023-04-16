import React from 'react';
import styles from '../styleConstants';
import Button from './Button';


const CTA = () => {
  return (
    <secction className={`${styles.padding} ${styles.flexCenter} ${styles.marginY} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`} >
      <div className={`flex-1 flex flex-col`} >
        <h2 className={`${styles.heading2}`} >
          Let`s try our service now!
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`} >
          Cupidatat velit voluptate irure sit nisi et pariatur voluptate minim ipsum aliquip.
          Mollit aute irure elit eu laboris.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`} >
        <Button styles={styles} />
      </div>
    </secction>
  )
}

export default CTA