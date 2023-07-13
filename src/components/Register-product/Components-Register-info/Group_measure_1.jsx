export default function Group_measure_1({ formikProps }) {
  const handleCheckboxChange = (fieldName, e) => {
    const isChecked = e.target.checked;
    const checkboxValues = [
      ...formikProps.values.product_measure.Group_measure_1[fieldName],
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
      `product_measure.Group_measure_1.${fieldName}`,
      checkboxValues
    );
  };

  return (
    <div className=" container-input container-product-checkbox">
      <label htmlFor="product_size">Medidas disponíveis</label>
      <div className="product_size">
        <label
          className={`label-checkbox${
            formikProps.values.product_measure.Group_measure_1.checkbox1.includes(
              'P(54-56)'
            )
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
            formikProps.values.product_measure.Group_measure_1.checkbox2.includes(
              'M(56-58)'
            )
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
            formikProps.values.product_measure.Group_measure_1.checkbox3.includes(
              'G(58-60)'
            )
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
    </div>
  );
}
