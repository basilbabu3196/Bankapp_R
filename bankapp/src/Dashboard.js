import React, {useState} from 'react';
import Sample from './Sample';
function Dashboard() {
    const [acno, setacno]= useState('');
    const [balance, setbalance]= useState('');
    const [password, setPassword]= useState('');
    const [acno2, setacno2]= useState('');
    const [balance2, setbalance2]= useState('');
    const [password2, setPassword2]= useState('');
    const acnoChange=(event)=>{
        setacno(event.target.value)
    
    }
    const passwordChange=(event)=>{
        setPassword(event.target.value)
    
    } 
    const balanceChange=(event)=>{
        setbalance(event.target.value)
    
    } 
    const acnoChange2=(event)=>{
        setacno2(event.target.value)
    
    }
    const passwordChange2=(event)=>{
        setPassword2(event.target.value)
    
    } 
    const balanceChange2=(event)=>{
        setbalance2(event.target.value)
    
    } 
    const handleSubmit = () => {

    }
    const handleSubmit2 = () => {

    }
    return<center> <div className="card" >
           
            
    <div className="card-header"> <h1>DEPOSITE</h1></div>
     
   
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
<div class="col">   PASSWORD  </div>
<div class="col"><input onChange={passwordChange} class="form-control" type="password"></input><br></br></div></div>
<div class="row">
<div class="col">  BALANCE</div>
<div class="col">   <input onChange={balanceChange} class="form-control" type="text"></input><br></br><br></br></div></div>
<div class="row"> <div class="col-sm"></div> <div class="col">  <button class="btn btn-success">DEPOSITE</button>&nbsp;&nbsp;&nbsp;&nbsp;<input type="reset" value="Cancel" class="btn btn-secondary"></input>
</div> </div> 
 </div>  </form>
     </div>
     </div>
     <div className="card" >
           
            
    <div className="card-header"> <h1>WITHDRAW</h1></div>
     
   
     <div class="card-body">
     <form onSubmit={handleSubmit2}>
     <div class="container">
     <div class="row">
<div class="col">
<p class="font-weight-normal">ACCOUNT NO   </p>
      </div>
<div class="col"> <input onChange={acnoChange2} class="form-control" type="text"></input><br></br></div>
</div>
<div class="row">
<div class="col">   PASSWORD  </div>
<div class="col"><input onChange={passwordChange2} class="form-control" type="password"></input><br></br></div></div>
<div class="row">
<div class="col">  BALANCE</div>
<div class="col">   <input onChange={balanceChange2} class="form-control" type="text"></input><br></br><br></br></div></div>
<div class="row"> <div class="col-sm"></div> <div class="col">  <button class="btn btn-success">WITHDRAW</button>&nbsp;&nbsp;&nbsp;&nbsp;<input type="reset" value="Cancel" class="btn btn-secondary"></input>
</div> </div> 
 </div>  </form>
     </div>
     </div>
     </center>
     


}
export default Dashboard;