import React, {useState, useEffect} from 'react';
import { dataProducts } from '../../data/data';
import { Item } from './Item';
import { useParams } from 'react-router-dom';
    
export default function ItemList(){
    
    const { category } = useParams();
    
    let prueba= 'CARGANDO ITEM';
    const [products, setProducts]= useState([]);
    
    const getProducts= new Promise((resolve, reject)=>{
        return setTimeout(()=>{
            return resolve(dataProducts);
        }, 2000)
    })
    
    async function getProductsAsync(){
        try{
            const productos= await getProducts;
            setProducts([]);
            category ? filterProductByCategory(productos, category) : setProducts(productos);
        }catch(error){
            console.log('error', error);
        }
    } 
    
    useEffect(()=>{
        getProductsAsync();
    }, [category])
    
    const filterProductByCategory = (productos , category) => {
        prueba= 'error';
        productos.map( (producto) => {
            if(producto.category === category) {
                setProducts(products => [...products, producto]);
                prueba= 'Correcto';
            }
        })
    }
    
    useEffect(()=>{
        const msjError= document.querySelector('.msjError');
        const msjCargando= document.querySelector('.msjCargando');
        msjError.style.visibility= 'hidden';
        setTimeout(()=>{
            if(prueba === 'error'){
                console.log('error');
                msjCargando.style.visibility= 'hidden';
                msjError.style.visibility= 'visible';
            }else{
                console.log('correcto');
            }
        }, 2000)
    }, [prueba])
    
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
                <div className='divCargandoError'>
                    <h2 className='msjCargando'>Cargando productos...</h2>
                    <h2 className='msjError'>ERROR: La categoria ingresada no existe</h2>
                </div>
            )}
        </div>
    );
};