import React from 'react'
import './MapView.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import RoomIcon from '@material-ui/icons/Room';
import MapIcon from '../documentos/MapIcon.png';
import L from "leaflet"

const markerIcon = new L.Icon({
    iconUrl: MapIcon,
    iconSize: [35, 45],
})
function MapView({cordenadas, ciudad, direccion, numero}) {
    return (
        <div className="directtions">
            <h1>{ciudad}</h1>
            <p>{direccion}</p>            
            <h3>Numero tel: Tel: {numero}</h3>
                <div className="leaflet-container">
                    
                    <MapContainer center={cordenadas} zoom={13}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={cordenadas} icon={markerIcon}>
                            <RoomIcon/>
                            <Popup>
                                Te esperamos. <br /> {direccion}.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
        </div>
    )
}

export default MapView
