import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Post } from "../../components/Post";

import styles from "./styles.module.css";

export function Layout() {
  return (
    <main>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <section>
          <Post />
          <Post />
        </section>
      </div>
    </main>
  );
}
