"use client";

import { useState } from "react";
import { galleryCases } from "@/content/images";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import styles from "./Reviews.module.css";

/** Before/after slider with a case switcher (the live site shows three cases). */
export function GalleryCompare() {
  const [active, setActive] = useState(0);
  const current = galleryCases[active];

  return (
    <div className={styles.compareWrap} data-reveal="">
      <BeforeAfter
        key={current.label}
        before={current.before}
        after={current.after}
        ratio="25 / 13"
        sizes="(min-width: 992px) 600px, 100vw"
        className={styles.compare}
      />
      <div className={styles.cases} role="group" aria-label="Choose a before and after case">
        {galleryCases.map((item, index) => (
          <button
            key={item.label}
            type="button"
            className={styles.caseButton}
            aria-pressed={index === active}
            onClick={() => setActive(index)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
