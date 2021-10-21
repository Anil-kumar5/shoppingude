import React from 'react';

export class RegistrationForm extends React.Component {
    state = {
        userName: '',
        password: ''
    }
    onUserChange = e => {
        this.setState({
            userName: e.target.value
        })
        
    }
    onPasswordChange = e => {
        this.setState({
            password: e.target.value
        })
    }
    render() {
        const { userName, password } = this.state;
        return (
            <form>
                <div>
                    <label htmlFor="userName">USERNAME:</label>
                    <input type="text"
                        name="userName"
                        placeholder="enter your name"
                        required
                        value={userName}
                        onChange={this.onUserChange} />
                </div>
                <div>
                    <label htmlFor="password" >Password:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="enter the password" />
                </div>
                <div>
                    <label htmlFor="mail" >EMail:</label>
                    <input
                        type="email"
                        name="mail"
                        placeholder="enter your email" />
                </div>
                <div>
                    <label htmlFor="gender">Gender:</label>
                    <input
                        type="radio"
                        name="gender" />Male
                    <input
                        type="radio"
                        name="gender" />Female
                    <input
                        type="radio"
                        name="gender" /> others
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        );
    }
}