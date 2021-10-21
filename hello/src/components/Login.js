import React from 'react';

export class Login extends React.Component{
       state ={
           data:[],
           user:'',
           password:''
       }
       onHandlerChange = e =>{
           this.setState({
               user:e.target.value
           })
       }
       onPasswordChange = e =>{
           this.setState({
               password:e.target.value
           })
       }
    async componentDidMount(){
        const url ="https://jsonplaceholder.typicode.com/users";
        const response = await fetch(url);
        const result = await response.json();
        this.setState({
            data:result[0]
        })
        console.log(this.state.data)
    }
    onSubmitHandler=() =>{
        if(this.state.user==this.state.data.name&&this.state.password==this.state.data.username){
            alert("your login is successful")
        }else{
            alert("please enter correct credentials")
        }
    }
    render(){
        const {data,user,password} = this.state;
        return(
           <div>
               <input type="text" value={user}   required   onChange={this.onHandlerChange}/>
               <input type="password" value={password} onChange={this.onPasswordChange}/>
               <button type="submit" onClick={this.onSubmitHandler}>submit</button>
           </div>
        );
    }
}