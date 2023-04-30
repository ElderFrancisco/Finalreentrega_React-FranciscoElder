import { UseCartContext } from '../../context/CartContext';
import ItemCart from '../ItemCart';
import { Link } from 'react-router-dom';
import Title from '../Title';
import styles from './Cart.module.scss';

const Cart = () => {
  const { cart, totalPrice } = UseCartContext();

  if (cart.length === 0) {
    return (
      <>
        <Title texto='Carrito' />
        <p>No hay elementos en el carrito</p>
        <Link to='/'>Hacer compras</Link>
      </>
    );
  } else
    return (
      <div className={styles.container}>
        <Title texto='Carrito' />
        <div>
          {cart.map((product) => (
            <ItemCart key={product.id} product={product} />
          ))}
        </div>
        <p>Total: ${totalPrice()}</p>
        <Link to='/'>Seguir comprando</Link>
        <Link to='/finalizar'>Finalizar compra</Link>
      </div>
    );
};

export default Cart;
