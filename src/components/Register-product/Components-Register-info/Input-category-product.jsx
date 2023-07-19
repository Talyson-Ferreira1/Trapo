export default function InputCategoryProduct({ formikProps, animation }) {
  return (
    <div className="container-input container-product-category">
      <label htmlFor="product_category">
        {animation ? 'Primeiro selecione o produto' : 'Categoria'}
      </label>
      <select
        tabIndex={11}
        name="product_category"
        className={`product_category ${animation ? 'blink' : ''}`}
        {...formikProps.getFieldProps('product_category')}
      >
        <option disabled value="">
          {' '}
          Selecione o tipo do Produto
        </option>
        <option value="shirts"> Camisas </option>
        <option value="pants"> Calças </option>
        <option value="shoes"> Calçados </option>
        <option value="hoodies"> Moletons </option>
        <option value="accessories"> Acessórios </option>
      </select>

      {formikProps.touched.product_category &&
        formikProps.errors.product_category && (
          <span className="warning">{formikProps.errors.product_category}</span>
        )}
    </div>
  );
}
