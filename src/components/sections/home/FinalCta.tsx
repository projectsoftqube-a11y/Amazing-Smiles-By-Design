import Image from "next/image";
import type { ReactNode } from "react";
import Link from "@/components/ui/SiteLink";
import { homeFinalCta, homeHero } from "@/content/pages/home";
import { images, type SiteImage } from "@/content/images";
import { contactLinks, practice } from "@/content/site";
import { Accent } from "@/components/ui/Accent";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import styles from "./FinalCta.module.css";

type FinalCtaProps = {
  /** id of the H2 */
  id?: string;
  /** H2: plain lead plus an optional italic accent */
  title?: { lead: string; accent?: string };
  body?: string;
  /** Buttons; the call + appointment pair by default */
  actions?: ReactNode;
  /** Secondary text links under the buttons */
  links?: { label: string; href: string }[];
  photo?: SiteImage;
};

const defaultActions = (
  <>
    <Button href={contactLinks.call} variant="inverse" icon="phone" track="call_click">
      Call or Text {practice.phone.display}
    </Button>
    <Button href={homeHero.secondaryCta.href} variant="inverse-outline" icon="calendar" track="appointment_click">
      {homeHero.secondaryCta.label}
    </Button>
  </>
);

/** Closing photo banner. Home uses the defaults; inner pages pass their own copy. */
export function FinalCta({
  id = "book-title",
  title = homeFinalCta.title,
  body = homeFinalCta.body,
  actions = defaultActions,
  links,
  photo = images.homeHero,
}: FinalCtaProps) {

  return (
    <section className={styles.section} aria-labelledby={id}>
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
              <h2 id={id} className={styles.title} data-reveal="">
                {title.lead}
                {title.accent ? (
                  <>
                    {" "}
                    <Accent>{title.accent}</Accent>
                  </>
                ) : null}
              </h2>
              {body ? (
                <p className={styles.body} data-reveal="">
                  {body}
                </p>
              ) : null}
            </div>
            <div className={styles.side} data-reveal="">
              <div className={styles.actions}>{actions}</div>
              {links?.length ? (
                <ul role="list" className={styles.links}>
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>
                        {link.label}
                        <Icon name="arrowRight" size={16} />
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
