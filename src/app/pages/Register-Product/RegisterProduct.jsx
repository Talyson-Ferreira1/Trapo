'use client';
import { useState } from 'react';

import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { getFirestore, collection, setDoc, doc } from 'firebase/firestore';
import { appFirebase } from '@/services/firebase';

import UploadImage from '@/app/components/register-product-image/Upload-Image';
import RegisterProductInfo from '@/app/components/register-product-information/register-information';

import './style.css';

export default function Register() {
  const [registerInfoProduct, setRegisterInfoProduct] = useState({});
  const [registerImageProduct, setRegisterImageProduct] = useState({});

  const db = getFirestore(appFirebase);
  const storage = getStorage(appFirebase);

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


// Função para enviar imagens para o Firebase Storage
const uploadImagesToStorage = async (images) => {

  try {
    // Loop sobre as imagens fornecidas
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const storageRef = ref(storage, `images/${generateImageId()}`); // Gere um ID único para cada imagem

      // Faz o upload da imagem para o Firebase Storage
      await uploadBytes(storageRef, image);
      console.log('Imagem enviada com sucesso!');
    }

    // Todas as imagens foram enviadas
    console.log('Todas as imagens foram enviadas com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar as imagens:', error);
  }
};

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

  const getProductImage = (image) => {
    setRegisterImageProduct(image);
    console.log(image);
  };

  return (
    <main className="container-Register">
      <UploadImage sendImage={getProductImage} />
      <RegisterProductInfo sendInfo={getProductInformation} />
    </main>
  );
}
