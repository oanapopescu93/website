import React from 'react'

import Leaflet from 'leaflet'
import { Map, TileLayer, Marker, Popup, LayersControl}  from 'react-leaflet'
import icon from '../img/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import {translate} from '../translations/translate'

import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.css'

const { BaseLayer } = LayersControl
let L = Leaflet.noConflict()

function MapSection(props){
    let mapOptions = {
        center: {lat: 44.439663, lng: 26.096306},
        maxZoom: 19,
        minZoom: 3,
        zoom: 10,
        scrollWheelZoom: true,
        className: "contactMap"
    }
    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
        iconSize: [25,40],
        iconAnchor: [25,40],
        popupAnchor: [-22, -40]
    });
    let markerOptions={
        position: [44.4806, 26.1165],
        icon: DefaultIcon,
    }
    let popupOptions={
        className: 'markerTooltipContainer',
    }

	return <div id="contactMap">
        <Map {...mapOptions} style={{height: "100%"}}>
            <LayersControl position="topright">
                <BaseLayer checked name="Default Map">
                    <TileLayer
                        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                </BaseLayer>
                <BaseLayer name="ESRI Streets">
                    <TileLayer
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
                    />
                </BaseLayer>
            </LayersControl>
            <Marker {...markerOptions}>
                <Popup {...popupOptions}><p>{translate({lang: props.lang, info: "Romania, Bucharest"})}</p></Popup>
            </Marker>
        </Map>
    </div>
}

export default MapSection