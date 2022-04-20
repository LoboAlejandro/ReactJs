import React, {useState, useEffect} from 'react';
import { dataProducts } from '../../data/data';
import { Item } from './Item';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import db from '../../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore';
    
export default function ItemList(){
    
    const { category } = useParams();
    
    const [loading, setLoading]= useState(true);
    const [products, setProducts]= useState([]);
    
    const getProducts= async () =>{
        const itemsCollection= collection(db, 'productos')
        const productosSnapshot = await getDocs(itemsCollection)
        const productList = productosSnapshot.docs.map((doc) =>{
            let product= doc.data();
            product.id= doc.id;
            return product;
        })
        return productList;
    }
    //     new Promise((resolve, reject)=>{
    //     return setTimeout(()=>{
    //         setLoading(false);
    //         return resolve(dataProducts);
    //     }, 2000) 
    // })
    
    // async function getProductsAsync(){
    //     try{
    //         const productos= await getProducts();
    //         setProducts([]);
    //         category ? filterProductByCategory(productos, category) : setProducts(productos);
    //     }catch(error){
        //     }
        // } 
        
        useEffect(()=>{
            setProducts([]);
            setLoading(true)
            getProducts().then((productos) => {
                setLoading(false)
                category ? filterProductByCategory(productos, category) : setProducts(productos);
            })
        // getProductsAsync();
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