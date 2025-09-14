import { findAllPublicPosts } from "@/lib/posts/queries";
import { formatDate, formatDistanceToNow } from "@/utils/format-datetime";
import { PostHeading } from "../post-heading";
import { PostImageCover } from "../post-image-cover";
import { PostSummary } from "../post-summary";

export async function PostsList() {
  const posts = await findAllPublicPosts();

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
      {posts.slice(1).map((post) => (
        <div className="flex flex-col gap-4 group" key={post.id}>
          <PostImageCover
            linkProps={{
              href: `/post/${post.slug}`,
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
            postHeading="h2"
            postLink={`/post/${post.slug}`}
            createdAt={post.createdAt}
            excerpt={post.excerpt}
            title={post.title}
          />
        </div>
      ))}
    </div>
  );
}
