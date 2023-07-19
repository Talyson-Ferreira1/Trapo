'use client';
import { useState, useEffect } from 'react';
import {
  getFirestore,
  collection,
  setDoc,
  doc,
  getDoc,
} from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { appFirebase } from '@/services/firebase';
import { Formik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';

import RegisterInfo from '@/components/Register-product/Register-info/Register-product-information';
import RegisterImage from '@/components/Register-product/Register-image/Register-product-image';

import 'react-toastify/dist/ReactToastify.css';
import './style-page-register-product.css';

export default function Register() {
  const [showToast, setShowToast] = useState()
  const [categoryBasedRendering, setCategoryBasedRendering] = useState({
    Group_measure_1: false,
    Group_measure_2: false,
    Group_measure_3: false,
  });
  const db = getFirestore(appFirebase);
  const storage = getStorage(appFirebase);
  const SendProductCollection = collection(db, 'Product');
  const docRef = doc(SendProductCollection, 'AllProducts');

  const generateProductId = (num) => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const idLength = num;
    let id = '';

    for (let i = 0; i < idLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters[randomIndex];
    }

    return id;
  };

  const initialValues = {
    product_category: '',
    product_name: '',
    product_price: '',
    product_description: '',
    product_gener: '',
    product_color: {
      color1: {
        hashColor: '#000000',
      },
      color2: {
        hashColor: undefined,
      },
      color3: {
        hashColor: undefined,
      },
      color4: {
        hashColor: undefined,
      },
      color5: {
        hashColor: undefined,
      },
      color6: {
        hashColor: undefined,
      },
    },
    product_measure: {
      Group_measure_1: {
        checkbox1: [],
        checkbox2: [],
        checkbox3: [],
      },
      Group_measure_2: {
        checkbox1: [],
        checkbox2: [],
        checkbox3: [],
        checkbox4: [],
      },
      Group_measure_3: {
        checkbox1: [],
        checkbox2: [],
        checkbox3: [],
        checkbox4: [],
        checkbox5: [],
        checkbox6: [],
      },
    },
    product_Image: {
      Images1: {
        image_1: null,
        image_2: null,
        image_3: null,
        image_4: null,
      },
      Images2: {
        image_1: null,
        image_2: null,
        image_3: null,
        image_4: null,
      },
      Images3: {
        image_1: null,
        image_2: null,
        image_3: null,
        image_4: null,
      },
      Images4: {
        image_1: null,
        image_2: null,
        image_3: null,
        image_4: null,
      },
      Images5: {
        image_1: null,
        image_2: null,
        image_3: null,
        image_4: null,
      },
      Images6: {
        image_1: null,
        image_2: null,
        image_3: null,
        image_4: null,
      },
    },
  };

  const testIfFilesExist = (values) => {
    //Essa função testa se existe ao menos uma foto carregada

    let existAFile = [];

    let newObjectImages = {
      Group1: values.product_Image.Images1,
      Group2: values.product_Image.Images2,
      Group3: values.product_Image.Images3,
      Group4: values.product_Image.Images4,
      Group5: values.product_Image.Images5,
      Group6: values.product_Image.Images6,
    };

    for (let group in newObjectImages) {
      let currentGroup = newObjectImages[group];

      for (let file in currentGroup) {
        if (!(currentGroup[file] === null)) {
          // || undefined
          existAFile.push(true);
          break;
        }
      }
    }

    return existAFile;
  };

  const testIfCheckboxIsMarked = (values) => {
    //Essa função testa se existe um checkbox marcado

    let existAEmpty = [];

    let newOjectWithCheckbox = {
      measureGroup1: values.product_measure.Group_measure_1,
      measureGroup2: values.product_measure.Group_measure_2,
      measureGroup3: values.product_measure.Group_measure_3,
    };

    for (let group in newOjectWithCheckbox) {
      let currentGroup = newOjectWithCheckbox[group];

      for (let checkbox in currentGroup) {
        if (!(currentGroup[checkbox].length === 0)) {
          existAEmpty.push(true);
          break;
        }
      }
    }

    return existAEmpty;
  };

  const testIfThereIsColor = (values) => {
    let existAColor = [];

    let newObjectOfColors = {
      group1: values.product_color.color1,
      group2: values.product_color.color2,
      group3: values.product_color.color3,
      group4: values.product_color.color4,
      group5: values.product_color.color5,
      group6: values.product_color.color6,
    };

    for (let color in newObjectOfColors) {
      if (newObjectOfColors[color].hashColor != undefined) {
        existAColor.push(true);
      }
    }

    return existAColor;
  };

  const validate = (values) => {
    let errors = {};
    const regex = /^\d+(?:[\.,]\d{1,2})?$/gm;
    const checkboxEmpty = testIfCheckboxIsMarked(values);
    const testForImages = testIfFilesExist(values);
    const existeColor = testIfThereIsColor(values);

    if (!testForImages.some((valor) => valor === true)) {
      errors.images = 'Adicione, no mínimo uma imagem';
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

    if (!values.product_category) {
      errors.product_category = 'Campo obrigatório';
    }

    if (!values.product_description) {
      errors.product_description = 'Campo obrigatório';
    } else if (values.product_description.length < 10) {
      errors.product_description = 'Insira no mínimo 10 caracteres';
    } else if (values.product_description.length > 100) {
      errors.product_description = 'Insira no máximo 100 caracteres';
    }

    if (!values.product_gener) {
      errors.product_gener = 'Campo obrigatório';
    }

    if (checkboxEmpty.length === 0) {
      errors.checkbox = 'Selecione no mínimo uma medida';
    }

    if (!existeColor.some((valor) => valor === true)) {
      errors.product_color = 'selecione no mínimo uma cor';
    }

    return errors;
  };

  const clearMeasure = (values) => {
    //this function clear null measure

    let allMeasure = values;
    let newMeasure;

    for (let group in allMeasure) {
      let currentGroup = allMeasure[group];

      for (let measure in currentGroup) {
        if (currentGroup[measure].length > 0) {
          newMeasure = {
            ...newMeasure,
            [group]: [...(newMeasure?.[group] ?? []), currentGroup[measure][0]],
          };
        }
      }
    }

    return newMeasure;
  };

  const clearColors = (values) => {
    let allColors = values;
    let newColors;

    for (let group in allColors) {
      let currentGroup = allColors[group];

      if (currentGroup.hashColor != undefined) {
        newColors = {
          ...newColors,
          [group]: currentGroup.hashColor,
        };
      }
    }

    return newColors;
  };

  const onSubmit = async (values) => {
    setShowToast(true)
    let id = generateProductId(20);
    let allImages = values.product_Image;

    try {
      let uploadPromises = [];
      let IndexGroup = 0;

      for (let group in allImages) {
        let currentGroup = allImages[group];
        let indexImg = 0;
        const storageRef = ref(storage, `products/${id}/group${IndexGroup}`);

        for (let img in currentGroup) {
          if (currentGroup[img] != null) {
            const imageRef = ref(storageRef, `image_${indexImg}`);
            uploadPromises.push(uploadBytes(imageRef, currentGroup[img]));
          }
          indexImg++;
        }
        IndexGroup++;
      }

      await Promise.all(uploadPromises);

      let newProductColor = clearColors(values.product_color);
      let newProductMeasure = clearMeasure(values.product_measure);

      let product_information = {
        product_category: values.product_category,
        product_name: values.product_name,
        product_price: values.product_price,
        product_description: values.product_description,
        product_gener: values.product_gener,
        product_color: newProductColor,
        product_measure: newProductMeasure,
      };

      const docSnapshot = await getDoc(docRef);
      const existingData = docSnapshot.exists() ? docSnapshot.data() : {};

      const newData = {
        ...existingData,
        [id]: {
          ...product_information,
        },
      };

      await setDoc(docRef, newData);
      toast.success('Produto cadastrado');
    } catch (error) {
      toast.error('Erro ao cadastrar o produto');
      console.log('Producto não foi cadastrado ', error);
    }
  };

  const useCategoryBasedRendering = (productCategory) => {
    const [categoryBasedRendering, setCategoryBasedRendering] = useState({
      Group_measure_1: false,
      Group_measure_2: false,
      Group_measure_3: false,
    });

    useEffect(() => {
      let updatedRendering = {
        Group_measure_1: false,
        Group_measure_2: false,
        Group_measure_3: false,
      };

      if (productCategory !== 'shoes' && productCategory !== 'hat') {
        updatedRendering.Group_measure_2 = true;
      }

      if (productCategory === 'shoes') {
        updatedRendering.Group_measure_3 = true;
      }

      if (productCategory === 'accessories') {
        updatedRendering.Group_measure_1 = true;
      }

      setCategoryBasedRendering(updatedRendering);
    }, [productCategory]);

    return categoryBasedRendering;
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

  useEffect(()=>{
    if(toast){
      setTimeout(()=>{
        setShowToast(false)

      },6000)
    }
  },[showToast])

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={(values, formikBag) => {
        onSubmit(values);
        formikBag.resetForm();
      }}
    >
      {(formikProps) => {
        const categoryBasedRendering = useCategoryBasedRendering(
          formikProps.values.product_category
        );

        return (
          <main>
            {showToast &&(

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
            <form onSubmit={formikProps.handleSubmit}>
              <RegisterImage formikProps={formikProps} />
              <RegisterInfo
                formikProps={formikProps}
                categoryBasedRendering={categoryBasedRendering}
              />
            </form>
          </main>
        );
      }}
    </Formik>
  );
}
