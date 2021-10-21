import React from 'react';


export const Login = (props) =>{
    
    const  [user,setUser] = React.useState('');
    const [ password,setPassword] = React.useState('');
    const [fetched,setFetched]  = React.useState([]);

    React.useEffect(()=>{
             fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(result=>setFetched(result))
    },[])
    const onUserChangeHandle = e =>{
        setUser(e.target.value)
    }
    const onPasswordChangeHandle = e =>{
        setPassword(e.target.value)
    }
    
    const onSubmitHandler = e =>{
        e.preventDefault();
        if(user===fetched[0].name&&password===fetched[0].username){
        props.history.push('/homepage')
        }else{
            alert("enter correct details")
        }
}
console.log(props)
    return (
        <div>
            <form>
                user:<input type="text" onChange={onUserChangeHandle}/>
                password:<input type="password" onChange={onPasswordChangeHandle}/>
                <button type="submit" onClick={onSubmitHandler}>Login</button>
            </form>
        </div>
    )
}