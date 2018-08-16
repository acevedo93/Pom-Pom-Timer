import React from 'react'


//css ----------------------------
import style from './buttons.css'


const Buttons = (props) => {


    const renderButton = () => {

        let template = ''
        let type  = props.type

        switch(type){
            case('pomodoroButton'):
            template =   <button   onClick = {props.handlerFunction} className={style.pomodoroButton}> {props.label} </button>
            break;
            case('loginButton'):
            template = <button  onClick = {props.handlerFunction}   className={style.loginButton}> {props.label} </button>
            break;
            case('loginButton2'):
            template = <button  onClick = {props.handlerFunction}   className={style.loginButton2}> {props.label} </button>
            break;
            case('openSimplePomodoro'):
            template = <button onClick = {props.handlerFunction}   className={style.clickHere}> {props.label} </button>
            break;
            case('close'):
            template = <button onClick = {props.handlerFunction}   className={style.close}> {props.label} </button>
            break;
            case('LogIn'):
            template = <button onClick = {props.handlerFunction}   className={style.loginButton}> {props.label} </button>
            break;
            
        }
        return template
    }
    
    
    return(
        <div> 
            {renderButton()}
        </div>
        )
}


export default Buttons