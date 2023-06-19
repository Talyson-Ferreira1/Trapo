'use client';
import { useEffect, useState } from 'react';

import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { getFirestore, collection, setDoc, doc } from 'firebase/firestore';
import { appFirebase } from '@/services/firebase';

import UploadImage from '@/app/components/register-product-image/Upload-Image';
import RegisterProductInfo from '@/app/components/register-product-information/register-information';

import './style.css';

export default function Register() {
  const [currentProduct, setCurrentroduct] = useState({
    product_information: '',
    product_images: '',
  });

  const db = getFirestore(appFirebase);
  const storage = getStorage(appFirebase);

  const SendProductCollection = collection(db, 'Product');
  const docRef = doc(SendProductCollection, 'AllProducts');

  const sendAllProductInformation = () => {
    let idProduct = generateProductId();

    let arrayCurrentProduct = Object.values(currentProduct);

    if (!arrayCurrentProduct.some((elemento) => elemento === '')) {
      sendInformation(idProduct, currentProduct.product_information);
      uploadImagesToStorage(idProduct, currentProduct.product_images);
    }
  };

  const getProductInformation = (info) => {
    setCurrentroduct((prev) => ({
      ...prev,
      product_information: info,
    }));

    console.log(info);
  };

  const getProductImage = (image) => {
    setCurrentroduct((prev) => ({
      ...prev,
      product_images: image,
    }));

    console.log(image);
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
    /* 
    try {
      const data = produto.map((array) => ({ array }));
      await setDoc(docRef, { Product: data });

      console.log('Dados adicionados com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar dados:', error);
    } */
  };

  const uploadImagesToStorage = async (id, images) => {
    console.log(id);
    console.log(images);

    /*  try {
      // Loop sobre as imagens fornecidas
      for (let i = 0; i < images.length; i++) {
        const image = images[i];
        const storageRef = ref(storage, `images/${idProduct}`); // Gere um ID único para cada imagem

        // Faz o upload da imagem para o Firebase Storage
        await uploadBytes(storageRef, image);
        console.log('Imagem enviada com sucesso!');
      }

      // Todas as imagens foram enviadas
      console.log('Todas as imagens foram enviadas com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar as imagens:', error);
    } */
  };

  useEffect(() => {
    sendAllProductInformation();
  }, [currentProduct]);

  return (
    <main className="container-Register">
      <UploadImage sendImage={getProductImage} />
      <RegisterProductInfo sendInfo={getProductInformation} />
    </main>
  );
}
