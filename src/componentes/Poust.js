
import React, {useEffect} from 'react'
import './Poust.css';
import DialogAlert from "./DialogAlert.js"



function Poust({poust}) {
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
                    url={poust.url}
                />
            <div className="poust_container" onClick={handleClickOpen}>
                <div className="items">
                    <h1>{poust.name}</h1>
                </div>
                <div className="items">
                    <img src={poust.img} alt=""/>
                </div>
                <div className="items">
                    <h2>{poust.descripcion}</h2>

                </div>
            </div>
        </div>
    )
}

export default Poust
