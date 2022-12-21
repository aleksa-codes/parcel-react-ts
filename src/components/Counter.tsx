import { useState } from 'react';
import * as styles from '../styles/Counter.module.css';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Counter</h2>
      <p className={styles.count}>{count}</p>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button className={styles.button} onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </div>
    </div>
  );
};
