import './style.css';

export default function RegisterInfo({ formikProps }) {
  const handleCheckboxChange = (fieldName, e) => {
    const isChecked = e.target.checked;
    const checkboxValues = [...formikProps.values[fieldName]];

    if (isChecked) {
      checkboxValues.push(e.target.value);
    } else {
      const index = checkboxValues.indexOf(e.target.value);
      if (index > -1) {
        checkboxValues.splice(index, 1);
      }
    }

    formikProps.setFieldValue(fieldName, checkboxValues);
  };

  return (
    <fieldset className="fieldset-info">
      <legend>Informações do produto</legend>
      <label htmlFor="product_name"> Nome </label>
      <input
        type="text"
        name="product_name"
        className="product_name"
        placeholder="Camisa estampada"
        {...formikProps.getFieldProps('product_name')}
      />
      {formikProps.touched.product_name && formikProps.errors.product_name && (
        <span className="warning">{formikProps.errors.product_name}</span>
      )}

      <label htmlFor="product_price"> Preço </label>
      <input
        min="0"
        step="0.01"
        type="number"
        pattern="[0-9]*"
        name="1"
        placeholder="109,99"
        className="product_price"
        {...formikProps.getFieldProps('product_price')}
      />
      {formikProps.touched.product_price &&
        formikProps.errors.product_price && (
          <span className="warning">{formikProps.errors.product_price}</span>
        )}

      <label htmlFor="product_description"> Descrição </label>
      <textarea
        rows="4"
        cols="50"
        name="product_description"
        className="product_description"
        placeholder="Descreva o produto"
        {...formikProps.getFieldProps('product_description')}
      />
      {formikProps.touched.product_description &&
        formikProps.errors.product_description && (
          <span className="warning">
            {formikProps.errors.product_description}
          </span>
        )}

      <label htmlFor="product_size">Medidas disponíveis</label>
      <div className="product_size">
        <label
          className={`label-checkbox${
            formikProps.values.checkbox_value_1.includes('P(S)')
              ? ' checked'
              : ''
          }`}
          htmlFor="checkbox_value_1"
        >
          P(S)
          <input
            value="P(S)"
            type="checkbox"
            className="checkbox"
            name="checkbox_value_1"
            onChange={(e) => handleCheckboxChange('checkbox_value_1', e)}
          />
        </label>

        <label
          className={`label-checkbox${
            formikProps.values.checkbox_value_2.includes('M(M)')
              ? ' checked'
              : ''
          }`}
          htmlFor="checkbox_value_2"
        >
          M(M)
          <input
            value="M(M)"
            type="checkbox"
            className="checkbox"
            name="checkbox_value_2"
            onChange={(e) => handleCheckboxChange('checkbox_value_2', e)}
          />
        </label>

        <label
          className={`label-checkbox${
            formikProps.values.checkbox_value_3.includes('G(L)')
              ? ' checked'
              : ''
          }`}
          htmlFor="checkbox_value_3"
        >
          G(L)
          <input
            value="G(L)"
            type="checkbox"
            className="checkbox"
            name="checkbox_value_3"
            onChange={(e) => handleCheckboxChange('checkbox_value_3', e)}
          />
        </label>

        <label
          className={`label-checkbox${
            formikProps.values.checkbox_value_4.includes('GG(XL)')
              ? ' checked'
              : ''
          }`}
          htmlFor="checkbox_value_4"
        >
          GG(XL)
          <input
            value="GG(XL)"
            type="checkbox"
            className="checkbox"
            name="checkbox_value_4"
            onChange={(e) => handleCheckboxChange('checkbox_value_4', e)}
          />
        </label>
      </div>
      {formikProps.errors.product_size && (
        <span className="warning">{formikProps.errors.product_size}</span>
      )}

      <label htmlFor="product_category">Categoria</label>
      <select
        className="product_category"
        name="product_category"
        {...formikProps.getFieldProps('product_category')}
      >
        <option value="blusas"> Blusas </option>
        <option value="calças"> Calças </option>
        <option value="sapatos"> Sapatos </option>
        <option value="moletoms"> Moletoms </option>
        <option value="chapeus"> Chapeis </option>
      </select>
      {formikProps.touched.product_category &&
        formikProps.errors.product_category && (
          <span className="warning">{formikProps.errors.product_category}</span>
        )}

      <label htmlFor="product_gener">Genero</label>
      <select
        className="product_gener"
        name="product_gener"
        {...formikProps.getFieldProps('product_gener')}
      >
        <option value="masculino"> Masculino </option>
        <option value="feminino"> Feminino </option>
        <option value="unissex"> Unissex </option>
      </select>
      {formikProps.touched.product_gener &&
        formikProps.errors.product_gener && (
          <span className="warning">{formikProps.errors.product_gener}</span>
        )}

      <input type="submit" placeholder="Cadastrar" className="form_submit" />
    </fieldset>
  );
}
