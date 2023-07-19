export default function Submit({ formikProps, active }) {
  return (
    <div className="container-submit">
      <button
        tabIndex={21}
        type="submit"
        onClick={formikProps.handleSubmit}
        className="form_submit"
        style={{ opacity: active ? 1 : 0.3 }}
        title={!active ? 'Preencha todos os campos' : 'Cadastrar produto'}
      >
        {' '}
        Cadastrar{' '}
      </button>
    </div>
  );
}
