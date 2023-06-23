import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';

import './style.css';

export default function UploadImage({ submit, sendImage }) {
  const [images, setImages] = useState({});

  const initialValues = {
    image_1: '',
    image_2: '',
    image_3: '',
    image_4: '',
  };

  const onSubmit = async (values) => {
    await sendImage(values);
    console.log(values);
  };

  const validate = (values) => {};

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  useEffect(() => {
    if (submit) {
      formik.handleSubmit();
    }
  }, [submit]);

  const handleImageChange = (fieldName, file) => {
    formik.setFieldValue(fieldName, file);
    setImages((prevImages) => ({
      ...prevImages,
      [fieldName]: URL.createObjectURL(file),
    }));
  };

  const renderImagePreview = (fieldName) => {
    const imagePreview = images[fieldName];
    if (imagePreview) {
      return <img src={imagePreview} alt="Preview" />;
    }
    return null;
  };

  return (
    <section className="container-upload-image">
      <h2>Adicione imagens do produto</h2>

      <form className="images-uploaded">
        <label htmlFor="image_1" className="primary-input-label">
          <div className="container-icon-image-upload">
            <FontAwesomeIcon className="icon-image-upload" icon={faImages} />
          </div>

          <span className="text-icon-image-upload">Escolha uma imagem</span>

          <input
            type="file"
            name="image_1"
            onChange={(event) =>
              handleImageChange('image_1', event.target.files[0])
            }
          />
          {renderImagePreview('image_1')}
        </label>

        <label htmlFor="image_2" className="secondary-input-label">
          <FontAwesomeIcon className="icon-image-plus" icon={faPlus} />

          <input
            type="file"
            name="image_2"
            onChange={(event) =>
              handleImageChange('image_2', event.target.files[0])
            }
          />
          {renderImagePreview('image_2')}
        </label>

        <label htmlFor="image_3" className="secondary-input-label">
          <FontAwesomeIcon className="icon-image-plus" icon={faPlus} />

          <input
            type="file"
            name="image_3"
            onChange={(event) =>
              handleImageChange('image_3', event.target.files[0])
            }
          />
          {renderImagePreview('image_3')}
        </label>

        <label htmlFor="image_4" className="secondary-input-label">
          <FontAwesomeIcon className="icon-image-plus" icon={faPlus} />

          <input
            type="file"
            name="image_4"
            onChange={(event) =>
              handleImageChange('image_4', event.target.files[0])
            }
          />
          {renderImagePreview('image_4')}
        </label>
      </form>
    </section>
  );
}

UploadImage.propTypes = {
  submit: PropTypes.bool.isRequired,
  sendImage: PropTypes.func.isRequired,
};
