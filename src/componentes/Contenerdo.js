import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import Inicio from "./Inicio"
import Articulos from "./Articulos"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FacebookIcon from '@material-ui/icons/Facebook';
import {  Route, Link } from "react-router-dom"
import Address from'./Address';
import Admin from './Admin.js'
import "./Contenedor.css"



function Contenerdo() {

    const handleToggle = () => {
        let menu = document.querySelector('#menu')

        menu.classList.toggle(('menu-toggle'))
    } 

    return (
        <div className="root" >
            <div className="container">
                    <nav className="navbar">
                        
                            <img src="https://cdn.pixabay.com/photo/2014/04/02/10/56/recycling-304974_1280.png" alt=""/>

                            <ul className="menu" id ="menu">
                                <li>
                                    <Link to="/">HOME</Link>
                                </li>
                                <li>
                                    <Link to="/Articulos">Articulos</Link>
                                </li>
                                <li>                              
                                    <Link to="/Address">Conosenos</Link>                                
                                </li>
                            </ul>
                        
                        <div className="menu-bar" onClick={handleToggle} id="menu-bar">
                            <MenuIcon fontSize="large" />
                        </div>
                        
                        <div className="shoping">
                            <Link to="/Admin">
                                <AccountCircleIcon color="disabled" fontSize="large"/>
                            </Link>                            
                        </div>

                    </nav>

                <div className="body">
                        <Route exact path="/" component={Inicio}/>
                        <Route exact path="/Articulos" component={Articulos}/>
                        <Route exact path="/Address" component={Address}/>
                        <Route exact path="/Admin" component={Admin}/>
                    
                </div>
                <footer className="footer">
                    <div className="redes">   
                        <p>Conócenos:</p>
                        <a href="https://www.facebook.com/cesar.higuera.7549"><FacebookIcon fontSize="large"/></a>
                    </div>
                    <div className="ubicacion">
                        <p>Nos puedes encontrar en:</p>
                        <h3>Bulevar central frente a monumento a la madre rumbo a tecomate.</h3>
                        <br/>
                        <h3>Carretera Guasave-Leon Fonseca km1 LADRILLERAS DE OCORO</h3>

                    </div>
                    <div className="contacts">
                        <p>Nos puedes contactar por:</p>
                        <h2>Tel:6878703246</h2>

                    </div>

                </footer>
            </div>
        </div>
    )
}

export default Contenerdo
