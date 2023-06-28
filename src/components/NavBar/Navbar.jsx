import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <nav>
      <ul>
        <li tabIndex={1}>Feminino</li>
        <li tabIndex={2}>Masculino</li>
        <li tabIndex={3}>Camisas</li>
        <li tabIndex={4}>Calças</li>
        <li tabIndex={5}>Moletom</li>
        <li tabIndex={6}>Sapatos</li>
      </ul>
      <button className="finalize_purchase">Finalizar compra</button>
      <button className="icon-car-shopping">
        <FontAwesomeIcon className="icone" icon={faCartShopping} />
      </button>
    </nav>
  );
}
