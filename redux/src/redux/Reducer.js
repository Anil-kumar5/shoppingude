import { BUY_CAKE, BUY_CREAM, FETCH_COUNTRY_DATA_FAILURE, FETCH_COUNTRY_DATA_REQUEST, FETCH_COUNTRY_DATA_SUCCESS, FETCH_PRODUCTS, PRACTICING_RESELECTOR, PRODUCT_SIZE_FILTER } from "./ActionType"
import { combineReducers } from "redux"
import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./ActionType"

const initialState = {
    numOfCakes: 100,
    numOfCreams: 100
}

export const reducerOne = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state, numOfCakes: state.numOfCakes - 1
        }
        case BUY_CREAM: return {
            ...state, numOfCreams: state.numOfCreams - action.payload
        }
        default: return state
    }
}


const initialStateValues = {
    isLoading: false,
    dataFetched: [],
    er: ''
}

export const reducerTwo = (state = initialStateValues, action) => {
    switch (action.type) {
        case FETCH_REQUEST: return {
            isLoading: true
        }
        case FETCH_SUCCESS: return {
            isLoading: false,
            dataFetched: action.payload,
            er: ''
        }
        case FETCH_FAILURE: return {
            isLoading: false,
            er: action.payload,
            dataFetched: []
        }
        default: return state
    }
}

const initialCountryDataValues = {
    feData: [],
    feError: '',
    isLoading: true
}
const fetchingCountryData = (state = initialCountryDataValues, action) => {
    switch (action.type) {
        case FETCH_COUNTRY_DATA_REQUEST: return {
            isLoading: true
        }
        case FETCH_COUNTRY_DATA_SUCCESS: return {
            isLoading: false,
            feData: action.payload,
            feError: ''
        }
        case FETCH_COUNTRY_DATA_FAILURE: return {
            isLoading: false,
            feData: [],
            feError: action.payload
        }
        default: return state
    }
}
const products = [
    {
        _id: "dress1",
        title: "shirtone",
        image: "./s1.jpg",
        availableSizes: ["L", "XL", "XXL"],
        description: "good quality",
        price: 1000
    },
    {
        _id: "dress2",
        title: "shirtone",
        image: "./s2.jpg",
        availableSizes: ["L", "XL", "XXL"],
        description: "good quality",
        price: 2000
    },
    {
        _id: "dress3",
        title: "shirtone",
        image: "./s3.jpg",
        availableSizes: ["L", "XL", "XXL"],
        description: "good quality",
        price: 3000
    },
    {
        _id: "dress4",
        title: "shirtone",
        image: "./s4.jpg",
        availableSizes: ["L", "XL", "XXL"],
        description: "good quality",
        price: 4000
    }
]

export const productDataReducer = (state = products, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_PRODUCTS: return {
            items: state
        }
        case PRODUCT_SIZE_FILTER: return {
            ...state,
            size: payload.size,
            filteredItems: payload.items
        }
        default: return state
    }
}
const initialCount = {
    num:100
}
 const selectRe = (state=initialCount,action) => {
       switch(action.type){
           case PRACTICING_RESELECTOR : return{
               ...state,num:state.num-1
           }
       }
}
export const reducer = combineReducers({
    reducerOne, reducerTwo, fetchingCountryData, productDataReducer
})