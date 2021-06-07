    import React, { useState, useEffect } from "react";
    import Button from "@material-ui/core/Button";
    import TextField from "@material-ui/core/TextField";
    import Dialog from "@material-ui/core/Dialog";
    import DialogActions from "@material-ui/core/DialogActions";
    import DialogContent from "@material-ui/core/DialogContent";
    import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
    import DialogTitle from "@material-ui/core/DialogTitle";
    import "./ArticuloDialog.css";
    import { makeStyles } from "@material-ui/core/styles";
    import Carousel from "../Carousel";
    import { fb } from "../../firebase.js";
    import { OpenWithOutlined } from "@material-ui/icons";
    const db = fb.firestore()
    let initialPoust = {
    descripcion: "",
    name: "",
    url: "",
    img: "",
    };
    function PoustDialog({ poustOpen, poustAlert, handleAlert }) {
    const [poust, setPoust] = useState(initialPoust);
    const [storePoust, setStorePoust] = useState(null)

    const handleStorage = async (data) => {        
        let imageId = new Date()
        let storageRef = fb.storage().ref();
        let fileRef = storageRef.child(`image/poust/${imageId}`);
        await fileRef.put(data);
        let imgURL = await fileRef.getDownloadURL()  
        setStorePoust({
            ...poust,
            ['img']: imgURL
        })
    };

    const handleCreate = async (data) => {        
        console.log(data);
        await db.collection("poust").doc().set(data);

        console.log("articulo agregado");
    } 

    useEffect(() => {
        if (storePoust !== null) {
            handleCreate(storePoust)
            handleAlert({
                open: true,
                message: "Poust CREADO¡",
                type: "success",
            });
        }
    }, [storePoust])


    const hanldeGetAricle = async (id) => {
        const doc = await db.collection("articulos").doc(id).get();
        let docData =  {...doc.data()}        
        setPoust({...poust,
                ["name"]: docData.nombre,
                ["url"]: id,
        });
    };

    useEffect(() => {
        if (poustOpen.art === "") {
                setPoust({
                ...initialPoust,
            });
        } else {
            hanldeGetAricle(poustOpen.art);
            }
    }, [poustOpen]);

    const handleChange = (e) => {
        setPoust({ ...poust, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!poust.name || !poust.url || !poust.descripcion || !poust.img) {
            alert("Datos incompletos");
            return;
        }
        
        await handleStorage(poust.img[0])
        setPoust({ ...initialPoust });
        poustAlert("");
    };
    return (
        <div>
        <Dialog
            open={poustOpen.open}
            onClose={poustAlert}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">
            {"Agrega tu Publicación"}
            </DialogTitle>
            <DialogContent>
            <TextField
                id="standard-multiline-static"
                label="Descripción"
                name="descripcion"
                value={poust.descripcion}
                multiline
                rowsMax={4}
                fullWidth
                onChange={handleChange}
            />
            <TextField
                autoFocus
                margin="dense"
                name="url"
                value={poust.url}
                label={poust.name === "" ? "Articulo URL" : poust.name}
                type="text"
                fullWidth
                onChange={poust.url ? null : handleChange}
            />
            <TextField
                autoFocus
                margin="dense"
                name="img"
                label="Imagenes"
                type="file"
                fullWidth
                onChange={(e) => setPoust({
                    ...poust,
                    [e.target.name]: e.target.files
                })}
            />
            </DialogContent>
            <DialogActions>
            <Button
                onClick={() => {
                setPoust({ ...initialPoust });
                poustAlert("");
                }}
                color="primary"
            >
                Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
                Agregar
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
    }

    export default PoustDialog;
