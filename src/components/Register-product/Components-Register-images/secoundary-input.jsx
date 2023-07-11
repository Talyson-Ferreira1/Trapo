export default function SecoundaryInput({   
    
    focused,
    stateFocused,
    renderImagePreview,
    inputIndex,
    indexGroup,
    imageInputs,
    handleImageChange,
    inputName,
    nameClass,
    tabIndex,
}){
    
    return (
        <label 
        htmlFor={`${inputName}`}  
        className={`${nameClass} ${stateFocused === inputIndex ? 'focused' : ''}`}
    >
        <div className="container-icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512">
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
            </svg>
        </div>
        <input 
            type='file'   
            tabIndex={tabIndex}  
            name={`${inputName}`} 
            accept=".jpg, .jpeg, .png, .webp"
            onChange={(event) =>
                handleImageChange(`${inputName}`, event.target.files[0], indexGroup)
            }
            ref={(input) => (imageInputs.current[inputIndex] = input)}
            onFocus={() => focused(inputIndex)}
            onBlur={() => focused(-1)}
        />
        {renderImagePreview(`${inputName}`, indexGroup )}
    </label>

    )
}