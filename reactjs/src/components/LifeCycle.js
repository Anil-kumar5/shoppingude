import React from 'react';
import { ChildComponent } from './ChildComponent';
import { Rendering } from './Rendering';


export class LifeCycle extends React.Component{
    // componentWillMount(){
    //     // immediately before initial rendering
    //     console.log('welcome')
    // }
    // componentDidMount(){
    //     console.log('componentdidmount');
    //     // immediately render after initial rendering
    // }
    // componentWillReceiveProps(){
    //     //when component receives new props
    // }
    // shouldComponentUpdate(){
    //     //before rendering ,after receiving props or state
    // }
    state={
        name:''
    }
    onCliclHandler=(nameToGive)=>{
        this.setState({
            name:nameToGive
        })
    }
    render(){
        return (
   <>
{/* <ChildComponent name={this.state.name} Handler={this.onCliclHandler}/>     */}
<Rendering/>

   </>
        )
    }
}