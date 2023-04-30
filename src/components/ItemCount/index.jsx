import styles from './ItemCount.module.scss';
import { useState, useEffect } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div className={styles.containerItemCount}>
      <div>
        <button disabled={count <= 1} onClick={decrease}>
          -
        </button>
        <span>{count}</span>
        <button disabled={count >= stock} onClick={increase}>
          +
        </button>
      </div>
      <div className={styles.agregar}>
        <button disabled={stock <= 0} onClick={() => onAdd(count)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
