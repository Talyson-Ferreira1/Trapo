import './style.css'

export default function RegisterInfo(formikProps){
    return (
        <fieldset className='fieldset-info'>
          <legend>Informações do produto</legend>
    
            <label htmlFor='product_name'> Nome </label>
            <input
                type='text'
                name='product_name'
                className='product_name'
                placeholder='Camisa estampada'
            />
    
            <label htmlFor='product_price'> Preço </label> 
            <input
                min='0'
                step='0.01'
                type='number'
                pattern='[0-9]*'
                name='product_price'
                placeholder='109,99'
                className='product_price'
            />
                
            <label htmlFor='product_description'> Descrição </label>
            <textarea
                rows='4'
                cols='50'
                name='product_description'
                className='product_description'
                placeholder='Descreva o produto'
            />

            <label htmlFor='product_size'>Medidas disponíveis</label>        
            <div className='product_size'>

                <label className={`label-checkbox`} htmlFor="checkbox_value_1">
                P(S)
                <input
                    value="P(S)"
                    type="checkbox"
                    className="checkbox"
                    name="checkbox_value_1"
                />
                </label>

                <label className={`label-checkbox`} htmlFor="checkbox_value_2">
                M(M)
                <input
                    value="M(M)"
                    type="checkbox"
                    className="checkbox"
                    name="checkbox_value_2"
                />
                </label>

                <label className={`label-checkbox`} htmlFor="checkbox_value_3">
                G(L)
                <input
                    value="G(L)"
                    type="checkbox"
                    className="checkbox"
                    name="checkbox_value_3"
                />
                </label>

                <label className={`label-checkbox`} htmlFor="checkbox_value_4">
                GG(XL)
                <input
                    value="GG(XL)"
                    type="checkbox"
                    className="checkbox"
                    name="checkbox_value_4"
                />
                </label>

            </div>

            <label htmlFor='product_category'>Categoria</label>
            <select 
                className='product_category'
                name='product_category'
            >

                <option value='blusas'> Blusas </option>
                <option value='calças'> Calças </option>
                <option value='sapatos'> Sapatos </option>
                <option value='moletoms'> Moletoms </option>
                <option value='chapeus'> Chapeis </option>

            </select>


            <label htmlFor='product_gener'>Genero</label>
            <select 
                className='product_gener'
                name='product_gener'

            >

                <option value='masculino'> Masculino </option>
                <option value='feminino'> Feminino </option>
                <option value='unissex'> Unissex </option>

            </select>
        </fieldset>
    );
}
    