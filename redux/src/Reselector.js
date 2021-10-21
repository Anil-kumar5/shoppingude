import React from 'react';
import { connect } from 'react-redux';

function Reselector({productData}) {
    return (
        <div>
            {console.log(productData)}
        </div>
    )
}
const mapStateToProps = state =>({
    productData:state.selectReducer
})
export default connect(mapStateToProps) (Reselector)
