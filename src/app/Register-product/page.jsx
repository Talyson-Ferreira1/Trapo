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

  /*   const generateProductId = () => {
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
 */

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
    product_name: '',
    product_price: '',
    product_description: '',
    product_category: '',
    product_gener: '',
    checkbox_value_1: [],
    checkbox_value_2: [],
    checkbox_value_3: [],
    checkbox_value_4: [],
  };

  const validate = (values) => {
    let errors = {};
    const regex = /^\d+(?:[\.,]\d{1,2})?$/gm;
    const arrayCheckbox = [
      values.checkbox_value_1,
      values.checkbox_value_2,
      values.checkbox_value_3,
      values.checkbox_value_4,
    ];
    const allAreEmpty = arrayCheckbox.every(
      (value) => Array.isArray(value) && value.length === 0
    );

    if (
      values.image_1 === null &&
      values.image_2 === null &&
      values.image_3 === null &&
      values.image_4 === null
    ) {
      errors.images = 'Deve haver no mínimo uma imagem';
    }

    if (!values.product_name) {
      errors.product_name = 'Campo obrigatório';
    } else if (values.product_name.length < 5) {
      errors.product_name = 'O nome deve conter no mínimo 5 caracteres';
    }

    if (!values.product_price) {
      errors.product_price = 'Campo obrigatório';
    } else if (!regex.test(values.product_price)) {
      errors.product_price = 'Insira um valor numérico válido';
    }

    if (!values.product_description) {
      errors.product_description = 'Campo obrigatório';
    } else if (values.product_description.length < 10) {
      errors.product_description = 'Insira no mínimo 10 caracteres';
    } else if (values.product_description.length > 100) {
      errors.product_description = 'Insira no máximo 100 caracteres';
    }

    if (!values.product_category) {
      errors.product_category = 'Campo obrigatório';
    }

    if (allAreEmpty) {
      errors.product_size = 'Selecione no mínimo uma medida';
    }

    if (!values.product_gener) {
      errors.product_gener = 'Campo obrigatório';
    }

    return errors;
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {(formikProps) => (
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
          <RegisterProductImage formikProps={formikProps} />
          <RegisterProductInfo formikProps={formikProps} />
          <div className="backgorund-fieldset"></div>
        </form>
      )}
    </Formik>
  );
}
