import React from 'react';

export function CardList({images}){
    return(
        <div className="ci">
       <div>{images.image}</div> 
        <div>{images.name}</div>
        </div>
    )
}