import { getImageProps } from "next/image";
import type { CSSProperties } from "react";
import { homeHero } from "@/content/pages/home";
import { images } from "@/content/images";
import { serviceHubs } from "@/content/services";
import { contactLinks, practice } from "@/content/site";
import { Accent, RiseWords } from "@/components/ui/Accent";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import styles from "./Hero.module.css";

/**
 * Full-bleed photo hero, light treatment (the full intro paragraph is the lead of the
 * Welcome section that follows): the banner's clear wall on the left
 * carries the copy under a soft porcelain fade. Phones get a portrait crop above
 * the copy instead. All entrance motion is CSS (it runs at first paint and never
 * delays the LCP): the photo settles from a slow zoom, the headline rises word by
 * word, the smile line draws under the accent, then the copy and facts card fade up.
 */
export function Hero() {
  const leadWords = homeHero.title.lead.split(" ").length;
  const banner = images.homeBanner;
  const marquee = serviceHubs.flatMap((hub) => hub.services.map((service) => service.name));

  // Art direction: the wide banner from 768px up, a 5:6 portrait crop of the same photo on phones.
  // The hero is often taller than the banner's 2.36:1 ratio, so the photo is scaled up
  // to cover it; the wide `sizes` asks for enough pixels to stay sharp when that happens.
  const wideSizes = "(min-width: 1600px) 110vw, (min-width: 768px) 150vw, 100vw";
  const common = { alt: banner.alt, sizes: "100vw", quality: 85 } as const;
  const {
    props: { srcSet: wideSrcSet },
  } = getImageProps({ ...common, sizes: wideSizes, src: banner.src });
  const {
    props: { srcSet: phoneSrcSet, ...imgProps },
  } = getImageProps({ ...common, src: banner.srcMobile });

  return (
    <>
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.media}>
          <picture>
            <source media="(min-width: 768px)" srcSet={wideSrcSet} sizes={wideSizes} />
            {/* eslint-disable-next-line jsx-a11y/alt-text -- alt comes from imgProps */}
            <img
              {...imgProps}
              srcSet={phoneSrcSet}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className={styles.image}
              style={{ objectPosition: banner.position }}
            />
          </picture>
        </div>
        <span className={styles.shade} aria-hidden="true" />

        <div className={`container ${styles.content}`}>
          <p className={`eyebrow ${styles.eyebrow}`}>
            {practice.name} · {practice.address.city}, {practice.address.region}
          </p>

          <h1 id="home-title" className={styles.title}>
            <RiseWords text={homeHero.title.lead} />{" "}
            <Accent smile>
              <RiseWords text={homeHero.title.accent} start={leadWords} />
            </Accent>
          </h1>

          <p className={styles.intro}>{homeHero.summary}</p>

          <div className={styles.actions}>
            <Button href={contactLinks.call} icon="phone" track="call_click">
              Call or Text {practice.phone.display}
            </Button>
            <Button href={homeHero.secondaryCta.href} variant="secondary" icon="calendar" track="appointment_click">
              {homeHero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </section>

      {/* Facts card floats over the hero's lower edge */}
      <div className={`container ${styles.factsWrap}`}>
        <ul role="list" className={styles.facts} aria-label="Practice at a glance">
          {homeHero.facts.map((fact, index) => (
            <li key={fact.text} className={styles.fact} style={{ "--n": index } as CSSProperties}>
              <span className={styles.factIcon}>
                <Icon name={fact.icon as IconName} size={20} />
              </span>
              <span>{fact.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Treatment names drifting by; decorative (each is linked in the services section) */}
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[0, 1].map((copy) => (
            <ul role="list" key={copy} className={styles.marqueeList}>
              {marquee.map((name) => (
                <li key={`${copy}-${name}`}>{name}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
