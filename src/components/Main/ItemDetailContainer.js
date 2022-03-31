import React from 'react';
import ItemDetail from './ItemDetail';
import { dataProducts } from '../../data/data'

export default function ItemDetailContainer() {

    const id= 2;
    
    return (
        <>
            {
                dataProducts.map((producto)=>{
                    if(producto.id === id){
                        return(
                            <ItemDetail key={id} producto={producto}/>
                        )
                    }
                })
            }
        </>
    );
}
