import React from 'react';
import { List } from './List';

function MainFetch() {
    const [user,setUser] = React.useState([]);
    const [search,setSearch] = React.useState('');
    // const [toDoFilter,setToDoFilter]  = React.useState([]);
     React.useEffect(()=>{
         fetch('https://jsonplaceholder.typicode.com/users')
         .then(response=>response.json())
         .then(data=>setUser(data))
     })
    const onSearchChange = e =>{
         setSearch(e.target.value)
     }
     const afterFilter = user.filter((filt)=>filt.name.toLowerCase(). includes(search.toLowerCase()))
    return(
        <div>
            <form>
                <input type="search"
                value={search}
                onChange={onSearchChange}
                placeholder="enter name to display"
                />
            </form>
            <List user={afterFilter}/>
           </div>
    )
}

export default MainFetch


