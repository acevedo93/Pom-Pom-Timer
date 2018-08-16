import React,{Component} from 'react'
import style from './LogIn.css'
import FontAwesome from 'react-fontawesome'

import Buttons from '../widgets/Buttons/Buttons'
import FormField from '../widgets/FormFields/formFields'

import axios from 'axios'

class LogIn extends Component{
  constructor () {
    super()
    this.state = {
      registerError: '',
      loading: false,
      formData: {
        username : {
          element:'input',
          value: '',
          config: {
            name:'username',
            type:'text',
            placeholder:'ingresa tu usuario'
          },
          validation : {
            required:true,
            username:true
          },
          valid:false,
          touched:false,
          validationMessage:''
          },
        password: {
          element: 'input',
          value:'',
          config: {
            name:'pass',
            type:'password',
            placeholder:'Ingresa tu contraseña'
          },
          validation:{
            required:true,
            password:true
          },
        valid:false,
        touched:false,
        validationMessage:''
        }
      }
    }
      
 
    // this.submitForm = this.submitForm.bind(this)
    this.updateForm = this.updateForm.bind(this)
    this.validate = this.validate.bind(this)
    this.submitForm = this.submitForm.bind(this)
    this.submitButton = this.submitButton.bind(this)
    this.showError = this.showError.bind(this)
  }
  updateForm (element) {
   
    // Obtengo el objeto del estado sin cambio
    const newFormData ={
      ...this.state.formData
    } 
    
    const newElement = {
      ...newFormData[element.id]
    }
    newElement.value = element.event.target.value
   
    if(element.blur){
      
      // valido el campo con la funcion corespondiente
      let validData = this.validate(newElement)
      newElement.valid = validData[0];
      newElement.validationMessage = validData[1]; 
    }
    newElement.touched = element.blur
    newFormData[element.id] = newElement
 
    this.setState({
      formData:newFormData
    })
  }




  submitForm (event,type) {
    event.preventDefault()

    if(type !== null){
      let dataToSubmit = {}
      let formIsValid = true

      for(let key in this.state.formdata){
        dataToSubmit[key] = this.state.formdata[key].value
      }
      for(let key in this.state.formdata){
          formIsValid = this.state.formdata[key].valid && formIsValid;
      }
      if(formIsValid){
        this.setState({
          loading:true,
          registerError:''
        })
        if(type){
          console.log('verificando usuario')
        }
        else {
          console.log('creando usuario')
        }
      }
    
    }
   
}


  validate = (element) => {
    let error = [true,''];

    if(element.validation.username){
        const valid = element.value.length > 0;
        const message = `${!valid ? 'Debe ingresar un usuario valido':''}`;
        error = !valid ? [valid,message] : error
    }

    if(element.validation.password){
        const valid = element.value.trim() !=='' ;
        const message = `${!valid ? 'La clave debe tener mas caracteres ':''}`;
        error = !valid ? [valid,message] : error
    }

    // if(element.validation.required){
    //     const valid = element.value.trim() !=='';
    //     const message = `${!valid ? 'Este campo es requerido':''}`;
    //     error = !valid ? [valid,message] : error
    // }

    return error;
}
submitForm (event,type) {
  event.preventDefault()

  let validUser = this.state.formData.username.valid
  let validPassword = this.state.formData.password.valid
  if(validUser && validPassword){
    // axios.post('/login',{
    //   "username":validUser,
    //   "Pass":validPassword
    // }).then((user)=>{
    //   console.log(user)
    // }).catch((err) => console.log('Error',err))

    axios.get('/pomodoros').then(res => console.log(res))
  }else {
    this.setState({
      registerError: ' Parece que el usuario o la contraseña no son validos'
    })
  }
  console.log(event)

}
submitButton = () => (
  this.state.loading ? 
      'loading...'
  :
  <div>
      {/* <button onClick={(event)=>this.submitForm(event,false)}> Register now</button> */}
      
      <Buttons handlerFunction={(event) => this.submitForm(event,true)}  type='LogIn' label='Log in!'/>
      {/* <button onClick={(event)=>this.submitForm(event,true)}> Log in </button> */}
  </div>
)

showError = () => {
  let errorUsername = this.state.formData.username.validationMessage
  let errorPassword = this.state.formData.username.validationMessage
  let errorLogin = this.state.formData.username.validationMessage
  if(errorUsername || errorPassword){
    return  <div className={style.labelError} >{this.state.registerError}</div>
  }

  if(errorLogin){
    return <div className={style.labelError} >{this.state.registerError}</div>
  }
    return ''

  }
  render() {
    let user = this.props.user
    return (
      <div className = {style.mainContainer}>
        <form >
          <h2 className={style.titulo}>Register / logIn </h2>

          <FormField
            id="username"
            formdata={this.state.formData.username}
            change = {(element) => this.updateForm(element)}
            />
            <FormField
            id="password"
            formdata={this.state.formData.password}
            change = {(element) => this.updateForm(element)}
            />
            { this.submitButton() }
            { this.showError() }

         

        </form>
    </div>
    
    )
       
  }
 

}

export default LogIn