import {React, useState } from 'react'
import {  useTheme } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './Articulos.css'
import Articulo from "./componentes/Articulo"

import Poust from './Poust.js';
const data = [

    {
        nombre: "tambo de plastico",
        precio: 350,
        descripcion: "Tambo de plastico reforsado, de 200 Lt color azul y blaco. tenemos precio al malloreo",
        url: "https://logismarketmx.cdnwm.com/ip/grupo-univerplast-mexico-tambor-de-200-litros-abierto-tipo-ipe-tambor-208-litros-cerrado-elanillado-1624696-361x230.jpg",
        carousel: [
            {
                img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/159777547_932005210900770_8979275275435933448_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=fbxhbtN15xQAX9nnFG4&_nc_ht=scontent.fmzt1-1.fna&oh=d99733e6776c856e1de02d987f8951b6&oe=6074F8C2",
                title: 'Image',
                author: 'author',
            },       
            {
                img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149081999_914332902668001_9086611543165929698_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=9RQNZHTVbgYAX_KtTsq&_nc_oc=AQlFhD51JwrAyhCiW_jrJGdN4eLFvkamKmzKCjijlDpbJkek_lH1p6R2pxdU5cRqKJ66LaB9vlsK_9XKAwLJtmFy&_nc_ht=scontent.fmzt1-1.fna&oh=1394f4513af429b0eada58d7927e389b&oe=6077C8CD",
                title: 'Image',
                author: 'author',
            },
            {
                img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/155047760_923416988426259_2298949233322337404_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=b5808y3YXKYAX8LCc8q&_nc_ht=scontent.fmzt1-1.fna&oh=67200898bfa4f460f87792b7a80b34d1&oe=6076D4B1",
                title: 'Image',
                author: 'author',
            },
            {
                img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149095827_914332799334678_5209841410533221808_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=ipGegG7jZtIAX-e7T7h&_nc_ht=scontent.fmzt1-1.fna&oh=efc8b6b262e6d6d6ad6eb6ebaa2289d7&oe=60772AA3",
                title: 'Image',
                author: 'author',
            },
            {
                img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149013422_914059329362025_8697520016211538928_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=JEU3cf1cg8gAX_rqZf0&_nc_ht=scontent.fmzt1-1.fna&oh=47e3359fb1d24ded61d65ea73782fa5a&oe=60786FA1",
                title: 'Image',
                author: 'author',
            },
            {
                img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149081999_914332902668001_9086611543165929698_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=9RQNZHTVbgYAX_KtTsq&_nc_oc=AQlFhD51JwrAyhCiW_jrJGdN4eLFvkamKmzKCjijlDpbJkek_lH1p6R2pxdU5cRqKJ66LaB9vlsK_9XKAwLJtmFy&_nc_ht=scontent.fmzt1-1.fna&oh=1394f4513af429b0eada58d7927e389b&oe=6077C8CD",
                title: 'Image',
                author: 'author',
            }
        ],
        calidad: "nuevo"
    },
    {
        nombre: "tambo de plastico",
        precio: 350,
        descripcion: "Tambo de plastico reforsado, de 200 Lt color azul y blaco. tenemos precio al malloreo",
        url: "https://logismarketmx.cdnwm.com/ip/grupo-univerplast-mexico-tambor-de-200-litros-abierto-tipo-ipe-tambor-208-litros-cerrado-elanillado-1624696-361x230.jpg",
        carousel: [
            {
                img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/159777547_932005210900770_8979275275435933448_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=fbxhbtN15xQAX9nnFG4&_nc_ht=scontent.fmzt1-1.fna&oh=d99733e6776c856e1de02d987f8951b6&oe=6074F8C2",
                title: 'Image',
                author: 'author',
            },       
            {
                img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149081999_914332902668001_9086611543165929698_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=9RQNZHTVbgYAX_KtTsq&_nc_oc=AQlFhD51JwrAyhCiW_jrJGdN4eLFvkamKmzKCjijlDpbJkek_lH1p6R2pxdU5cRqKJ66LaB9vlsK_9XKAwLJtmFy&_nc_ht=scontent.fmzt1-1.fna&oh=1394f4513af429b0eada58d7927e389b&oe=6077C8CD",
                title: 'Image',
                author: 'author',
            },
            {
                img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/155047760_923416988426259_2298949233322337404_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=b5808y3YXKYAX8LCc8q&_nc_ht=scontent.fmzt1-1.fna&oh=67200898bfa4f460f87792b7a80b34d1&oe=6076D4B1",
                title: 'Image',
                author: 'author',
            },
            {
                img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149095827_914332799334678_5209841410533221808_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=ipGegG7jZtIAX-e7T7h&_nc_ht=scontent.fmzt1-1.fna&oh=efc8b6b262e6d6d6ad6eb6ebaa2289d7&oe=60772AA3",
                title: 'Image',
                author: 'author',
            },
            {
                img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149013422_914059329362025_8697520016211538928_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=JEU3cf1cg8gAX_rqZf0&_nc_ht=scontent.fmzt1-1.fna&oh=47e3359fb1d24ded61d65ea73782fa5a&oe=60786FA1",
                title: 'Image',
                author: 'author',
            },
            {
                img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149081999_914332902668001_9086611543165929698_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=9RQNZHTVbgYAX_KtTsq&_nc_oc=AQlFhD51JwrAyhCiW_jrJGdN4eLFvkamKmzKCjijlDpbJkek_lH1p6R2pxdU5cRqKJ66LaB9vlsK_9XKAwLJtmFy&_nc_ht=scontent.fmzt1-1.fna&oh=1394f4513af429b0eada58d7927e389b&oe=6077C8CD",
                title: 'Image',
                author: 'author',
            }
        ],
        calidad: "nuevo"
    },
    {
        nombre: "tambo de plastico",
        precio: 350,
        descripcion: "Tambo de plastico reforsado, de 200 Lt color azul y blaco. tenemos precio al malloreo",
        url: "https://logismarketmx.cdnwm.com/ip/grupo-univerplast-mexico-tambor-de-200-litros-abierto-tipo-ipe-tambor-208-litros-cerrado-elanillado-1624696-361x230.jpg",
        carousel: [
            {
                img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/159777547_932005210900770_8979275275435933448_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=fbxhbtN15xQAX9nnFG4&_nc_ht=scontent.fmzt1-1.fna&oh=d99733e6776c856e1de02d987f8951b6&oe=6074F8C2",
                title: 'Image',
                author: 'author',
            },       
            {
                img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149081999_914332902668001_9086611543165929698_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=9RQNZHTVbgYAX_KtTsq&_nc_oc=AQlFhD51JwrAyhCiW_jrJGdN4eLFvkamKmzKCjijlDpbJkek_lH1p6R2pxdU5cRqKJ66LaB9vlsK_9XKAwLJtmFy&_nc_ht=scontent.fmzt1-1.fna&oh=1394f4513af429b0eada58d7927e389b&oe=6077C8CD",
                title: 'Image',
                author: 'author',
            },
            {
                img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/155047760_923416988426259_2298949233322337404_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=b5808y3YXKYAX8LCc8q&_nc_ht=scontent.fmzt1-1.fna&oh=67200898bfa4f460f87792b7a80b34d1&oe=6076D4B1",
                title: 'Image',
                author: 'author',
            },
            {
                img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149095827_914332799334678_5209841410533221808_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=ipGegG7jZtIAX-e7T7h&_nc_ht=scontent.fmzt1-1.fna&oh=efc8b6b262e6d6d6ad6eb6ebaa2289d7&oe=60772AA3",
                title: 'Image',
                author: 'author',
            },
            {
                img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149013422_914059329362025_8697520016211538928_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=JEU3cf1cg8gAX_rqZf0&_nc_ht=scontent.fmzt1-1.fna&oh=47e3359fb1d24ded61d65ea73782fa5a&oe=60786FA1",
                title: 'Image',
                author: 'author',
            },
            {
                img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149081999_914332902668001_9086611543165929698_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=9RQNZHTVbgYAX_KtTsq&_nc_oc=AQlFhD51JwrAyhCiW_jrJGdN4eLFvkamKmzKCjijlDpbJkek_lH1p6R2pxdU5cRqKJ66LaB9vlsK_9XKAwLJtmFy&_nc_ht=scontent.fmzt1-1.fna&oh=1394f4513af429b0eada58d7927e389b&oe=6077C8CD",
                title: 'Image',
                author: 'author',
            }
        ],
        calidad: "nuevo"
    },
    {
        nombre: "tambo de plastico",
        precio: 350,
        descripcion: "Tambo de plastico reforsado, de 200 Lt color azul y blaco. tenemos precio al malloreo",
        url: "https://logismarketmx.cdnwm.com/ip/grupo-univerplast-mexico-tambor-de-200-litros-abierto-tipo-ipe-tambor-208-litros-cerrado-elanillado-1624696-361x230.jpg",
        carousel: [
            {
                img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/159777547_932005210900770_8979275275435933448_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=fbxhbtN15xQAX9nnFG4&_nc_ht=scontent.fmzt1-1.fna&oh=d99733e6776c856e1de02d987f8951b6&oe=6074F8C2",
                title: 'Image',
                author: 'author',
            },       
            {
                img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149081999_914332902668001_9086611543165929698_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=9RQNZHTVbgYAX_KtTsq&_nc_oc=AQlFhD51JwrAyhCiW_jrJGdN4eLFvkamKmzKCjijlDpbJkek_lH1p6R2pxdU5cRqKJ66LaB9vlsK_9XKAwLJtmFy&_nc_ht=scontent.fmzt1-1.fna&oh=1394f4513af429b0eada58d7927e389b&oe=6077C8CD",
                title: 'Image',
                author: 'author',
            },
            {
                img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/155047760_923416988426259_2298949233322337404_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=b5808y3YXKYAX8LCc8q&_nc_ht=scontent.fmzt1-1.fna&oh=67200898bfa4f460f87792b7a80b34d1&oe=6076D4B1",
                title: 'Image',
                author: 'author',
            },
            {
                img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149095827_914332799334678_5209841410533221808_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=ipGegG7jZtIAX-e7T7h&_nc_ht=scontent.fmzt1-1.fna&oh=efc8b6b262e6d6d6ad6eb6ebaa2289d7&oe=60772AA3",
                title: 'Image',
                author: 'author',
            },
            {
                img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149013422_914059329362025_8697520016211538928_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=JEU3cf1cg8gAX_rqZf0&_nc_ht=scontent.fmzt1-1.fna&oh=47e3359fb1d24ded61d65ea73782fa5a&oe=60786FA1",
                title: 'Image',
                author: 'author',
            },
            {
                img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149081999_914332902668001_9086611543165929698_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=9RQNZHTVbgYAX_KtTsq&_nc_oc=AQlFhD51JwrAyhCiW_jrJGdN4eLFvkamKmzKCjijlDpbJkek_lH1p6R2pxdU5cRqKJ66LaB9vlsK_9XKAwLJtmFy&_nc_ht=scontent.fmzt1-1.fna&oh=1394f4513af429b0eada58d7927e389b&oe=6077C8CD",
                title: 'Image',
                author: 'author',
            }
        ],
        calidad: "nuevo"
    },
    {
        nombre: "tambo de plastico",
        precio: 350,
        descripcion: "Tambo de plastico reforsado, de 200 Lt color azul y blaco. tenemos precio al malloreo",
        url: "https://logismarketmx.cdnwm.com/ip/grupo-univerplast-mexico-tambor-de-200-litros-abierto-tipo-ipe-tambor-208-litros-cerrado-elanillado-1624696-361x230.jpg",
        carousel: [
            {
                img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/159777547_932005210900770_8979275275435933448_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=fbxhbtN15xQAX9nnFG4&_nc_ht=scontent.fmzt1-1.fna&oh=d99733e6776c856e1de02d987f8951b6&oe=6074F8C2",
                title: 'Image',
                author: 'author',
            },       
            {
                img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149081999_914332902668001_9086611543165929698_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=9RQNZHTVbgYAX_KtTsq&_nc_oc=AQlFhD51JwrAyhCiW_jrJGdN4eLFvkamKmzKCjijlDpbJkek_lH1p6R2pxdU5cRqKJ66LaB9vlsK_9XKAwLJtmFy&_nc_ht=scontent.fmzt1-1.fna&oh=1394f4513af429b0eada58d7927e389b&oe=6077C8CD",
                title: 'Image',
                author: 'author',
            },
            {
                img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/155047760_923416988426259_2298949233322337404_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=b5808y3YXKYAX8LCc8q&_nc_ht=scontent.fmzt1-1.fna&oh=67200898bfa4f460f87792b7a80b34d1&oe=6076D4B1",
                title: 'Image',
                author: 'author',
            },
            {
                img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149095827_914332799334678_5209841410533221808_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=ipGegG7jZtIAX-e7T7h&_nc_ht=scontent.fmzt1-1.fna&oh=efc8b6b262e6d6d6ad6eb6ebaa2289d7&oe=60772AA3",
                title: 'Image',
                author: 'author',
            },
            {
                img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149013422_914059329362025_8697520016211538928_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=JEU3cf1cg8gAX_rqZf0&_nc_ht=scontent.fmzt1-1.fna&oh=47e3359fb1d24ded61d65ea73782fa5a&oe=60786FA1",
                title: 'Image',
                author: 'author',
            },
            {
                img: "https://scontent.fmzt1-1.fna.fbcdn.net/v/t1.0-9/149081999_914332902668001_9086611543165929698_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=9RQNZHTVbgYAX_KtTsq&_nc_oc=AQlFhD51JwrAyhCiW_jrJGdN4eLFvkamKmzKCjijlDpbJkek_lH1p6R2pxdU5cRqKJ66LaB9vlsK_9XKAwLJtmFy&_nc_ht=scontent.fmzt1-1.fna&oh=1394f4513af429b0eada58d7927e389b&oe=6077C8CD",
                title: 'Image',
                author: 'author',
            }
        ],
        calidad: "nuevo"
    },
]

