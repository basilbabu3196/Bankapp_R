
import React from 'react'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SampleClass from './SampleClass';

class Registrationclass extends React.Component{
state={
    username:'',
password:'',
acno:''
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
     acnoChange=(event)=>{
        this.setState({
            acno:event.target.value
        })
    }
     handleSubmit=(event)=>{
         alert("usename:"+this.state.username)
         alert("password:"+this.state.password)
         this.props.history.push("/")
     }
    render(){
        return<center> <div className="card" >
           
            
        <div className="card-header"> <h1>REGISTRATION</h1></div>
         <h2>username:{this.state.username}</h2>
         <SampleClass name="User1" a="User1"/>
         <div class="card-body">
         <form onSubmit={this.handleSubmit}>
         <div class="container">
         <div class="row">
    <div class="col">
    <p class="font-weight-normal">ACCOUNT NO   </p>
          </div>
    <div class="col"> <input onChange={this.acnoChange} class="form-control" type="text"></input><br></br></div>
    </div>
    <div class="row">
    <div class="col">   USERNAME  </div>
    <div class="col"><input onChange={this.usernameChange} class="form-control" type="text"></input><br></br></div></div>
    <div class="row">
    <div class="col">  PASSWORD</div>
    <div class="col">   <input onChange={this.passwordChange} class="form-control" type="password"></input><br></br><br></br></div></div>
    <div class="row"> <div class="col-sm"></div> <div class="col">  <button class="btn btn-success">Register</button>&nbsp;&nbsp;&nbsp;&nbsp;<input type="reset" value="Cancel" class="btn btn-secondary"></input>
    </div> </div> 
     </div>  </form>
         </div>
         </div>
       
         </center>
    }
}
export default Registrationclass;