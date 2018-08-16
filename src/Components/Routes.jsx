import React  from 'react'
import Layout from './Hoc/Layout'
import{Route,Switch,BrowserRouter} from 'react-router-dom'
import Landing from './Landing'
import Dashboard from './Dashboard/Dashboard'
import PrivateRoutes from './privateRoutes'
import auth from './Hoc/Auth/auth'


const Routes = (props) => {
    
    return (
        <div>
           <Layout user = {props.user} >
           
               <Switch>
                    <Route path="/" {...props} exact component={Landing}/>
                     <Route path="/auth" {...props} exact component={auth}/>  }
                   { /*<Route path="/record" exact Component = {Record}/>*/}
                   {/* <PrivateRoutes {...props} path="/pomodoro" exact component={Pomodoro}/>*/}
                   <PrivateRoutes {...props} path ="/dashboard/:uid" exact component ={Dashboard}/> 
               </Switch>
           
           </Layout>
        </div>
    )
}


export default Routes