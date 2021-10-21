import React from 'react';
import { Component } from 'react';

// export class WillUnmount extends React.Component{
//     constructor(props){
//         super(props)
//         this.state ={
//             show:false
//         }
        
//     }
//     onClickHandler = () =>{
//         this.setState({
//             show:!this.state.show
//         })
//         console.log(this.state.show)
//     }
//     render(){
//         let a =1;
//      return(
//         <>
//         <button onClick={this.onClickHandler}>click heres</button>
//         <div>  {this.state.show?<Child/>:''} </div>
      
//         </>
//      )
//     }
// } 



// class Child extends React.Component{
//     componentWillUnmount(){
//         console.log('component will unmount')
//         alert('child component unmounted')
//     }
//     render(){
//   return(
//       <>
//       child component
//       </>
//   )
//     }
// } 

export class Time extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date :null,
            count:0
        }
    }
componentDidUpdate(){    
     setInterval(() => {
         this.setState({
             date:new Date().toLocaleTimeString()
         })
     }, 1000);
}
onClickHandler = () =>{
    this.setState({
        count:this.state.count+1
    })
}
componentDidMount(){
    setTimeout(() => {
        console.log('displaying after two seconds')
    }, 2000);
}


    render(){
        
        return (
            <>
            {this.state.date}
            <button onClick={this.onClickHandler}>click</button>
            {this.state.count}
            </>
        )
    }
}