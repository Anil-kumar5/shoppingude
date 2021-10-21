import React from 'react';

export class UpdateLifeCycle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        name:'',
        count:0
        }
    }
    // componentDidMount(){
    //    console.log('didmount')
    // }
    componentDidUpdate(prevstate,prevprops){
        // dont use setstate in componentdidupdatelifecycle
        //prevprops,prevstate,snapshop should be in correct order
        //if you want to use anything by using prevstate like that or setstate use if else conditions
         this.setState({
             name:this.state.count+1
         })
    }

    onChange = (e) =>{
        this.setState({
            name:e.target.value
        })
    }
    // onClickHandler = ()=>{
    //     this.setState({
    //         count:this.state.count
    //     })
    // }
    // shouldComponentUpdate(prevprops,prevstate){
    //   if(this.state.count!=prevstate.count){
    //       return true
    //   }else{
    //       return false
    //   }
      
    // }
    render(){
        console.log('render')
        return(

            <>
            <button onClick={this.onClickHandler}>click</button>
            {this.state.count}
            </>
        )
    }
}