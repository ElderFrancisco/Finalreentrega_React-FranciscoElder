import Item from '../item';
import styles from './itemList.module.scss';

const ItemList = ({ data = [] }) => {
  return (
    <div className={styles.container}>
      {data.map((producto) => (
        <div key={producto.id}>
          <Item info={producto} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
