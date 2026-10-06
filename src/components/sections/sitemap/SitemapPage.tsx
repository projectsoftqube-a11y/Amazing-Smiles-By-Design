import Link from "@/components/ui/SiteLink";
import { PageHero } from "@/components/sections/PageHero";
import { TitleText } from "@/components/sections/service/DesignKit";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { sitemapBreadcrumb, sitemapGroups, sitemapHero, sitemapMeta, sitemapNap } from "@/content/pages/sitemap";
import { getRoute, routes } from "@/content/routes";
import { contactLinks, practice } from "@/content/site";
import { infoPageSchema } from "@/lib/schema";
import s from "./Sitemap.module.css";

const GROUP_ICONS: Record<string, IconName> = {
  core: "home",
  "patient-info": "clipboard",
  general: "tooth",
  restorative: "shield",
  cosmetic: "sparkle",
  location: "map",
  "service-location": "pin",
  content: "book",
  legal: "lock",
};

/**
 * The content file's groups and labels, merged with the route list (handoff: generate
 * from the routes so new pages appear automatically). Unpublished pages drop out; any
 * published, indexable page missing from the content file is appended to its group.
 */
function buildGroups() {
  return sitemapGroups.map((group) => {
    const listed = group.links.filter((link) => getRoute(link.path)?.published);
    const known = new Set(group.links.map((link) => link.path));
    const extra = routes
      .filter((route) => route.group === group.group && route.published && !route.noindex && !known.has(route.path))
      .map((route) => ({ label: route.label, path: route.path }));
    return { ...group, links: [...listed, ...extra] };
  });
}

/** Column 1: main, patient info, general · column 2: cosmetic, areas · column 3: restorative, services by area, blog, legal */
const COLUMNS: string[][] = [
  ["core", "patient-info", "general"],
  ["cosmetic", "location"],
  ["restorative", "service-location", "content", "legal"],
];

type Group = ReturnType<typeof buildGroups>[number];

function GroupCard({ group }: { group: Group }) {
  return (
    <section className={s.group} aria-labelledby={group.id} data-reveal="">
      <div className={s.groupHead}>
        <span className={s.groupIcon} aria-hidden="true">
          <Icon name={GROUP_ICONS[group.group] ?? "check"} size={20} />
        </span>
        <h2 id={group.id} className={s.groupTitle}>
          <TitleText text={group.title} />
        </h2>
        <span className={s.count} aria-hidden="true">
          {group.links.length}
        </span>
      </div>
      <ul role="list" className={s.links}>
        {group.links.map((link) => (
          <li key={link.path}>
            <Link href={link.path}>
              <span>{link.label}</span>
              <Icon name="arrowRight" size={14} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function SitemapPage() {
  const groups = buildGroups();
  const total = groups.reduce((sum, group) => sum + group.links.length, 0);
  const schema = infoPageSchema({ meta: sitemapMeta, breadcrumb: sitemapBreadcrumb });

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        id="sitemap-title"
        breadcrumb={sitemapBreadcrumb}
        eyebrow={`Every page · ${practice.name}`}
        title={sitemapHero.title}
        intro={sitemapHero.intro}
        aside={
          <div className={s.stage}>
            <span className={s.plate} aria-hidden="true" />
            <nav className={s.index} aria-label="Sitemap sections">
              <p className={s.total}>
                <strong>{total}</strong> pages
              </p>
              <ul role="list" className={s.indexList}>
                {groups.map((group) => (
                  <li key={group.id}>
                    <a href={`#${group.id}`}>
                      <Icon name={GROUP_ICONS[group.group] ?? "check"} size={16} />
                      <span>{group.title}</span>
                      <em>{group.links.length}</em>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        }
        actions={
          <>
            <Button href={contactLinks.call} icon="phone" track="call_click">
              Call or Text {practice.phone.display}
            </Button>
          </>
        }
      />

      <div className={s.body}>
        <div className="container">
          {/* Three fixed columns, in the order the client chose */}
          <div className={s.columns}>
            {COLUMNS.map((column, i) => (
              <div key={i} className={s.column}>
                {column.map((key) => {
                  const group = groups.find((item) => item.group === key);
                  return group ? <GroupCard key={group.id} group={group} /> : null;
                })}
              </div>
            ))}
          </div>

          <div className={s.nap} data-reveal="">
            <p className={s.napText}>
              <Icon name="pin" size={18} />
              <span>{sitemapNap}</span>
            </p>
            <div className={s.napActions}>
              <a href={contactLinks.call} className={s.napCall} data-track="call_click">
                <Icon name="phone" size={16} />
                Call
              </a>
              <a href={contactLinks.text} className={s.napText2} data-track="call_click">
                <Icon name="message" size={16} />
                Text
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
