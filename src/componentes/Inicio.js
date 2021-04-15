import React from 'react'
import Poust from './Poust.js';
import "./Inicio.css"

function Inicio() {
    return (    
        <div className="body">
                <header className="header">
                    <main className="main">
                        <div className="info-content">
                            <h2>Agro Envases</h2>
                            <h3>En tambos y ferretería somos tu mejor opción.</h3>
                            <p>Manejamos todo tipo de bules o envases, además de  fertilizantes, insecticidas, herbicidas, aceite de motor y muchas cosas más. </p>
                        </div>
                    </main>

                </header>
            <div className="poust-container">
                <Poust
                    nombre = "Tambo de plastico"
                    precio= "250"
                    descripcion="Buele de metal, plastico y carton"
                    imgUrl="https://logismarketmx.cdnwm.com/ip/grupo-univerplast-mexico-tambor-de-200-litros-abierto-tipo-ipe-tambor-208-litros-cerrado-elanillado-1624696-361x230.jpg"
                />
                <Poust
                    nombre = "Tambo de plastico"
                    precio= "250"
                    descripcion="Buele de metal, plastico y carton"
                    imgUrl="https://logismarketmx.cdnwm.com/ip/grupo-univerplast-mexico-tambor-de-200-litros-abierto-tipo-ipe-tambor-208-litros-cerrado-elanillado-1624696-361x230.jpg"
                />
            </div>     
        </div>
    )
}

export default Inicio
