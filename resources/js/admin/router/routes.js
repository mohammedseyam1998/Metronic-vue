import Dashboard from '../components/Dashboard'
import StateColors from '../components/StateColors'
import Typography from '../components/Typography'
import Stack from '../components/Stack'
import Login from '../components/Login'
import Layout from '../components/Layout'


export default  [
    { path: '/login', name: "login", component:  Login },
    {
    path : '/',
    component : Layout  ,
    redirect : '/dashboard',
    children : [
        { path: '/dashboard', name: "Dashboard", component:  Dashboard },
        { path: '/state-color', component:  StateColors },
        { path: '/typography', component:  Typography },
        { path: '/stack', component:  Stack },
    ]
}

]
