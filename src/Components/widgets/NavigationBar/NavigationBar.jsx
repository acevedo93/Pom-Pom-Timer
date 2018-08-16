import React from 'react';
import PropTypes from 'prop-types';
import Buttons from '../Buttons/Buttons'
import {logOut} from '../../../firebase/firebase'

import style from './navigationBar.css'



const propTypes = {
    
};


const NavigationBar = () => {


    let logOutApp = ()=> {
        logOut()
    }
    return (
        <div className = {style.mainContainer}>
            <nav className={style.nav}>
                <span className="style.iconUser"> 
                    <img/>
                </span>
                <ul>
                    
                   <Buttons type={'loginButton'} label={'Log out'} handlerFunction ={()=>logOutApp()}  />
                </ul>
            </nav>
        </div>
    );
};


NavigationBar.propTypes = propTypes;


export default NavigationBar;
