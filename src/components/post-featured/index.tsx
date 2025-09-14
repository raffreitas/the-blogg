import { findAllPublicPosts } from "@/lib/posts/queries";
import { PostImageCover } from "../post-image-cover";
import { PostSummary } from "../post-summary";

export async function PostFeatured() {
  const post = (await findAllPublicPosts())[0];

  const postLink = `/post/${post.slug}`;
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
          src: post.coverImageUrl,
          alt: post.title,
        }}
      />

      <PostSummary
        postHeading="h1"
        postLink={postLink}
        createdAt={post.createdAt}
        excerpt={post.excerpt}
        title={post.title}
      />
    </section>
  );
}
