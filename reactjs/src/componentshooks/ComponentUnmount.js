import React from 'react';
import axios from 'axios';
export function Unmount(){
    const[displayShow,setDisplayShow] = React.useState(false);
    const onClickHandler=()=>{
        setDisplayShow(!displayShow)
    }
    return(
        <>
        <button onClick={onClickHandler}>click here</button>
         {displayShow&&<ComponentUnmount/>}
        </>
    )
}


export function ComponentUnmount(){
    React.useEffect(()=>{
        console.log('initial renderes')
        return () =>{
            console.log('unmounted')
        }
    })
    return (
        <>
        welcome anil kumar
        </>
    )
}
// to write a code when  unmounted use return function


export function Unmounting(){
    const[count,setCount] = React.useState(0);
    React.useEffect(()=>{
        const interval = setInterval(()=>{
            setCount(count+1)
        },1000)
        return () =>{
            clearInterval(interval)
        }
    },[count])
    // if we dont add dependency in array then it mounts only one 
    //another way
    const[initial,setInitial] = React.useState(0);
    React.useEffect(()=>{
             const interval = setInterval(()=>{
                 setInitial(prev=>prev+1)
             },1000)
             return ()=>{
                 clearInterval(interval)
             }
    },[])
    return(
        <>
        {count}
        </>
    )
}



export const FetchingIndividual = () =>{
    const[fetchedData,setFetchedData] = React.useState({});
    const [id,setId] = React.useState(1);
    const[click,setClick] = React.useState(1);
    React.useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response=>{
            console.log(response)
            setFetchedData(response.data)
        })
        .catch(error=>console.log(error))
    },[click])

   const onIDChangeHandler = e =>{
        setId(e.target.value)
    }
    const buttonClick = () =>{
        setClick(id)
    }
    return(
        <>
        <input type="text" value={id} onChange={onIDChangeHandler}/>
        <button onClick={buttonClick}>click</button>
        {fetchedData.name}
        </>
    )
}