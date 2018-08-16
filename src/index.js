import React from 'react';
import ReactDOM from 'react-dom';
import{BrowserRouter} from 'react-router-dom'
import Routes from './Components/Routes'
import {firebase} from './firebase/firebase'

const App = (props) => {
    
    return(
        <BrowserRouter>
            <Routes {...props}/>
        </BrowserRouter>
    )
}
// escuchando la autenticacioon del usuario

firebase.auth().onAuthStateChanged((user)=>{
    
    ReactDOM.render(<App user = {user} />, document.getElementById('root'));
})

