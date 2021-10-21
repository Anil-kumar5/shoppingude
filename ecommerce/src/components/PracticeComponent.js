import { yellow } from '@material-ui/core/colors';
import React from 'react';

function Practice(){
    const [user,setUser] = React.useState('');
    const buttonClick = () =>{
        setUser('anil kumar')
    }
    function fun(){
        console.log('hello anil');
    }
    return(
         <div>
             <button onClick={fun}>click </button>
             {user}
            
         </div>
    )
}
export default Practice