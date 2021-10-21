import React from 'react'

function HtmlPract() {
    const reverseString = str =>
    str
    .split('')
    .reverse()
    .join('')
    console.log(reverseString('anil'))

    //at first the string is splitted and then reversed and then joined by using joint method 
    const chunkAray = (arr,len)=>{
        const chunkArr = [];
         console.log(chunkArr)
        arr.forEach(val=>{
            console.log(val)
            const last = chunkArr[chunkArr.length-1];
            console.log(last)
            if(!last || last.length===len){
                chunkArr.push([val])
            }else{
                last.push(val)
            }
        })
        return chunkArr;
    }
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    const len =2;
    console.log(chunkAray(numbers,len))
    return (
        <div>
            <input type="text"  id="textone"style={{background:'yellow'}} onClick={()=>console.log('first one clicked')}/>
            <label htmlFor="texttwo" style={{paddingTop:'20px',background:'yellowGreen'}}>second</label>
            <input type="text" id="texttwo" style={{background:'blue'}} onClick={()=>console.log("second one clicked")}/>
            <label htmlFor="textone">first</label>
            
        </div>
        // here for first word also onclick function works as well as also for second word alsol
    )
}

export default HtmlPract
