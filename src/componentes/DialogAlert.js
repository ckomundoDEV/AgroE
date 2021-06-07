    import React, { useState, useEffect } from "react";
    import "./Dialog.css";
    import Dialog from "@material-ui/core/Dialog";
    import DialogActions from "@material-ui/core/DialogActions";
    import DialogContent from "@material-ui/core/DialogContent";
    import DialogContentText from "@material-ui/core/DialogContentText";
    import DialogTitle from "@material-ui/core/DialogTitle";
    import Button from "@material-ui/core/Button";
    import { fb } from "../firebase.js";
    const db = fb.firestore();

    function DialogAlert({ open, handleClose, art, url }) {
    const [articulo, setArticulo] = useState({ ...art });

    useEffect(() => {
        if (url !== undefined) {
        hanldeGetAricle(url);
        }
    }, []);
    const hanldeGetAricle = async (id) => {
        const doc = await db.collection("articulos").doc(id).get();
        let docData = { ...doc.data() };
        setArticulo({ ...docData });
    };
    return (
        <div className="dialog_container">
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="md"
        >
            <DialogTitle id="alert-dialog-title">{articulo.nombre}</DialogTitle>
            <div className="dialogBody">
            <div className="dialogHeader">
                <DialogContent className="dialogConentHeader">
                <div className="img_articulo">
                    <img src={articulo.url} alt="" />
                </div>
                </DialogContent>
            </div>
            <div className="dialogInfo">
                <DialogContent className="text">
                <DialogContentText id="alert-dialog-description">
                    PRECIO: {articulo.precio}
                </DialogContentText>
                <DialogContentText>CALIDAD: {articulo.calidad}</DialogContentText>
                <DialogContentText>
                    Descripción:
                    <br />
                    {articulo.descripcion}
                </DialogContentText>
                <DialogActions className="buttons">
                    <div className="buttons">
                    <Button onClick={handleClose} color="primary" autoFocus>
                        CERRAR
                    </Button>
                    </div>
                </DialogActions>
                </DialogContent>
            </div>
            </div>
        </Dialog>
        </div>
    );
    }

    export default DialogAlert;
