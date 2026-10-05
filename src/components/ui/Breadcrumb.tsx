import Link from "@/components/ui/SiteLink";
import { Icon } from "./Icon";
import styles from "./Breadcrumb.module.css";

type Crumb = { name: string; path: string };

/**
 * Visible breadcrumb (Home › Page). Its items match the page's BreadcrumbList
 * schema exactly; the last item is the current page and is not a link.
 */
export function Breadcrumb({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={[styles.breadcrumb, className].filter(Boolean).join(" ")}>
      <ol role="list">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.path}>
              {last ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <>
                  <Link href={item.path}>{item.name}</Link>
                  <Icon name="chevronDown" size={14} className={styles.separator} aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
