import {React, useState} from 'react'
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
    precio: null,
    departamento:"",
    descripcion:"",
    url:"",
    carousel: [],
    calidad: "",
    id:null
}

const img = {
    img:"",
    title: "Image",
    author: "author",
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
function ArticuloDialog({open, handleClose, handleCreate, handleDelete, setDataToEdit, handleUpdate }) {

    const [articulo, setArticulo] = useState(articuloInicial);
    
    const classes = useStyles()

    const handleChange = (e) => {
        setArticulo({
            ...articulo,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!articulo.nombre || !articulo.precio || !articulo.calidad || !articulo.departamento) {
            alert("Datos incompletos");
            return;
        }

        if (articulo.id === null) {
            handleCreate(articulo);
        }else{
            handleUpdate(articulo);
        }

        handleReset();
        handleClose();
    }

    const handleReset = () => {
        setArticulo(articuloInicial);
        setDataToEdit(null);
    };

    return (
            <div>

                <Dialog open={open}  onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Crea tu articulo</DialogTitle>
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
                            name="carousel"
                            value={articulo.carousel}
                            label="Imagenes"
                            type="file"
                            fullWidth
                            onChange={handleChange}
                        />
                        <Carousel/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleSubmit} color="primary">
                            Agregar
                        </Button>
                    </DialogActions>
                </Dialog>
        </div>
    )
}
export default ArticuloDialog;