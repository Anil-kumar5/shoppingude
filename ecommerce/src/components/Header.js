import './Header.css';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
function Header(){
    return (
        <div className="con">
        <img src="./amazon.jpg" alt="amazonlogo" className="headerlogo"/>
        <div className="searchNdLogo">
        <select className="selectvalue">
         <option value="all">All</option>
         <option value="clothing">Dresses</option>
         <option value="watches">Watches</option>
         <option value="shoes">Shoes</option>   
        </select>
        <input type="search"  className="searchinput"/>
        <SearchIcon className="searchicon"/>
        </div>
        <div className="navheader">
          <div className="profilenav">
              <span className="lineone">hello guest</span>
              <span className="linetwo">signin</span>
              </div> 
              <div className="profilenav">
              <span className="lineone">Returns</span>
              <span className="linetwo">&orders</span>
              </div>
              <div className="profilena">
              <ShoppingCartIcon className="carticon"/>
              <span className="cartcount">0</span>
              </div> 
        </div>
        </div>
    )
}

export default Header