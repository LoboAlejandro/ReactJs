import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
//Mui
import { CircularProgress } from '@mui/material';
//Firebase
import {doc, getDoc} from 'firebase/firestore'
import db from '../../firebaseConfig';

export default function ItemDetailContainer() {
    const navigate= useNavigate();
    const {id}= useParams();
    const [producto, setProducto] = useState({});
    const [loading, setLoading]= useState(true);
    
    const getProduct= async() =>{
        const docRef= doc(db, 'productos', id);
        const docSnap= await getDoc(docRef)
        if(docSnap.exists()){
            let product= docSnap.data();
            product.id= docSnap.id;
            setLoading(false)
            setProducto(product)
        }else{
            console.log('no existe producto')
            setLoading(false)
            navigate('/error')
        }
    }

    useEffect(()=>{
        setLoading(true)
        getProduct();
    }, [id])
    
    return (
        <div>
            {loading ? (
                <div className='divCargandox'>
                    <CircularProgress/>
                    <h2 className='msjCargando'>Cargando productos...</h2>
                </div>
            ) : (
                <ItemDetail key={id} producto={producto}/>
            )}
        </div>
    );
}
