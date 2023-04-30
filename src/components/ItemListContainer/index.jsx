import ItemList from '../ItemList';
import Title from '../Title';
import { useEffect, useState } from 'react';
import db from '../../../db/firestore';
import { getDocs, collection } from 'firebase/firestore';
import styles from './ItemListContainer.module.scss';

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const itemsRef = collection(db, 'productos');
  const [loading, setLoading] = useState(true);

  const GetProducts = async () => {
    const itemCollection = await getDocs(itemsRef);
    const itemm = itemCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setData(itemm);
    setLoading(false);
  };
  useEffect(() => {
    GetProducts();
  }, []);

  if (loading) {
    return (
      <div className={styles.container}>
        <Title texto='Productos' />
        <div className={styles.cards}>
          <p className={styles.cargando}>Cargando...</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <Title texto='Productos' />
        <div className={styles.cards}>
          <ItemList data={data} />
        </div>
      </div>
    );
  }
};

export default ItemListContainer;
