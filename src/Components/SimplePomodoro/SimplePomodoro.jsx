import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import Buttons from '../widgets/Buttons/Buttons'



//css --------------------------------------------

import style from './simplePomodoro.css'

class SimplePomodoro extends Component {
    constructor(...props){
        super(...props)
        this.state = {
            
            sessionClock : {
                minutes: '',
                seconds: '' 
            },
            breakClock: {
                minutes: '',
                seconds: ''
            },
            breakLongClock : {
                minutes : '',
                seconds : ''
            },
            
            active:false,
            session:false,
            longBreak:false,
            intervalId: null,
            sessionCount : 0,
            countToLongBreak: '',

            settings:{
                sessionTime:25,
                breakTime:5,
                longBreakTime:15,
                countToLongBreakTime:4
            }
        }

        this.renderClock = this.renderClock.bind(this)
        this.renderControls = this.renderControls.bind(this)
        this.resetClock = this.resetClock.bind(this)
        this.stop = this.stop.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)

    }
    componentWillMount() {
        this.setState({
            sessionClock : {
               minutes: this.state.settings.sessionTime,
               seconds: 0

            },
            breakClock:{
                minutes: this.state.settings.breakTime,
                seconds: 0
 
             },
             breakLongClock:{
                 minutes:this.state.settings.longBreakTime,
                 seconds:0
             },
             session:true,
             countToLongBreak:this.state.settings.countToLongBreakTime
            
         })
       
        
    }
    componentDidMount() {
       
        const addEvent = window.addEventListener || window.attachEvent;
        addEvent("keypress",this.handleKeyPress)
        
    }
    

    componentWillUnmount() {
        
        const removeEvent = window.removeEventListener || window.detachEvent;
        
          
          removeEvent("keypress", this.handleKeyPress);
    }
    renderClock (stateSession) {
            return stateSession 
            ? 
                 <div className = {style.clockNumbers}>{this.state.sessionClock.minutes}<span>m</span>  {this.state.sessionClock.seconds}<span>s</span></div>
            :    
                <div className = {style.clockNumbers}>{this.state.breakClock.minutes}<span>m</span>   {this.state.breakClock.seconds}<span>s</span></div>
        }
    renderControls(active,stateSession,longBreak){
        return active ? <button ref="autocomplete"  onClick={()=> this.stop( this.state.intervalId)} > stop </button>  : <button 
             onClick = {()=>  this.start(stateSession)}> start </button>


    }  
    handleKeyPress = (event) => { 
        event.preventDefault(); 
         event.stopPropagation(); 
        if(event.key == ' '){ 
            return this.state.active ? this.stop(this.state.intervalId) : this.start(this.state.session)
        } 
    }
    
     
    start(stateSession){
       
        this.setState({
            active:true,
        })
        let minutes,seconds
        if(this.state.countToLongBreak !== 0){
             minutes = stateSession ? this.state.sessionClock.minutes : this.state.breakClock.minutes
             seconds = stateSession ? this.state.sessionClock.seconds : this.state.breakClock.seconds
        }else {
            minutes = this.state.breakLongClock.minutes
            seconds = this.state.breakLongClock.seconds
        }
        return ( minutes === 0 && seconds === 0) ?
       
            
            (()=>{
            //pasa al siguiente estado
            this.setState({
                session: (stateSession ) ? false : true,
                longBreak : this.state.countToLongBreak === 0 ? true : false,
                sessionCount :stateSession  ? this.state.sessionCount + 1: this.state.sessionCount,
                countToLongBreak:stateSession  ? this.state.counToLongBreak - 1 : this.state.counToLongBreak,
                intervalId:null,
                
            })
          
            this.resetClock()
        })()
        :(()=> {
           
            if(seconds === 0) {
               
                let restMinutes = { minutes:--minutes,seconds:59}  
                
                if(stateSession )this.setState({sessionClock: restMinutes})
                else this.setState({ breakClock:restMinutes})

            }else{
                let restSeconds = { minutes:minutes,seconds:--seconds}
                if(stateSession)this.setState({ sessionClock:restSeconds}) 
                else this.setState({breakClock:restSeconds})    
            }
            //execute aagin 
           
            this.setState({
               intervalId:setTimeout(()=>{
                this.start(stateSession) 
                })
            })
        })()
    }

  
    resetClock(){
        this.stop(this.state.intervalId)
          //  Reinicia los relojes a los valores primarios
        this.setState({
            sessionClock : {
                minutes: this.state.settings.sessionTime,
                seconds: 0
 
             },
             breakClock:{
                 minutes: this.state.settings.breakTime,
                 seconds: 0
  
              },
        })
      }

    stop(intervalId){  
            clearInterval(intervalId)
            this.setState({
                active: false
               
            })
    }
 
    render() {
        
        return(
            <div className={this.state.session ? style.mainContainer : style.mainContainerBreak}   >
                    <div className={style.iconContainer} >
                    {
                        this.state.session ? <FontAwesome name="briefcase" size="3x"/> :  <FontAwesome name="coffee" size="3x"/>
                    }
                    <Buttons  handlerFunction={this.props.closeModalPomodoro} type='close' label='X'/> 
                    
                    </div>
                <div className = {style.logoContainer} >
                        <img src="/images/logo500.png"/>
                </div>
                <div className={style.clock} > 
                {this.renderClock(this.state.session)}    
                    <div className={style.content} >
                        <p> Pulsa espacio para { !this.state.active ? 'Comenzar' : 'Detenerte' } </p>
                         <p> Tap space to { !this.state.active ? 'begin' : 'stop' }</p> 
                        {/* {this.renderControls(this.state.active,this.state.session,this.state.longBreak)} */}
                        
                    </div>
                </div>
               
            </div>
        )
    }
    
}


export default SimplePomodoro