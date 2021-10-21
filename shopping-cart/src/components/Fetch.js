import React from 'react';
import axios from 'axios';

// export const Fetching = () => {
//     const [data, setData] = React.useState([]);
//     React.useEffect(() => {
//         async function fetchi() {
//             const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//             const result = await response.json();
//             setData(result)
//         }
//         fetchi()
//     }, [])
//     return (
//         <div>
//             {
//                 data.map((result) => {
//                     return (
//                         <div key={result.id}>{result.title}</div>
//                     )
//                 })
//             }
//         </div>
//     )
// }



// export const FetchPromise = () => {

//     const [user, setUser] = React.useState([]);
//     const [err, setErr] = React.useState('');
//     React.useEffect(() => {

//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json())
//             .then(result => setUser(result))
//             .catch(er => setErr(er))


//     }, [])
//     return (
//         <div>
//             {
//                 user.map((data) => {
//                     return (
//                         <div key={data.id}>{data.name} {data.address.city}</div>
//                     )
//                 })
//             }

//         </div>
//     )
// }




// export class FetchAxios extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             countriesList:[],
//             er:'',
//             status:null
//         }
//     }
//     componentDidMount(){
//         axios.get('https://restcountries.eu/rest/v2/all')
//         .then(response=>{
//             console.log(response.data)
//             this.setState({countriesList:response.data})
//             this.setState({status:response.status})
//         })
//         .catch(err=>{
//             console.log(err)
//             this.setState({er:err})
//         })
//     }
//     render(){
//         const {countriesList,er,status} = this.state;
//         return(
//             <>
//              {
//                   status===200?
//                 countriesList.map(result=><div key={result.name}>{result.name}</div>):
//                 er
       
//              }
//             </>
//         )
//     }
// }

export function FetchHooks(){
    const [population,setData] = React.useState([]);
    const[er,setEr] = React.useState(null)
    React.useEffect( ()=>{

        axios.get('https://restcountries.eu/rest/v2/all')
        .then(response=>{
            console.log(response)
            setData(response.data)
        })
        .catch(response=>{
            console.log(response)
            setEr(response)
        })
      
     },[] )
    return(
        <>
        
            <table>
            <tr>
                <th>country</th>
                <th>population</th>
            </tr>
        </table>
        {
            population.map(result=>{
                return(
                <div key={result.population}>
                    <table>
                        <tr>
                            <td>{result.name}</td>
                            <td>{result.population}</td>
                        </tr>
                    </table>
                </div>
                )
            })
            
        }
        </>
    )
}

// export function PostAxios(){
//     const [user,setUser] = React.useState('');
//     const onChangeHandler = e =>{
//         setUser(e.target.value)
//     }
//     const onsubmitHandler = e =>{
//         e.preventDefault();
//         axios.post('https://jsonplaceholder.typicode.com/comments',user)
//         .then(response=>console.log(response))
//     }
//     return(
//         <>
//        userName: <input type='text' value={user} onChange={onChangeHandler}/>
//         <button type='submit' onClick={onsubmitHandler}>submit</button>
//         </>
//     )
// }
