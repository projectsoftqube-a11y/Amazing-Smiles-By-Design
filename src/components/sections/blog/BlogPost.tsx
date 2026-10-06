import Image from "next/image";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { Accent, RiseWords } from "@/components/ui/Accent";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Rich } from "@/components/ui/Rich";
import Link from "@/components/ui/SiteLink";
import { formatPostDate, readingMinutes, type BlogBlock, type BlogPostContent } from "@/content/blog-post";
import type { Cta } from "@/content/service-page";
import { images, type SiteImage } from "@/content/images";
import { blogPosts, blogTopics } from "@/content/pages/blog";
import { contactLinks, practice } from "@/content/site";
import { PostCards } from "./BlogSections";
import { PostArt } from "./PostArt";
import s from "./BlogPost.module.css";

type Props = {
  post: BlogPostContent;
  breadcrumb: { name: string; path: string }[];
  /** Cover photo from the post document; without one the code-drawn art is shown */
  cover?: SiteImage;
};

/**
 * Blog post template: editorial hero (category, H1, dated byline, cover art), the quick
 * answer, key takeaways, the article with a sticky "In this guide" rail, the FAQs, three
 * more guides and the post's own closing CTA. Headings follow the post doc: the title is
 * the H1, each section an H2, sub-steps and FAQ questions H3. The hero animates in on
 * load (CSS); everything below reveals on scroll through data-reveal (MotionController).
 */
