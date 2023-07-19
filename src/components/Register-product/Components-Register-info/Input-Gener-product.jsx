export default function InputGenerProduct({ formikProps }) {
  return (
    <div className=" container-input container-product-gener">
      <label htmlFor="product_gener"> Gênero</label>
      <select
        name="product_gener"
        tabIndex={14}
        className="product_gener"
        {...formikProps.getFieldProps('product_gener')}
      >
        <option disabled value="">
          {' '}
          Selecione um gênero
        </option>
        <option value="masculino"> Masculino </option>
        <option value="feminino"> Feminino </option>
        <option value="unissex"> Unissex </option>
      </select>
      {formikProps.touched.product_gener &&
        formikProps.errors.product_gener && (
          <span className="warning">{formikProps.errors.product_gener}</span>
        )}
    </div>
  );
}
