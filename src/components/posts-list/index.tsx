import { postRepository } from "@/repositories/post";
import { formatDate, formatDistanceToNow } from "@/utils/format-datetime";
import { PostHeading } from "../post-heading";
import { PostImageCover } from "../post-image-cover";
import { PostSummary } from "../post-summary";

export async function PostsList() {
  const posts = await postRepository.findAll();
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
      {posts.map((post) => (
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

          <div className="flex flex-col gap-4 sm:justify-center">
            <time
              className="text-slate-600 text-sm/tight block"
              dateTime={post.createdAt}
              title={formatDistanceToNow(post.createdAt)}
            >
              {formatDate(post.createdAt)}
            </time>

            <PostHeading as="h2" url={`/post/${post.slug}`}>
              {post.title}
            </PostHeading>

            <p>{post.excerpt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
