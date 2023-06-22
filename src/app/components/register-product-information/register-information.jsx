'use client';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import './style.css';

export default function RegisterProductInfo({ sendInfo, listenerSubmit }) {
  const [errors, setErrors] = useState({});

  const initialValues = {
    name_product: '',
    price_product: '',
    description_product: '',
    category_product: '',
    gener_product: '',
  }

  const onSubmit = values => {
    console.log(values)
  }

  const validate = values => {
    let errors = {}

    if(!values.name_product){
      errors.name_product = "Campo obrigatório"
    }else if(values.name_product < 5){
      errors.name_product = "O nome deve conter no mínimo 5 caracteres"

    }

    if(!values.price_product){
      errors.price_product = "Campo obrigatório"
    }

    if(!values.description_product){
      errors.description_product = "Campo obrigatório"
    }

    if(!values.category_product){
      errors.category_product = "Campo obrigatório"
    }

    if(!values.gener_product){
      errors.gener_product = "Campo obrigatório"
    }

    return errors;
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });
  


  return (
    <section className="form-info-poduct">
      <h2>Informações do produto</h2>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name-product">Nome:</label>
        <input
          type="text"
          className="name-product"
          id="name-product"
          name="name_product"
          placeholder="Camisa vermelha"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name_product}
        />
        {(formik.touched.name_product && formik.errors.name_product) && (
          <span className="warning">{formik.errors.name_product}</span>
        )}

        <label htmlFor="price-product">Preço:</label>
        <input
          type="text"
          className="price-product"
          id="price-product"
          name="price_product"
          placeholder="20,99"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price_product}
        />
        {(formik.touched.price_product && formik.errors.price_product) && (
          <span className="warning">{formik.errors.price_product}</span>
        )}

        <label htmlFor="description-product">Descrição:</label>
        <textarea
          id="description-product"
          name="description_product"
          className="description-product"
          rows="4"
          cols="50"
          placeholder="descreva o produto"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description_product}
        ></textarea>
        {(formik.touched.description_product && formik.errors.description_product) && (
          <span className="warning">{formik.errors.description_product}</span>
        )}

        <label htmlFor="category-product">Categoria:</label>
        <select
          className="category-product"
          id="category-product"
          name="category_product"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.category_product}
        >
          <option value="" disabled defaultValue hidden>
            Selecione uma categoria
          </option>
          <option value="blusas">Blusas</option>
          <option value="calcas">Calças</option>
          <option value="sapatos">Sapatos</option>
          <option value="moletons">Moletons</option>
          <option value="chapeus">chapeis</option>
        </select>
        {(formik.touched.category_product && formik.errors.category_product) && (
          <span className="warning">{formik.errors.category_product}</span>
        )}

        <label htmlFor="gener-product">Genero:</label>
        <select
          className="gener-product"
          id="gener-product"
          name="gener_product"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.gener_product}
        >
          <option value="" disabled defaultValue hidden>
            Selecione o gênero
          </option>{' '}
          <option value="Feminino">Feminino</option>
          <option value="Masculino">Masculino</option>
          <option value="Unissex">Unissex</option>
        </select>
        {(formik.touched.gener_product && formik.errors.gener_product) && (
          <span className="warning">{formik.errors.gener_product}</span>
        )}

        <input
          type="submit"
          className="send-description-product"
          onClick={() => validate(formik.values)}
        />
      </form>
    </section>
  );
}

RegisterProductInfo.propTypes = {
  sendInfo: PropTypes.func.isRequired,
  listenerSubmit: PropTypes.func.isRequired,
};
