import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "@/components/ui/SiteLink";
import { TitleText } from "@/components/sections/service/DesignKit";
import { Icon, type IconName } from "@/components/ui/Icon";
import type { BlogPost, BlogTopic } from "@/content/pages/blog";
import { PostArt } from "./PostArt";
import s from "./Blog.module.css";

const TOPIC_ICONS: IconName[] = ["sparkle", "shield", "tooth", "smile", "alert", "wallet"];

/** Hero side card: the newest guide, then the six topics jumping to their cards below */
export function BlogHeroCard({ topics, latest }: { topics: BlogTopic[]; latest?: BlogPost }) {
  return (
    <div className={s.stage}>
      <span className={s.plate} aria-hidden="true" />
      <div className={s.card}>
        {latest ? (
          <Link href={latest.href} className={s.latest}>
            <span className={s.soon}>
              <span className={s.soonDot} aria-hidden="true" />
              Latest guide
            </span>
            <span className={s.latestTitle}>{latest.title}</span>
            <span className={s.latestMeta}>
              {latest.dateLabel} · {latest.minutes} min read
            </span>
          </Link>
        ) : null}
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

/**
 * Post cards (cover art, category, date, title, excerpt): the /blog/ feed, Patient
 * Education's "Latest Articles" and "More patient guides" under each post. Titles are
 * links, not headings (heading levels follow the content files).
 */
export function PostCards({ posts }: { posts: BlogPost[] }) {
  // 4 or 7 posts: the newest runs full width as a featured card, the rest fill rows of three
  const featured = posts.length > 3 && posts.length % 3 === 1;
  return (
    <ul role="list" className={`${s.posts} ${featured ? s.featured : ""}`}>
      {posts.map((post, i) => (
        <li key={post.href} className={s.post} data-reveal="" style={{ "--i": i } as CSSProperties}>
          {post.cover?.src ? (
            <div className={`${s.postCover} ${s.postPhoto}`}>
              <Image
                src={post.cover.src}
                alt={post.cover.alt}
                fill
                sizes={featured && i === 0 ? "(min-width: 992px) 55vw, 100vw" : "(min-width: 1200px) 30vw, (min-width: 768px) 50vw, 100vw"}
                placeholder="blur"
                style={{ objectFit: "cover", objectPosition: post.cover.position ?? "center" }}
              />
            </div>
          ) : (
            <div className={`${s.postCover} ${s[`postCover_${post.art}`]}`} aria-hidden="true">
              <PostArt name={post.art} />
            </div>
          )}
          <div className={s.postBody}>
            <p className={s.postMeta}>
              <span className={s.postCategory}>{post.category}</span>
              <time dateTime={post.date}>{post.dateLabel}</time>
            </p>
            <Link href={post.href} className={s.postTitle}>
              {post.title}
            </Link>
            <p className={s.postExcerpt}>{post.excerpt}</p>
            <p className={s.postMore} aria-hidden="true">
              {post.minutes} min read
              <Icon name="arrowRight" size={16} />
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/** The 9 most recent posts (title, date, category, excerpt). Renders nothing until a post exists. */
export function PostFeed({ posts }: { posts: BlogPost[] }) {
  if (!posts.length) return null;
  return (
    <section className={s.feed} aria-labelledby="latest-posts-title">
      <div className="container">
        <div className={s.feedHead}>
          <p className="eyebrow" data-reveal="">
            New on the blog
          </p>
          <h2 id="latest-posts-title" className={s.feedTitle} data-reveal="">
            Latest Posts
          </h2>
        </div>
        <PostCards posts={posts.slice(0, 9)} />
      </div>
    </section>
  );
}

/** Patient Education's "Latest Articles": the 6 newest posts and a link to the blog (its handoff) */
export function LatestArticles({
  id,
  title,
  posts,
  link,
}: {
  id: string;
  title: string;
  posts: BlogPost[];
  link: { label: string; href: string };
}) {
  if (!posts.length) return null;
  return (
    <section className={s.feed} aria-labelledby={id}>
      <div className="container">
        <div className={s.feedHead}>
          <p className="eyebrow" data-reveal="">
            From the blog
          </p>
          <h2 id={id} className={s.feedTitle} data-reveal="">
            {title}
          </h2>
        </div>
        <PostCards posts={posts.slice(0, 6)} />
        <p className={s.feedLink}>
          <Link href={link.href}>
            {link.label}
            <Icon name="arrowRight" size={16} />
          </Link>
        </p>
      </div>
    </section>
  );
}

/** "Browse by Topic": six editorial cards, each with a colored cover, its H3, its guides and the links */
export function TopicShelf({
  id,
  title,
  topics,
  posts = [],
}: {
  id: string;
  title: string;
  topics: BlogTopic[];
  posts?: BlogPost[];
}) {
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
                {posts.some((post) => post.topic === topic.id) ? (
                  <ul role="list" className={s.topicGuides}>
                    {posts
                      .filter((post) => post.topic === topic.id)
                      .map((post) => (
                        <li key={post.href}>
                          <Link href={post.href}>
                            <Icon name="book" size={16} />
                            <span>{post.title}</span>
                          </Link>
                        </li>
                      ))}
                  </ul>
                ) : null}
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
