import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import API from './components/API';
import Error from './components/Error';
 
function App() {

  
  // State Form
  const [form, setForm] = useState({
     city:'',
     country:''
   })

  // state
  const [dataForm, setDataForm] = useState(false);  
  
  // State API value

  const [apiValue, setApiValue] = useState({});
  
  // State Error
  const [error, setError] = useState(false);

  // Destructuring form
  const { city, country } = form;
  

  useEffect(() => {    
        
      const consultarAPI = async () => {
        
        if (dataForm) {
            
            const idAPI = '7ca43ca50003586d0301a08619bdcecd';
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&lang=es&appid=${idAPI}`;

            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            
            setApiValue(resultado);            
            

            if(resultado.cod === "404"){
              setError(true);
            }else {
               setError(false); 
            }
            setDataForm(false);  
        }
    }
    
    consultarAPI();

   }, [dataForm, city, country])

   let component;
   if(error){
     component = <Error mensaje="La ciudad no se pudo encontrar"/>
   } else {
     component =  <API
                    apiValue= {apiValue}
                    setDataForm={setDataForm}
                  />
   }
   
  return (
    <Fragment >
      <Header
        title="Clima React App"

      />
      <div className="contenedor-form">
          <div className="container">
              <div className="row">
                  <div className="col m6 s12">
                      <Form
                        setDataForm= {setDataForm}
                        setForm= {setForm}
                        form = {form}
                      />
                  </div>
                  <div className="col m6 s12">
                      {component}          
                  </div>
              </div>

          </div>
      </div>
    </Fragment>
  );
}

export default App;
