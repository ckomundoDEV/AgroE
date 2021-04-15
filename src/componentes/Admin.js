import React, { useState} from 'react'
import './Admin.css'
import {ExitToApp, Edit} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ArticuloDialog from "./componentes/ArticuloDialog";
import ArticulosQrud from "./componentes/ArticulosQrud";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
        margin: theme.spacing(1),
        },
    },
}));

const db = [
    {
        nombre: "tambo de plastico",
        precio: 350,
        departamento:"Envases",
        descripcion:
        "Tambo de plastico reforsado, de 200 Lt color azul y blaco. tenemos precio al malloreo",
        url:
        "https://logismarketmx.cdnwm.com/ip/grupo-univerplast-mexico-tambor-de-200-litros-abierto-tipo-ipe-tambor-208-litros-cerrado-elanillado-1624696-361x230.jpg",
        carousel: [
        {
            img:
            "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/159777547_932005210900770_8979275275435933448_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=fbxhbtN15xQAX9nnFG4&_nc_ht=scontent.fmzt1-1.fna&oh=d99733e6776c856e1de02d987f8951b6&oe=6074F8C2",
            title: "Image",
            author: "author",
        },
        {
            img:
            "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149081999_914332902668001_9086611543165929698_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=9RQNZHTVbgYAX_KtTsq&_nc_oc=AQlFhD51JwrAyhCiW_jrJGdN4eLFvkamKmzKCjijlDpbJkek_lH1p6R2pxdU5cRqKJ66LaB9vlsK_9XKAwLJtmFy&_nc_ht=scontent.fmzt1-1.fna&oh=1394f4513af429b0eada58d7927e389b&oe=6077C8CD",
            title: "Image",
            author: "author",
        },
        {
            img:
            "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/155047760_923416988426259_2298949233322337404_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=b5808y3YXKYAX8LCc8q&_nc_ht=scontent.fmzt1-1.fna&oh=67200898bfa4f460f87792b7a80b34d1&oe=6076D4B1",
            title: "Image",
            author: "author",
        },
        {
            img:
            "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149095827_914332799334678_5209841410533221808_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=ipGegG7jZtIAX-e7T7h&_nc_ht=scontent.fmzt1-1.fna&oh=efc8b6b262e6d6d6ad6eb6ebaa2289d7&oe=60772AA3",
            title: "Image",
            author: "author",
        },
        {
            img:
            "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149013422_914059329362025_8697520016211538928_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=JEU3cf1cg8gAX_rqZf0&_nc_ht=scontent.fmzt1-1.fna&oh=47e3359fb1d24ded61d65ea73782fa5a&oe=60786FA1",
            title: "Image",
            author: "author",
        },
        {
            img:
            "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149081999_914332902668001_9086611543165929698_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=9RQNZHTVbgYAX_KtTsq&_nc_oc=AQlFhD51JwrAyhCiW_jrJGdN4eLFvkamKmzKCjijlDpbJkek_lH1p6R2pxdU5cRqKJ66LaB9vlsK_9XKAwLJtmFy&_nc_ht=scontent.fmzt1-1.fna&oh=1394f4513af429b0eada58d7927e389b&oe=6077C8CD",
            title: "Image",
            author: "author",
        },
        ],
        calidad: "nuevo",
    },
    {
        nombre: "tambo de plastico",
        precio: 350,
        departamento:"Envases",
        descripcion:
        "Tambo de plastico reforsado, de 200 Lt color azul y blaco. tenemos precio al malloreo",
        url:
        "https://logismarketmx.cdnwm.com/ip/grupo-univerplast-mexico-tambor-de-200-litros-abierto-tipo-ipe-tambor-208-litros-cerrado-elanillado-1624696-361x230.jpg",
        carousel: [
        {
            img:
            "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/159777547_932005210900770_8979275275435933448_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=fbxhbtN15xQAX9nnFG4&_nc_ht=scontent.fmzt1-1.fna&oh=d99733e6776c856e1de02d987f8951b6&oe=6074F8C2",
            title: "Image",
            author: "author",
        },
        {
            img:
            "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149081999_914332902668001_9086611543165929698_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=9RQNZHTVbgYAX_KtTsq&_nc_oc=AQlFhD51JwrAyhCiW_jrJGdN4eLFvkamKmzKCjijlDpbJkek_lH1p6R2pxdU5cRqKJ66LaB9vlsK_9XKAwLJtmFy&_nc_ht=scontent.fmzt1-1.fna&oh=1394f4513af429b0eada58d7927e389b&oe=6077C8CD",
            title: "Image",
            author: "author",
        },
        {
            img:
            "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/155047760_923416988426259_2298949233322337404_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=b5808y3YXKYAX8LCc8q&_nc_ht=scontent.fmzt1-1.fna&oh=67200898bfa4f460f87792b7a80b34d1&oe=6076D4B1",
            title: "Image",
            author: "author",
        },
        {
            img:
            "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149095827_914332799334678_5209841410533221808_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=ipGegG7jZtIAX-e7T7h&_nc_ht=scontent.fmzt1-1.fna&oh=efc8b6b262e6d6d6ad6eb6ebaa2289d7&oe=60772AA3",
            title: "Image",
            author: "author",
        },
        {
            img:
            "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149013422_914059329362025_8697520016211538928_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=JEU3cf1cg8gAX_rqZf0&_nc_ht=scontent.fmzt1-1.fna&oh=47e3359fb1d24ded61d65ea73782fa5a&oe=60786FA1",
            title: "Image",
            author: "author",
        },
        {
            img:
            "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149081999_914332902668001_9086611543165929698_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=9RQNZHTVbgYAX_KtTsq&_nc_oc=AQlFhD51JwrAyhCiW_jrJGdN4eLFvkamKmzKCjijlDpbJkek_lH1p6R2pxdU5cRqKJ66LaB9vlsK_9XKAwLJtmFy&_nc_ht=scontent.fmzt1-1.fna&oh=1394f4513af429b0eada58d7927e389b&oe=6077C8CD",
            title: "Image",
            author: "author",
        },
        ],
        calidad: "nuevo",
    },
    
    ];
    

function Admin() {
    const [initialData, setInitialData] = useState(db)
    const [open, setOpen] = React.useState(false);
    const [dataToEdit, setDataToEdit] = useState(null)

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

    const handleUpdate = () => {

    }
     

    const handleCreate = (data) => {
        console.log(data);
    }

    const handleDelete = () => {

    }


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
                    handleUpdate={handleUpdate}                    
                    handleCreate={handleCreate}
                    setDataToEdit={setDataToEdit}
                    initialData={initialData}
                />
                <ArticulosQrud
                    initialData={initialData}
                />
        </div>
    )
}

export default Admin
