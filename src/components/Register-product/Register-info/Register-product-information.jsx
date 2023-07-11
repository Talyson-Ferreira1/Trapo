import InputCategoryProduct from '../Components-Register-info/Input-category-product'
import InputNameProduct from '../Components-Register-info/Input-name-product'
import InputPriceProduct from '../Components-Register-info/Input-price-product'
import InputDescriptionProduct from '../Components-Register-info/Input-Description-product'
import InputGenerProduct from '../Components-Register-info/Input-Gener-product'
import InputColorProduct from '../Components-Register-info/Input-color-product'
import SelectSizeNumberProduct from '../Components-Register-info/Size-Number-product'
import SelectSizeLetterProduct from '../Components-Register-info/Size-Letter-product'
import SelectSizeNumberAndLetterProduct from '../Components-Register-info/Size-number-and-Letter-product'
import Submit from '../Components-Register-info/Button-submit'

import './style-register-info.css'
import { useEffect, useState } from 'react'

export default function ProductInfo({formikProps, categoryBasedRendering}){

    const [renderInputsAfterDefiningCategory, setRenderInputsAfterDefiningCategory] = useState(true) 

    useEffect(()=>{
        if(formikProps.values.product_category === ''){
            setRenderInputsAfterDefiningCategory(true)
        }else{
            setRenderInputsAfterDefiningCategory(false)
        }

    },[formikProps.values.product_category])

    return(
        <fieldset className='fieldset-Info'>

            <h2>Informações do produto</h2>

            {renderInputsAfterDefiningCategory && (
                <div className='blockInputs'></div>
            )}
            <div className="container-all-inputs">

                <InputCategoryProduct formikProps={formikProps} /> 

                <InputNameProduct formikProps={formikProps} />

                <InputPriceProduct formikProps={formikProps} />

                <InputGenerProduct formikProps={formikProps} />
                
                <InputDescriptionProduct formikProps={formikProps} /> 
 
                {categoryBasedRendering.Size_Number_with_Letter && (
                    <SelectSizeNumberAndLetterProduct formikProps={formikProps} />
                )}

                {categoryBasedRendering.Size_Letter && (
                    <SelectSizeLetterProduct formikProps={formikProps} />
                )}

                {categoryBasedRendering.Size_Number && (
                    <SelectSizeNumberProduct formikProps={formikProps} />
                )}

                <InputColorProduct formikProps={formikProps} />

                <Submit formikProps={formikProps}/>

            </div>
        </fieldset>
    )
}