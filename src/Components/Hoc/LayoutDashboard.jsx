import React,{Component} from 'react'

//Components-----------------------------------

 import Footer from '../Footer/Footer'
 import NavigationBar from "../widgets/NavigationBar/NavigationBar";
// import Landing from '../Landing/Landing'



class LayoutDashboard extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <NavigationBar/>
                
                 {this.props.children}
                <Footer/>
            </div>
        )
    }

}


export default LayoutDashboard