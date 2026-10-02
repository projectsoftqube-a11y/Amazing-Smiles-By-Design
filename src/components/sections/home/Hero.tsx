import Link from "next/link";
import type { CSSProperties } from "react";
import { homeHero } from "@/content/pages/home";
import { images } from "@/content/images";
import { contactLinks, practice } from "@/content/site";
import { Accent, RiseWords } from "@/components/ui/Accent";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Ring } from "@/components/ui/Ring";
import styles from "./Hero.module.css";

export function Hero() {
  const leadWords = homeHero.title.lead.split(" ").length;

  return (
    <section className={styles.hero} aria-labelledby="home-title">
      <Ring className={styles.ring} strokeWidth={1.4} animate="css" />

      <div className={`container ${styles.grid}`}>
        <p className={`eyebrow ${styles.eyebrow}`}>
          {practice.name} · {practice.address.city}, {practice.address.region}
        </p>

        <h1 id="home-title" className={styles.title}>
          <RiseWords text={homeHero.title.lead} />{" "}
          <Accent smile>
            <RiseWords text={homeHero.title.accent} start={leadWords} />
          </Accent>
        </h1>

        <div className={styles.body}>
          <p className={`lead ${styles.intro}`}>{homeHero.intro}</p>

          <div className={styles.actions}>
            <div className={styles.buttons}>
              <Button href={contactLinks.call} icon="phone" track="call_click">
                Call or Text {practice.phone.display}
              </Button>
              <Button href={homeHero.secondaryCta.href} variant="secondary" icon="calendar" track="appointment_click">
                {homeHero.secondaryCta.label}
              </Button>
            </div>
            <p className={styles.minor}>
              <a href={contactLinks.text} className={styles.minorLink} data-track="text_click">
                <Icon name="message" size={18} />
                Send a text
              </a>
              <Link href={homeHero.newPatientLink.href} className={styles.minorLink}>
                <Icon name="arrowRight" size={18} />
                {homeHero.newPatientLink.label}
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className={`container ${styles.mediaWrap}`}>
        <MediaFrame
          image={images.homeHero}
          ratio="var(--hero-ratio)"
          sizes="(min-width: 1536px) 1440px, (min-width: 960px) calc(100vw - 96px), 90vw"
          priority
          reveal="load"
          className={styles.media}
        />
      </div>

      <div className="container">
        <ul role="list" className={styles.facts} aria-label="Practice at a glance">
          {homeHero.facts.map((fact, index) => (
            <li key={fact.text} className={styles.fact} style={{ "--n": index } as CSSProperties}>
              <Icon name={fact.icon as IconName} size={22} className={styles.factIcon} />
              <span>{fact.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
