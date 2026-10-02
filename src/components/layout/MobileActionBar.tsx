import Link from "next/link";
import { appointmentHref } from "@/content/navigation";
import { contactLinks } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import styles from "./MobileActionBar.module.css";

/** Fixed call / text / book bar on phones and small tablets (≤ 800px). */
export function MobileActionBar() {
  return (
    <nav aria-label="Quick contact" className={styles.bar} data-action-bar="">
      <a href={contactLinks.call} className={styles.action} data-track="call_click">
        <Icon name="phone" />
        Call
      </a>
      <a href={contactLinks.text} className={styles.action} data-track="text_click">
        <Icon name="message" />
        Text
      </a>
      <Link href={appointmentHref} className={`${styles.action} ${styles.primary}`} data-track="appointment_click">
        <Icon name="calendar" />
        Book
      </Link>
    </nav>
  );
}
