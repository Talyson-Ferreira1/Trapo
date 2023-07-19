import { useEffect, useRef, useState } from 'react';

import InputCategoryProduct from '../Components-Register-info/Input-category-product';
import InputNameProduct from '../Components-Register-info/Input-name-product';
import InputPriceProduct from '../Components-Register-info/Input-price-product';
import InputDescriptionProduct from '../Components-Register-info/Input-Description-product';
import InputGenerProduct from '../Components-Register-info/Input-Gener-product';
import InputColorProduct from '../Components-Register-info/Input-color-product';
import RenderInput from '../Components-Register-info/renderInput';
import Submit from '../Components-Register-info/Button-submit';

import './style-register-info.css';

export default function ProductInfo({ formikProps, categoryBasedRendering }) {
  const [
    renderInputsAfterDefiningCategory,
    setRenderInputsAfterDefiningCategory,
  ] = useState(true);
  const [isActiveForSend, setIsActiveForSend] = useState(false);
  const toDownButton = useRef(null);
  const toUpButton = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    // manipula a lógica dos botões de scroll

    const handleScroll = (index) => {
      const containerInputs = container.current;
      const maxHeightScroll =
        containerInputs.scrollHeight - containerInputs.offsetHeight;

      if (containerInputs.scrollTop === maxHeightScroll) {
        toDownButton.current.classList.add('hiddem');
        toUpButton.current.classList.remove('hiddem');
      }

      if (containerInputs.scrollTop === 0) {
        toUpButton.current.classList.add('hiddem');
        toDownButton.current.classList.remove('hiddem');
      }

      index === 1 && (containerInputs.scrollTop = containerInputs.scrollHeight);
      index === 2 && (containerInputs.scrollTop = 0);
    };

    container.current.addEventListener('scroll', handleScroll);

    toDownButton.current.addEventListener('click', () => {
      handleScroll(1);
    });

    toUpButton.current.addEventListener('click', () => {
      handleScroll(2);
    });
  }, []);

  useEffect(() => {
    if (Object.values(formikProps.errors).length === 0) {
      setIsActiveForSend(true);
    } else {
      setIsActiveForSend(false);
    }
  }, [formikProps.errors]);

  useEffect(() => {
    if (formikProps.values.product_category === '') {
      setRenderInputsAfterDefiningCategory(true);
    } else {
      setRenderInputsAfterDefiningCategory(false);
    }

    formikProps.setValues({
      ...formikProps.initialValues,
      product_category: formikProps.values.product_category,
    });
  }, [formikProps.values.product_category]);

  return (
    <fieldset ref={container} className="fieldset-Info">
      <h2>Informações do produto </h2>

      {renderInputsAfterDefiningCategory && <div className="blockInputs"></div>}
      <div className="container-all-inputs">
        <InputCategoryProduct formikProps={formikProps} />

        <InputNameProduct formikProps={formikProps} />

        <InputPriceProduct formikProps={formikProps} />

        <InputGenerProduct formikProps={formikProps} />

        <InputDescriptionProduct formikProps={formikProps} />

        <RenderInput
          formikProps={formikProps}
          render={categoryBasedRendering}
        />
        <InputColorProduct formikProps={formikProps} />

        <Submit formikProps={formikProps} active={isActiveForSend} />

        <div ref={toDownButton} className="down">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5em"
            viewBox="0 0 448 512"
          >
            <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </div>

        <div ref={toUpButton} className="up hiddem">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5em"
            viewBox="0 0 448 512"
          >
            <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </div>
      </div>
    </fieldset>
  );
}
