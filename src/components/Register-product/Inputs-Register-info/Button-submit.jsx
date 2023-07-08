
export default function Submit({formikProps}){
    return(
        <button
            type="submit" 
            onClick={formikProps.handleSubmit}
            className="form_submit"
        > Cadastrar </button>
        

    )
}