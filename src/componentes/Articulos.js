import {React, useState } from 'react'
import {  useTheme } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './Articulo.css'

import Poust from './Poust.js';


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
                            {names.map((name) => (
                                <MenuItem className="item" key={name} value={name} style={ getStyles(name, personName, theme)}>
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
                <Poust/>
                <Poust/>
                <Poust/>
                <Poust/>
                <Poust/>
                <Poust/>
                <Poust/>
                <Poust/>
                <Poust/>
                <Poust/>
                <Poust/>
                <Poust/>
                <Poust/>
                <Poust/>
            </div>
        </div>
    )
}

export default Articulos
