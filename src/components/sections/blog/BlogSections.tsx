import type { CSSProperties } from "react";
import Link from "@/components/ui/SiteLink";
import { TitleText } from "@/components/sections/service/DesignKit";
import { Icon, type IconName } from "@/components/ui/Icon";
import type { BlogPost, BlogTopic } from "@/content/pages/blog";
import s from "./Blog.module.css";

const TOPIC_ICONS: IconName[] = ["sparkle", "shield", "tooth", "smile", "alert", "wallet"];

/** Hero side card: guides are coming soon; meanwhile the six topics jump to their cards below */
export function BlogHeroCard({ topics }: { topics: BlogTopic[] }) {
  return (
    <div className={s.stage}>
      <span className={s.plate} aria-hidden="true" />
      <div className={s.card}>
        <p className={s.soon}>
          <span className={s.soonDot} aria-hidden="true" />
          Patient guides coming soon
        </p>
        <p className={s.cardLabel}>Browse by topic</p>
        <ul role="list" className={s.jumps}>
          {topics.map((topic, i) => (
            <li key={topic.id}>
              <a href={`#${topic.id}`}>
                <span className={s.jumpIcon} aria-hidden="true">
                  <Icon name={TOPIC_ICONS[i % TOPIC_ICONS.length]} size={16} />
                </span>
                {topic.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

/** The 9 most recent posts (title, date, category, excerpt). Renders nothing until a post exists. */
export function PostFeed({ posts }: { posts: BlogPost[] }) {
  if (!posts.length) return null;
  return (
    <section className={s.feed} aria-labelledby="latest-posts-title">
      <div className="container">
        <h2 id="latest-posts-title" className={s.feedTitle}>
          Latest Posts
        </h2>
        <ul role="list" className={s.posts}>
          {posts.slice(0, 9).map((post) => (
            <li key={post.href} className={s.post}>
              <p className={s.postMeta}>
                <span className={s.postCategory}>{post.category}</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </p>
              <Link href={post.href} className={s.postTitle}>
                {post.title}
              </Link>
              <p className={s.postExcerpt}>{post.excerpt}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** "Browse by Topic": six editorial cards, each with a coloured cover, its H3 and the links */
export function TopicShelf({ id, title, topics }: { id: string; title: string; topics: BlogTopic[] }) {
  return (
    <section className={s.shelf} aria-labelledby={id}>
      <div className="container">
        <div className={s.shelfHead}>
          <p className="eyebrow" data-reveal="">
            Patient guides
          </p>
          <h2 id={id} className={s.shelfTitle} data-reveal="">
            <TitleText text={title} />
          </h2>
        </div>
        <div className={s.topics}>
          {topics.map((topic, i) => (
            <article
              key={topic.id}
              className={s.topic}
              aria-labelledby={topic.id}
              style={{ "--i": i } as CSSProperties}
              data-reveal=""
            >
              <div className={s.cover} aria-hidden="true">
                <span className={s.coverIcon}>
                  <Icon name={TOPIC_ICONS[i % TOPIC_ICONS.length]} size={26} />
                </span>
                <span className={s.coverLines}>
                  <i />
                  <i />
                  <i />
                </span>
              </div>
              <div className={s.topicBody}>
                <h3 id={topic.id} className={s.topicTitle}>
                  {topic.title}
                </h3>
                <p className={s.topicText}>{topic.text}</p>
                <ul role="list" className={s.topicLinks}>
                  {topic.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>
                        {link.label}
                        <Icon name="arrowUpRight" size={14} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const RESOURCE_ICONS: IconName[] = ["book", "family"];

/** "More Patient Resources": the heading beside two large link cards */
export function Resources({ id, title, links }: { id: string; title: string; links: { label: string; href: string }[] }) {
  return (
    <section className={s.resources} aria-labelledby={id}>
      <div className="container">
        <div className={s.resourcesInner}>
          <h2 id={id} className={s.resourcesTitle} data-reveal="">
            <TitleText text={title} />
          </h2>
          <ul role="list" className={s.resourceLinks}>
            {links.map((link, i) => (
              <li key={link.href} data-reveal="">
                <Link href={link.href} className={s.resourceLink}>
                  <span className={s.resourceIcon} aria-hidden="true">
                    <Icon name={RESOURCE_ICONS[i % RESOURCE_ICONS.length]} size={22} />
                  </span>
                  <span className={s.resourceLabel}>{link.label}</span>
                  <Icon name="arrowRight" size={18} className={s.resourceArrow} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
