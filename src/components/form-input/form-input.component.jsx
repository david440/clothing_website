import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
   return(
      <div className="group">
         <input className="form-input" {...otherProps}/>
         {/* If label exists, then render it */}
         { label && (
             <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
         )}
      
   </div>
   )   
}

export default FormInput;