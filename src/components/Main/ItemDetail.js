import React, { useState, useEffect } from 'react';

export default function ItemDetail({producto}) {
    const [products, setProducts]= useState([{}]);
    const{id, nombre, description, stock}= producto;
    
    const getProducts= new Promise((resolve, reject)=>{
            return setTimeout(()=>{
                return resolve(producto);
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
        <article className="productDetail">
            {products.length ? (<h2>Cargando item...</h2>)
                : (<>
                    <div className='divImagen'></div>
                    <div className="productInfo">
                        <h2 className="nombre">{nombre}</h2>
                        <h4>ID: {id}</h4>
                        <p className="description">{description}</p>
                        <p>Quedan {stock} unidad/es</p>
                    </div>
                </>)
            }
        </article>
    );
}
