import React, {useState} from 'react';
import Sample from './Sample';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory} from  'react-router-dom'
function LoginFunctions() {
    
    const names=["name1","name2"];
const [username, setUsername]= useState('');
const [password, setPassword]= useState('');
const history=useHistory();
const passwordChange=(event)=>{
    setPassword(event.target.value)

}
const usernameChange=(event)=>{
    setUsername(event.target.value)

}

    const handleSubmit = (event) => {
        event.preventDefault();
        history.push("/Dashboard")
    }
    return<center> <div className="card-header">
    <h1>Login</h1>
    <h2>username:{username}</h2>
    <h2>password:{password}</h2></div>
    {/* {
        names.map(name=><h1>{name}</h1>)
    } */}
    {/* <Sample name="User1" a="User1"/>
    <Sample name="User2"/>
    <Sample name="User3"/>
      */} <div class="card-body"> 
     <form onSubmit={handleSubmit}>
     <div class="container">
     <div class="row">
<div class="col">
        USERNAME</div>
         <div class="col">
              <input onChange={usernameChange} type="text" class="form-control"  ></input><br></br><br></br>
              </div></div>
              <div class="row">
<div class="col">
        PASSWORD</div>
        <div class="col"><input onChange={passwordChange} type="password" class="form-control"></input>
        </div></div><br></br>
        <div class="row">
<div class="col"></div> <div class="col"> <button class="btn btn-primary">LOGIN</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="reset" value="Cancel" class="btn btn-secondary"></input></div></div>
   </div>
    </form>
    </div>
    

    </center>
}
export default LoginFunctions;