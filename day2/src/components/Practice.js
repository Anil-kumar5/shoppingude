import React from 'react';
import  fun, {details, vari } from './Two';
export class Practice extends React.Component{
    async componentDidMount(){
        const url="https://jsonplaceholder.typicode.com/users";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)}
    
    render(){
    
        const {comments} = this.state
        
        return(
            <div>
            

 </div>
        )
    }
}
