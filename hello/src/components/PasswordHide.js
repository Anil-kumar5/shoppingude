import React from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

class Password extends React.Component {
    state={
        userName:'',
        password:'',
        visibility:false
    };
    onInputChange = event =>{
        this.setState({
            userName:event.target.value
        })
        console.log(this.state.username)
    }
    onPasswordChange  = e  =>{
        this.setState({
            password:e.target.value
        })
    }
    onSubmitHandler = e =>{
        alert(`welcome ${this.state.userName}`)

    }
    onHClick = () =>{
        this.setState({
            visibility:this.state.visibility?false:true
        })
    }
    render() {
        const {userName,password,visibility} = this.state;
        return ( 
            <form
              autoComplete="off"
              onSubmit={this.onSubmitHandler}>
                <div>
                <label
                    htmlFor="userName">
                    UserName <span style={{color:'red'}}>*</span>:
                </label>
                <input
                 type="text" 
                 name="userName"  
                 value={userName}
                //  required 
                 onChange={this.onInputChange}/>
                </div>
                <div>
                    <label htmlFor="password">
                        Password<span style={{color:"red"}}>*</span>:
                    </label>
                    <input
                     type={visibility?"text":"password"}
                      value={password}
                    //    required
                       onChange={this.onPasswordChange}/>
                    <span onClick={this.onHClick}>{visibility?< VisibilityIcon/>:<VisibilityOffIcon/>}</span>
                </div>
                <div>
                
                
                </div>
                <div>
                    <button type="submit">SUBMIT</button>
                </div>
            </form>
        );
    }
}
export default Password