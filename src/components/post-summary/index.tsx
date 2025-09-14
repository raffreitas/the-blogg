import { formatDate, formatDistanceToNow } from "@/utils/format-datetime";
import { PostHeading } from "../post-heading";

type PostSummaryProps = {
  postHeading: "h1" | "h2";
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

export function PostSummary({
  postHeading,
  postLink,
  createdAt,
  excerpt,
  title,
}: PostSummaryProps) {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <time
        className="text-slate-600 text-sm/tight block"
        dateTime={createdAt}
        title={formatDistanceToNow(createdAt)}
      >
        {formatDate(createdAt)}
      </time>

      <PostHeading as={postHeading} url={postLink}>
        {title}
      </PostHeading>

      <p>{excerpt}</p>
    </div>
  );
}
