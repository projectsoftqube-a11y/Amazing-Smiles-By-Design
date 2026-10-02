"use client";

import { useState } from "react";
import { contactLinks, practice } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { Ring } from "@/components/ui/Ring";
import styles from "./MapFacade.module.css";

/**
 * Google Maps loads only when the visitor asks for it, so the page makes no
 * third-party requests (and sets no Google cookies) on load. Uses the keyless
 * embed URL: no API key or billing account is involved.
 */
export function MapFacade() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        className={styles.frame}
        src={contactLinks.mapEmbed}
        title={`Map showing ${practice.name}, ${practice.address.street}, ${practice.address.city}, ${practice.address.region}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    );
  }

  return (
    <div className={styles.facade}>
      <Ring className={styles.ring} strokeWidth={3} />
      <div className={styles.pin} aria-hidden="true">
        <Icon name="pin" size={28} />
      </div>
      <div className={styles.panel}>
        <p className={styles.street}>{practice.address.street}</p>
        <p className={styles.city}>
          {practice.address.city}, {practice.address.region} {practice.address.postalCode}
        </p>
        <button type="button" className={styles.load} onClick={() => setLoaded(true)}>
          <Icon name="map" size={18} />
          Show map
        </button>
        <p className={styles.note}>Loads Google Maps</p>
      </div>
    </div>
  );
}
