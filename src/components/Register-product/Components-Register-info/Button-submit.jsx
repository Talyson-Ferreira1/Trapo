
export default function Submit({formikProps}){
    return(
        <button
            tabIndex={21}
            type="submit" 
            onClick={formikProps.handleSubmit}
            className="form_submit"
        > Cadastrar </button>
        

    )
}