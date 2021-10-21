import { BUY_CAKE, BUY_SWEET } from "./ActionType"
import {combineReducers} from 'redux';
const initialState = {
    numOfCakes:100
}
const iniState ={
    numOfSweets:200
}
 const reducer1 = (state=initialState,action) =>{
   switch(action.type){
       case BUY_CAKE:return{
           ...state,
       numOfCakes:state.numOfCakes-1
   }
  
   default:return state
   }
}
 const reducer2 =(state=iniState,action)=>{
    switch(action.type){
        case  BUY_SWEET:return{
            ...state,
            numOfSweets:state.numOfSweets-action.payload
        }
        default:return state
    }
}

const reducer3 = () =>{
    return[{
        name:'anil',
        age:24
    },
{
    name:'kumar',
    age:24
}]
}
export const reduce = combineReducers({
    reducer1,reducer2,reducer3
})