import React  from 'react'
import LayoutDashboard from './Hoc/LayoutDashboard'
import{Route,Switch,BrowserRouter} from 'react-router-dom'
import PrivateRoutes from './privateRoutes'
import auth from './Hoc/Auth/auth'


const RoutesDashboard = (props) => {
    
    return (
        <div>
           <LayoutDashboard user = {props.user} >
           
               <Switch>
                   
               </Switch>
           
           </LayoutDashboard>
        </div>
    )
}


export default RoutesDashboard