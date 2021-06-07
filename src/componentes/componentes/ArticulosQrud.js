import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import PostAddIcon from '@material-ui/icons/PostAdd';
import DeleteIcon from '@material-ui/icons/Delete';
import {fb} from "../../firebase.js";
const db = fb.firestore()

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
        },
    },
    }))(TableRow);



    const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    buttons: {
        display: "flex",
        justifyContent: "space-evenly"
    }
    });

function ArticulosQrud({initialData, handleClickOpen, setDataToEdit, handleDelete, poustAlert}) {
    const classes = useStyles();
    const rows = initialData;

    const handlePoust = (art) => {
        console.log(art.id);
        poustAlert(art)
    }
    const editDialog = (row) => {
        handleClickOpen()
        setDataToEdit(row.id)
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
            <TableHead>
                <TableRow>
                <StyledTableCell>Nombre del articulo</StyledTableCell>
                <StyledTableCell align="right">Precio</StyledTableCell>
                <StyledTableCell align="right">Calidad</StyledTableCell>
                <StyledTableCell align="right">Departamento</StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row, index) => (
                <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">{row.nombre}</StyledTableCell>
                    <StyledTableCell align="right">${row.precio}</StyledTableCell>
                    <StyledTableCell align="right">{row.calidad}</StyledTableCell>
                    <StyledTableCell align="right">{row.departamento}</StyledTableCell>
                    <StyledTableCell align="right" className={classes.buttons}>
                        <Button variant="contained" onClick={()=>editDialog(row) }><EditIcon/></Button>
                        <Button variant="contained" onClick={() => handleDelete(row)} color="secondary"><DeleteIcon/></Button>
                        <Button variant="contained" onClick={()=>handlePoust(row)} color="primary"><PostAddIcon/></Button>
                    </StyledTableCell>
                </StyledTableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
        );
}

export default ArticulosQrud;
