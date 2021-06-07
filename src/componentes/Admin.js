    import React, { useState, useEffect } from "react";
    import "./Admin.css";
    import { ExitToApp, Edit } from "@material-ui/icons";
    import { makeStyles } from "@material-ui/core/styles";
    import Avatar from "@material-ui/core/Avatar";
    import ArticuloDialog from "./componentes/ArticuloDialog";
    import ArticulosQrud from "./componentes/ArticulosQrud";
    import { fb } from "../firebase";
    import Snackbar from "@material-ui/core/Snackbar";
    import MuiAlert from "@material-ui/lab/Alert";
    import PoustDialog from "./componentes/PoustDialog";

    const db = fb.firestore();

    const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        "& > *": {
        margin: theme.spacing(1),
        },
    },
    }));

    function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    function Admin() {
    const [open, setOpen] = useState(false);
    const [dataToEdit, setDataToEdit] = useState("");
    const [articles, setArticles] = useState([]);
    const [deleteImg, setDeleteImg] = useState("");
    const [poustOpen, setPoustOpen] = useState({
        open: false,
        art:""
    })
    const [alert, setAlert] = useState({
        open: false,
        message: "",
        type: "",
    });

    useEffect(() => {
        handleGetData();
    }, []);
    const handleAlert = (data) => {
        setAlert(data);
    };

    const handleAlertClose = (event, reason) => {
        if (reason === "clickaway") {
        return;
        }

        setAlert(false);
    };
    const handleClickOpen = () => {
        setOpen(true);
        setDataToEdit("");
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleGetData = async () => {
        db.collection("articulos").onSnapshot((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
        });
        setArticles(docs);
        });
    };

    const handleCreate = async (data) => {
        try {
        if (dataToEdit === "") {
            console.log(data);
            await db.collection("articulos").doc().set(data);
            handleAlert({
            open: true,
            message: "Articulo agregado",
            type: "success",
            });
        } else {
            handleDeleteStorage(deleteImg);
            await db.collection("articulos").doc(dataToEdit).update(data);
            handleAlert({
            open: true,
            message: "Articulo editado",
            type: "warning",
            });
        }
        } catch (error) {
        console.log(error);
        }
    };
    const handleDeleteStorage = (ulrName) => {
        let storageRef = fb.storage().refFromURL(ulrName);
        storageRef
        .delete()
        .then(() => {
            console.log("image delete");
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const poustAlert  = (art) =>{
        console.log(art);
        if (art.id ) {
            setPoustOpen({
                open: !poustOpen.open,
                art: art.id
            })
            console.log("con id");
            
        }else{
            setPoustOpen({...poustOpen, ["open"]:!poustOpen.open})
            console.log("solo poust");
        }
    }

    const handleDelete = async (row) => {
        let id = row.id;
        if (window.confirm("¿Seguro deseas eliminar este artículo?")) {
        handleDeleteStorage(row.url);
        await db.collection("articulos").doc(id).delete();
        handleAlert({
            open: true,
            message: "Articulo eliminado¡",
            type: "success",
        });
        }
    };

    const classes = useStyles();

    return (
        <div className="admin_container">
        <div className="admin_header">
            <div className="user">
            <div className={classes.root}>
                <Avatar
                alt="Remy Sharp"
                src="https://lh3.googleusercontent.com/ogw/ADGmqu_gh_8RUF3dGQ5CHZIP53BT2XRKZRzqnKSD6m4HnQ=s32-c-mo"
                />
            </div>
            <p>jose fasuto peña gomez</p>
            <div className="icons">
                <ExitToApp className="icon" />
                <Edit className="icon" />
            </div>
            </div>
        </div>
        <div className="admin_body">
            <div onClick={poustAlert} className="item">
            <h1>Crear publicasion</h1>
            </div>
            <div onClick={handleClickOpen} className="item">
            <h1>Crear articulo</h1>
            </div>
        </div>
        <ArticuloDialog
            display="none"
            open={open}
            setOpen={setOpen}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            handleCreate={handleCreate}
            setDataToEdit={setDataToEdit}
            setDeleteImg={setDeleteImg}
            {...{  dataToEdit, articles }}
        />
        <PoustDialog
            handleAlert={handleAlert}
            display="none"
            poustOpen={poustOpen}
            poustAlert={poustAlert}
        />
        <ArticulosQrud
            poustAlert={poustAlert}
            handleClickOpen={handleClickOpen}
            initialData={articles}
            handleDelete={handleDelete}
            setDataToEdit={setDataToEdit}
        />
        <Snackbar
            open={alert.open}
            autoHideDuration={2000}
            onClose={handleAlertClose}
        >
            <Alert onClose={handleAlertClose} severity={alert.type}>
            {alert.message}
            </Alert>
        </Snackbar>
        </div>
    );
    }

    export default Admin;
