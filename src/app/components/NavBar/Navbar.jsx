import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <nav>
      <ul>
        <li>Feminino</li>
        <li>Masculino</li>
        <li>Camisas</li>
        <li>Calças</li>
        <li>Moletom</li>
        <li>Sapatos</li>
      </ul>
      <button className="finalize_purchase">Finalizar compra</button>
      <button className="icon-car-shopping">
        <FontAwesomeIcon className="icone" icon={faCartShopping} />
      </button>
    </nav>
  );
}
