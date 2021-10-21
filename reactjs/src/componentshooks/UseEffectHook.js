import React ,{useState} from 'react';


export const UseEffectHook = () =>{
    const [count,setCount] = React.useState(null);
    const [name,setName] = useState('');
    const onClickHandler = () =>{

        setCount(count+1)
    }
    const onChangeHandler = (e) =>{
        setName(e.target.value)
    }

    // if you didnt change the count value then rerender doesnt takes place
    // if you want to execute every time when dom rerenders
    React.useEffect(()=>{
        console.log('rendering every time')
    })
    //at initial render only
    React.useEffect(()=>{
        console.log('at initial render')
    },[])
    //when the particular state or prop value changes
    React.useEffect(()=>{
        console.log('when value updates')
    },[count,name])
    return(
        <>
  <button onClick={onClickHandler}>click</button>
  <input type='text' value={name} onChange={onChangeHandler}/>
        </>
    )
}