import { Suspense } from "react";
import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { PostFeatured } from "@/components/post-featured";
import { PostsList } from "@/components/posts-list";
import { SpinLoader } from "@/components/spin-loader";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className="text-center py-4">© 2025 My Blog. All rights reserved.</p>
      </footer>
    </Container>
  );
}
