import React from 'react';
import './Ecommerce.css'
import { Render } from './Render';
function Ecommerce(){
    return(
        <>
        <header>
            <span>shopping cart</span>
        </header>
        <main>

<Render/>
        </main>
        <footer>
            <span>All rights reserved</span>
        </footer>
        </>
    )
}
export default Ecommerce