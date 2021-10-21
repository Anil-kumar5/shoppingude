import React from 'react';

export class Rendering extends React.Component{
    state={
        isLoggedIn:false,
        user:''
    }
    onChange = e =>{
        this.setState({
            user:e.target.value
        })
    }
     onSubmitHandler = e =>{
        e.preventDefault();
        if(this.state.user==='anil'){
          this.setState({
              isLoggedIn:true
          })
        }else{
            alert('enter correct details')
            this.setState({
                isLoggedIn:false
            })
        }
    }
    
    render(){
        const {user,isLoggedIn} = this.state;
        return(
            <>
           <p onClick={()=>console.log("hello anil")}>{isLoggedIn?`welcome  ${user}`:'sign in'}</p>

            <input type="text"  value={user} onChange={this.onChange}/>
            <button type="submit" onClick={this.onSubmitHandler}>Login</button>
            </>
        )
    }
    
}
