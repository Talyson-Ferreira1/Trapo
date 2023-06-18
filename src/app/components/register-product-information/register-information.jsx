'use client';
import { useFormik } from 'formik';
import './style.css';

export default function RegisterProductInfo() {
  const formik = useFormik({
    initialValues: {
      name_product: '',
      price_product: '',
      description_product: '',
      category_product: '',
      gener_product: '',
    },
  });
  console.log('form values', formik.values);

  return (
    <section className="form-info-poduct">
      <h2>Descrição do produto</h2>
      <form>
        <label htmlFor="name-product">Nome:</label>
        <input
          type="text"
          className="name-product"
          id="name-product"
          name="name_product"
          onChange={formik.handleChange}
          value={formik.values.name_product}
        />

        <label htmlFor="price-product">Preço:</label>
        <input
          type="text"
          className="price-product"
          id="price-product"
          name="price_product"
          onChange={formik.handleChange}
          value={formik.values.price_product}
        />

        <label htmlFor="description-product">Descrição:</label>
        <textarea
          id="description-product"
          name="description_product"
          className="description-product"
          rows="4"
          cols="50"
          onChange={formik.handleChange}
          value={formik.values.description_product}
        ></textarea>

        <label htmlFor="category-product">Categoria:</label>
        <select
          className="category-product"
          id="category-product"
          name="category_product"
          onChange={formik.handleChange}
          value={formik.values.category_product}
        >
          <option value="select">Selecione a categoria</option>
          <option value="blusas">Blusas</option>
          <option value="calcas">Calças</option>
          <option value="sapatos">Sapatos</option>
          <option value="moletons">Moletons</option>
          <option value="chapeus">chapeis</option>
        </select>

        <label htmlFor="gener-product">Genero:</label>
        <select
          className="gener-product"
          id="gener-product"
          name="gener_product"
          onChange={formik.handleChange}
          value={formik.values.gener_product}
        >
          <option value="select">Selecione o gênero</option>
          <option value="Feminino">Feminino</option>
          <option value="Masculino">Masculino</option>
          <option value="Unissex">Unissex</option>
        </select>
      </form>
    </section>
  );
}
