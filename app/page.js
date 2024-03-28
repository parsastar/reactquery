import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Posts</h1>
      <Link className={styles.btn} href={"/posts"} >users</Link>
    </div>
  );
}
