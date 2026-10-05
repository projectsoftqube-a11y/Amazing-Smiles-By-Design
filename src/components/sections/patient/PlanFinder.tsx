"use client";

import { useDeferredValue, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import styles from "./InfoSections.module.css";

/**
 * "See the full list of insurance plans we work with": a native <details> holding
 * every carrier, server-rendered so Ctrl+F and crawlers find each name (Developer
 * Handoff). The filter box only hides non-matching rows; the text stays in the HTML.
 */
export function PlanFinder({ label, plans }: { label: string; plans: readonly string[] }) {
  const [query, setQuery] = useState("");
  const deferred = useDeferredValue(query.trim().toLowerCase());
  const matches = (plan: string) => !deferred || plan.toLowerCase().includes(deferred);
  const shown = plans.filter(matches).length;

  return (
    <details className={styles.finder}>
      <summary className={styles.finderSummary}>
        <span className={styles.finderIcon} aria-hidden="true">
          <Icon name="shield" size={20} />
        </span>
        <span className={styles.finderLabel}>{label}</span>
        <span className={styles.finderCount}>{plans.length} plans</span>
        <span className={styles.finderToggle} aria-hidden="true">
          <Icon name="plus" size={20} />
        </span>
      </summary>

      <div className={styles.finderBody}>
        <div className={styles.search}>
          <label htmlFor="plan-search" className={styles.searchLabel}>
            Find your plan
          </label>
          <span className={styles.searchField}>
            <Icon name="search" size={18} />
            <input
              id="plan-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="e.g. Delta Dental"
              autoComplete="off"
              className={styles.searchInput}
            />
          </span>
          <p className={styles.searchStatus} aria-live="polite">
            {deferred ? `${shown} of ${plans.length} plans match` : `${plans.length} plans listed`}
          </p>
        </div>

        <ul role="list" className={styles.planList}>
          {plans.map((plan) => (
            <li key={plan} hidden={!matches(plan)}>
              <Icon name="check" size={16} />
              {plan}
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}
