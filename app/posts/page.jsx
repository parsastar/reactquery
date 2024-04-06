import React, { Suspense } from "react";

import Posts from "./comps/posts";
import styles from "./styles/posts.module.css";
export default function PostPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Posts</h1>
      <p className={styles.p}> see Posts Here </p>

      <Posts />
    </div>
  );
}