export function BlogPost({ post, breadcrumb, cover }: Props) {
  const topic = blogTopics.items.find((item) => item.id === post.topic);
  const more = blogPosts.filter((item) => item.href !== post.meta.path).slice(0, 3);
  const leadWords = post.title.lead.split(" ").length;
  const portrait = images.doctorPortrait;

  return (
    <>
      <section className={s.hero} aria-labelledby="post-title">
        <div className={`container ${s.heroGrid}`}>
          <div className={s.heroCopy}>
            <Breadcrumb items={breadcrumb} className={s.breadcrumb} />
            <p className={s.kicker}>
              {topic ? (
                <Link href={`/blog/#${topic.id}`} className={s.category}>
                  {topic.title}
                </Link>
              ) : null}
              <span className={s.readTime}>
                <Icon name="clock" size={15} />
                {readingMinutes(post)} min read
              </span>
            </p>
            <h1 id="post-title" className={s.title}>
              <RiseWords text={post.title.lead} />{" "}
              {/* No smile line: post titles have long accents that must wrap on phones */}
              <Accent>
                <RiseWords text={post.title.accent} start={leadWords} />
              </Accent>
            </h1>
            <div className={s.byline}>
              {portrait.src ? (
                <Image src={portrait.src} alt="" width={56} height={56} className={s.avatar} style={{ objectPosition: portrait.position }} />
              ) : null}
              <p className={s.bylineText}>
                <Link href={practice.dentist.bioPath} className={s.author}>
                  {post.author}
                </Link>
                <span>
                  {/* Each part wraps whole, so a date never splits across lines */}
                  <span className={s.nowrap}>{practice.name}</span> ·{" "}
                  <span className={s.nowrap}>
                    Published <time dateTime={post.published}>{formatPostDate(post.published)}</time>
                  </span>{" "}
                  ·{" "}
                  <span className={s.nowrap}>
                    Updated <time dateTime={post.updated}>{formatPostDate(post.updated)}</time>
                  </span>
                </span>
              </p>
            </div>
          </div>
          {cover?.src ? (
            <div className={s.coverPhoto}>
              <MediaFrame
                image={cover}
                ratio="3 / 2"
                sizes="(min-width: 1200px) 45vw, (min-width: 768px) 90vw, 100vw"
                priority
                reveal="load"
                quality={85}
                className={s.coverFrame}
              />
            </div>
          ) : (
            <div className={`${s.cover} ${s[`cover_${post.art}`]}`} aria-hidden="true">
              <PostArt name={post.art} />
            </div>
          )}
        </div>
      </section>

      <div className={s.answerWrap}>
        <div className="container">
          <div className={s.answer} data-reveal="">
            <p className={s.answerLabel}>
              <Icon name="bolt" size={16} />
              Quick answer
            </p>
            {post.quickAnswer.text.map((text, i) => (
              <p key={i} className={i === 0 ? s.answerText : s.answerMore}>
                <Rich text={text} />
              </p>
            ))}
            {post.quickAnswer.buttons.length ? (
              <div className={s.answerActions}>
                {post.quickAnswer.buttons.map((cta, i) => (
                  <CtaButton key={cta.href} cta={cta} variant={i === 0 ? "inverse" : "inverse-outline"} />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className={s.body}>
        <div className={`container ${s.layout}`}>
          <article className={s.article}>
            <div className={s.takeaways} data-reveal="">
              <p className={s.takeawaysLabel}>Key takeaways</p>
              <ul role="list">
                {post.takeaways.map((item) => (
                  <li key={item}>
                    <span className={s.tick} aria-hidden="true">
                      <Icon name="check" size={13} />
                    </span>
                    <span>
                      <Rich text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {post.sections.map((section) => (
              <section key={section.id} className={s.section} aria-labelledby={section.id}>
                <h2 id={section.id} className={s.h2} data-reveal="">
                  {section.title}
                </h2>
                <Blocks blocks={section.blocks} />
              </section>
            ))}
          </article>

          <aside className={s.rail} aria-label="About this guide">
            <div className={s.related} data-reveal="">
              <p className={s.railLabel}>Related treatment</p>
              <Link href={post.related.href} className={s.relatedLink}>
                <span className={s.relatedIcon} aria-hidden="true">
                  <Icon name="tooth" size={20} />
                </span>
                <span>{post.related.label}</span>
                <Icon name="arrowRight" size={16} />
              </Link>
              <p className={s.callText}>Questions? Call or text our Bensalem office.</p>
              <Button href={contactLinks.call} icon="phone" track="call_click" className={s.callButton}>
                {practice.phone.display}
              </Button>
            </div>
            <nav className={s.toc} aria-label="In this guide" data-reveal="">
              <p className={s.railLabel}>In this guide</p>
              <ol role="list">
                {post.sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>{section.title}</a>
                  </li>
                ))}
                <li>
                  <a href={`#${post.faqs.id}`}>{post.faqs.title}</a>
                </li>
              </ol>
            </nav>
          </aside>
        </div>
      </div>

      <Faq id={post.faqs.id} title={post.faqs.title} items={post.faqs.items} />

      {more.length ? (
        <section className={s.more} aria-label="More patient guides">
          <div className="container">
            <div className={s.moreHead} data-reveal="">
              <p className={s.moreLabel}>More patient guides</p>
              <Link href="/blog/" className={s.moreAll}>
                All guides
                <Icon name="arrowRight" size={16} />
              </Link>
            </div>
            <PostCards posts={more} />
          </div>
        </section>
      ) : null}

      <FinalCta
        id={post.finalCta.id}
        title={post.finalCta.title}
        body={post.finalCta.body}
        actions={post.finalCta.buttons.map((cta, i) => (
          <CtaButton key={cta.href} cta={cta} variant={i === 0 ? "inverse" : "inverse-outline"} />
        ))}
      />
    </>
  );
}

function ctaStyle(href: string): { icon: IconName; track: string } {
  if (href.startsWith("tel:")) return { icon: "phone", track: "call_click" };
  if (href.includes("emergency")) return { icon: "alert", track: "emergency_click" };
  return { icon: "calendar", track: "appointment_click" };
}

function CtaButton({ cta, variant }: { cta: Cta; variant: "primary" | "secondary" | "inverse" | "inverse-outline" }) {
  const { icon, track } = ctaStyle(cta.href);
  return (
    <Button href={cta.href} variant={variant} icon={icon} track={track}>
      {cta.label}
    </Button>
  );
}

/** Top-level blocks reveal one by one on scroll; blocks inside a sub-step card move with the card */
function Blocks({ blocks, reveal = true }: { blocks: BlogBlock[]; reveal?: boolean }) {
  const r = reveal ? "" : undefined;
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.kind) {
          case "p":
            return (
              <p key={i} className={s.p} data-reveal={r}>
                <Rich text={block.text} />
              </p>
            );
          case "note":
            return (
              <p key={i} className={s.note} data-reveal={r}>
                <Rich text={block.text} />
              </p>
            );
          case "ul":
            return (
              <ul key={i} role="list" className={s.ul} data-reveal={r}>
                {block.items.map((item) => (
                  <li key={item}>
                    <Rich text={item} />
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} role="list" className={s.ol} data-reveal={r}>
                {block.items.map((item, n) => (
                  <li key={item}>
                    <span className={s.step} aria-hidden="true">
                      {n + 1}
                    </span>
                    <span>
                      <Rich text={item} />
                    </span>
                  </li>
                ))}
              </ol>
            );
          case "table":
            return (
              <div key={i} className={`${s.tableWrap} ${block.head.length > 2 ? s.stack : ""}`} data-reveal={r}>
                <table className={s.table}>
                  <thead>
                    <tr>
                      {block.head.map((cell) => (
                        <th key={cell} scope="col">
                          {cell}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row) => (
                      <tr key={row.join("|")}>
                        {row.map((cell, c) =>
                          // Comparison tables (3+ columns) name each row in the first cell
                          c === 0 && block.head.length > 2 ? (
                            <th key={c} scope="row">
                              <Rich text={cell} />
                            </th>
                          ) : (
                            <td key={c} data-label={block.head[c]}>
                              <Rich text={cell} />
                            </td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "h3":
            return (
              <div key={i} className={s.sub} data-reveal={r}>
                <h3 className={s.h3}>{block.title}</h3>
                <Blocks blocks={block.blocks} reveal={false} />
              </div>
            );
          case "cta":
            return (
              <div key={i} className={s.cta} data-reveal={r}>
                <div className={s.ctaActions}>
                  {block.buttons.map((cta, n) => (
                    <CtaButton key={cta.href} cta={cta} variant={n === 0 ? "primary" : "secondary"} />
                  ))}
                </div>
                {block.note ? (
                  <p className={s.ctaNote}>
                    <Rich text={block.note} />
                  </p>
                ) : null}
              </div>
            );
          case "link":
            return (
              <p key={i} className={s.p} data-reveal={r}>
                <Link href={block.href}>{block.label}</Link>
              </p>
            );
        }
      })}
    </>
  );
}
