import { useEffect, useState } from "react";

export default function ImageGroupPreview({ formikProps, counterGroups, amountOfGroups }) {
  const [numImageGroups, setNumImageGroups] = useState(1);
  const imageGroups = [];
  const { values } = formikProps;
  const colors = values.product_color;

  const handleAddMoreImages = () => {   
    if(numImageGroups === 6 ) return
    currentGroup(numImageGroups + 1)
    setNumImageGroups((prevNum) => prevNum + 1);
    imageGroups.push(
      <div className="img-group image-group-1" key={`group-${numImageGroups + 1}`}>
        {renderImagePreviewGroup1('image_1')}
      </div>
    );
  };

  const handleRemoveLastImage = () => {
    //remover as imagens do formikProps e imageFiles
    if (numImageGroups > 1) {
      currentGroup(numImageGroups - 1)
      setNumImageGroups((prevNum) => prevNum - 1);
      imageGroups.pop();
    }
  };

  const currentGroup = (event) => {
    counterGroups(event)
  };

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

  const renderImagePreviewGroup1 = (fieldName) => {
    const previews = [];

    for (let i = 1; i <= numImageGroups; i++) {
      previews.push(
        <div className="img-group image-group-1" key={`group-${i}`} onClick={() => currentGroup(i)}>
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

  useEffect(()=>{
    amountOfGroups(numImageGroups)
  },[numImageGroups])

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
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
        </svg>
      </button>

      <button
        type="button"
        className="remove-last-image"
        title="Excluir última imagem"
        onClick={handleRemoveLastImage}
        disabled={numImageGroups === 1}
        >
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
          <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
        </svg>
      </button>

    </div>
    </div>
  );
}





