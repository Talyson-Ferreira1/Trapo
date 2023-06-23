import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';

import './style.css';
export default function UploadImage({ submit }) {
  const [images, setImages] = useState({});

  const handleImageChange = (event) => {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const imageData = e.target.result;
        setImages((prevImages) => ({
          ...prevImages,
          [fileInput.name]: imageData,
        }));
      };

      reader.readAsDataURL(file);
    }
  };

  const handlePrimaryImageChange = (event) => {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const imageData = e.target.result;
        setImages({ primary: imageData });
        sendImage({ primary: imageData });
      };

      reader.readAsDataURL(file);
    }
  };

  const handleFileClick = (event) => {
    event.target.value = null; // Limpa o valor do input para permitir seleções consecutivas do mesmo arquivo
  };

  const initialValues = {
    image_1: '',
    image_2: '',
    image_3: '',
    image_4: ''
  }

  const onSubmit = values => {
    console.log(values)
  }

  const validate = values => {

  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });

  return (
    <section className="container-upload-image">
      <h2>Adicione imagens do produto</h2>
      
      <form onSubmit={formik.handleSubmit} className="images-uploaded">

        <label htmlFor="image_1" className="primary-input-label">

          <div className="container-icon-image-upload">
            <FontAwesomeIcon 
              className="icon-image-upload" 
              icon={faImages} />

          </div>

          <span className="text-icon-image-upload">Escolha uma imagem</span>

          <input
            type="file"
            name="image_1"
            {...formik.getFieldProps("image_1")}
          />
            

        </label>

        <label htmlFor="image_2" className="secondary-input-label">

          <FontAwesomeIcon 
            className="icon-image-plus" 
            icon={faPlus} />

          <input
            type="file"
            name="image_2"
            {...formik.getFieldProps("image_2")}
          />

        </label>

        <label htmlFor="image_3" className="secondary-input-label">

          <FontAwesomeIcon 
            className="icon-image-plus" 
            icon={faPlus} />

          <input
            type="file"
            name="image_3"
            {...formik.getFieldProps("image_3")}
          />
    
        </label>

        <label htmlFor="image_4" className="secondary-input-label">
          
          <FontAwesomeIcon 
            className="icon-image-plus" 
            icon={faPlus} />
          
          <input
            type="file"
            name="image_4"
            {...formik.getFieldProps("image_4")}
          />
          
        </label>
      </form>
    </section>
  );
}

UploadImage.propTypes = {
  submit: PropTypes.func.isRequired,
};
