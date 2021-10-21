import React, { useReducer } from 'react';

import axios from 'axios';

export const UseReducer=()=>{
return(
    <>
    {/* <UseReducerHook/> */}
  {/* <ReducerHookObjects/> */}
  {/* <MultipleReducers/> */}
  <ReducerFetch/>
    </>
)
}
export function UseReducerHook() {
  const initialState = 0;
    // reducer function takes state as an first arguement and action to perform as second arguement
    const reducerFunction = (state, action) => {
        switch (action) {
            case 'increment':
                return state + 1
            case "decrement":
                return state - 1
            case 'reset':
                return initialState
            default:
                return state
        }
    }
    // usereducer takes reducer function as an first arguement and initialstate as second one
    //here destructuring and assigning the state value to count and action to dispatch
const[count,dispatch] =    useReducer(reducerFunction, initialState);
    return (
        <>
       {count}
       <button onClick={()=>dispatch('increment')}>increment</button>
       <button onClick={()=>dispatch('decrement')}>decrement</button>
       <button onClick={()=>dispatch('reset')}>reset</button>
        </>
    )
}


// for objects



export const ReducerHookObjects = () =>{
    const initialState={
        numOfSweets:100,
        numOfCakes:50
    }

    const reducerFunction = (state,action) =>{
        switch(action.type){
            case 'increment':
                return{...state,numOfSweets:state.numOfSweets+action.value}
                case 'decrement':
                    return{...state,numOfCakes:state.numOfCakes+action.value}
                default:
                    return initialState
        }
    }
    const [count,dispatch] = useReducer(reducerFunction,initialState);
    return(
        <>
   sweets count-{count.numOfSweets}
   <button onClick={()=>dispatch({type:'increment',value:1})}>increment</button>
   cakes count-{count.numOfCakes}
   <button onClick={()=>dispatch({type:'decrement',value:2})}>cake decrement</button>
        </>
    )
}


//we can use multiple usereducers in a single compnent

export const MultipleReducers = () =>{
    const initialState = 0;
    const reducerFunction = (state, action) => {
        switch (action) {
            case 'increment':
                return state + 1
            case "decrement":
                return state - 1
            case 'reset':
                return initialState
            default:
                return state
        }
    }
    const[count,dispatch] =    useReducer(reducerFunction, initialState);
    const[secondCount,dispatchTwo] =    useReducer(reducerFunction, initialState);
    return(
        <>
        first count-{count}
        <button onClick={()=>dispatch('increment')}>increment</button>
       <button onClick={()=>dispatch('decrement')}>decrement</button>
       <button onClick={()=>dispatch('reset')}>reset</button>
       second count-{secondCount}
       <button onClick={()=>dispatchTwo('increment')}>increment</button>
       <button onClick={()=>dispatchTwo('decrement')}>decrement</button>
       <button onClick={()=>dispatchTwo('reset')}>reset</button>
        </>
    )
}




// fetching using usereduucer

export const ReducerFetch = () =>{
    const initialState ={
        isLoading:true,
        err:'',
        dataFetched:{}
    }
    const renderFunction = (state,action)=>{
        switch(action.type){
              case 'FETCH_SUCCESS':
                  return{
                      isLoading:false,
                      err:'',
                      dataFetched:action.payload
                  }
                  case 'FETCH_FAILURE':
                      return{
                          isLoading:false,
                          err:'problem occured',
                          dataFetched:{}
                      }
                      default:return state
        }
    }
    const[state,dispatch] = useReducer(renderFunction,initialState)
    React.useEffect(()=>{
             axios.get('https://jsonplaceholder.typicode.com/users/1')
             .then(response=>{
                 dispatch({type:'FETCH_SUCCESS',payload:response.data})
             })
             .catch(error=>{
                 dispatch({type:'FETCH_FAILURE'})
             })
    },[])
    return(
        <>
        {
            state.isLoading?'loading':state.dataFetched.name
        }
        {
            state.err?state.err:null
        }

        </>
    )
}