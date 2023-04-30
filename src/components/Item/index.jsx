import styles from './Item.module.scss';
import { Link } from 'react-router-dom';

const Item = ({ info }) => {
  return (
    <div className={styles.card}>
      <Link to={`/detalle/${info.id}`}>
        <img src={info.image} alt={info.title} />
        <div className={styles.cardbody}>
          <h5 className='card-title'>{info.title}</h5>
          <p className='card-text'>${info.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Item;
