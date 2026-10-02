import Link from "@/components/ui/SiteLink";
import type { ComponentProps, ReactNode } from "react";
import { Icon, type IconName } from "./Icon";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "inverse" | "inverse-outline";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: IconName;
  /** Analytics event name, picked up by the click listener in TrackClicks */
  track?: string;
  className?: string;
} & Omit<ComponentProps<"a">, "href" | "className" | "children">;

const isExternal = (href: string) => /^(https?:|tel:|sms:|mailto:)/.test(href);

/** Links styled as buttons. Every CTA on this site navigates, so they are always <a>. */
export function Button({ href, children, variant = "primary", icon, track, className, ...rest }: ButtonProps) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(" ");
  const content = (
    <>
      {icon ? <Icon name={icon} className={styles.icon} /> : null}
      <span className={styles.label}>{children}</span>
    </>
  );

  if (isExternal(href)) {
    const opensNewTab = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        data-track={track}
        {...(opensNewTab ? { target: "_blank", rel: "noopener" } : {})}
        {...rest}
      >
        {content}
        {opensNewTab ? <span className="visually-hidden"> (opens in a new tab)</span> : null}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} data-track={track} {...rest}>
      {content}
    </Link>
  );
}

type TextLinkProps = {
  href: string;
  children: ReactNode;
  track?: string;
  className?: string;
  inverse?: boolean;
};

/** Inline call to action: underlined text with a trailing arrow. */
export function TextLink({ href, children, track, className, inverse }: TextLinkProps) {
  const classes = [styles.textLink, inverse ? styles.textLinkInverse : null, className].filter(Boolean).join(" ");
  const inner = (
    <>
      <span className={styles.textLinkLabel}>{children}</span>
      <Icon name="arrowRight" size={18} className={styles.textLinkArrow} />
    </>
  );
  return isExternal(href) ? (
    <a href={href} className={classes} data-track={track}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={classes} data-track={track}>
      {inner}
    </Link>
  );
}
