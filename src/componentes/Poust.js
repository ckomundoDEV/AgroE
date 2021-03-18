
import React from 'react'
import './Poust.css';
import DialogAlert from "./DialogAlert.js"



function Poust({imgUrl, nombre, descripcion, precio}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        
        <div>
                <DialogAlert 
                    handleClose = {handleClose}
                    open = {open}   
                />
            <div className="poust_container" onClick={handleClickOpen}>
                <div className="items">
                    <h1>{nombre}</h1>
                </div>
                <div className="items">
                    <img src={imgUrl} alt=""/>
                </div>
                <div className="items">
                    <h2>{descripcion}</h2>
                    <br/>
                    <h2>$ {precio}</h2>
                </div>
            </div>
        </div>
    )
}

export default Poust
