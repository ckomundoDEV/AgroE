import React from 'react'
import './Admin.css'
import {ExitToApp, Edit} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ArticuloDialog from "./componentes/ArticuloDialog"
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
        margin: theme.spacing(1),
        },
    },
}));

function Admin() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

    const classes = useStyles();

    return (
        <div className="admin_container">
            <div className="admin_header">
                <div className="user">
                <div className={classes.root}>
                <Avatar alt="Remy Sharp" src="https://lh3.googleusercontent.com/ogw/ADGmqu_gh_8RUF3dGQ5CHZIP53BT2XRKZRzqnKSD6m4HnQ=s32-c-mo" />
                </div>
                    <p>jose fasuto peña gomez</p>
                    <div className="icons">
                        <ExitToApp className="icon"/>
                        <Edit  className="icon"/>
                    </div>
                </div>
            </div>
            <div className="admin_body">
                <div className="item">
                    <h1>Crear publicasion</h1>
                </div>
                <div onClick={handleClickOpen} className="item">
                    <h1>Crear articulo</h1>
                </div>
            </div>
                <ArticuloDialog                    
                    display="none"
                    open={open}
                    handleClose={handleClose}
                />
        </div>
    )
}

export default Admin
