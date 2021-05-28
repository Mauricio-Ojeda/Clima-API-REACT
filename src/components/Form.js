import React,{ useState } from 'react';

const Form = ({ form, setForm, setDataForm }) => {
    
    

    // State Error
    const [error, setError] = useState(false)
    
    // Destructuring Form state

    const { city, country } = form;

    // function Handle onChange

    const handleChange = e => {           

        setForm({
            ...form,
            [e.target.name] : e.target.value,
        })
    }

    // function handle onSubmit

    const handleSubmit = e => {
       
        e.preventDefault();

        //validator
        if(city.trim() === '' || country.trim() === ''){ setError(true); return};
        
        setError(false);
        
        // Pass data Form 
        setDataForm(true);
        
       
    }
    
    console.log (city)
    

    return (
        <form onSubmit= {handleSubmit}>
            {error ? <div className="error #e53935 red darken-1">Todos los Campos son Obligatorios</div> 
                    : null
            }
            <div className="input-field col s12">
                <input 
                    name="city" 
                    id="city" 
                    type="text" 
                    className="validate"
                    value={ city }
                    onChange= {handleChange}

                />
                <label htmlFor="city">Ciudad:</label>
            </div>
            <div className="input-field col s12">
                
                <select 
                    id="country"
                    name="country"                    
                    onChange= {handleChange}
                    value= { country }                   
                    >
                    <option value=""  >Elija su Pais</option>
                    <option value="AR">Argentina</option>
                    <option value="MX">México</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                    <option value="US">Estados Unidos</option>
                </select>
                <label htmlFor="country">Pais</label>            
            </div>
            
            <button className="btn #01579b light-blue darken-4 waves-effect waves-red hoverable" type="submit" >Buscar Clima
                <i className="material-icons right">cloud</i>
            </button>
        </form>    
    )
}

export default Form
