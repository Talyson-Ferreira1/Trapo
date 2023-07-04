'use client';
import { Formik } from 'formik';
import { useState, useEffect } from 'react';
import './style.searchProduct.css';

export default function Search_Product({nameProduct}) {
  const initialValues = {
    inputSeach: '',
  };

  const handleSubmit = (values) => {
    nameProduct(values)
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit} className="container-search-info">
          <h1>Mude seu guarda-roupa com estilo.</h1>
          <div className="container-input">
            <div className="container-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#737373"
                width="1.5rem"
                height="1.5rem"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </div>
            <input
              type="text"
              name="inputSeach"
              placeholder="O que você procura?"
              onChange={handleChange}
            />
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="white"
                width="1.2rem"
                height="1.2rem"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}
