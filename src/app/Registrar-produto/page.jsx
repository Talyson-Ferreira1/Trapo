'use client';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Formik } from 'formik';

import RegisterInfo from '@/components/Register-product/Register-info/Register-product-information';
import RegisterImage from '@/components/Register-product/Register-image/Register-product-image';

import 'react-toastify/dist/ReactToastify.css';
import './style-page-register-product.css';

export default function Register() {
  const [toastMessage, setToastMessage] = useState(false);
  const [finishedLoading, setFinishedLoading] = useState(false);
  const [categoryBasedRendering, setCategoryBasedRendering] = useState({
    Size_Letter:false,
    Size_Number:false,
    Size_Number_with_Letter:false,
  })

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

    product_category:'',
    product_name:'',
    product_price:'',
    product_description:'',
    product_gener:'',
    product_color:{
      color1:{
        id:'',
        hashColor:'#000000'
      },
      color2:{
        id:'',
        hashColor:''
      },
      color3:{
        id:'',
        hashColor:''
      },
      color4:{
        id:'',
        hashColor:''
      },
      color5:{
        id:'',
        hashColor:''
      },
      color6:{
        id:'',
        hashColor:''
      },
    },
    Product_Size_Number_with_Letter: {
      checkbox1:[],
      checkbox2:[],
      checkbox3:[]
    },
    Product_Size_Number:{
      checkbox1:[],
      checkbox2:[],
      checkbox3:[],
      checkbox4:[],
      checkbox5:[],
      checkbox6:[]
    },
    Product_Size_Letter: {
      checkbox1:[],
      checkbox2:[],
      checkbox3:[],
      checkbox4:[]
    },
    
  };

  const validate = (values) => {
    let errors = {};
    const regex = /^\d+(?:[\.,]\d{1,2})?$/gm;
    const array_Size_Number_with_Letter = [
      values.Product_Size_Number_with_Letter.checkbox1,
      values.Product_Size_Number_with_Letter.checkbox2,
      values.Product_Size_Number_with_Letter.checkbox3
    ];
    const array_Size_Letter = [
      values.Product_Size_Letter.checkbox1,
      values.Product_Size_Letter.checkbox2,
      values.Product_Size_Letter.checkbox3,
      values.Product_Size_Letter.checkbox4
    ];
    const array_Size_Number = [
      values.Product_Size_Letter.checkbox1,
      values.Product_Size_Letter.checkbox2,
      values.Product_Size_Letter.checkbox3,
      values.Product_Size_Letter.checkbox4,
      values.Product_Size_Letter.checkbox5,
      values.Product_Size_Letter.checkbox6

    ];
  
    const all_Are_Empty_Array_Number_with_Letter = array_Size_Number_with_Letter.every((value) => Array.isArray(value) && value.length === 0);
    const all_Are_Empty_Array_Letter = array_Size_Letter.every((value) => Array.isArray(value) && value.length === 0);
    const all_Are_Empty_Array_Number = array_Size_Number.every((value) => Array.isArray(value) && value.length === 0);
  
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

    if (categoryBasedRendering.Size_Number_with_Letter && all_Are_Empty_Array_Number_with_Letter) {
      errors.Product_Size_Number_with_Letter = 'Selecione no mínimo uma medida';
    }
    
    if (categoryBasedRendering.Size_Letter && all_Are_Empty_Array_Letter) {
      errors.Product_Size_Letter = 'Selecione no mínimo uma medida';
    }
    
    if (categoryBasedRendering.Size_Number && all_Are_Empty_Array_Number) {
      errors.Product_Size_Number = 'Selecione no mínimo uma medida';
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
      {(formikProps) => {

        useEffect(() => {
          const typeProduct = formikProps.values.product_category;
  
          if (typeProduct !== 'shoes' && typeProduct !== 'hat') {
            setCategoryBasedRendering({
              Size_Letter: true,
              Size_Number: false,
              Size_Number_with_Letter: false,
            });
          } else {
            setCategoryBasedRendering(prevState => ({
              ...prevState,
              Size_Letter: false
            }));
          }
  
          if (typeProduct === 'shoes') {
            setCategoryBasedRendering({
              Size_Letter: false,
              Size_Number: true,
              Size_Number_with_Letter: false,
            });
          } else {
            setCategoryBasedRendering(prevState => ({
              ...prevState,
              Size_Number: false
            }));
          }
  
          if (typeProduct === 'hat') {
            setCategoryBasedRendering({
              Size_Letter: false,
              Size_Number: false,
              Size_Number_with_Letter: true,
            });
          } else {
            setCategoryBasedRendering(prevState => ({
              ...prevState,
              Size_Number_with_Letter: false
            }));
          }
        }, [formikProps.values.product_category]);
  
        return (
          <main>
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
  
            <form onSubmit={formikProps.handleSubmit}>
              <RegisterImage
                formikProps={formikProps}
                reset={finishedLoading}
              />
              <RegisterInfo
                formikProps={formikProps}
                finishLoading={finishedLoading}
                categoryBasedRendering={categoryBasedRendering}
              />
            </form>
          </main>
        );
      }}
    </Formik>
  );
  
}
