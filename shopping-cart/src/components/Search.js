import React from 'react';

import { List } from './List';
export const Search = () =>{
    const photos = [
        {   
            id:1,
            name:'RE Himalayan',
            image:<img src='./re.jpg' alt="rehimalayan" className="some"/>
        },
        {
            id:2,
            name:'KTM RC390',
            image:<img src='./rc390.jpg' alt="rc390"    className="some"/>
        },
        {
            id:3,
            name:'Yamaha MT15',
            image:<img src='./mt15.jpg'  alt="mt15"    className="some"/>
        },{
            id:4,
            name:'Taj Mahal',
            image:<img src='./pic2.jpg'  alt="tajmahal" className="some"/>
        },
        {
            id:5,
            name:'Sun Set',
            image:<img src='./pic1.jpg'  alt="sunset"  className="some"/>
        },{
            id:6,
            name:'Nature',
            image:<img src='./pic3.jpg'  alt="nature"  className="some"/>
        },
        {
            id:7,
            name:'RE Himalayan',
            image:<img src='./re.jpg' alt="rehimalayan" className="some"/>
        },
        {
            id:8,
            name:'KTM RC390',
            image:<img src='./rc390.jpg' alt="rc390"    className="some"/>
        },
        {
            id:9,
            name:'Yamaha MT15',
            image:<img src='./mt15.jpg'  alt="mt15"    className="some"/>
        },{
            id:10,
            name:'Taj Mahal',
            image:<img src='./pic2.jpg'  alt="tajmahal" className="some"/>
        },
        {
            id:11,
            name:'Sun Set',
            image:<img src='./pic1.jpg'  alt="sunset"  className="some"/>
        },{
            id:12,
            name:'Nature',
            image:<img src='./pic3.jpg'  alt="nature"  className="some"/>
        }
    ]
    const [searchField,setSearchField] = React.useState('');
    const onChangeHandler = (e) =>{
        setSearchField(e.target.value)
    }
    const filtered = 
        photos.filter((filt)=>filt.name.toLowerCase(). includes(searchField.toLowerCase()))
    
    return (
        <div>
            <form>
            <input type="search"
              placeholder="enter name"
              value={searchField}
              onChange={onChangeHandler}
             />
        </form>
          <List photos={filtered}/>
       
        </div>
    )
}