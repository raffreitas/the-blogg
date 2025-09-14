import { Suspense } from "react";
import { PostFeatured } from "@/components/post-featured";
import { PostsList } from "@/components/posts-list";
import { SpinLoader } from "@/components/spin-loader";

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </>
  );
}
