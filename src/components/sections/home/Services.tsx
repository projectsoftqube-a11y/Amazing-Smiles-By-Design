import { homeServices } from "@/content/pages/home";
import { ServicesTabs } from "./ServicesTabs";
import styles from "./Services.module.css";

export function Services() {
  return (
    <section className={styles.section} aria-labelledby="services-title">
      <div className="container">
        <div className={styles.head}>
          <p className="eyebrow" data-reveal="">
            Our services
          </p>
          <h2 id="services-title" data-reveal="">
            {homeServices.title}
          </h2>
          <p className={styles.intro} data-reveal="">
            {homeServices.intro}
          </p>
        </div>

        <ServicesTabs />
      </div>
    </section>
  );
}
