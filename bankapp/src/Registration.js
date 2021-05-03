import React, {useState} from 'react';
import Sample from './Sample';
import { useHistory} from  'react-router-dom'
function Registration() {
    
  //  const names=["name1","name2"];
    const [acno, setacno]= useState('');
const [username, setUsername]= useState('');
const [password, setPassword]= useState('');
const history=useHistory();

const acnoChange=(event)=>{
    setacno(event.target.value)

}
const passwordChange=(event)=>{
    setPassword(event.target.value)

}
const usernameChange=(event)=>{
    setUsername(event.target.value)

}

    const handleSubmit = (event) => {
        event.preventDefault();
        history.push("/")
    }
    return<center> <div className="card" >
           
            
    <div className="card-header"> <h1>REGISTRATION</h1></div>
     
     <Sample name="User1" a="User1"/>
     <div class="card-body">
     <form onSubmit={handleSubmit}>
     <div class="container">
     <div class="row">
<div class="col">
<p class="font-weight-normal">ACCOUNT NO   </p>
      </div>
<div class="col"> <input onChange={acnoChange} class="form-control" type="text"></input><br></br></div>
</div>
<div class="row">
<div class="col">   USERNAME  </div>
<div class="col"><input onChange={usernameChange} class="form-control" type="text"></input><br></br></div></div>
<div class="row">
<div class="col">  PASSWORD</div>
<div class="col">   <input onChange={passwordChange} class="form-control" type="password"></input><br></br><br></br></div></div>
<div class="row"> <div class="col-sm"></div> <div class="col">  <button class="btn btn-success">Register</button>&nbsp;&nbsp;&nbsp;&nbsp;<input type="reset" value="Cancel" class="btn btn-secondary"></input>
</div> </div> 
 </div>  </form>
     </div>
     </div>
   
     </center>
}
export default Registration;