import React from 'react';
export class SignIn extends React.Component{
    render(){
        return(
            <>
           
            <input type="text"  value={this.props.user} onChange={this.onChange}/>
            <button type="submit" onClick={this.props.onSubmitHandler}>Login</button>
            </>
        )
    }
} 