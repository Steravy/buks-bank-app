import React from "react";
import styles from "./styleConstants";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <header className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>NavBar</div>
      </header>

      <section className={`bg-primary ${styles.flexStart}`}>
        <section className={`${styles.boxWidth}`}>Hero</section>
      </section>
      <section className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <section className={`${styles.boxWidth}`}>
          Stats
          Business
          Billing
          CardDeal
          Testimonials
          Clients
          CTA
        </section>
      </section>
      <footer>
        
      </footer>
    </div>
  );
};

export default App;
