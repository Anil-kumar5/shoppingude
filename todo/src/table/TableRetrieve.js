import React from 'react'
import data from './table.json';
import './TableRetrieve.css';
function TableRetrieve() {
    
    function ScrollToTop (){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    return (
        <div>
            <div className="tableheadings">
                <div>NAME</div>
                <div>ROLE</div>
                <div>EMAIL</div>
                <div>PLACE</div>
            </div>
            <div>
                {
                  data.personDetails.map(dataTo=>(
                      <div key={dataTo.empId} className="datatoretrieve">
                         <div> {dataTo.name}</div>
                         <div>{dataTo.role}</div>
                         <div>{dataTo.email}</div>
                         <div>{dataTo.place}</div>
                      </div>
                  ))
                }
            </div>
        
            
                
                    <button onClick={ScrollToTop}>click</button>
                
            
            {console.log(window.pageYOffset)}
        </div>
    )
}

export default TableRetrieve
