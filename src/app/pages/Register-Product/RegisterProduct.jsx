'use client';
import { useState } from 'react';
import { getFirestore, collection, setDoc, doc } from 'firebase/firestore';
import { appFirebase } from '@/services/firebase';
import { getProdutos } from '@/app/products/Products';

import UploadImage from '@/app/components/register-product-image/Upload-Image';
import RegisterProductInfo from '@/app/components/register-product-information/register-information';

import './style.css';

export default function Register() {
  const [registerInfoProduct, setRegisterInfoProduct] = useState('');

  const produtos = getProdutos();
  const db = getFirestore(appFirebase);

  /* const SendProductCollection = collection(db, 'Product');
  const docRef = doc(SendProductCollection, 'AllProducts');

  const sendQuestion = async () => {
    try {
      const data = produtos.map((array) => ({ array }));
      await setDoc(docRef, { Product: data });

      console.log('Dados adicionados com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar dados:', error);
    }
  }; */

  const generateProductId = () => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const idLength = 10;
    let id = '';

    for (let i = 0; i < idLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters[randomIndex];
    }

    return id;
  };

  const getProductInformation = (info) => {
    setRegisterInfoProduct(info);
    console.log(info);
  };

  return (
    <main className="container-Register">
      <UploadImage />
      <RegisterProductInfo sendInfo={getProductInformation} />
    </main>
  );
}
