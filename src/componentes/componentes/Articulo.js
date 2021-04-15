import React from "react";
import DialogAlert from "../DialogAlert.js";
import "./Articulo.css";

function Articulo({ art }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
        <DialogAlert handleClose={handleClose} imgs={art.carousel} open={open} />
        <div className="poust_container" onClick={handleClickOpen}>
            <div className="items">
            <h1>{art.nombre}</h1>
            </div>
            <div className="items">
            <img src={art.url} alt="" />
            </div>
            <div className="items">
            <h2>{art.descripcion}</h2>
            <br />
            <h2>$ {art.precio}</h2>
            </div>
        </div>
        </div>
    );
    }

export default Articulo;
