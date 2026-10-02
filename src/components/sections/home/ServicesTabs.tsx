"use client";

import { useId, useRef, useState, useSyncExternalStore, type KeyboardEvent } from "react";
import Link from "@/components/ui/SiteLink";
import { serviceHubs } from "@/content/services";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import styles from "./Services.module.css";

const HUB_ICON: Record<string, IconName> = {
  general: "family",
  restorative: "tooth",
  cosmetic: "smile",
};

const noopSubscribe = () => () => {};

/**
 * Tabbed service showcase. On the server (and without JavaScript) every panel is
 * rendered and visible, so all 22 treatment links are in the HTML; once hydrated,
 * only the selected hub's panel shows. Tabs follow the WAI-ARIA tabs pattern
 * (arrow keys in either axis, since the list is vertical on desktop and a row on
 * smaller screens; Home/End).
 */
export function ServicesTabs() {
  const isClient = useSyncExternalStore(noopSubscribe, () => true, () => false);
  const [active, setActive] = useState(serviceHubs[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  const focusTab = (index: number) => {
    const next = (index + serviceHubs.length) % serviceHubs.length;
    setActive(serviceHubs[next].id);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const keys: Record<string, number> = {
      ArrowRight: index + 1,
      ArrowDown: index + 1,
      ArrowLeft: index - 1,
      ArrowUp: index - 1,
      Home: 0,
      End: serviceHubs.length - 1,
    };
    if (event.key in keys) {
      event.preventDefault();
      focusTab(keys[event.key]);
    }
  };

  return (
    <div className={styles.tabs}>
      <div role="tablist" aria-label="Service areas" className={styles.tablist} data-reveal="">
        {serviceHubs.map((hub, index) => {
          const selected = active === hub.id;
          return (
            <button
              key={hub.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${hub.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${hub.id}`}
              tabIndex={selected ? 0 : -1}
              className={styles.tab}
              onClick={() => setActive(hub.id)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              <span className={styles.tabIndex} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={styles.tabText}>
                <span className={styles.tabLabel}>{hub.navLabel}</span>
                <span className={styles.tabCount}>{hub.services.length} treatments</span>
              </span>
              <span className={styles.tabIcon} aria-hidden="true">
                <Icon name={HUB_ICON[hub.id]} size={20} />
              </span>
            </button>
          );
        })}
      </div>

      {/* One reveal for the panel area: panels hidden after hydration are never
          left at opacity 0 when the visitor switches tabs */}
      <div className={styles.panels} data-reveal="">
        {serviceHubs.map((hub) => (
          <div
            key={hub.id}
            role="tabpanel"
            id={`${baseId}-panel-${hub.id}`}
            aria-labelledby={`${baseId}-tab-${hub.id}`}
            className={styles.panel}
            hidden={isClient && active !== hub.id}
          >
            <div className={styles.panelHead}>
              <span className={styles.panelIcon} aria-hidden="true">
                <Icon name={HUB_ICON[hub.id]} size={26} />
              </span>
              <div className={styles.panelText}>
                <h3 className={styles.panelTitle}>{hub.title}</h3>
                <p className={styles.panelSummary}>{hub.summary}</p>
              </div>
              <Button href={hub.path} variant="secondary" className={styles.panelButton}>
                {hub.allLabel}
              </Button>
            </div>

            <ul role="list" className={styles.list}>
              {hub.services.map((service, index) => (
                <li key={service.path}>
                  <Link href={service.path} className={styles.row}>
                    <span className={styles.rowIndex} aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.rowName}>{service.name}</span>
                    <span className={styles.rowArrow} aria-hidden="true">
                      <Icon name="arrowUpRight" size={16} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
