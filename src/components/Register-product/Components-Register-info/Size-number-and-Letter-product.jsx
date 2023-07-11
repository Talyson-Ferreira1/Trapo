export default function SelectSizeNumberAndLetterProduct({formikProps}){
  
    const handleCheckboxChange = (fieldName, e) => {
        const isChecked = e.target.checked;
        const checkboxValues = [...formikProps.values.Product_Size_Number_with_Letter[fieldName]];
      
        if (isChecked) {
          checkboxValues.push(e.target.value);
        } else {
          const index = checkboxValues.indexOf(e.target.value);
          if (index > -1) {
            checkboxValues.splice(index, 1);
          }
        }
      
        formikProps.setFieldValue(`Product_Size_Number_with_Letter.${fieldName}`, checkboxValues);
    };
      
  
      return(
        <div className=" container-input container-product-checkbox">
          
          <label htmlFor="product_size">Medidas disponíveis</label>
          <div className="product_size">
  
            <label
              className={`label-checkbox${
                formikProps.values.Product_Size_Number_with_Letter.checkbox1.includes('P(54-56)')
                  ? ' checked'
                  : ''
              }`}
              tabIndex={16}
              htmlFor="checkbox1"
            >
             P(54-56)
              <input
                value="P(54-56)"
                type="checkbox"
                className="checkbox"
                name="checkbox1"
                onChange={(e) => handleCheckboxChange('checkbox1', e)}
              />
            </label>
  
            <label
              className={`label-checkbox${
                formikProps.values.Product_Size_Number_with_Letter.checkbox2.includes('M(56-58)')
                  ? ' checked'
                  : ''
              }`}
              tabIndex={17}
              htmlFor="checkbox2"
            >
              M(56-58)
              <input
                value="M(56-58)"
                type="checkbox"
                className="checkbox"
                name="checkbox2"
                onChange={(e) => handleCheckboxChange('checkbox2', e)}
              />
            </label>
  
            <label
              className={`label-checkbox${
                formikProps.values.Product_Size_Number_with_Letter.checkbox3.includes('G(58-60)')
                  ? ' checked'
                  : ''
              }`}
              tabIndex={18}
              htmlFor="checkbox3"
            >
              G(58-60)
              <input
                value="G(58-60)"
                type="checkbox"
                className="checkbox"
                name="checkbox3"
                onChange={(e) => handleCheckboxChange('checkbox3', e)}
              />
            </label>
  
          </div>

          {formikProps.errors.Product_Size_Number_with_Letter && 
            formikProps.touched.Product_Size_Number_with_Letter && (
            <span className="warning">{formikProps.errors.Product_Size_Number_with_Letter}</span>
          )}

        </div>
      )
  }