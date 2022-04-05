import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { dataProducts } from '../../data/data'
import { useParams } from 'react-router-dom';
import NotFoundPage from '../../pages/NotFound';

export default function ItemDetailContainer() {

    const {id}= useParams();
    const [producto, setProducto] = useState({});
    
    useEffect(()=>{
        filterById();
    }, [id])
    
    const filterById= () =>{
        dataProducts.map((product)=>{
            if(product.id == id){
                setProducto(product);
            }else{
                return <NotFoundPage/>
            }
        })
    }
    return (
        <ItemDetail key={id} producto={producto}/>
    );
}
