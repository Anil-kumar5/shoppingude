import React from 'react';

class VisibilityPractice extends React.Component{
    state ={
        visibility:false,
        userName:'',
        password:''
    }
    onInputChange = e =>{
        this.setState({
            userName:e.target.value
        })
    }
    onPasswordChange = e =>{
        this.setState({
            password:e.target.value
        })
    }
    onVisibilityChange = () =>{
        this.setState({
            visibility:this.state.visibility?false:true
        })
    }
    render(){
        const {visibility,userName,password} = this.state
        return(
            <form>
                user:<input type="text" value={userName} onChange={this.onInputChange}/>
                password:<input type={visibility?"text":"password"} value={password} onChange={this.onPasswordChange}/>



                <span onClick={this.onVisibilityChange}>ja</span>
               
            </form>
        )
    }
}
export default VisibilityPractice