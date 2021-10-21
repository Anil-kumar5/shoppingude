import { BUY_CAKE, BUY_SWEET } from "./ActionType"


export const buyCake = () =>{
    return{
        type:BUY_CAKE,
        payload:"buying a cake"
    }
}

export const buySweet = (howMany) =>{
    return{
        type:BUY_SWEET,
        payload:howMany
    }
}