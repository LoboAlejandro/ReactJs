import * as React from 'react';
import './ItemFilters.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//Mui
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

export default function ItemFilters(){
    const [value, setValue] = useState('');
    const navigate= useNavigate()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        setValue(e.target.value);
        navigate(`${e.target.value}`);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    
    return(
        <section>
            <Button onClick={handleOpen} className='btnFiltros' variant='contained'>Filtros</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">Filtros</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={value}
                            onChange={handleChange}
                            >
                            <FormControlLabel value="/" control={<Radio />} label="Ninguno" />
                            <FormControlLabel value="/productos/procesador" control={<Radio />} label="Procesadores" />
                            <FormControlLabel value="/productos/placaDeVideo" control={<Radio />} label="Placas de Video" />
                            <FormControlLabel value="/productos/motherboard" control={<Radio />} label="Motherboards" />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Modal>
            {
                value === '/' || value=== '' ? (<h1 className='h1Filters'>Todos los productos</h1>):(<></>)
            }
            {
                value === '/productos/procesador' ? (<h1 className='h1Filters'>Procesadores:</h1>):(<></>)
            }
            {
                value === '/productos/placaDeVideo' ? (<h1 className='h1Filters'>Placas de Video:</h1>):(<></>)
            }
            {
                value === '/productos/motherboard' ? (<h1 className='h1Filters'>Motherboards:</h1>):(<></>)
            }
        </section>
    )
}