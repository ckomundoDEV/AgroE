import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
    });

function ArticulosQrud({initialData}) {
    const classes = useStyles();
    const rows = initialData;
    
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
            <TableHead>
                <TableRow>
                <StyledTableCell>Nombre del articulo</StyledTableCell>
                <StyledTableCell align="right">Precio</StyledTableCell>
                <StyledTableCell align="right">Calidad</StyledTableCell>
                <StyledTableCell align="right">Departamento</StyledTableCell>
                <StyledTableCell align="right">num Imagenes</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                <StyledTableRow key={row.nombre}>
                    <StyledTableCell component="th" scope="row">{row.nombre}</StyledTableCell>
                    <StyledTableCell align="right">{row.precio}</StyledTableCell>
                    <StyledTableCell align="right">{row.calidad}</StyledTableCell>
                    <StyledTableCell align="right">{row.departamento}</StyledTableCell>
                    <StyledTableCell align="right">{row.carousel.length}</StyledTableCell>
                </StyledTableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
        );
}

export default ArticulosQrud;