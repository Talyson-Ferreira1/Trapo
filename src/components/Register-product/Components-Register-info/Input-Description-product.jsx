export default function InputDescriptionProduct({ formikProps }) {
  return (
    <div className=" container-input container-product-description">
      <label htmlFor="product_description"> Descrição </label>
      <textarea
        rows="4"
        cols="50"
        tabIndex={15}
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
    </div>
  );
}
