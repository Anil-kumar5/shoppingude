import React from 'react';
import {connect} from 'react-redux';
import { buyCake, buySweet } from './Action';
class Render extends React.Component{
    state={
        sweets:1
    }
    onInputChange = event =>{
        this.setState({
            sweets:event.target.value
        })
    }


    render(){
        const {dispatch,numOfSweets} = this.props;
        console.log(dispatch)
        const {sweets} = this.state;
        const onCli = () =>{
            dispatch(buyCake())
        }
    
        function onSweetBuy(){
            dispatch(buySweet(sweets))
        }
        if(numOfSweets<=0){
            alert("sorry cakes are over")
        }  
        return(
            <div>
                cakes -{this.props.numOfCakes}
                <button onClick ={onCli}>click</button>
                sweets - {numOfSweets}
                <input type="text" value={sweets} onChange={this.onInputChange}/>
                <button onClick={()=>onSweetBuy()}>sweets</button>
                {sweets}
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        numOfCakes:state.reducer1.numOfCakes,
        numOfSweets:state.reducer2.numOfSweets
    }
}
export default connect (mapStateToProps) (Render)