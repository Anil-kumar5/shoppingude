import React from 'react';
import { CardList } from './CardList';

export function List({photos}){
    return(
        <div>
             {
           photos.map((images)=><CardList key={images.id} images={images}/>)
        }
        </div>
    )
}