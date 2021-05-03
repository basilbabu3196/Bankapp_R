import React from 'react'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
class DashboardClass extends React.Component{
    state={
       
    password:'',
    acno:'',
    balance:'',
    password1:'',
    acno1:'',
    balance1:''
    }
   balanceChange=(event)=>{
        this.setState({
            balance:event.target.value
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
    balanceChange1=(event)=>{
        this.setState({
            balance1:event.target.value
        })

    }
    passwordChange1=(event)=>{
        this.setState({
            password1:event.target.value
        })
     }
     acnoChange1=(event)=>{
        this.setState({
            acno1:event.target.value
        })
    }
    handleSubmit=(event)=>{
        alert("usename:"+this.state.acno)
        alert("password:"+this.state.password)
    }
    handleSubmit=(event)=>{
        alert("u1sename:"+this.state.acno1)
        alert("password:"+this.state.password1)
    }
    render(){
        return<center> <div className="card" >
           
            
        <div className="card-header"> <h1>DEPOSITE</h1></div>
       
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
    <div class="col">  PASSWORD</div>
    <div class="col">   <input onChange={this.passwordChange} class="form-control" type="password"></input><br></br></div></div>
    <div class="row">
    <div class="col">   BALANCE  </div>
    <div class="col"><input onChange={this.balanceChange} class="form-control" type="text"></input><br></br></div></div>
    
    <div class="row"> <div class="col-sm"></div> <div class="col">  <button class="btn btn-success">DEPOSITE</button>&nbsp;&nbsp;&nbsp;&nbsp;<input type="reset" value="Cancel" class="btn btn-secondary"></input>
    </div> </div> 
   
     </div>  </form>
         </div>
         </div>
         <div className="card" >
           
            
           <div className="card-header"> <h1>WITHDRAW</h1></div>
          
            <div class="card-body">
            <form onSubmit={this.handleSubmit}>
            <div class="container">
            <div class="row">
       <div class="col">
       <p class="font-weight-normal">ACCOUNT NO   </p>
             </div>
       <div class="col"> <input onChange={this.acnoChange1} class="form-control" type="text"></input><br></br></div>
       </div>
       <div class="row">
       <div class="col">  PASSWORD</div>
       <div class="col">   <input onChange={this.passwordChange1} class="form-control" type="password"></input><br></br></div></div>
       <div class="row">
       <div class="col">   BALANCE  </div>
       <div class="col"><input onChange={this.balanceChange1} class="form-control" type="text"></input><br></br></div></div>
      
       <div class="row"> <div class="col-sm"></div> <div class="col">  <button class="btn btn-success">WITHDRAW</button>&nbsp;&nbsp;&nbsp;&nbsp;<input type="reset" value="Cancel" class="btn btn-secondary"></input>
       </div> </div>
      
      
        </div>  </form>
            </div>
            </div>
         </center>
    }

}
export default DashboardClass
