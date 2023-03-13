import React from "react";
import styles, { layout } from "../styleConstants";
import Button from "./Button";

const Business = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the Business, <br className="sm:block hidden" /> we'll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by buy
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
      </div>
      <Button styles="mt-10" />
    </section>
  );
};

export default Business;
