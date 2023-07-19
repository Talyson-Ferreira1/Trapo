import Group_measure_1 from '../Components-Register-info/Group_measure_1';
import Group_measure_2 from '../Components-Register-info/Group_measure_2';
import Group_measure_3 from '../Components-Register-info/Group_measure_3';

export default function RenderInput({ formikProps, render }) {
  return (
    <>
      {render.Group_measure_3 && <Group_measure_3 formikProps={formikProps} />}

      {render.Group_measure_2 && <Group_measure_2 formikProps={formikProps} />}

      {render.Group_measure_1 && <Group_measure_1 formikProps={formikProps} />}

      {formikProps.errors.checkbox && formikProps.touched.product_measure && (
        <span className="warning">{formikProps.errors.checkbox}</span>
      )}
    </>
  );
}
