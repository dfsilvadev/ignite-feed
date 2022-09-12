import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

import styles from "./styles.module.css";

export function Layout() {
  return (
    <main>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <div>feed</div>
      </div>
    </main>
  );
}
