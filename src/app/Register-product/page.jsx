'use client';
import { useEffect, useState } from 'react';
import {
  getFirestore,
  collection,
  setDoc,
  doc,
  getDoc,
} from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { appFirebase } from '@/services/firebase';
import { ToastContainer, toast } from 'react-toastify';
import { Formik } from 'formik';

import RegisterProductInfo from '../components/Register-product-components/Product-Information/Product-Information';
import RegisterProductImage from '../components/Register-product-components/Product-Images/Upload-images';

import 'react-toastify/dist/ReactToastify.css';
import './style.css';

export default function Register() {
  const [toastMessage, setToastMessage] = useState(false);
  const [submitImage, setSubmitImage] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({
    productInformation: '',
    productImages: '',
  });

  const db = getFirestore(appFirebase);
  const storage = getStorage(appFirebase);

  const SendProductCollection = collection(db, 'Product');
  const docRef = doc(SendProductCollection, 'AllProducts');

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

  const sendImages = async (id, images) => {
    try {
      const storageRef = ref(storage, `products/${id}`);

      let image1 = images.image_1;
      let image2 = images.image_2;
      let image3 = images.image_3;
      let image4 = images.image_4;

      if (image1 !== '') {
        const imageRef = ref(storageRef, `image_1`);
        uploadBytes(imageRef, images.image_1);
      }

      if (image2 !== '') {
        const imageRef = ref(storageRef, `image_2`);
        uploadBytes(imageRef, images.image_2);
      }

      if (image3 !== '') {
        const imageRef = ref(storageRef, `image_3`);
        uploadBytes(imageRef, images.image_3);
      }

      if (image4 !== '') {
        const imageRef = ref(storageRef, `image_4`);
        uploadBytes(imageRef, images.image_4);
      }

      await Promise.all(uploadPromises);

      console.log('Todas as imagens foram enviadas com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar as imagens:', error);
    }
  };


  toast.success({
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });

  toast.error({
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });

  const initialValues = {
    image_1: null,
    image_2: null,
    image_3: null,
    image_4: null,
  };

  const validate = (values) => {
    let errors = {}

    if(values.image_1 && values.image_2 && values.image_3 && values.image_4 === null ){
      errors.image = "Adicione no mínimo uma imagem"
    }

    return errors
  }

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
     
      {formikProps => (

        <form onSubmit={formikProps.handleSubmit}>
           {toastMessage && (
              <ToastContainer
                className="toast-position"
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
          <RegisterProductImage formikProps={formikProps}/>
          <RegisterProductInfo  />
          {console.log(formikProps.values)}

          <input style={{position:'absolute'}} type="submit" />
        </form>
      )}
    </Formik>
  );
}
