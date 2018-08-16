

import React, { Component} from 'react'
import Buttons from "../../widgets/Buttons/Buttons"
import { firebase,verFirebase,providerGoogle,firebaseDB,firebaseUsers } from "../../../firebase/firebase";
import { withRouter } from "react-router-dom";
import ReactLoading from 'react-loading'
import style from './loginServices.css'

class LoginServices extends Component {
     constructor(){
       super()
       
         this.state = {
          registerError : '',
          loading : false

         }

         this.signInwithProvider = this.signInwithProvider.bind(this)
         this.checkUserOnDataBase = this.checkUserOnDataBase.bind(this)
         this.registerNewUserOndb = this.registerNewUserOndb.bind(this)
         
     }

     
     signInwithProvider () {
      this.setState({
        loading:true
      })
       firebase.auth().signInWithPopup(providerGoogle)
       .then(response => {
       
         let userData = firebase.auth().currentUser
         
         this.checkUserOnDataBase(userData,()=> this.props.history.push('/dashboard/' + userData.uid))
        
       }).catch(err => {
         this.setState ({
           registerError : err,
           loading:false
         })
       })
     }

     checkUserOnDataBase(user,cb){
       firebaseDB.ref('Users/' + user.uid).
       on('value',(snap)=>{
        let UserStateOnDatabase = snap.val() ? console.log('hola de nuevo :)')  : this.registerNewUserOndb(user)
        this.setState({
          loadig:false
        })
        cb()
      
         
      })
     }

     registerNewUserOndb(newUser){
       firebaseDB.ref('Users/' + newUser.uid).set({
        firstName:newUser.displayName,
        lastName:newUser.displayName,
        email:newUser.email,
        img:newUser.photoURL,
        dateBornUser: firebase.database.ServerValue.TIMESTAMP,
        pomodorosCategory: ''
       })
     }

  render() {
    return (
      <div className={style.mainContainer}>
       <Buttons handlerFunction={this.signInwithProvider} type='LogIn' label={this.state.loading? 'verifying user...':'sign in with google account'}/>
       
         {this.state.loading
         ?  <div className = {style.loading}>
              <ReactLoading  className={style.animated} type={'spin'} color={'#00b8d4'} height={50} width={50} />
            </div>
         : null
         }
       
      </div>
    )
  }
}


export default LoginServices