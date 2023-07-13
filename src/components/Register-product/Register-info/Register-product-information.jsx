import InputCategoryProduct from '../Components-Register-info/Input-category-product';
import InputNameProduct from '../Components-Register-info/Input-name-product';
import InputPriceProduct from '../Components-Register-info/Input-price-product';
import InputDescriptionProduct from '../Components-Register-info/Input-Description-product';
import InputGenerProduct from '../Components-Register-info/Input-Gener-product';
import InputColorProduct from '../Components-Register-info/Input-color-product';
import Group_measure_1 from '../Components-Register-info/Group_measure_1';
import Group_measure_2 from '../Components-Register-info/Group_measure_2';
import Group_measure_3 from '../Components-Register-info/Group_measure_3';
import Submit from '../Components-Register-info/Button-submit';

import './style-register-info.css';
import { useEffect, useState } from 'react';

export default function ProductInfo({ formikProps, categoryBasedRendering }) {
  const [
    renderInputsAfterDefiningCategory,
    setRenderInputsAfterDefiningCategory,
  ] = useState(true);

  useEffect(() => {
    if (formikProps.values.product_category === '') {
      setRenderInputsAfterDefiningCategory(true);
    } else {
      setRenderInputsAfterDefiningCategory(false);
    }
  }, [formikProps.values.product_category]);

  return (
    <fieldset className="fieldset-Info">
      <h2>Informações do produto</h2>

      {renderInputsAfterDefiningCategory && <div className="blockInputs"></div>}
      <div className="container-all-inputs">
        <InputCategoryProduct formikProps={formikProps} />

        <InputNameProduct formikProps={formikProps} />

        <InputPriceProduct formikProps={formikProps} />

        <InputGenerProduct formikProps={formikProps} />

        <InputDescriptionProduct formikProps={formikProps} />

        <>
          {categoryBasedRendering.Group_measure_3 && (
            <Group_measure_3 formikProps={formikProps} />
          )}

          {categoryBasedRendering.Group_measure_2 && (
            <Group_measure_2 formikProps={formikProps} />
          )}

          {categoryBasedRendering.Group_measure_1 && (
            <Group_measure_1 formikProps={formikProps} />
          )}

          {formikProps.errors.checkbox &&
            formikProps.touched.product_measure && (
              <span className="warning">{formikProps.errors.checkbox}</span>
            )}
        </>

        <InputColorProduct formikProps={formikProps} />

        <Submit formikProps={formikProps} />
      </div>
    </fieldset>
  );
}
