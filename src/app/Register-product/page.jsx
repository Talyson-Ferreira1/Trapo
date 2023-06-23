'use client';
import { useEffect, useState } from 'react';
import { getFirestore, collection, setDoc, doc, getDoc } from 'firebase/firestore';
import { appFirebase } from '@/services/firebase';
import { ToastContainer, toast } from 'react-toastify';

import RegisterProductInfo from '../components/register-product-information/register-information';
import RegisterProductImage from '../components/register-product-image/Upload-Image';

import 'react-toastify/dist/ReactToastify.css';
import './style.css';

export default function Register() {
  const [toastMessage, setToastMessage] = useState(false)
  const [submitImage, setSubmitImage] = useState(false)
  const [currentProduct, setCurrentProduct] = useState({
    productInformation:"",
    productImage:""
  })
  

  const db = getFirestore(appFirebase);

  const SendProductCollection = collection(db, 'Product');
  const docRef = doc(SendProductCollection, 'AllProducts');

  const sendAllProductInformation = () => {
    const id = generateProductId();
    sendInformation(id, currentProduct.productInformation)

  };

  const getProductInformation = (info) => {  
    setCurrentProduct(prev => ({
      ...prev,
      productInformation: info
    }))

    setSubmitImage(true)
  };

  useEffect(()=>{

    if(currentProduct.productInformation !== ""){
      console.log(currentProduct.productInformation)

    }
    
    if(currentProduct.productImage !== ""){
      console.log(currentProduct.productImage)
      
    }


  },[currentProduct])

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

    setToastMessage(true)

    try {
      const docSnapshot = await getDoc(docRef);
      const existingData = docSnapshot.exists() ? docSnapshot.data() : {};
  
      const newData = {
        ...existingData,
        [id]: {
          ...produto,
        },
      };
  
      await setDoc(docRef, newData);
  
      console.log('Dados adicionados com sucesso!');
      toast.success('Produto cadastrado');

    } catch (error) {
      console.error('Erro ao adicionar dados:', error);
      toast.error('Erro ao cadastrar');

    }
  };

  toast.success({
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

  toast.error( {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

    
  return (
    <main className="container-Register">

      {(toastMessage)&&(

        <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
      )}
      <RegisterProductImage submit={submitImage} />
      <RegisterProductInfo sendInfo={getProductInformation} />
    </main>
  );
}
