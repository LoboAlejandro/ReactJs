import React, {useState, useEffect} from 'react';
import { dataProducts } from '../../data/data';
import { Item } from './Item';
    
export default function ItemList(){
    
    const [products, setProducts]= useState([]);
    
    const getProducts= new Promise((resolve, reject)=>{
            return setTimeout(()=>{
                return resolve(dataProducts);
            }, 2000)
    })

    async function getProductsAsync(){
        try{
            const productos= await getProducts;
            setProducts(productos);
        }catch(error){
            console.log('error', error);
        }
    } 
    
    useEffect(()=>{
        getProductsAsync();
    },[])
    
    return(
        <div className='itemList'>
            {products.length ? (
                <>{
                    products.map((product) => {
                        return (
                            <div key={product.id}>
                                <Item product={product}/>
                            </div>
                        );
                    })
                }</>
            ) : (
                <h2>Cargando productos...</h2>
            )}
        </div>
    );
};