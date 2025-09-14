import { Suspense } from "react";
import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { PostHeading } from "@/components/post-heading";
import { PostImageCover } from "@/components/post-image-cover";
import { PostsList } from "@/components/posts-list";
import { SpinLoader } from "@/components/spin-loader";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostImageCover
          linkProps={{
            href: "#",
          }}
          imageProps={{
            width: 1200,
            height: 720,
            priority: true,
            src: "/images/bryen_0.png",
            alt: "Título do post",
          }}
        />

        <div className="flex flex-col gap-4 sm:justify-center">
          <time
            className="text-slate-600 text-sm/tight block"
            dateTime="2025-04-20"
          >
            2025/04/10 10:00
          </time>

          <PostHeading as="h1" url="#">
            Lorem ipsum dolor sit
          </PostHeading>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            modi placeat nisi reprehenderit eaque accusantium ipsam, in ad
            architecto facilis praesentium. Quisquam dolorum, praesentium sit
            eum aut beatae pariatur hic!
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className="text-center py-4">© 2025 My Blog. All rights reserved.</p>
      </footer>
    </Container>
  );
}
