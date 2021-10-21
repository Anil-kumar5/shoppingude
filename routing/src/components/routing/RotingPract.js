import React from 'react'
import { Route } from 'react-router-dom';
import RoutePractTwo from './RoutePractTwo';
function RotingPract() {
    return (
        <div>
            <Route exact path="/routepract/:routepractid" component={RoutePractTwo}/>
            hello
        </div>
    )
}

export default RotingPract
