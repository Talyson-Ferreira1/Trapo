export default function SelectSizeLetterProduct({formikProps}){
  
  const handleCheckboxChange = (fieldName, e) => {
    const isChecked = e.target.checked;
    const checkboxValues = [...formikProps.values.Product_Size_Letter[fieldName]];

    if (isChecked) {
      checkboxValues.push(e.target.value);
    } else {
      const index = checkboxValues.indexOf(e.target.value);
      if (index > -1) {
        checkboxValues.splice(index, 1);
      }
    }

    formikProps.setFieldValue(`Product_Size_Letter.${fieldName}`, checkboxValues);
  };

    return(
      <div className=" container-input container-product-checkbox">
        
        <label htmlFor="product_size">Medidas disponíveis</label>
        <div className="product_size">

          <label
            className={`label-checkbox${
              formikProps.values.Product_Size_Letter.checkbox1.includes('P(S)')
                ? ' checked'
                : ''
            }`}
            htmlFor="checkbox1"
          >
            P(S)
            <input
              value="P(S)"
              type="checkbox"
              className="checkbox"
              name="checkbox1"
              onChange={(e) => handleCheckboxChange('checkbox1', e)}
            />
          </label>

          <label
            className={`label-checkbox${
              formikProps.values.Product_Size_Letter.checkbox2.includes('M(M)')
                ? ' checked'
                : ''
            }`}
            htmlFor="checkbox2"
          >
            M(M)
            <input
              value="M(M)"
              type="checkbox"
              className="checkbox"
              name="checkbox2"
              onChange={(e) => handleCheckboxChange('checkbox2', e)}
            />
          </label>

          <label
            className={`label-checkbox${
              formikProps.values.Product_Size_Letter.checkbox3.includes('G(L)')
                ? ' checked'
                : ''
            }`}
            htmlFor="checkbox3"
          >
            G(L)
            <input
              value="G(L)"
              type="checkbox"
              className="checkbox"
              name="checkbox3"
              onChange={(e) => handleCheckboxChange('checkbox3', e)}
            />
          </label>

          <label
            className={`label-checkbox${
              formikProps.values.Product_Size_Letter.checkbox4.includes('GG(XL)')
                ? ' checked'
                : ''
            }`}
            htmlFor="checkbox4"
          >
            GG(XL)
            <input
              value="GG(XL)"
              type="checkbox"
              className="checkbox"
              name="checkbox4"
              onChange={(e) => handleCheckboxChange('checkbox4', e)}
            />
          </label>

        </div>


        {/* || */ 
          console.log(formikProps.touched)
        }



        {formikProps.errors.Product_Size_Letter && 
          formikProps.touched.Product_Size_Letter && (
          <span className="warning">{formikProps.errors.Product_Size_Letter}</span>
        )}


      </div>
    )
}