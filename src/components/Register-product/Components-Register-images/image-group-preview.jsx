import { useEffect, useState } from 'react';
import { useColorContext } from '@/context/ActiveColors/ColorsProvider';

export default function ImageGroupPreview({
  formikProps,
  counterGroups,
  amountOfGroups,
  imagesForDel,
}) {
  const [numImageGroups, setNumImageGroups] = useState(1);
  const [highlight, setHighlight] = useState(0);
  const { values } = formikProps;
  const { handleNumberOfColors } = useColorContext();
  const colors = values.product_color;
  const imageGroups = [];

  const handleAddMoreImages = () => {
    if (numImageGroups === 6) return;

    currentGroup(numImageGroups + 1);
    setNumImageGroups((prevNum) => prevNum + 1);

    imageGroups.push(
      <div
        className="img-group image-group-1"
        key={`group-${numImageGroups + 1}`}
      >
        {renderImagePreviewGroup1('image_1')}
      </div>
    );
  };

  const handleRemoveLastImage = () => {
    if (numImageGroups > 1) {
      currentGroup(numImageGroups - 1);
      setNumImageGroups((prevNum) => prevNum - 1);
      imageGroups.pop();
      clearFormikValsAfterDelPreview();
    }
  };

  const currentGroup = (event) => {
    counterGroups(event);
    setHighlight(event);
    console.log(event);
  };

  const highlightImagePreview = (number) => {};

  const renderImagePreviewGroup = (groupNum, fieldName) => {
    const { values } = formikProps;
    const file = values.product_Image[`Images${groupNum}`][fieldName];

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

  useEffect(() => {
    handleNumberOfColors(numImageGroups);
  }, [numImageGroups]);

  const renderImagePreviewGroup1 = (fieldName) => {
    const previews = [];

    for (let i = 1; i <= numImageGroups; i++) {
      previews.push(
        <div
          className={`img-group image-group-1 ${
            highlight === i ? 'highlight' : ''
          }`}
          key={`group-${i}`}
          onClick={() => currentGroup(i)}
        >
          <div className="container-svg-preview">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              viewBox="0 0 576 512"
            >
              <path d="M160 32c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160zM396 138.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S480.9 320 472 320H328 280 200c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C360.5 132 368 128 376 128s15.5 4 20 10.7zM192 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120z" />
            </svg>
          </div>
          {renderImagePreviewGroup(i, fieldName)}
          {Object.keys(colors).map((colorKey) => {
            if (colors[colorKey].hashColor && colorKey === `color${i}`) {
              return (
                <div
                  key={colorKey}
                  className={`color ${colorKey}`}
                  style={{ backgroundColor: colors[colorKey].hashColor }}
                ></div>
              );
            }
            return null;
          })}
        </div>
      );

      // Limitar a 6 previews
      if (previews.length >= 6) {
        break;
      }
    }

    return previews;
  };

  const clearFormikValsAfterDelPreview = () => {
    let lastActiveGroup = numImageGroups;

    imagesForDel(`Images${lastActiveGroup}`);

    for (let i = 1; i <= 4; i++) {
      formikProps.setFieldValue(
        `product_Image.Images${lastActiveGroup}.image_${i}`,
        null
      );
    }
  };

  useEffect(() => {
    amountOfGroups(numImageGroups);
  }, [numImageGroups]);

  return (
    <div className="preview-all-images">
      {renderImagePreviewGroup1('image_1')}

      <div>
        <button
          type="button"
          className="add-more-images"
          title="Adicionar mais imagens"
          onClick={handleAddMoreImages}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
        </button>

        <button
          type="button"
          className="remove-last-image"
          title="Excluir última imagem"
          onClick={handleRemoveLastImage}
          disabled={numImageGroups === 1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
