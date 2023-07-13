export default function InputNameProduct({ formikProps }) {
  return (
    <div className="container-input container-product-name">
      <label htmlFor="product_name"> Nome </label>
      <input
        type="text"
        tabIndex={12}
        name="product_name"
        className="product_name"
        placeholder="Ex.: Camisa estampada"
        {...formikProps.getFieldProps('product_name')}
      />
      {formikProps.touched.product_name && formikProps.errors.product_name && (
        <span className="warning">{formikProps.errors.product_name}</span>
      )}
    </div>
  );
}
