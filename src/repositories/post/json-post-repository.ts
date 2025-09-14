import fs from "node:fs";
import path from "node:path";
import type { PostModel } from "@/models/post/post-model";
import type { PostRepository } from "./post-repository";

const ROOT_DIR = process.cwd();
const JSON_FILE_PATH = path.resolve(
  ROOT_DIR,
  "src",
  "db",
  "seed",
  "posts.json",
);

export class JsonPostRepository implements PostRepository {
  private async readFromDisk(): Promise<PostModel[]> {
    const data = await fs.promises.readFile(JSON_FILE_PATH, "utf-8");
    const parsedJson = JSON.parse(data);
    const { posts } = parsedJson;
    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    return await this.readFromDisk();
  }
  async findById(id: string): Promise<PostModel> {
    const posts = await this.readFromDisk();
    const post = posts.find((post) => post.id === id);
    if (!post) throw new Error("Post not found");
    return post;
  }
}
