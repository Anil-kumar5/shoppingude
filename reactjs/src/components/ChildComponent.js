import React from 'react';

// export function ChildComponent(props){
//     return(
//         <>
//         <button onClick={props.Handler}>click</button>
//         {props.name}
//         </>
//     )
// }


export class ChildComponent extends React.Component{
    render(){
        return (
            <>
            {/* <button onClick={()=>this.props.Handler('anil avula ')}>click</button>
            {this.props.name} */}
            </>
        )
    }
}