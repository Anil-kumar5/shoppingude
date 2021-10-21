import React from "react"
import { BUY_CAKE, BUY_CREAM, FETCH_COUNTRY_DATA_FAILURE, FETCH_COUNTRY_DATA_REQUEST, FETCH_COUNTRY_DATA_SUCCESS, FETCH_FAILURE, FETCH_PRODUCTS, FETCH_REQUEST, FETCH_SUCCESS, PRACTICING_RESELECTOR, PRODUCT_SIZE_FILTER } from "./ActionType"
import axios from 'axios';
export const buyCake = () =>{
    return{
        type:BUY_CAKE,
        payload:'buying a cake'
    }
}

export const buyCream = (numberOfCakes)=>{
    return{
        type:BUY_CREAM,
        payload:numberOfCakes
    }
}


export const fetchRequest = () =>{
    return{
        type:FETCH_REQUEST
    }
}

export const fetchSuccess = userData =>{
    return{
        type:FETCH_SUCCESS,
        payload:userData
    }
}

export const fetchFailure = err =>{
    return{
        type:FETCH_FAILURE,
        payload:err
    }
}


export const fetchingData = () =>{
    return (dispatch)=>{
        dispatch(fetchRequest)
            axios.get('https://jsonplaceholde.typicode.com/posts')
            .then(response=>{
                const fetchedData = response.data
                    dispatch(fetchSuccess(fetchedData))
            })
            .catch(er=>{
                const noFetchError = er.message
                dispatch(fetchFailure(noFetchError))
            })
    }
}

export const countryDataRequest = () =>{
       return{
           type:FETCH_COUNTRY_DATA_REQUEST
       }
}
export const countryDataSuccess = (countryFetchedData) =>{
    return{
        type:FETCH_COUNTRY_DATA_SUCCESS,
        payload:countryFetchedData
    }
}
export const countryDataFetchFailure = (countryFetchFailure)=>{
    return{
        type:FETCH_COUNTRY_DATA_FAILURE,
        payload:countryFetchFailure
    }
}
export const fetchCountryData = () =>(dispatch)=>{
    dispatch(countryDataRequest)
       axios.get('https://restcountries.eu/rest/v2/all')
       .then(response=>{
           const countryFetchResponse = response.data;
           dispatch(countryDataSuccess(countryFetchResponse))
       })
       .catch(fetchEr =>{
           dispatch(countryDataFetchFailure(fetchEr))
       })
}

export const productData = () =>{
    return{
        type:FETCH_PRODUCTS
    }
}

export const filterProducts = (products,size) =>(dispatch)=>{
    dispatch({
        type:PRODUCT_SIZE_FILTER,
        payload:{
            size:size,
            items:size===""?products:
            products.filter((x)=>x.availableSizes.indexOf((size)>=0))
        }
    }) 
}

export const reselector = () =>{
   return{
       type:PRACTICING_RESELECTOR
   }
}
