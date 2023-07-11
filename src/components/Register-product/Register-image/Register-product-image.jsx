import { useEffect, useState, useRef } from 'react';
import ImageGroupPreview from '../Components-Register-images/image-group-preview';
import PrimaryInput from '../Components-Register-images/primary-input';
import SecoundaryInput from '../Components-Register-images/secoundary-input';
import './style-register-image.css';

//excluir os valores dos campos apos serem excluidos no ImageGroupPreview.
//Manipular o grupo de imagens atual.
// criar e remover a cor quando excluir um preview

export default function ProductImages({ formikProps, reset }) {
  const [counterGroupImages, setCounterGroupImages] = useState(null);
  const [currentGroupImages, setCurrentGroupImages] = useState(1);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [imageFiles, setImageFiles] = useState({});
  const imageInputs = useRef([]);

  const handleInputFocus = (index) => {
    setFocusedIndex(index);
  };

  const handleImageChange = (fieldName, file, indexGroup) => {
    const { values, setFieldValue } = formikProps;
    const updatedProductImage = { ...values.product_Image };

    const imageKey = `Images${indexGroup}`;

    if (updatedProductImage.hasOwnProperty(imageKey)) {
      updatedProductImage[imageKey] = {
        ...updatedProductImage[imageKey],
        [fieldName]: file,
      };
      setFieldValue('product_Image', updatedProductImage);
      setImageFiles((prevFiles) => ({
        ...prevFiles,
        [imageKey]: {
          ...prevFiles[imageKey],
          [fieldName]: file,
        },
      }));
    }
  };

  const renderImagePreview = (fieldName, indexGroup) => {
    if (imageFiles[`Images${indexGroup}`]) {
      const file = imageFiles[`Images${indexGroup}`][fieldName];

      if (file) {
        const imagePreview = URL.createObjectURL(file);
        return (
          <div className="container-image-preview">
            <img className="image-preview" src={imagePreview} alt="Preview" />
          </div>
        );
      }
    }

    return null;
  };

  const updateGroupQuantity = (number) => {
    setCounterGroupImages(number);
  };

  const getCurrentGroup = (num) => {
    setCurrentGroupImages(num);
  };

  const ImagensForDelet = (nameGroup) => {
    console.log(imageInputs);

    setImageFiles((prevFiles) => ({
      ...prevFiles,
      [nameGroup]: {
        image_1: null,
        image_2: null,
        image_3: null,
        image_4: null,
      },
    }));
  };

  useEffect(() => {
    if (reset) {
      setImageFiles({});
      imageInputs.current.forEach((input) => {
        input.value = ''; // Limpa o valor do input
      });
    }
  }, [reset]);

  const renderGroupInputs = () => {
    const inputs = [];

    for (let i = 1; i <= counterGroupImages; i++) {
      inputs.push(
        currentGroupImages === i && (
          <div key={`group-${i}`} className="container-input-all-images">
            <PrimaryInput
              formikProps={formikProps}
              focused={handleInputFocus}
              stateFocused={focusedIndex}
              renderImagePreview={renderImagePreview}
              tabIndex={7}
              inputIndex={0}
              indexGroup={i}
              imageInputs={imageInputs}
              handleImageChange={handleImageChange}
              inputName={`image_1`}
              nameClass={`label1`}
            />

            <SecoundaryInput
              formikProps={formikProps}
              focused={handleInputFocus}
              stateFocused={focusedIndex}
              renderImagePreview={renderImagePreview}
              inputIndex={1}
              indexGroup={i}
              tabIndex={8}
              imageInputs={imageInputs}
              handleImageChange={handleImageChange}
              inputName={`image_2`}
              nameClass={`label2`}
            />

            <SecoundaryInput
              formikProps={formikProps}
              focused={handleInputFocus}
              stateFocused={focusedIndex}
              renderImagePreview={renderImagePreview}
              inputIndex={2}
              indexGroup={i}
              tabIndex={9}
              imageInputs={imageInputs}
              handleImageChange={handleImageChange}
              inputName={`image_3`}
              nameClass={`label3`}
            />

            <SecoundaryInput
              formikProps={formikProps}
              focused={handleInputFocus}
              stateFocused={focusedIndex}
              renderImagePreview={renderImagePreview}
              inputIndex={3}
              indexGroup={i}
              tabIndex={10}
              imageInputs={imageInputs}
              handleImageChange={handleImageChange}
              inputName={`image_4`}
              nameClass={`label4`}
            />
          </div>
        )
      );
    }

    return inputs;
  };

  return (
    <fieldset className="fieldset-Images">
      <h2>Adicione imagens do produto</h2>

      {renderGroupInputs()}

      <ImageGroupPreview
        formikProps={formikProps}
        counterGroups={getCurrentGroup}
        amountOfGroups={updateGroupQuantity}
        imagesForDel={ImagensForDelet}
      />
    </fieldset>
  );
}
