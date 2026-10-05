"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import { practice } from "@/content/site";

const noopSubscribe = () => () => {};

/**
 * The practice email as a "protected" mailto link (Contact page Developer Handoff):
 * the address is assembled in the browser, so it never appears in the server HTML
 * for spam scrapers. Before hydration (and without JavaScript) it reads
 * "info [at] amazingsmilesbydesign.com" as plain text.
 */
export function ProtectedEmail({ className, icon }: { className?: string; icon?: ReactNode }) {
  const isClient = useSyncExternalStore(noopSubscribe, () => true, () => false);
  const [user, domain] = practice.email.split("@");

  if (!isClient) {
    return (
      <span className={className}>
        {icon}
        <span>
          {user} [at] {domain}
        </span>
      </span>
    );
  }

  const address = `${user}@${domain}`;
  return (
    <a href={`mailto:${address}`} className={className} data-track="email_click">
      {icon}
      <span>{address}</span>
    </a>
  );
}
