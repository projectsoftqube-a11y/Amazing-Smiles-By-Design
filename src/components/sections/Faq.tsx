import { Icon } from "@/components/ui/Icon";
import styles from "./Faq.module.css";

type FaqProps = {
  id: string;
  title: string;
  items: { question: string; answer: string }[];
  eyebrow?: string;
};

/**
 * Native <details>/<summary>: keyboard and screen-reader accessible with no JS,
 * and every answer is in the server HTML (required for FAQPage markup and crawlers).
 * Each question is an H3, matching the content files.
 */
export function Faq({ id, title, items, eyebrow = "Questions" }: FaqProps) {
  return (
    <section className={styles.section} aria-labelledby={id}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.head}>
          <p className="eyebrow" data-reveal="">
            {eyebrow}
          </p>
          <h2 id={id} data-reveal="">
            {title}
          </h2>
        </div>

        <div className={styles.list}>
          {items.map((item, index) => (
            <details key={item.question} className={styles.item} data-reveal="" open={index === 0}>
              <summary className={styles.summary}>
                <h3 className={styles.question}>{item.question}</h3>
                <span className={styles.toggle} aria-hidden="true">
                  <Icon name="chevronDown" size={20} />
                </span>
              </summary>
              <div className={styles.answer}>
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
