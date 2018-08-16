import React from 'react'
import style from './about.css'
import FontAwesome from 'react-fontawesome'

import Buttons from '../widgets/Buttons/Buttons'

const About = (props) =>(
    <div className = {style.mainContainer}>
        <div className={style.closeModal}>
         <Buttons  handlerFunction={props.closeModal} type='close' label='X'/> 
        </div>
        <div className = {style.abouttitle}>
            <h2>¿Qué es Pom Pom timer?</h2>
        </div>

        <div className = {style.content}>
            <p> Pom Pom Timer es una herramienta que te permitira administrar tu tiempo para hacer lo que quieras!! , solo inicia un pomodoro y comienza a trabajar. </p>
        </div>
       

        <div className = {style.iconsContainer}>
            <div >
                <FontAwesome name="sitemap" size="3x" />
                <h3  className = {style.content}>Genera categorías de tus pomodoros.</h3>  
            </div>
            <div>
                <FontAwesome name="play" size="3x" />
                <h3  className = {style.content}>Organiza tus tiempos de trabajo y descanso.</h3>  
            </div> 
            <div>
                <FontAwesome name="sitemap" size="3x"/>
                <h3  className = {style.content}>Asegúrate de trabajar el tiempo que necesitas.</h3>  
            </div>                 
        </div>
    </div>
)

export default About