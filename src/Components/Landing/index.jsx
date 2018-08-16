import React, {Component} from 'react';

//Components

import Logo from '../widgets/Logo/Logo'
import Buttons from '../widgets/Buttons/Buttons'
 import LogIn from '../LogIn/LogIn'
import Modal from 'react-modal';
import  LoginServices from "../LogIn/LoginServices/LoginServices";
// import SlidingPane from 'react-sliding-pane';
import About from '../About/About'
import SimplePomodoro from '../SimplePomodoro/SimplePomodoro'
//CSS -----------------------
import style from './landing.css'



class Landing extends Component{
    constructor(props){
        super(props)
        this.state = {
            modalIsOpen: false,
            modalPomodoro:false,
            modalLogIn : false,
            
          };
        this.openModal = this.openModal.bind(this);
        this.openModalPomodoro = this.openModalPomodoro.bind(this)
        this.openModalLogIn = this.openModalLogIn.bind(this)
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.afterOpenModalPomodoro = this.afterOpenModalPomodoro.bind(this)
        this.afterOpenModalLogIn = this.afterOpenModalLogIn.bind(this)
        this.closeModal = this.closeModal.bind(this);
        this.closeModalPomodoro = this.closeModalPomodoro.bind(this)
        this.closeModalLogIn = this.closeModalLogIn.bind(this)
        }
        
    componentWillMount(){
        Modal.setAppElement('body');
    }
    openModal(){
        this.setState({modalIsOpen: true});
      }
      openModalPomodoro(){
        this.setState({modalPomodoro: true});
      }
      openModalLogIn(){
          this.setState({modalLogIn: true})
      }
    
    afterOpenModal() {
        // references are now sync'd and can be accessed.
        
    }
    afterOpenModalPomodoro() {
        // references are now sync'd and can be accessed.
        
    }
    afterOpenModalLogIn(){
          // references are now sync'd and can be accessed.
    }
    
    closeModal() {
        
        this.setState({modalIsOpen: false});
    }
    closeModalPomodoro() {
        
        this.setState({modalPomodoro: false});
    }
    closeModalLogIn(){
        this.setState({modalLogIn: false})
    }

 


    render(){
       
       
    return(
       
        <div>
            <div className={style.mainContainer}>
                <div className={style.secondContainer}>
                    <div className = {style.logo}>
                        <Logo/>
                    </div>
                    <div className = {style.landingDescription}>
                        <article>
                            <div className = {style.title}>
                                <h1>Pom Pom Timer</h1>
                            </div>
                            <div className = {style.content}>
                                <p>Tu herramienta secreta para conquistar el mundo y más alla.<br/>
                                 Your secret weapon to conquer the world and beyond.</p>
                            </div>
                            <div className = {style.logIn}>
                           
                                <div> <Buttons handlerFunction={this.openModalLogIn} type='LogIn' label='Sign In!'/></div>
                            </div>
                            <div className = {style.logIn}>
                                <span>or Pompom here!</span>
                                <div> <Buttons handlerFunction={this.openModalPomodoro} type='openSimplePomodoro' label='>'/></div>
                            </div>
                        </article>
                    </div>
                </div>
                <div className = {style.queEsPomPom}>
                <button onClick={this.openModal}>¿Qué es Pom Pom Timer?</button>
                </div>
                <div>
                    
                    <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    className={ style.ModalAbout }
                    >
                    <div className={ style.ModalAbout } >
                       <About  closeModal={this.closeModal} />
                    </div>
                    </Modal>
                </div>
                <div>
                <Modal
                    isOpen={this.state.modalPomodoro}
                    onAfterOpen={this.afterOpenModalPomodoro}
                    onRequestClose={this.modalPomodoro}
                    className = {style.pomodoroModal}
                    >
                   
                   
                        <SimplePomodoro closeModalPomodoro={this.closeModalPomodoro}/>
                    
                    </Modal>
                </div>
                <div>
                    <Modal
                    isOpen={this.state.modalLogIn}
                    onAfterOpen={this.afterOpenModalLogIn}
                    onRequestClose={this.closeModalLogIn}  className = {style.ModalLogIn}
                    >
                    <div >
                        {/* <LogIn  closeModal={this.closeModalLogIn} />  */}
                        <LoginServices {...this.props} closeModal={this.closeModalLogIn}/>
                    </div>
                    </Modal>
                </div>
           
            </div>
        </div>
        )
    }
    
}

export default Landing;
