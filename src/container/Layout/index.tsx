import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Post } from "../../components/Post";

import styles from "./styles.module.css";

import mockPosts from "../../utils/mockPosts";

export function Layout() {
  return (
    <main>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <section>
          {mockPosts &&
            mockPosts.map((post) => (
              <Post
                author={post.author}
                content={post.content}
                hashtags={post.hashtags}
                publishedAt={post!.publishedAt}
                postId={post.id}
                key={post.id}
              />
            ))}
        </section>
      </div>
    </main>
  );
}
