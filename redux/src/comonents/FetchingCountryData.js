import React from 'react';
import { connect } from 'react-redux';
import { fetchCountryData } from '../redux/Actions';

 function FetchingCountryData ({fetchedData}){
     React.useEffect(()=>{
        fetchCountryData()
     },[])
     console.log(fetchedData)
    return(
        <>
        {
            fetchedData.isLoading?(<h3>loading</h3>):
                fetchedData.feError?(<h1>{fetchedData.feError}</h1>):(
                    fetchedData&&fetchedData.feData&&fetchedData.feData.map((data)=>{
                        return(
                            <div key={data.name}>{data.name}</div>
                        )
                    })

                )
            
        }
        </>
    )
}

export default connect((state)=>({fetchedData:state.fetchingCountryData}),(fetchCountryData))(FetchingCountryData)