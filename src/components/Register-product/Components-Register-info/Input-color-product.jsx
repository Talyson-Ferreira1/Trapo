import React, { useDeferredValue, useEffect, useRef, useState } from 'react';
import { useColorContext } from '@/context/ActiveColors/ColorsProvider';

export default function InputColorProduct({ formikProps }) {
  const containerInputsRef = useRef(null);
  const [inputCount, setInputCount] = useState(1);
  const { numberActiveColor } = useColorContext();

  const createNewInput = () => {
    if (inputCount < 6) {
      const newInputCount = inputCount + 1;
      const fieldName = `product_color.color${newInputCount}`;

      setInputCount(newInputCount);

      formikProps.setFieldValue(fieldName, {
        hashColor: '#000000',
      });
    }
  };

  const deleteLastInput = () => {
    if (inputCount > 1) {
      const newInputCount = inputCount - 1;

      setInputCount(newInputCount);

      const lastFieldName = `product_color.color${newInputCount + 1}`;

      formikProps.setFieldValue(lastFieldName, {
        hashColor: undefined,
      });
    }
  };

  const handleColorChange = (fieldName, color) => {
    formikProps.setFieldValue(fieldName, {
      hashColor: color,
    });
  };

  useEffect(() => {
    const activeColorCount = Object.keys(
      formikProps.values.product_color
    ).filter(
      (key) => formikProps.values.product_color[key].hashColor !== undefined
    ).length;
    setInputCount(activeColorCount);
  }, [formikProps.values.product_color]);

  useEffect(() => {
    if (numberActiveColor > inputCount) {
      createNewInput();
    }
    if (numberActiveColor < inputCount) {
      deleteLastInput();
    }
  }, [numberActiveColor]);

  return (
    <div className="container-input container-product-color">
      <label htmlFor="product_color">Cores disponíveis</label>

      <div ref={containerInputsRef} className="container-input-color">
        {[...Array(inputCount)].map((_, index) => {
          const fieldName = `product_color.color${index + 1}`;
          const fieldValue = formikProps.values.product_color[fieldName] || {
            hashColor: '',
          };

          return (
            <div key={fieldName} className="input-color-container">
              <input
                type="color"
                name={fieldName}
                className="product_color"
                onChange={(e) => handleColorChange(fieldName, e.target.value)}
                onBlur={formikProps.handleBlur}
                title="Alterar a cor"
              />
              <div
                className="color-preview"
                style={{ backgroundColor: fieldValue.hashColor }}
              ></div>
            </div>
          );
        })}
        <div className="container-button-inp-color">
          <button
            type="button"
            title="Adicione outra cor"
            className="addMoreColor"
            onClick={createNewInput}
          >
            +
          </button>
          {inputCount > 1 && (
            <button
              type="button"
              title="Excluir última cor"
              className="deleteLastColor"
              onClick={deleteLastInput}
            >
              -
            </button>
          )}
        </div>
      </div>

      {formikProps.touched.product_color &&
        formikProps.errors.product_color && (
          <span className="warning">{formikProps.errors.product_color}</span>
        )}
    </div>
  );
}
