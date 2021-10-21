import React , { useState,useEffect } from 'react';

function Task  ()  {
    const[universities , setUniversities] = useState([]);
    const[colleges , setColleges] = useState([]);
    const[departments , setDepartments] = useState([]);
    const[studentCount , setStudentCount] = useState(0);
    const[placements , setPlacements] = useState(0);
    const[universityName , setUniversityName] = useState("");
    useEffect( () =>{
          renderData()
    },[])
     
    function renderData(){
        fetch('https://api.npoint.io/a1fbf48c810e0aff7956')
        .then(response => response.json())
        .then(data=>{
            setUniversities(data.universities);
            setColleges(data.colleges);
            setDepartments(data.collegeDepartments);
        })
    }
    return (
        <>
        {
    
            departments.map(department =>{
                colleges.map(college=>{
                    if(department.c_id === college.c_id){
                                   
                    }
                })
            })
            
        }
        </>
    )
}

export default Task