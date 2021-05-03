
import React from 'react'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
class Login extends React.Component{
state={
    username:'',
password:''
}

    usernameChange=(event)=>{
        this.setState({
            username:event.target.value
        })

    }
    passwordChange=(event)=>{
        this.setState({
            password:event.target.value
        })
     }

     handleSubmit=(event)=>{
         alert("usename:"+this.state.username)
         alert("password:"+this.state.password)
         this.props.history.push("/DashboardClass")
     }
    render(){
        return <center> <div className="card">
        <div className="card-header"> <h1>Login</h1></div>
         <h2>username:{this.state.username}</h2>
        
         <div class="card-body">
         <form onSubmit={this.handleSubmit}>
         <div class="container">
     <div class="row">
<div class="col">
             USERNAME</div><div class="col"> <input onChange={this.usernameChange} type="text" class="form-control"></input></div></div><br></br><br></br>
             <div class="row">
<div class="col">     PASSWORD</div><div class="col"><input onChange={this.passwordChange} type="password" class="form-control"></input></div></div><br></br><br></br>
<div class="row">
<div class="col"></div><div class="col">  <button class="btn btn-primary">LOGIN</button>&nbsp;&nbsp;&nbsp;&nbsp;<input type="reset" value="Cancel" class="btn btn-secondary"></input></div></div>
        </div>
         </form>
         </div>
         </div>
     
         </center>
    }
}
export default Login;