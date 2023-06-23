'use client';
import { useEffect, useState } from 'react';

import { getFirestore, collection, setDoc, doc } from 'firebase/firestore';
import { appFirebase } from '@/services/firebase';

import RegisterProductInfo from '../components/register-product-information/register-information';

import './style.css';

export default function Register() {
  const [currentProduct, setCurrentroduct] = useState({
    product_information: '',
    product_images: '',
  });

  const db = getFirestore(appFirebase);

  const SendProductCollection = collection(db, 'Product');
  const docRef = doc(SendProductCollection, 'AllProducts');

  const sendAllProductInformation = () => {

    console.log("informações enviadas")
  
  };

  const getProductInformation = (info) => {  
    const id = generateProductId();
    sendInformation(id, info)
  };

  const generateProductId = () => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const idLength = 20;
    let id = '';

    for (let i = 0; i < idLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters[randomIndex];
    }

    return id;
  };

  const sendInformation = async (id, produto) => {
    console.log(id);
    console.log(produto);
    let arrayProduct = Object.values(produto);
    try {
      const data = arrayProduct.map((array) => ({ array }));
      await setDoc(docRef, { [id]: [...data] });

      console.log('Dados adicionados com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar dados:', error);
    }
  };



  return (
    <main className="container-Register">
      <RegisterProductInfo sendInfo={getProductInformation} />
    </main>
  );
}
