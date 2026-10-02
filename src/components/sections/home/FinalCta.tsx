import Image from "next/image";
import { homeFinalCta, homeHero } from "@/content/pages/home";
import { images } from "@/content/images";
import { contactLinks, practice } from "@/content/site";
import { Accent } from "@/components/ui/Accent";
import { Button } from "@/components/ui/Button";
import styles from "./FinalCta.module.css";

export function FinalCta() {
  const photo = images.homeHero;

  return (
    <section className={styles.section} aria-labelledby="book-title">
      <div className="container">
        <div className={styles.banner}>
          <div className={styles.media} data-parallax="">
            {photo.src ? (
              <Image
                src={photo.src}
                alt=""
                fill
                sizes="(min-width: 1536px) 1440px, 100vw"
                className={styles.image}
                style={{ objectPosition: "50% 35%" }}
              />
            ) : null}
          </div>
          <span className={styles.shade} aria-hidden="true" />

          <div className={styles.inner}>
            <div className={styles.copy}>
              <h2 id="book-title" className={styles.title} data-reveal="">
                {homeFinalCta.title.lead} <Accent>{homeFinalCta.title.accent}</Accent>
              </h2>
              <p className={styles.body} data-reveal="">
                {homeFinalCta.body}
              </p>
            </div>
            <div className={styles.actions} data-reveal="">
              <Button href={contactLinks.call} variant="inverse" icon="phone" track="call_click">
                Call or Text {practice.phone.display}
              </Button>
              <Button href={homeHero.secondaryCta.href} variant="inverse-outline" icon="calendar" track="appointment_click">
                {homeHero.secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
