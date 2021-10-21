import axios from 'axios';
import React from 'react';
export class Practice extends React.Component{
    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(response=>console.log(response.data))
    }
    render(){
        return(
            <div>
                
            </div>
        )
    }
}