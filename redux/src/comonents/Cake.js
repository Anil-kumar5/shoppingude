import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyCream } from '../redux/Actions';
function Cake(props){
    const {numOfCakes,dispatch,numOfCreams} = props;
    const[creamsToBuy,setCreamsToBuy] = React.useState('')
    const buyingCake = () =>{
        dispatch(buyCake())
    }

    const onChangeHandler = e =>{
        setCreamsToBuy(e.target.value)
    }
    const buyingCream = () =>{
        dispatch(buyCream(creamsToBuy))
    }
    return(
        <>
      cakes available-   {numOfCakes}
       <button onClick={buyingCake}>buy cake</button>
  <div>
      creams available -{numOfCreams}
      <input type="text" value={creamsToBuy} onChange={onChangeHandler} placeholder="enter how many cakes want " />
      <button onClick = {buyingCream}>buy cream</button>
  </div>
        </>
    )
}
const mapStateToProps = state =>{
    return{
        numOfCakes:state.reducerOne.numOfCakes,
        numOfCreams:state.reducerOne.numOfCreams
    }
}
export default connect(mapStateToProps)(Cake)