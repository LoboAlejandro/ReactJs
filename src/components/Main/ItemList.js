import React, {useState, useEffect} from 'react';
import { dataProducts } from '../../data/data';
import { Item } from './Item';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
    
export default function ItemList(){
    
    const { category } = useParams();
    
    const [loading, setLoading]= useState(true);
    const [products, setProducts]= useState([]);
    
    const getProducts= new Promise((resolve, reject)=>{
        return setTimeout(()=>{
            setLoading(false);
            return resolve(dataProducts);
        }, 2000)
    })
    
    async function getProductsAsync(){
        try{
            const productos= await getProducts;
            setProducts([]);
            category ? filterProductByCategory(productos, category) : setProducts(productos);
        }catch(error){
        }
    } 
    
    useEffect(()=>{
        getProductsAsync();
    }, [category])
    
    const filterProductByCategory = (productos , category) => {
        productos.map( (producto) => {
            if(producto.category === category) {
                setProducts(products => [...products, producto]);
            }
        })
    }
    
    return(
        <div className='itemList'>
            {loading ? (
                <div className='divCargando'>
                    <CircularProgress/>
                    <h2 className='msjCargando'>Cargando productos...</h2>
                </div>
            ) : (
                <>
                    {products.map((product) => <Item key={product.id} product={product}/>)}
                </>
            )}
        </div>
    );
};