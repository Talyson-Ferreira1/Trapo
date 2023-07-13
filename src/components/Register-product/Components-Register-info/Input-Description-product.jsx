export default function InputDescriptionProduct({ formikProps }) {
  return (
    <div className=" container-input container-product-description">
      <label htmlFor="product_description"> Descrição do produto</label>
      <textarea
        rows="4"
        cols="50"
        tabIndex={15}
        name="product_description"
        className="product_description"
        placeholder="Ex.: Produto importado com material resistente"
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
