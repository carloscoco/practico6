import React, { useState } from "react";
import './Formulario.css'

const Formulario = () => {
    const [nombre,setNombre] = useState('')
    const [apellido,setApellido] = useState('')
    const [telefono,setTelefono] = useState('')
    const [email,setEmail] = useState('')

    const [password,setPassword] = useState('')
    const [passwordCopia,setPasswordCopia] = useState('')
    
       
    const [nombreValida,setNombreValida] = useState(false)
    const [apellidoValida,setApellidoValida] = useState(false)
    const [emailValido, setEmailValido] = useState(true)
   
    const [telefonoValido, setTelefonoValido] = useState(false)
    
    const [mostrarDatos,setMostrarDatos] = useState(false)

    //const [PasswordValido,setPasswordValido] = useState(false)
    const [PasswordCampo,setPasswordCampo] = useState(false)
    const [mostrarPassword,setMostrarPassword] = useState(false)
    const [passwordCheck,setPasswordCheck] = useState(false)
   
    const [PasswordCampoCopia,setPasswordCampoCopia] = useState(false)
    const [mostrarPasswordCopia,setMostrarPasswordCopia] = useState(false)
 

    function enviarPassword(event){
      event.preventDefault()
      setMostrarPassword(!mostrarPassword)     
    }
    
    function validarPassword(event){
      setPassword(event.target.value)     
      event.target.value.length<3?setPasswordCampo(true):setPasswordCampo(false)
    }

    function validarPasswordCopia(event){
      setPasswordCopia(event.target.value)     
      event.target.value.length<3?setPasswordCampoCopia(true):setPasswordCampoCopia(false)
      setPasswordCheck(false)
    }

    function enviarPasswordCopia(event){
      event.preventDefault()
      setMostrarPasswordCopia(!mostrarPasswordCopia)     
    }
    
    function validarNombre(event){
        setNombre(event.target.value)
        console.log(nombre)
        event.target.value.length<3?setNombreValida(true):setNombreValida(false)
    }
    function validarApellido(e){
        setApellido(e.target.value)
        console.log(apellido);
        e.target.value.length<3?setApellidoValida(true):setApellidoValida(false)
    }
    function telefonoActualizado(e) {
       setTelefono(e.target.value)  
       e.target.value.length<3?setTelefonoValido(true):setTelefonoValido(false)
    }
 
    function emailActualizado(e){
      setEmail(e.target.value)
         if (e.target.value.length > 3) { 
          setEmailValido(/^\S+@\S+\.\S+$/.test(e.target.value))
         } 
          console.log('Email Valido',emailValido)
    }
        
   function enviarForm(e) {
      e.preventDefault()
      if (nombre === '' )   { setNombreValida(true) }
      if (apellido === '' ) { setApellidoValida(true) }
      if (telefono === '' ) { setTelefonoValido(true) }
      if (email === '' )    { setEmailValido(false) }
      if (password === '' ) { setPasswordCampo(true) }
      if (passwordCopia === '' ) { setPasswordCampoCopia(true) }
         if ( PasswordCampo === false && PasswordCampoCopia === false) {
               if (password !== passwordCopia) { 
                  setPasswordCheck(true)
                  //setPasswordCampoCopia(false) 
                  console.log(password)
                  console.log(passwordCopia)
               }
         }
           
      if (nombre && apellido && telefono && email && password && passwordCopia) {
           setMostrarDatos(true)
      }

   }
    return(
   <div>
   { !mostrarDatos &&
   <div className="Formulario">
   
   <div>
      <legend>Datos personales</legend>
   </div>  
      <div className="form-group">
      <label htmlFor="">Nombre</label>
      <input type="text" value={nombre} onChange={validarNombre} />
      { nombreValida && <div id="muestra">Debe contener al menos 3 caracteres</div> }
   </div> 
   <div>
      <label htmlFor="">Apellido</label>
      <input type="text" value={apellido} onChange={validarApellido} />
      { apellidoValida && <div id="muestra">Debe contener al menos 3 caracteres</div> }
   </div>  

     <div>
     <label className="labeld" htmlFor="">Password</label>
      <input className="divText" onChange={validarPassword} type={mostrarPassword?"text":"password"} />
      <button onClick={enviarPassword}>{mostrarPassword?' Ocultar':'Mostrar'} pasword</button>
      { PasswordCampo && <div id="muestra">Debe contener al menos 3 caracteres</div> }
     </div>
     <div>
     <label className="labeld" htmlFor="">Confirmar Password</label>
      <input className="divText" onChange={validarPasswordCopia} type={mostrarPasswordCopia?"text":"password"} />
      <button onClick={enviarPasswordCopia}>{mostrarPasswordCopia?' Ocultar':'Mostrar'} pasword</button>
      { PasswordCampoCopia && <div id="muestra">Debe contener al menos 3 caracteres</div> }
      { passwordCheck && <div id="muestra">Las password no son iguales</div> }
     </div>
         
     <div>
        <label >Email</label>
        <input type="email" onChange={emailActualizado} placeholder="algo@ejemplo.com"/>
        { !emailValido && <div id="muestra">Email Incorrecto </div> }
     </div>
     <div>
       <label>Teléfono</label>
        <input type="text" onChange={telefonoActualizado}/>
        { telefonoValido && <div id="muestra">Debe contener al menos 3 caracteres</div> }
     </div>
    
    <div>
       <button type="button">Cancelar</button>
       <button type="submit" onClick={enviarForm}>Enviar</button>
    </div>
    </div> }
     { mostrarDatos &&
     <div id="Mostrar">
      <h4>Datos enviados:</h4>
      <p>Nombre: {nombre} </p>
      <p>Apellido: {apellido} </p>
      <p>Email: {email} </p>
      <p>Email: {telefono} </p>
      </div>
    }
    
   </div>
)
}

export { Formulario }