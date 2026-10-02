"use client";

import Link from "@/components/ui/SiteLink";
import { useEffect, useRef } from "react";
import { appointmentHref, mainNav } from "@/content/navigation";
import { serviceHubs } from "@/content/services";
import { contactLinks, hoursTable, practice } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { gsap } from "@/lib/gsap";
import { getLenis } from "@/components/motion/SmoothScroll";
import { Logo } from "./Logo";
import styles from "./MobileMenu.module.css";

const INERT_TARGETS = ["#main", "#site-footer", "[data-header-bar]", "[data-action-bar]"];

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const firstRun = useRef(true);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = root.querySelectorAll("[data-menu-item]");
    const outside = INERT_TARGETS.flatMap((selector) => Array.from(document.querySelectorAll<HTMLElement>(selector)));

    if (open) {
      root.hidden = false;
      outside.forEach((el) => (el.inert = true));
      document.documentElement.style.overflow = "hidden";
      getLenis()?.stop();
      closeRef.current?.focus();
      if (!reduced) {
        gsap.fromTo(root, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 0.6, ease: "power4.out" });
        gsap.fromTo(items, { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5, ease: "power3.out", stagger: 0.035, delay: 0.12 });
      }
    } else if (!firstRun.current) {
      outside.forEach((el) => (el.inert = false));
      document.documentElement.style.overflow = "";
      getLenis()?.start();
      const hide = () => {
        root.hidden = true;
      };
      if (reduced) hide();
      else gsap.to(root, { clipPath: "inset(0 0 100% 0)", duration: 0.45, ease: "power3.inOut", onComplete: hide });
    }
    firstRun.current = false;
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      ref={rootRef}
      id="mobile-menu"
      className={styles.menu}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      hidden
    >
      <div className={`container ${styles.top}`}>
        <Logo className={styles.logo} priority={false} />
        <button ref={closeRef} type="button" className={styles.close} onClick={onClose}>
          <Icon name="close" size={22} />
          <span>Close</span>
        </button>
      </div>

      <div className={`container ${styles.body}`}>
        <nav aria-label="Mobile">
          <ul role="list" className={styles.list}>
            {mainNav.map((item) => {
              if (item.kind === "link") {
                return (
                  <li key={item.label} data-menu-item="">
                    <Link href={item.href} className={styles.link}>
                      {item.label}
                    </Link>
                  </li>
                );
              }
              return (
                <li key={item.label} data-menu-item="">
                  <details className={styles.group}>
                    <summary className={styles.link}>
                      {item.label}
                      <Icon name="chevronDown" size={20} className={styles.chevron} />
                    </summary>
                    {item.kind === "services" ? (
                      <div className={styles.sub}>
                        {serviceHubs.map((hub) => (
                          <div key={hub.id} className={styles.subGroup}>
                            <Link href={hub.path} className={styles.subTitle}>
                              {hub.title}
                            </Link>
                            <ul role="list">
                              {hub.services.map((service) => (
                                <li key={service.path}>
                                  <Link href={service.path} className={styles.subLink}>
                                    {service.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul role="list" className={styles.sub}>
                        {item.links.map((link) => (
                          <li key={link.href}>
                            <Link href={link.href} className={styles.subLink}>
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </details>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.contact} data-menu-item="">
          <div className={styles.ctas}>
            <Button href={appointmentHref} icon="calendar" track="appointment_click">
              Request an Appointment
            </Button>
            <Button href={contactLinks.call} variant="secondary" icon="phone" track="call_click">
              Call {practice.phone.display}
            </Button>
            <Button href={contactLinks.text} variant="secondary" icon="message" track="text_click">
              Text us
            </Button>
          </div>
          <address className={styles.address}>
            {practice.name},
            <br />
            {practice.address.street},
            <br />
            {practice.address.city}, {practice.address.region} {practice.address.postalCode}
          </address>
          <dl className={styles.hours}>
            {hoursTable.map((row) => (
              <div key={row.label}>
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
