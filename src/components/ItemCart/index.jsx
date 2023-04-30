import { UseCartContext } from '../../context/CartContext';
import './itemCart.css';

const ItemCart = ({ product }) => {
  const { removeItem } = UseCartContext();
  const removeProduct = (id) => removeItem(id);

  return (
    <div className='itemCart'>
      <img src={product.image} alt={product.title} />
      <div>
        <p>Título: {product.title}</p>
        <p>Cantidad: {product.quantity}</p>
        <p>Precio u.: {product.price}</p>
        <p>Subtotal: ${product.quantity * product.price}</p>
        <button onClick={() => removeProduct(product.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default ItemCart;
