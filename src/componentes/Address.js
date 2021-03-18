import React from 'react'
import MapView from "./MapView.js"
import "./Address.css"
function Address() {
    return (
        <div className="address_container">
            <div className="address_header">
                <div className="header_contents">
                    <h1>Conose nuestros valores.</h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis vero ratione similique recusandae a. Labore dicta accusamus, numquam nisi quos veritatis fugiat harum quaerat reprehenderit, vel id nesciunt explicabo accusantium?</p>
                </div>
            </div>

            <div className="address_body">
                
                        <MapView 
                            cordenadas={{lat: "25.5536249", lng: "-108.4688488"}}
                            ciudad="Guasave"
                            direccion="Bulevar central frente a monumento a la madre rumbo a tecomate."
                            numero="6878703246"
                        />
                        <MapView 
                            cordenadas={{lat: "25.5537434", lng: "-108.4707905"}}
                            ciudad="Guamúchil"
                            direccion="Bulevar central frente a monumento a la madre rumbo a tecomate."
                            numero="6878703246"
                        />                        
                        <MapView 
                            cordenadas={{lat: "25.5962892", lng: "-108.4547624"}}
                            ciudad="Guasave"
                            direccion="Carretera Guasave-Leon Fonseca km1 LADRILLERAS DE OCORO"
                            numero="6878703246"
                        />


            </div>
        </div>
    )
}

export default Address
