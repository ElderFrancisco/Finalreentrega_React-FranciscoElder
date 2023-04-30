import styles from './ItemDetail.module.scss';
import ItemCount from '../ItemCount';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UseCartContext } from '../../context/CartContext';
import Title from '../Title';

const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);

  const { addItem } = UseCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addItem(data, quantity);
  };

  return (
    <div className={styles.container}>
      <Title texto='Detalle del producto' />
      <div className={styles.card}>
        <h1>{data.title}</h1>
        <img src={data.image} alt={data.title} />
        <p>{data.description}</p>
        <p>${data.price}</p>
        <p>el stock es de:{data.stock}</p>
      </div>

      {goToCart ? (
        <div className={styles.links}>
          <Link to='/categoria'>Seguir comprando</Link>
          <Link to='/cart'>Terminar mi compra</Link>
        </div>
      ) : (
        <div>
          <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
