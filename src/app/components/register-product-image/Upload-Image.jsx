import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faPlus } from '@fortawesome/free-solid-svg-icons';
import './style.css';

export default function UploadImage() {
  return (
    <section className="container-upload-image">
      <h2>Adicione imagens do produto</h2>
      <div className="images-uploaded">
        <label htmlFor="primary-input" className="primary-input-label">
          <div className="container-icon-image-upload">
            <FontAwesomeIcon className="icon-image-upload" icon={faImages} />
          </div>
          <span className="text-icon-image-upload">Escolha uma imagem</span>
          <input id="primary-input" type="file" name="imagem" />
        </label>

        <label htmlFor="secondary-input-0" className="secondary-input-label">
          <FontAwesomeIcon className="icon-image-plus" icon={faPlus} />
          <input id="secondary-input-0" type="file" name="imagem" />
        </label>

        <label htmlFor="secondary-input-1" className="secondary-input-label">
          <FontAwesomeIcon className="icon-image-plus" icon={faPlus} />
          <input id="secondary-input-1" type="file" name="imagem" />
        </label>

        <label htmlFor="secondary-input-2" className="secondary-input-label">
          <FontAwesomeIcon className="icon-image-plus" icon={faPlus} />
          <input id="secondary-input-2" type="file" name="imagem" />
        </label>
      </div>
    </section>
  );
}
