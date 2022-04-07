import React, { useState, useEffect } from 'react';
import ItemCount from './ItemCount';

export default function ItemDetail({producto}) {
    const [products, setProducts]= useState([{}]);
    const [terminarCompras, setTerminarCompras]= useState([]);
    const {id, nombre, precio, imagen, fabricante, memoriaGrafica, interfazPM, tamañoMemoria, conectividad, descripcion, stock} = producto;
    
    let initial= 0;

    if(stock === 0){
        initial= 0;
    }else{
        initial= 1;
    }

    const sumarItem= () =>{
        if(count < stock){
            setCount(count + 1);
        };
    };
    
    const restarItem= () =>{
        if(count > 0){
            setCount(count - 1);
        };
    };
    
    
    setTimeout(()=>{
        const stockHide= document.querySelector(`.stock--${id}`);
        
        if(stock < 10){
            if(stock > 1){
                stockHide.textContent= `Quedan las últimas ${stock} unidades`;
            }else{
                stockHide.textContent= `Queda la última unidad`;
            }
            if(stock === 0){
                stockHide.textContent= 'SIN STOCK';
            }
        }else{
            stockHide.style.visibility= 'hidden';
        }
    }, 10)
    
    
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
        setTerminarCompras('Comprar');
        getProductsAsync();
    },[])

    const [count, setCount]= useState(initial);
    

    const ItemCountDelete= (countItems) =>{
        if(terminarCompras === 'Comprar'){
            alert(`Has agregado ${countItems} productos`);
            setTerminarCompras('Terminar Compra');
        }else{
            setTerminarCompras('Comprar');
        }
    }

    const precioFinal = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'ARS' }).format(precio);
    
    return(
        <article className="productDetail">
            {products.length ? (<h2>Cargando item...</h2>)
                : (<>
                    <div className='productData'>
                        <div className='divImagenDetail'>
                            <img src={`../img/${imagen}`} alt= {nombre} className='imagenProductosDetail'></img>
                        </div>
                        <div>
                            <p className="descripcion">{descripcion}</p>
                        </div>
                    </div>
                    <div className="productInfo">
                        <h2 className="nombre">{nombre}</h2>
                        <h3>Precio: ${precioFinal}</h3>
                        <p className='seleccionarCant'>Seleccione cantidad:</p>
                        <div className='divBotoneraDetail'>
                            <button className={`btnSumaRestaDetail`} onClick={restarItem}>-</button>
                            <h3>{count}</h3>
                            <button className={`btnSumaRestaDetail`} onClick={sumarItem}>+</button>
                        </div>
                        <ItemCount count={count} id={id} clase='ItemCountDetail' fontSize="large" terminarCompras={terminarCompras} action={ItemCountDelete}/>
                        <p className={`stock--${id}`}></p>
                        <div className='dataDetail'>
                            <p className='dataG'>Fabricante: <b>{fabricante}</b></p>
                            <p className='dataW'>Memoria Gráfica: <b>{memoriaGrafica}</b></p>
                            <p className='dataG'>Interfaz de comunicación con placa madre: <b>{interfazPM}</b></p>
                            <p className='dataW'>Tamaño de memoria: <b>{tamañoMemoria}</b></p>
                            <p className='dataG'>Conectividad de puertos: <b>{conectividad}</b></p>
                        </div>
                    </div>
                </>)
            }
        </article>
    );
}
