import logo from './logo.svg';
import './App.css';
import LoginFunctions from './LoginFunction'
import Login from './Login'
import TestClass from './TestClass'
import Registrationclass from './Registrationclass'
import Registration from './Registration'
import Dashboard from './Dashboard'
import DashboardClass from './DahboardClass'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
  
function App() {
  return (
    <BrowserRouter>
    {/* <Link to="/LoginFunction">Login</Link>&nbsp;
    <Link to="/Registration">Registration</Link>&nbsp;
    <Link to="/Dashboard">Dashboard</Link>&nbsp; */}
    <div className="App">
      <Switch>
      <Route path="/Registration" component={Registration}>
{/* <Registration></Registration> */}
</Route>
<Route path="/Dashboard" component={Dashboard}>
{/* <Dashboard></Dashboard> */}
</Route>
      <Route path="/" component={LoginFunctions}>
  {/* <Login></Login> */}
</Route>
</Switch>



      {/* </Dashboardclass> */}
     {/* <Dashboard></Dashboard> */}
    {/*  */}
      {/* <Login></Login>  */}
        {/* <LoginFunctions></LoginFunctions>  */}
      {/* <header className="App-header">
     
      
        <p>
         my program
        </p>
        
      </header> */}
     {/* <Switch>
      <Route path="/Registrationclass"  component={Registrationclass}>

</Route>
<Route path="/DashboardClass"  component={DashboardClass}>

</Route>
      <Route path="/"  component={Login}></Route>
</Switch> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
