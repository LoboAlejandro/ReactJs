import React, { useState, useEffect } from 'react';

export default function ItemDetail({producto}) {
    const [products, setProducts]= useState([]);
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
            {console.log(products.length)}
            {products.length ? (
                <>
                    <div className='divImagen'></div>
                    <div className="productInfo">
                        <h2 className="nombre">{nombre}</h2>
                        <h4>ID: {id}</h4>
                        <p className="description">{description}</p>
                        <p>Quedan {stock} unidad/es</p>
                    </div>
                </>):
                (<h2>Cargando item...</h2>)
            }
        </article>
    );

    // const [productos, setProductos] = useState([]);

    // const getProducto = () => {
    //     fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    //     .then((response) => {
    //         console.log(response.json())
    //         return response;
    //     })
    //     .then((producto) => {
    //         console.log(producto.results);
    //         setProductos(producto.results);
    //     });
    // };

    // useEffect(() => {
    //     setTimeout(() => {
    //         getProducto();
    //     }, 2000);
    // }, []);

    // return (
    //     <ul>
    //         {productos.length ? (
    //             <>{
    //                 productos.map((producto, index) => {
    //                 return <li key={index}>{producto}</li>;
    //                 })
    //             }</>
    //         ):(<h3>cargando productos</h3>)}
    //     </ul>
    // );
}
