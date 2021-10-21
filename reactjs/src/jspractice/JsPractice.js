import React from 'react'
const personDetails = [
    {
        fname:'anil',
        lname:'kumar',
        place:'vizag',
        role:'developer',
        salary:10000,
        dob:'12/07/1997'
    },
    {
        fname:'prasanth',
        lname:'sai',
        place:'araku',
        role:'marketing',
        salary:20000,
        dob:'12/07/1987'
    },{
        fname:'sagar',
        lname:'pediredla',
        place:'lambasingi',
        role:'sales',
        salary:30000,
        dob:'12/07/2007'
    },{
        fname:'gopi',
        lname:'chand',
        place:'ongole',
        role:'backend',
        salary:50000,
        dob:'12/07/1967'
    }
];
const filtered = personDetails.filter(person=> new Date().getFullYear()-new Date(person.dob).getFullYear()>30)
// filtered the people above 30 years
const newArrayOfObjects = personDetails.map(person=>({...person,fullName:`${person.fname}${person.lname}`}))
// we can add any new object property by using map method and dont forgot to return the function ()
const replace = personDetails[0].fname.replace('anil','ANIL');
function JsPractice() {
    return (
        <div>
           {
               personDetails.reduce((accumulator,person)=>(
                //    accumulator+person.salary to count the total salary
                      accumulator+person.salary
                
               ),0)/personDetails.length
               // to know the average income 
           } 
           <div>
               {/* {
                   personDetails.map(person=> new Date(person.dob).getFullYear())
                   by using above we can get the full year
               } */}
           {
            //    console.log(filtered)
             filtered.map(person=>person.fname)
             // to know the people above 30yrs
           }
           {
              console.log(newArrayOfObjects)
           }
           <div>
              {
                //   console.log(replacedArray)
              }
           </div>
           
           </div>
        </div>
    )
}

export default JsPractice

