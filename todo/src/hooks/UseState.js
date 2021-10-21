import React from 'react'
import axios from 'axios';
function UseState() {
    let count =1;
  let  increment = () =>{
        count = count+1
        console.log(count)
    }
    // if we write like this the actuall count is increasing on every click but the page is not rerendering
    //so the value is not changing but in console it ..
    return (
        <div>
            {count}
            <button onClick={increment}>increment</button>
        </div>
    )
}

export default UseState


//useRef
// useRef is used to manipulate the DOM and whenever directly want to access from the DOM

export const UseRefHook = () => {
    const input = React.useRef(null);
    const inputtt = React.useRef("")
    const onClickHandler = () =>{
        // console.log(input.current.value) to directly access the value we entered after button click
        // like this we can access anything from current object directly from DOM using useRef
        console.log(input.current.value)
    }
    const onChangeHandler = () =>{
        console.log(inputtt)
    }
    return(
        <>
        <input type="text" ref={input} placeholder="enter something" />
        <button onClick={onClickHandler}>useref</button>
        <input type="password" ref={inputtt} onChange={onChangeHandler}/>
        {inputtt.current.type}
        </>
    )
}
//useLayoutEffect
//similar to useeffect but renders before useeffct hook takes place
//use effect is a asynchronous i.e., when the dom is updated visually and after that only useeffect takes place
//uselayouteffect is a synchronous i.e., it renders along with component render whether the component render visually updated or not


export const UseLayoutEffectHook = () =>{
    // React.useEffect(()=>{
    //     console.log('useeffect render')
    // },[])
    // React.useLayoutEffect(()=>{
    //     console.log('uselayouteffecthook')
    // },[])
    const input = React.useRef(null);
    React.useEffect(()=>{
        input.current.value="anil";
    },[])
    React.useLayoutEffect(()=>{
        console.log(input.current.value)
        input.current.value="kumar"
    },[])
    return(
        <>
        {/* {console.log('component render')} */}
        <input type="text" value={"hello"} ref={input}/>
        </>
    )
}
// in above example the initial value is hello 
//useeffect runs after the component render so the value is changed to anil
//but uselayouteffect runs along with the component so the value is hello rather than the screen showing anil
// you tried to change the value by using but  it wont works bcoz later useeffect runs and in console it shows still
//hello bcoz it renders synchronously with DOM

//useMemo


// export const UseMemoHook = () => {
//     const[data,setData] = React.useState([]);
//     const [toggle,setToggle] = React.useState(false);
//     React.useEffect(()=>{
//            axios.get('https://jsonplaceholder.typicode.com/comments')
//            .then(response=>{
//                setData(response.data)
//            })
//     },[]);
//     // console.log(data[0].name) 
//     // console.log(data.name)
//     // const dataNames = data.map(dataN =><div>{dataN.name}</div>)
//      const findLongestComment = comments => {
//          let longestComment = "";
//         for(let i=0;i<comments.length;i++){
//             // here in above line if you write i<=comments.length then it leads to error
//             //bcoz here length is 500 and array index starts from 0 if you give less than or equal to then it have to iterate
//             //501 times which is error
//             let currentComment = comments[i].name
//             if(currentComment.length>=longestComment.length){
//                 longestComment = currentComment;
//             }
//             console.log('iterating')
//         }
        
//        return longestComment
//      }
//     //  console.log(findLongestComment(data))
//     return(
//         <>
//           {findLongestComment(data)}
//           <button onClick={()=>setToggle(!toggle)}>click</button>
//           <div>{toggle&&'toggle'}</div>
//         </>
//     )
// }
// in above example when we click on the toggle button state changes and page is rerendering
//so find..... function is also rerendering i.e., the function is running again and checking the functionality 
//which leads to performance issue ,so to avoid that we use usememo 


export const UseMemoHook = () => {
    const[data,setData] = React.useState([]);
    const [toggle,setToggle] = React.useState(false);
    React.useEffect(()=>{
           axios.get('https://jsonplaceholder.typicode.com/comments')
           .then(response=>{
               setData(response.data)
           })
    },[]);
     const findLongestComment = comments => {
         let longestComment = "";
        for(let i=0;i<comments.length;i++){
            let currentComment = comments[i].name
            if(currentComment.length>=longestComment.length){
                longestComment = currentComment;
            }
            
        }
        console.log('iterating')
       return longestComment
     }
     const findLongest = React.useMemo(()=>findLongestComment(data),[data])
     // here usememo simply saying i will rerender only when the data value is changed
    return(
        <>
          {findLongest}
          <button onClick={()=>setToggle(!toggle)}>click</button>
          <div>{toggle&&'toggle'}</div>
        </>
    )
}


export const RenderingData = () =>{
    const [data,setData] = React.useState([]);
    React.useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response=>setData(response.data))
    })
    return(
        <>
          {
              data.map((data,index)=>{
                  if(index%2==0){
                      return(
                           <div key={data.id}>
                           "even" +{data.name}    
                           </div>
                      )
                  }else{
                      return(
                          <div key={data.id}>
                              {data.name}+"odd"
                          </div>
                      )
                  }
              })
          }
        </>
    )
}

//UseCallback

export const UseCallbackHook = () =>{
    // const [value,setValue] = React.useState(0);
    // const onClickHandler = (invalue) =>{
    //     setValue(value+invalue)
    // }
    return(
        <>
          {/* <NestedCallback onClickHandler={onClickHandler}/>
          {value} */}
        </>
    )
}

// const NestedCallback = (props) =>{
//     return(
//         <>
//        <button onClick={()=>props.onClickHandler(7)}>clicks</button>
//         </>
//     )
// }

export const MultipleEvents = () =>{
    const onClickHandlerOne = () =>{
        console.log('one')
    }
    const onClickHandlerTwo = () =>{
        console.log('two')
    }
    const onClickHandlerThree = () =>{
        console.log('three')
    }
    return(
        <>
         <button onClick={onClickHandlerThree} onClick={onClickHandlerTwo}>click</button>
         
             <div className="anil">anil</div>
         { 
            //   document.querySelector('anil').addEventListener('click',onClickHandlerOne),
            //   document.querySelector('.anil').addEventListener('click',onClickHandlerTwo),
            //   document.querySelector('.anil').addEventListener('click',onClickHandlerThree)
            //doesnt worked
         }
        </>
    )
}