function Articulos() {
    const [personName, setPersonName] = useState([]);
    const theme = useTheme();


    const names = [
        'Envases',
        'Insecticidas',
        'Fertilizantes',
        'Agro Quimicos',
        'Fereteria'

    ]
    const handleChange = (e) => {
        setPersonName(e.target.value)
    }

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

        function getStyles(name, personName, theme) {
            return {
            fontWeight:
                personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
            };
        } 


    return (
        <div className="articulos">
            <div className="articulo_header">
                
                    <FormControl className="select">
                        <Select
                            multiple
                            displayEmpty
                            value={personName}
                            onChange={handleChange}
                            input={<Input />}
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                return <em>Seleccionar Departamentos </em>;
                                }

                                return selected.join(', ');
                            }}
                            MenuProps={MenuProps}
                            inputProps={{ 'aria-label': 'Without label' }}
                            >
                            <MenuItem disabled value="">
                                <em>Seleccionar los Departamentos</em>
                            </MenuItem>
                            {names.map((name, id) => (
                                <MenuItem className="item" key={id}  value={name} style={ getStyles(name, personName, theme)}>
                                {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                
                <div className="buscar">
                    <form action="" noValidate autoComplete="off">

                        <TextField id="outlined-basic" label="Buscar" variant="outlined" />
                    </form>
                </div>
                
            </div>

            <div className="articulo_doby">
                {data.map((art, id) => (
                    <Articulo 
                        art={art}
                        key={id}
                    />
                ))}

            </div>
        </div>
    )
}

export default Articulos
