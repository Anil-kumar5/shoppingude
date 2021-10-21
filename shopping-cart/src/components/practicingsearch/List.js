import React from 'react';

export const List =({user}) =>{
    return(
        <div>
             {
              user.map((result)=>{
                 return (
                     <div key={result.id}>
                       <div>{`userName -${result.name}   name-${result.username}` }    
                        
                       </div>
                         </div>
                 )
              })
           }
               
        </div>
    )
}