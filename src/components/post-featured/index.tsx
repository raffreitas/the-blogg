import { PostImageCover } from "../post-image-cover";
import { PostSummary } from "../post-summary";

export function PostFeatured() {
  const slug = "";
  const postLink = `/post/${slug}`;
  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostImageCover
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          priority: true,
          src: "/images/bryen_0.png",
          alt: "Título do post",
        }}
      />

      <PostSummary
        postHeading="h1"
        postLink={postLink}
        createdAt="2025-04-20"
        excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        title="Lorem ipsum dolor sit"
      />
    </section>
  );
}
