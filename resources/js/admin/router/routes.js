import Dashboard from '../components/Dashboard'
import StateColors from '../components/StateColors'
import Typography from '../components/Typography'
import Stack from '../components/Stack'
import Login from '../components/Login'
import Layout from '../components/Layout'
import Register from '../components/Register'
import signIn from '../components/signIn'
import Table from '../components/Table'
import Picker from '../components/Picker'
import Calendar from '../components/Calendar'
import managePreferences from '../components/managePreferences'
import Items from '../components/Items'



export default  [
    {
        path: '/login',
         component:  Login ,
         redirect : '/SignIn',
         children : [
            { path: '/SignIn', name: "SignIn", component: signIn },
            { path: '/Register', component:  Register },

        ]
    },

    {
        path : '/',
        component : Layout  ,
        redirect : '/dashboard',
        children : [
            { path: '/dashboard', name: "Dashboard", component:  Dashboard },
            { path: '/state-color', component:  StateColors },
            { path: '/typography', component:  Typography },
            { path: '/stack', component:  Stack },
            { path: '/table', component:  Table },
            { path: '/picker', component:  Picker },
            { path: '/calendar', component:  Calendar },
            { path: '/managePreferences', component:  managePreferences },
            { path: '/items', component:  Items },
            ]
    }


]
