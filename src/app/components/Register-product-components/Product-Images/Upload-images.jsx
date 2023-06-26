import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

import './style.css';

export default function UploadImages({ formikProps }) {
  const [imageFiles, setImageFiles] = useState({});

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
        <div className='container-image-preview'>
          <img className="image-preview" src={imagePreview} alt="Preview" />
        </div>
      );
    }
    return null;
  };

  return (
    <fieldset className='fieldset-image'>
      <legend>Adicione imagens do produto</legend>
      {formikProps.errors.images && (
        <span className='warning-images'>{formikProps.errors.images}</span>
      )}

      <label htmlFor='image_1' className="primary-label">
        <FontAwesomeIcon className="icon-image" icon={faImages} />
        <input
          type="file"
          className="input"
          name='image_1'
          accept=".jpg, .jpeg, .png, .webp"
          onChange={(event) =>
            handleImageChange('image_1', event.target.files[0])
          }
        />
        {renderImagePreview('image_1')}
      </label>

      <label htmlFor='image_2' className="secondary-label">
        <FontAwesomeIcon className="icon-plus" icon={faPlus} />
        <input
          type="file"
          className="input"
          name='image_2'
          accept=".jpg, .jpeg, .png, .webp"
          onChange={(event) =>
            handleImageChange('image_2', event.target.files[0])
          }
        />
        {renderImagePreview('image_2')}
      </label>

      <label htmlFor='image_3' className="secondary-label">
        <FontAwesomeIcon className="icon-plus" icon={faPlus} />
        <input
          type="file"
          className="input"
          name='image_3'
          accept=".jpg, .jpeg, .png, .webp"
          onChange={(event) =>
            handleImageChange('image_3', event.target.files[0])
          }
        />
        {renderImagePreview('image_3')}
      </label>

      <label htmlFor='image_4' className="secondary-label">
        <FontAwesomeIcon className="icon-plus" icon={faPlus} />
        <input
          type="file"
          className="input"
          name='image_4'
          accept=".jpg, .jpeg, .png, .webp"
          onChange={(event) =>
            handleImageChange('image_4', event.target.files[0])
          }
        />
        {renderImagePreview('image_4')}
      </label>
    </fieldset>
  );
}
