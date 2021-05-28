import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import API from './components/API';
 
function App() {

  
  // State Form
  const [form, setForm] = useState({
     city:'',
     country:''
   })

  // state
  const [dataForm, setDataForm] = useState(false);   

   const { city, country } = form;
  console.log(form.city);

  useEffect(() => {
      
        
      const consultarAPI = async () => {
        if (dataForm) {

            
            const idAPI = '7ca43ca50003586d0301a08619bdcecd';
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${idAPI}`;

            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            console.log(resultado);
        }
    }

    consultarAPI();

   }, [dataForm])

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
                      {dataForm  ? <API
                                                          
                                    dataForm={dataForm}
                                  /> 
                                  : null

                      }
                  </div>
              </div>

          </div>
      </div>
    </Fragment>
  );
}

export default App;
