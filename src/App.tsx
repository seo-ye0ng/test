import * as React from "react";

import { Button } from "./components/Button";
import styles from "./App.module.css";

export function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Primary Button preview</h1>
        <p className={styles.subtitle}>
          Hover 상태에서는 배경이 <code>--semantic-btn-primary-hover-fill</code>로 바뀝니다.
        </p>

        <div className={styles.row}>
          <Button onClick={() => setCount((c) => c + 1)}>클릭 ({count})</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>
    </div>
  );
}

