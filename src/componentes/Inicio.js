import React, {useState, useEffect} from 'react'
import Poust from './Poust.js';
import "./Inicio.css"
import {fb} from "../firebase.js";
const db = fb.firestore()



function Inicio() {
    const [poust, setPoust] = useState([])
    useEffect(() =>{
        handleGetData()
        console.log(poust);
    },[])

    const handleGetData = async () => {
        db.collection('poust').onSnapshot((querySnapshot)=> {
            const docs = [];
            querySnapshot.forEach(doc => {
                docs.push({...doc.data(), id:doc.id});
            });            
            console.log(docs);
            setPoust(docs);
            
        });
    }
    

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
            {poust.map((post) => (               
            <Poust 
                poust={post}

            />
            ))}

            </div>     
        </div>
    )
}

export default Inicio
