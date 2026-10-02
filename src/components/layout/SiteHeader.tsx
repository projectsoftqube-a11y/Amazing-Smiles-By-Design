"use client";

import Link from "@/components/ui/SiteLink";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { appointmentHref, mainNav, type NavItem } from "@/content/navigation";
import { serviceHubs } from "@/content/services";
import { contactLinks, practice } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const baseId = useId();

  // Close menus on navigation (state adjusted during render, not in an effect).
  const [renderedPath, setRenderedPath] = useState(pathname);
  if (pathname !== renderedPath) {
    setRenderedPath(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  // Hide while scrolling down, reveal on any upward scroll.
  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const delta = y - lastY;
      setScrolled(y > 8);
      if (Math.abs(delta) > 4) {
        const focusInside = headerRef.current?.contains(document.activeElement) ?? false;
        setHidden(delta > 0 && y > 160 && !focusInside);
        lastY = y;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Escape closes the open dropdown; clicks outside close it too.
  useEffect(() => {
    if (!openMenu) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        headerRef.current?.querySelector<HTMLButtonElement>(`[aria-controls="${baseId}-${openMenu}"]`)?.focus();
      }
    };
    const onPointer = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [openMenu, baseId]);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  const toggle = (key: string) => setOpenMenu((current) => (current === key ? null : key));

  const renderItem = (item: NavItem, index: number) => {
    if (item.kind === "link") {
      return (
        <li key={item.label} className={styles.item}>
          <Link href={item.href} className={styles.topLink} aria-current={pathname === item.href ? "page" : undefined}>
            {item.label}
          </Link>
        </li>
      );
    }

    const key = `menu${index}`;
    const panelId = `${baseId}-${key}`;
    const isOpen = openMenu === key;
    const isServices = item.kind === "services";

    return (
      <li
        key={item.label}
        className={`${styles.item} ${isServices ? styles.itemMega : styles.itemDrop}`}
        data-open={isOpen ? "" : undefined}
      >
        <button
          type="button"
          className={styles.topLink}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => toggle(key)}
        >
          {item.label}
          <Icon name="chevronDown" size={16} className={styles.chevron} />
        </button>

        {isServices ? (
          <div id={panelId} className={`${styles.panel} ${styles.mega}`}>
            <div className={`container ${styles.megaGrid}`}>
              {serviceHubs.map((hub) => (
                <div key={hub.id} className={styles.megaColumn}>
                  <Link href={hub.path} className={styles.megaTitle}>
                    {hub.title}
                    <Icon name="arrowRight" size={16} />
                  </Link>
                  <p className={styles.megaSummary}>{hub.summary}</p>
                  <ul role="list" className={styles.megaList}>
                    {hub.services.map((service) => (
                      <li key={service.path}>
                        <Link href={service.path}>{service.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className={styles.megaAside}>
                <p className={styles.megaAsideTitle}>Dental emergency? Call us first.</p>
                <p>New patients can have an emergency exam, including any necessary X-rays, for $59.</p>
                <a href={contactLinks.call} className={styles.megaPhone} data-track="call_click">
                  <Icon name="phone" />
                  {practice.phone.display}
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div id={panelId} className={`${styles.panel} ${styles.drop}`}>
            <ul role="list" className={styles.dropList}>
              {item.kind === "group" &&
                item.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} aria-current={pathname === link.href ? "page" : undefined}>
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </li>
    );
  };

  return (
    <>
      <header
        ref={headerRef}
        className={styles.header}
        data-hidden={hidden && !openMenu && !mobileOpen ? "" : undefined}
        data-scrolled={scrolled || openMenu ? "" : undefined}
        data-header-bar=""
      >
        <div className={`container ${styles.bar}`}>
          <Logo className={styles.logo} />

          <nav aria-label="Main" className={styles.nav}>
            <ul role="list" className={styles.navList}>
              {mainNav.map(renderItem)}
            </ul>
          </nav>

          <div className={styles.actions}>
            <a href={contactLinks.call} className={styles.phone} data-track="call_click">
              <span className={styles.phoneLabel}>Call or text</span>
              <span className={styles.phoneNumber}>{practice.phone.display}</span>
            </a>
            <Button href={appointmentHref} className={styles.cta} track="appointment_click">
              Request an Appointment
            </Button>
            <a href={contactLinks.call} className={styles.iconButton} data-track="call_click">
              <Icon name="phone" size={22} />
              <span className="visually-hidden">Call {practice.phone.display}</span>
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              className={styles.menuButton}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen(true)}
            >
              <Icon name="menu" size={22} />
              <span className={styles.menuLabel}>Menu</span>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={closeMobile} />
    </>
  );
}
