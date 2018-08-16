import React,{Component} from 'react'

//Components-----------------------------------
// import Header from '../Header/Header'
// import Footer from '../Footer/Footer'
// import Landing from '../Landing/Landing'



class Layout extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                
                 {this.props.children}
                
            </div>
        )
    }

}


export default Layout