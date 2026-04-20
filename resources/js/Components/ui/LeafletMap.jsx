import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Create a custom Tailwind-styled marker using divIcon to avoid default image asset issues
const createCustomIcon = (isActive) => {
    return L.divIcon({
        className: 'custom-map-marker',
        html: `<div class="relative w-4 h-4">
                 <div class="absolute inset-0 bg-edufa-blue rounded-full ${isActive ? 'scale-150 animate-pulse bg-edufa-yellow' : ''}"></div>
                 <div class="absolute inset-0 ring-4 ring-white shadow-md rounded-full"></div>
               </div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
    });
};

function MapUpdater({ branches, selectedCity }) {
    const map = useMap();
    
    useEffect(() => {
        if (selectedCity && branches.length > 0) {
            const branch = branches.find(b => b.city.toLowerCase() === selectedCity.toLowerCase());
            if (branch && (branch.latitude || branch.lat) && (branch.longitude || branch.lng)) {
                map.flyTo([branch.latitude || branch.lat, branch.longitude || branch.lng], 10, {
                    duration: 1.5
                });
            }
        }
    }, [selectedCity, map, branches]);

    return null;
}

export function LeafletMap({ branches, selectedCity, onSelectCity }) {
  
    const defaultCenter = [-0.789, 113.92];

    return (
        <div className="w-full h-full relative z-0">
            <MapContainer 
                center={defaultCenter} 
                zoom={5} 
                scrollWheelZoom={false}
                className="w-full h-full rounded-3xl"
                style={{ background: '#f8fafc' }}
            >
                
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
                />
                
                {branches.filter(b => (b.latitude || b.lat) && (b.longitude || b.lng)).map((branch, idx) => (
                    <Marker 
                        key={idx} 
                        position={[branch.latitude || branch.lat, branch.longitude || branch.lng]}
                        icon={createCustomIcon(selectedCity === branch.city)}
                        eventHandlers={{
                            click: () => onSelectCity(branch.city),
                        }}
                    >
                        <Popup className="rounded-xl overflow-hidden font-sans">
                            <div className="p-1">
                                <h4 className="font-bold text-edufa-blue uppercase mb-1">{branch.city}</h4>
                                <p className="text-sm font-medium text-gray-700 leading-tight">{branch.address}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}

                <MapUpdater branches={branches} selectedCity={selectedCity} />
            </MapContainer>
        </div>
    );
}
