import React from 'react';
import { ContextB } from './ConextB';
import { contextProvider } from './CreatingContext';

export function ContextA(){
    return(
        <>
        <contextProvider value="name">
      <ContextB/>
        </contextProvider>
        
        </>
    )
}