import Title from '../Title';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import db from '../../../db/firestore';
import styles from './ItemBuyContainer.module.scss';
import { UseCartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';

const ItemBuyContainer = () => {
  const itemsRef = collection(db, 'datos');
  const { cart, totalPrice, clearCart } = UseCartContext();

  const [inputNombre, setInputNombre] = useState('');
  const [inputApellido, setInputApellido] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputTelefono, setInputTelefono] = useState(0);
  const [inputDireccion, setInputDireccion] = useState('');
  const [inputTarjeta, setInputTarjeta] = useState(0);

  const handleInputNombre = (e) => {
    setInputNombre(e.target.value);
    console.log(inputNombre);
  };
  const handleInputApellido = (e) => {
    setInputApellido(e.target.value);
  };
  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };
  const handleInputTelefono = (e) => {
    setInputTelefono(e.target.value);
  };
  const handleInputDireccion = (e) => {
    setInputDireccion(e.target.value);
  };
  const handleInputTarjeta = (e) => {
    setInputTarjeta(e.target.value);
  };

  const agregarDatos = async (e) => {
    e.preventDefault();
    const datos = {
      nombre: inputNombre,
      apellido: inputApellido,
      email: inputEmail,
      telefono: inputTelefono,
      direccion: inputDireccion,
      tarjeta: inputTarjeta,
      cart: cart,
      total: totalPrice(),
    };
    await addDoc(itemsRef, datos);
    clearCart();
  };

  const redirect = async () => {
    Swal.fire(
      `Gracias por su compra ${inputNombre} ${inputApellido}!`,
      `El total de su compra fue $${totalPrice()}`,
    );
  };

  return (
    <div className={styles.container}>
      <Title title='Finalizar compra' />
      <form onSubmit={agregarDatos}>
        <label htmlFor='nombre'>Nombre</label>
        <input
          type='text'
          id='nombre'
          onChange={handleInputNombre}
          name='nombre'
        />
        <label htmlFor='apellido'>Apellido</label>
        <input
          type='text'
          id='apellido'
          onChange={handleInputApellido}
          name='apellido'
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          onChange={handleInputEmail}
          name='email'
        />
        <label htmlFor='telefono'>Telefono</label>
        <input
          type='number'
          id='telefono'
          onChange={handleInputTelefono}
          name='telefono'
        />
        <label htmlFor='direccion'>Direccion</label>
        <input
          type='text'
          id='direccion'
          onChange={handleInputDireccion}
          name='direccion'
        />
        <label>Tarjeta</label>
        <input
          type='number'
          id='Tarjeta'
          onChange={handleInputTarjeta}
          name='Tarjeta'
        />
        <button type='submit' onClick={redirect}>
          Finalizar compra
        </button>
      </form>
    </div>
  );
};

export default ItemBuyContainer;
