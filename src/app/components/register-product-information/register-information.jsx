'use client';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import './style.css';
import { useEffect, useState } from 'react';

export default function RegisterProductInfo({ sendInfo }) {

  const [errors, setErrors] = useState({})


  const formik = useFormik({
    initialValues: {
      name_product: '',
      price_product: '',
      description_product: '',
      category_product: '',
      gener_product: '',
    },
  });
  
  const validate = (values) => {

    setErrors({
      name_product: '',
      price_product: '',
      description_product: '',
      category_product: '',
      gener_product: '',
    });

    if (values.name_product === '' || values.name_product.length < 5) {
      setErrors((prev) => ({
        ...prev,
        name_product: 'Adicione no mínimo 5 caracteres',
      }));
    }
  
    const priceRegex = /^\d+(\.\d{1,2})?$/;
    if (!priceRegex.test(values.price_product)) {
      setErrors((prev) => ({
        ...prev,
        price_product: 'Insira um valor numérico válido para o preço',
      }));
    }
  
    if (values.description_product.length < 10) {
      setErrors((prev) => ({
        ...prev,
        description_product: 'Adicione no mínimo 10 caracteres',
      }));
    }
  
    if (values.category_product === '') {
      setErrors((prev) => ({
        ...prev,
        category_product: 'Selecione uma categoria',
      }));
    }
  
    if (values.gener_product === '') {
      setErrors((prev) => ({
        ...prev,
        gener_product: 'Selecione um gênero',
      }));
    }
  };

  useEffect(() => {
    const errorValues = Object.values(errors);
    const hasError = errorValues.map(function(elemento) {
      if(elemento == false){
        return false
      }else{
        return true
      }
      
    });

    if(hasError.some((elemento) => elemento === true)){
      console.log("possui erros")
      
    }else {
      sendInfoToDataBase()
    }

  },[errors])
  
 
  
  

  const sendInfoToDataBase = (event) => {
    sendInfo(formik.values);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
  };

  return (
    
    <section className="form-info-poduct">
      <h2>Informações do produto</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name-product">Nome:</label>
        <input
          type="text"
          className="name-product"
          id="name-product"
          name="name_product"
          placeholder="Camisa vermelha"
          onChange={formik.handleChange}
          value={formik.values.name_product}
        />
        {errors.name_product && <span className="warning">{errors.name_product}</span>}

        <label htmlFor="price-product">Preço:</label>
        <input
          type="text"
          className="price-product"
          id="price-product"
          name="price_product"
          placeholder="20,99"
          onChange={formik.handleChange}
          value={formik.values.price_product}
        />
        {errors.price_product && <span className="warning">{errors.price_product}</span>}

        <label htmlFor="description-product">Descrição:</label>
        <textarea
          id="description-product"
          name="description_product"
          className="description-product"
          rows="4"
          cols="50"
          placeholder="descreva o produto"
          onChange={formik.handleChange}
          value={formik.values.description_product}
        ></textarea>
         {errors.description_product && <span className="warning">{errors.description_product}</span>}

        <label htmlFor="category-product">Categoria:</label>
        <select
          className="category-product"
          id="category-product"
          name="category_product"
          onChange={formik.handleChange}
          value={formik.values.category_product}
        >
          <option value="" disabled selected hidden>
            Selecione uma categoria
          </option>
          <option value="blusas">Blusas</option>
          <option value="calcas">Calças</option>
          <option value="sapatos">Sapatos</option>
          <option value="moletons">Moletons</option>
          <option value="chapeus">chapeis</option>
        </select>
        {errors.category_product && <span className="warning">{errors.category_product}</span>}

        <label htmlFor="gener-product">Genero:</label>
        <select
          className="gener-product"
          id="gener-product"
          name="gener_product"
          onChange={formik.handleChange}
          value={formik.values.gener_product}
        >
          <option value="" disabled selected hidden>
            Selecione o gênero
          </option>{' '}
          <option value="Feminino">Feminino</option>
          <option value="Masculino">Masculino</option>
          <option value="Unissex">Unissex</option>
        </select>
        {errors.gener_product && <span className="warning">{errors.gener_product}</span>}

        <input
          type="submit"
          className="send-description-product"
          onClick={() => validate(formik.values)}        />
      </form>
    </section>
  );
}

RegisterProductInfo.propTypes = {
  sendInfo: PropTypes.func.isRequired,
};
