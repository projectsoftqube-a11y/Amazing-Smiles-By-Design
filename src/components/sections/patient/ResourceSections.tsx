import { Fragment } from "react";
import Link from "@/components/ui/SiteLink";
import { TextLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { images } from "@/content/images";
import { educationTopics } from "@/content/pages/patient-education";
import { cbct, digitalXrays, rayface } from "@/content/pages/technology";
import { SectionHead } from "./PatientShared";
import styles from "./ResourceSections.module.css";

/* ——— Advanced Technology ——— */

/** "CBCT 3D Dental Imaging" with its three H3s */
export function Cbct() {
  const { what, how, helps } = cbct;
  return (
    <section className={styles.cbct} aria-labelledby="cbct-title">
      <div className="container">
        <div className={styles.cbctTop}>
          <div className={styles.cbctCopy}>
            <SectionHead id="cbct-title" eyebrow="Cone beam CT" title={cbct.title} />
            <h3 className={styles.subTitle} data-reveal="">
              {what.title}
            </h3>
            <p className={styles.lead} data-reveal="">
              {what.body}
            </p>
          </div>
          <div className={styles.cbctMedia}>
            <MediaFrame
              image={images.homeTechnology}
              ratio="4 / 3"
              sizes="(min-width: 1200px) 44vw, 100vw"
              reveal="scroll"
              parallax
              className={styles.media}
            />
            <span className={styles.mediaBadge} aria-hidden="true">
              <Icon name="scan" size={20} />
              3D view in one rotation
            </span>
          </div>
        </div>

        <div className={styles.how}>
          <div className={styles.howCopy}>
            <h3 className={styles.subTitle} data-reveal="">
              {how.title}
            </h3>
            <p className={styles.text} data-reveal="">
              {how.body}
            </p>
          </div>
          <ul role="list" className={styles.areas}>
            {how.areas.map((area, index) => (
              <li key={area} data-reveal="">
                <span className={styles.areaIndex} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {area}
              </li>
            ))}
          </ul>
        </div>

        <h3 className={`${styles.subTitle} ${styles.helpsTitle}`} data-reveal="">
          {helps.title}
        </h3>
        <ul role="list" className={styles.helps}>
          <li className={styles.helpCard} data-reveal="">
            <span className={styles.helpIcon} aria-hidden="true">
              <Icon name="search" size={22} />
            </span>
            <p>
              <strong>{helps.accuracy.label}</strong> {helps.accuracy.text}
            </p>
          </li>
          <li className={`${styles.helpCard} ${styles.helpNavy}`} data-reveal="">
            <span className={styles.helpIcon} aria-hidden="true">
              <Icon name="clipboard" size={22} />
            </span>
            <p>
              <strong>{helps.planning.label}</strong> for{" "}
              <Link href={helps.planning.implants.href}>{helps.planning.implants.label}</Link>,{" "}
              <Link href={helps.planning.rootCanal.href}>{helps.planning.rootCanal.label}</Link>, {helps.planning.rest}
            </p>
          </li>
          <li className={styles.helpCard} data-reveal="">
            <span className={styles.helpIcon} aria-hidden="true">
              <Icon name="shield" size={22} />
            </span>
            <p>
              <strong>{helps.safety.label}</strong> {helps.safety.text}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

/** "Digital Dental X-Rays": copy beside a navy "they help identify" card */
export function DigitalXrays() {
  return (
    <section className={styles.xray} aria-labelledby="xray-title">
      <div className={`container ${styles.xrayGrid}`}>
        <div className={styles.xrayCopy}>
          <SectionHead id="xray-title" eyebrow="Digital imaging" title={digitalXrays.title} />
          <p className={styles.lead} data-reveal="">
            {digitalXrays.body}
          </p>
          <p className={styles.text} data-reveal="">
            {digitalXrays.after}
          </p>
        </div>
        <div className={styles.finds} data-reveal="">
          <span className={styles.findsIcon} aria-hidden="true">
            <Icon name="xray" size={26} />
          </span>
          <ul role="list" className={styles.findsList}>
            {digitalXrays.finds.map((find) => (
              <li key={find}>
                <Icon name="check" size={18} />
                {find}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** "RayFace Facial Scanner": intro, three benefit cards and the cosmetic link */
export function RayFace() {
  return (
    <section className={styles.rayface} aria-labelledby="rayface-title">
      <div className="container">
        <SectionHead id="rayface-title" eyebrow="3D facial scanning" title={rayface.title} lead={rayface.body} center />
        <ul role="list" className={styles.benefits}>
          {rayface.benefits.map((benefit, index) => (
            <li key={benefit.label} className={styles.benefit} data-reveal="">
              <span className={styles.benefitTop}>
                <span className={styles.benefitIndex} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.benefitIcon} aria-hidden="true">
                  <Icon name={benefit.icon as IconName} size={22} />
                </span>
              </span>
              <p>
                <strong>{benefit.label}</strong> {benefit.text}
              </p>
            </li>
          ))}
        </ul>
        <div className={styles.centerLink} data-reveal="">
          <TextLink href={rayface.link.href}>{rayface.link.label}</TextLink>
        </div>
      </div>
    </section>
  );
}

/* ——— Patient Education ——— */

/** The six topic groups, each an H2 with its guide links */
export function EducationTopics() {
  return (
    <div className={styles.topics}>
      <div className={`container ${styles.topicGrid}`}>
        {educationTopics.map((topic) => (
          <section
            key={topic.id}
            className={`${styles.topic} ${topic.id === "treatment-title" ? styles.topicWide : ""} ${topic.id === "paying-care-title" ? styles.topicNavy : ""}`}
            aria-labelledby={topic.id}
            data-reveal=""
          >
            <div className={styles.topicHead}>
              <span className={styles.topicIcon} aria-hidden="true">
                <Icon name={topic.icon as IconName} size={22} />
              </span>
              <h2 id={topic.id} className={styles.topicTitle}>
                {topic.title}
              </h2>
            </div>
            <ul role="list" className={styles.guides}>
              {topic.items.map((links) => (
                <li key={links[0].href} className={styles.guide}>
                  <span className={styles.guideLinks}>
                    {links.map((link, index) => (
                      <Fragment key={link.href}>
                        {index > 0 ? (index === links.length - 1 ? " & " : ", ") : null}
                        <Link href={link.href}>{link.label}</Link>
                      </Fragment>
                    ))}
                  </span>
                  <Icon name="arrowRight" size={16} className={styles.guideArrow} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
