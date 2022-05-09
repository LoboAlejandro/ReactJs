import React, { useState, useEffect, useContext} from 'react';
import ItemCount from './ItemCount';
//Context
import CartContext from '../../Context/CartContext';

export default function ItemDetail({producto}) {
    const [products, setProducts]= useState([{}]);
    const [terminarCompras, setTerminarCompras]= useState([]);
    const {id, nombre, precio, imagen, fabricante, memoriaGrafica, interfazPM, tamañoMemoria, conectividad, descripcion, stock} = producto;
    const {transformNum} = useContext(CartContext);

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
        }
    }, 10)
    
    useEffect(()=>{
        setTerminarCompras('Comprar');
        setProducts(producto)
    },[])

    const [count, setCount]= useState(initial);

    const ItemCountDelete= () =>{
        if(terminarCompras === 'Comprar'){
            setTerminarCompras('Terminar Compra');
        }else{
            setTerminarCompras('Comprar');
        }
    }

    return(
        <article className="productDetail">
            {products.length ? 
                (
                    <h2>Cargando item...</h2>
                ) : (
                    <>
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
                            <h3>Precio: ${transformNum(precio)}</h3>
                            <p className='seleccionarCant'>Seleccione cantidad:</p>
                            <div className='divBotoneraDetail'>
                                <button className={`btnSumaRestaDetail`} onClick={restarItem}>-</button>
                                <h3>{count}</h3>
                                <button className={`btnSumaRestaDetail`} onClick={sumarItem}>+</button>
                            </div>
                            <ItemCount count={count} product={producto} clase='ItemCountDetail' fontSize="large" terminarCompras={terminarCompras} action={ItemCountDelete}/>
                            {stock > 10 ? 
                                (
                                    <p></p>
                                ) : (
                                    <p className={`stock--${id}`}></p>
                                )
                            }
                            <div className='dataDetail'>
                                <p className='dataG'>Fabricante: <b>{fabricante}</b></p>
                                <p className='dataW'>Memoria Gráfica: <b>{memoriaGrafica}</b></p>
                                <p className='dataG'>Interfaz de comunicación con placa madre: <b>{interfazPM}</b></p>
                                <p className='dataW'>Tamaño de memoria: <b>{tamañoMemoria}</b></p>
                                <p className='dataG'>Conectividad de puertos: <b>{conectividad}</b></p>
                            </div>
                        </div>
                    </>
                )
            }
        </article>
    );
}
