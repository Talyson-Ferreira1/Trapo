export default function Group_measure_3({ formikProps }) {
  const handleCheckboxChange = (fieldName, e) => {
    const isChecked = e.target.checked;
    const checkboxValues = [
      ...formikProps.values.product_measure.Group_measure_3[fieldName],
    ];

    if (isChecked) {
      checkboxValues.push(e.target.value);
    } else {
      const index = checkboxValues.indexOf(e.target.value);
      if (index > -1) {
        checkboxValues.splice(index, 1);
      }
    }

    formikProps.setFieldValue(
      `product_measure.Group_measure_3.${fieldName}`,
      checkboxValues
    );
  };

  return (
    <div className=" container-input container-product-checkbox">
      <label htmlFor="product_size">Medidas disponíveis</label>
      <div className="product_size">
        <label
          className={`label-checkbox${
            formikProps.values.product_measure.Group_measure_3.checkbox1.includes(
              '35'
            )
              ? ' checked'
              : ''
          }`}
          tabIndex={16}
          htmlFor="checkbox1"
        >
          35
          <input
            value="35"
            type="checkbox"
            className="checkbox"
            name="checkbox1"
            onChange={(e) => handleCheckboxChange('checkbox1', e)}
          />
        </label>

        <label
          className={`label-checkbox${
            formikProps.values.product_measure.Group_measure_3.checkbox2.includes(
              '36'
            )
              ? ' checked'
              : ''
          }`}
          tabIndex={17}
          htmlFor="checkbox2"
        >
          36
          <input
            value="36"
            type="checkbox"
            className="checkbox"
            name="checkbox2"
            onChange={(e) => handleCheckboxChange('checkbox2', e)}
          />
        </label>

        <label
          className={`label-checkbox${
            formikProps.values.product_measure.Group_measure_3.checkbox3.includes(
              '37'
            )
              ? ' checked'
              : ''
          }`}
          tabIndex={18}
          htmlFor="checkbox3"
        >
          37
          <input
            value="37"
            type="checkbox"
            className="checkbox"
            name="checkbox3"
            onChange={(e) => handleCheckboxChange('checkbox3', e)}
          />
        </label>

        <label
          className={`label-checkbox${
            formikProps.values.product_measure.Group_measure_3.checkbox4.includes(
              '38'
            )
              ? ' checked'
              : ''
          }`}
          tabIndex={19}
          htmlFor="checkbox4"
        >
          38
          <input
            value="38"
            type="checkbox"
            className="checkbox"
            name="checkbox4"
            onChange={(e) => handleCheckboxChange('checkbox4', e)}
          />
        </label>

        <label
          className={`label-checkbox${
            formikProps.values.product_measure.Group_measure_3.checkbox5.includes(
              '39'
            )
              ? ' checked'
              : ''
          }`}
          tabIndex={20}
          htmlFor="checkbox5"
        >
          39
          <input
            value="39"
            type="checkbox"
            className="checkbox"
            name="checkbox5"
            onChange={(e) => handleCheckboxChange('checkbox5', e)}
          />
        </label>

        <label
          className={`label-checkbox${
            formikProps.values.product_measure.Group_measure_3.checkbox6.includes(
              '40'
            )
              ? ' checked'
              : ''
          }`}
          tabIndex={21}
          htmlFor="checkbox6"
        >
          40
          <input
            value="40"
            type="checkbox"
            className="checkbox"
            name="checkbox6"
            onChange={(e) => handleCheckboxChange('checkbox6', e)}
          />
        </label>
      </div>
    </div>
  );
}
