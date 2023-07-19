export default function InputPriceProduct({ formikProps }) {
  return (
    <div className=" container input container-product-price">
      <label htmlFor="product_price"> Preço </label>
      <input
        min="0"
        step="0.01"
        tabIndex={12}
        type="number"
        pattern="[0-9]*"
        name="product_price"
        placeholder="109,99"
        className="product_price"
        {...formikProps.getFieldProps('product_price')}
      />
      {formikProps.touched.product_price &&
        formikProps.errors.product_price && (
          <span className="warning">{formikProps.errors.product_price}</span>
        )}
    </div>
  );
}
