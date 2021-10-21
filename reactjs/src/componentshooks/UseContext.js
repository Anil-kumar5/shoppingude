import React from 'react';
export const context = React.createContext();
export function A(){
    return(
        // to send values in contextapi value attribute must and should
        //if tou want to send more than one value use curly braces
        // passing arrays value={['anil','kumar','reddy']}
        // we can create multiple usecontextes and we can nest them inside one another
        //
        <context.Provider  value={{fName:'anil',lName:'kumar'}}  >
               <B/>
        </context.Provider>
   
    )
}

export function B(){
    return(
  <C/>
    )
}

export function C(){
    return(
        <>
        <D/>
        </>
    )
}

export function D(){
    return(
    
        <context.Consumer>
           {
               (name)=>{
                   return <div>hello{name.fName} {name.lName} {name.count}</div>
               }
           }
        </context.Consumer>
        
    )
}


// context using hooks
export const contextOne = React.createContext();
export const contextTwo = React.createContext();
export function HooksA(){
    return(
        <>
        <contextOne.Provider value="anil">
            <contextTwo.Provider value="kumar">
                <HooksB/>
            </contextTwo.Provider>
        </contextOne.Provider>
       
        </>
    )
}
function HooksB(){
    return(
        <>
  <HooksC/>
        </>
    )
}
 function HooksC(){
    const hookContextOne = React.useContext(contextOne);
    return(
        <>
        {hookContextOne}
        <div><HooksD/></div>
        </>
    )
}

export function HooksD(){
  
const hookContextTwo = React.useContext(contextTwo);
    return(
        <>
{hookContextTwo}
       </>
    )
}