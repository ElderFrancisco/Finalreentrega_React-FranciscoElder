import ItemDetail from '../ItemDetail';
import { useEffect, useState } from 'react';
import db from '../../../db/firestore';
import { getDocs, collection } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import styles from './ItemDetailContainer.module.scss';

const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const itemsRef = collection(db, 'productos');
  const [loading, setLoading] = useState(true);

  const GetProducts = async () => {
    const itemCollection = await getDocs(itemsRef);
    const itemm = itemCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setData(itemm.find((item) => item.id === id));
    setLoading(false);
  };
  useEffect(() => {
    GetProducts();
  }, []);

  if (loading) {
    return (
      <div className={styles.containermain}>
        <p>Cargando...</p>
      </div>
    );
  } else {
    return <ItemDetail data={data} />;
  }
};

export default ItemDetailContainer;
