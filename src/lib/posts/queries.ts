import { cache } from "react";
import { postRepository } from "@/repositories/post";

export const findAllPublicPosts = cache(async () => {
  const posts = await postRepository.findAllPublic();
  return posts;
});
