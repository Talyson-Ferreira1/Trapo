import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

import './style.css';

export default function UploadImages({ formikProps, reset }) {
  const [imageFiles, setImageFiles] = useState({});
  const imageInputs = useRef([]);

  const handleImageChange = (fieldName, file) => {
    formikProps.setFieldValue(fieldName, file);
    setImageFiles((prevFiles) => ({
      ...prevFiles,
      [fieldName]: file,
    }));
  };

  const renderImagePreview = (fieldName) => {
    const file = imageFiles[fieldName];
    if (file) {
      const imagePreview = URL.createObjectURL(file);
      return (
        <div className="container-image-preview">
          <img className="image-preview" src={imagePreview} alt="Preview" />
        </div>
      );
    }
    return null;
  };

  const handleInputFocus = (index) => {
    const labels = document.getElementsByClassName('label');
    for (let i = 0; i < labels.length; i++) {
      labels[i].classList.remove('focused');
    }
    if (labels[index]) {
      labels[index].classList.add('focused');
    }
  };

  useEffect(() => {
    if (reset) {
      setImageFiles({});
      imageInputs.current.forEach((input) => {
        input.value = ''; // Limpa o valor do input
      });
    }
  }, [reset]);

  return (
    <fieldset className="fieldset-image">
      <legend>Adicione imagens do produto</legend>
      {formikProps.touched.image_1 && formikProps.errors.images && (
        <span className="warning-images">{formikProps.errors.images}</span>
      )}

      <div className="container-inputs">
        <label htmlFor="image_1" className="label primary-label">
          <FontAwesomeIcon className="icon-image" icon={faImages} />
          <span className="instrunction-image">
            <strong>Carregue uma imagem</strong>
            <br />
            ou arraste e solte
          </span>
          <input
            type="file"
            tabIndex={7}
            name="image_1"
            className="input_1 input"
            accept=".jpg, .jpeg, .png, .webp"
            onChange={(event) =>
              handleImageChange('image_1', event.target.files[0])
            }
            ref={(input) => (imageInputs.current[0] = input)}
            onFocus={() => handleInputFocus(0)}
            onBlur={() => handleInputFocus(-1)}
          />
          {renderImagePreview('image_1')}
        </label>

        <label htmlFor="image_2" className="label secondary-label">
          <FontAwesomeIcon className="icon-plus" icon={faPlus} />
          <input
            type="file"
            tabIndex={8}
            name="image_2"
            className="input"
            accept=".jpg, .jpeg, .png, .webp"
            onChange={(event) =>
              handleImageChange('image_2', event.target.files[0])
            }
            ref={(input) => (imageInputs.current[1] = input)}
            onFocus={() => handleInputFocus(1)}
            onBlur={() => handleInputFocus(-1)}
          />
          {renderImagePreview('image_2')}
        </label>

        <label htmlFor="image_3" className="label secondary-label">
          <FontAwesomeIcon className="icon-plus" icon={faPlus} />
          <input
            type="file"
            tabIndex={9}
            name="image_3"
            className="input"
            accept=".jpg, .jpeg, .png, .webp"
            onChange={(event) =>
              handleImageChange('image_3', event.target.files[0])
            }
            ref={(input) => (imageInputs.current[2] = input)}
            onFocus={() => handleInputFocus(2)}
            onBlur={() => handleInputFocus(-1)}
          />
          {renderImagePreview('image_3')}
        </label>

        <label htmlFor="image_4" className="label secondary-label">
          <FontAwesomeIcon className="icon-plus" icon={faPlus} />
          <input
            type="file"
            tabIndex={10}
            className="input"
            name="image_4"
            accept=".jpg, .jpeg, .png, .webp"
            onChange={(event) =>
              handleImageChange('image_4', event.target.files[0])
            }
            ref={(input) => (imageInputs.current[3] = input)}
            onFocus={() => handleInputFocus(3)}
            onBlur={() => handleInputFocus(-1)}
          />
          {renderImagePreview('image_4')}
        </label>
      </div>
    </fieldset>
  );
}
