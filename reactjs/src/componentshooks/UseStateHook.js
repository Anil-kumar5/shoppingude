import React  from 'react';


export function UseStateHook(){
    const [name,setName] = React.useState('');
    const onClickHandler = () =>{
        setName('anil kumar')
    }
    const initialCount = 0;
    const[count,setCount] = React.useState(initialCount);
    const onCountHandler =()=>{
        setCount(prevCount=>prevCount+1)
    }
    const onCountDecreeHandler = () =>{
        setCount(prevCount=>prevCount-1)
    }
    const resetHandler = () =>{
        setCount(initialCount)
    }
    //useState for objects
    const [fname,setFName] = React.useState({fullname:'',favPlace:''});
    const onNameChangeHandler = (e) =>{
        //usestate can handle updation only once so use spread operators
        // setName({fullname:e.target.value})

        setFName({...fname,fullname:e.target.value})
    }
    const onFavPlaceChange = e =>{
        // setName({favPlace:e.target.value})
        setFName({...fname,favPlace:e.target.value})
    }

     // useState for arrays

     const [random,setRandom] = React.useState([]);
     const onRandomClickHandler = () =>{
         setRandom(Math.floor(Math.random()*10)+1)
     }
     //using objects in arrays
     const[details,setDetails] = React.useState([])
     const onDetailsHandler = () =>{
         setDetails({...details,
        id:1,
        college:'raghu engineering college'
        })
     }
    return (
        <>
        <button onClick={onClickHandler}>click here</button>
        {name}
        <div>
            count---{count}
        <button onClick={onCountHandler}>increment</button>
        <button onClick ={onCountDecreeHandler}>decreement</button>
        <button onClick={resetHandler}>reset</button>
        </div>
        <input type='text' value={fname.fullname} onChange={onNameChangeHandler}/>
        <input type='text' value={fname.favPlace} onChange={onFavPlaceChange}/>
       fullname------ {fname.fullname}

       <div>favPlace ------{fname.favPlace}</div>
       <button onClick={onRandomClickHandler} >get a random number</button>
       <p onClick={onDetailsHandler}>get details</p>
       {random}
       {details.id}
       {details.college}
        </>
    )
}