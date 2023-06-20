import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faPlus } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import { useState } from 'react';

export default function UploadImage({ sendImage, warning }) {
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

  return (
    <section className="container-upload-image">
      <h2>Adicione imagens do produto</h2>
      {warning === true && (
        <span className="warning">Adicione no mínimo uma foto</span>
      )}
      <div className="images-uploaded">
        <label htmlFor="primary-input" className="primary-input-label">
          <div className="container-icon-image-upload">
            <FontAwesomeIcon className="icon-image-upload" icon={faImages} />
          </div>
          <span className="text-icon-image-upload">Escolha uma imagem</span>
          <input
            id="primary-input"
            type="file"
            name="primary"
            onChange={handlePrimaryImageChange}
            onClick={handleFileClick} // Adiciona um evento de clique para limpar o valor do input
          />
          {images.primary && (
            <img
              src={images.primary}
              alt="Imagem selecionada"
              className="imageload"
            />
          )}
        </label>

        <label htmlFor="secondary-input-0" className="secondary-input-label">
          <FontAwesomeIcon className="icon-image-plus" icon={faPlus} />
          <input
            id="secondary-input-0"
            type="file"
            name="secondary-0"
            onChange={handleImageChange}
            onClick={handleFileClick} // Adiciona um evento de clique para limpar o valor do input
          />
          {images['secondary-0'] && (
            <img
              src={images['secondary-0']}
              alt="Imagem selecionada"
              className="imageload"
            />
          )}
        </label>

        <label htmlFor="secondary-input-1" className="secondary-input-label">
          <FontAwesomeIcon className="icon-image-plus" icon={faPlus} />
          <input
            id="secondary-input-1"
            type="file"
            name="secondary-1"
            onChange={handleImageChange}
            onClick={handleFileClick} // Adiciona um evento de clique para limpar o valor do input
          />
          {images['secondary-1'] && (
            <img
              src={images['secondary-1']}
              alt="Imagem selecionada"
              className="imageload"
            />
          )}
        </label>

        <label htmlFor="secondary-input-2" className="secondary-input-label">
          <FontAwesomeIcon className="icon-image-plus" icon={faPlus} />
          <input
            id="secondary-input-2"
            type="file"
            name="secondary-2"
            onChange={handleImageChange}
            onClick={handleFileClick} // Adiciona um evento de clique para limpar o valor do input
          />
          {images['secondary-2'] && (
            <img
              src={images['secondary-2']}
              alt="Imagem selecionada"
              className="imageload"
            />
          )}
        </label>
      </div>
    </section>
  );
}

UploadImage.propTypes = {
  sendImage: PropTypes.func.isRequired,
  warning: PropTypes.bool.isRequired, // Corrigido o tipo de prop "warning" para bool
};
