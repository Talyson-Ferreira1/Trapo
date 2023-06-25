import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faPlus } from '@fortawesome/free-solid-svg-icons';

import './style.css';

export default function UploadImages({ formikProps })    {
  const [images, setImages] = useState({});

  const handleImageChange = (fieldName, file) => {
    formikProps.setFieldValue(fieldName, file);
    setImages((prevImages) => ({
      ...prevImages,
      [fieldName]: URL.createObjectURL(file),
    }));
  };

  const renderImagePreview = (fieldName) => {
    const imagePreview = images[fieldName];
    if (imagePreview) {
      return <img className="image-preview" src={imagePreview} alt="Preview" />;
    }
    return null;
  };


  useEffect(() => {
    console.log(images);
  }, [images]);

  return (
    <fieldset>
      <legend>Adicione imagens do produto</legend>
      {formikProps.errors.image && (
        <span className='warning-images'>{formikProps.errors.images}</span>
      )}

      <label className="primary-label">
        <FontAwesomeIcon className="icon-image" icon={faImages} />
        <input
          type="file"
          className="input"
          onChange={(event) =>
            handleImageChange('image_1', event.target.files[0])
          }
        />
         {renderImagePreview('image_1')}
      </label>

      <label className="secondary-label">
        <FontAwesomeIcon className="icon-plus" icon={faPlus} />
        <input
          type="file"
          className="input"
          onChange={(event) =>
            handleImageChange('image_2', event.target.files[0])
          }
        />
         {renderImagePreview('image_2')}
      </label>

      <label className="secondary-label">
        <FontAwesomeIcon className="icon-plus" icon={faPlus} />
        <input
          type="file"
          className="input"
          onChange={(event) =>
            handleImageChange('image_3', event.target.files[0])
          }
        />
         {renderImagePreview('image_3')}
      </label>

      <label className="secondary-label">
        <FontAwesomeIcon className="icon-plus" icon={faPlus} />
        <input
          type="file"
          className="input"
          onChange={(event) =>
            handleImageChange('image_4', event.target.files[0])
          }
        />
         {renderImagePreview('image_4')}
      </label>
    </fieldset>
  );
}

