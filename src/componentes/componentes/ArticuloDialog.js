import React, {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import {FormControl, InputLabel, Select, MenuItem   } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import './ArticuloDialog.css'
import { makeStyles } from '@material-ui/core/styles';
import Carousel from "../Carousel";
import {fb} from "../../firebase.js";
const db = fb.firestore()

const useStyles = makeStyles((theme) => ({
        formControl: {
        minWidth: "100%",
        },
        selectEmpty: {
        marginTop: theme.spacing(2),
        },
    }));
const articuloInicial = {
    nombre: "",
    precio: "",
    departamento:"",
    descripcion:"",
    url:"",
    carousel: [],
    calidad: ""
}


/*
    datos para articlo:
    -nombre
    -calidad
    -precio
    -descripicon
    -imagenes
    -Departamento
    -
*/
function ArticuloDialog({ open, handleClose,  handleCreate,  setDataToEdit, dataToEdit, setDeleteImg}) {
    const [articulo, setArticulo] = useState(articuloInicial);
    const [image, setImage] = useState(null);

    const classes = useStyles();

    const handleChange = (e) => {
        setArticulo({
            ...articulo,
            [e.target.name]: e.target.value
        })
    };
    useEffect(()=> {
        if (image !== null) {
            
            handleCreate(image)
        }
    },[image]);

    const handleStorage = async (data) => {        
        let imgs = data.url[0];
        let imageId = new Date()
        let storageRef = fb.storage().ref();
        let fileRef = storageRef.child(`image/articulos/${imageId}`);
        await fileRef.put(imgs);
        let imgURL = await fileRef.getDownloadURL()  
        setImage({
            ...articulo,
            ['url']: imgURL
        })
    };

    const handleSubmit =  async (e) => {
        e.preventDefault();
        if (!articulo.nombre || !articulo.precio || !articulo.calidad || !articulo.departamento) {
            alert("Datos incompletos");
            return;
        }
        
        await handleStorage(articulo)
        handleReset();
        handleClose();
    };

    const handleReset = () => {
        setArticulo(articuloInicial);
        setDataToEdit('');
    };

    const getArticleById = async (id) => {
        const doc = await db.collection('articulos').doc(id).get();
        console.log(doc.data());
        let docData =  {...doc.data()}
        setArticulo(docData)
        setDeleteImg(docData.url)
    };

    useEffect(()=>{
        if (dataToEdit === '') {
            setArticulo({...articuloInicial})
        } else {
            
            getArticleById(dataToEdit)
        }
        
    },[dataToEdit]);

    return (
            <div>

                <Dialog open={open}  onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">{dataToEdit ? 'Edita tu articulo' : 'Agrega tu articulo'}</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            name="nombre"
                            label="Nombre"
                            type="name"
                            value={articulo.nombre}
                            fullWidth
                            onChange={handleChange}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            name="precio"
                            value={articulo.precio}
                            label="Precio"
                            type="number"
                            fullWidth
                            onChange={handleChange}
                        />
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Calidad</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    name="calidad"                                    
                                    value={articulo.calidad}
                                    onChange={handleChange}
                                    fullWidth
                                    
                                >
                                <MenuItem value="NUEVO">NUEVO</MenuItem>
                                <MenuItem value="USADO">USADO</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            id="standard-multiline-static"
                            label="Descripción"
                            name="descripcion"
                            multiline
                            value={articulo.descripcion}
                            rowsMax={4}
                            fullWidth
                            onChange={handleChange}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            name="departamento"
                            value={articulo.departamento}
                            label="Departamento"
                            type="text"
                            fullWidth
                            onChange={handleChange}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            name="url"
                            label="Imagenes"
                            type="file"
                            fullWidth
                            onChange={e => setArticulo({
                                ...articulo,
                                [e.target.name]: e.target.files
                            })}
                        />
                        <Carousel/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=> {
                            handleClose()
                            setArticulo({...articuloInicial})
                        }} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleSubmit} color="primary">
                            {dataToEdit ? 'Actualizar' : 'Agregar'}
                        </Button>
                    </DialogActions>
                </Dialog>
        </div>
    )
}
export default ArticuloDialog;