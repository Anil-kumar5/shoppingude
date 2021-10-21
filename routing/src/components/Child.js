import React from 'react';
export function Child(props){
    React.useEffect(()=>{
         fetch(`https://jsonplaceholder.typicode.com/users`)
         .then(response=>console.log(response.json()))
    },[])
    return(
        <>
        
        </>
    )
}
