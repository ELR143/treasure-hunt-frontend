"use client";


import {
  APIProvider,
  Map,
  AdvancedMarker,useMap,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { MarkerClusterer } from "@googlemaps/markerclusterer";

import { useEffect, useState, useRef } from "react";
import citiesDatas from "../data/cities";

export default function MapElement() {
  const position = { lat: 53.54, lng: 10 };
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh", width: "100%" }}>
        <Map zoom={9} center={position} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
          <AdvancedMarker position={position} onClick={() => setOpen(true)}>
            <Pin
              background={"grey"}
              borderColor={"green"}
              glyphColor={"purple"}
            />
          </AdvancedMarker>
          <Markers points={citiesDatas} />
          {open && (
            <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
              <p>I'm in Hamburg</p>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}



const Markers = ({ points }) => {
    const [openMarkers, setOpenMarkers] = useState({});
    const map = useMap();
    const [markers, setMarkers] = useState({});
  
    const clusterer = useRef(null);
  
    useEffect(() => {
      if (!map) return;
      if (!clusterer.current) {
        clusterer.current = new MarkerClusterer({ map });
      }
    }, [map]);
  
    useEffect(() => {
      clusterer.current?.clearMarkers();
      clusterer.current?.addMarkers(Object.values(markers));
    }, [markers]);
  
    const setMarkerRef = (marker, key) => {
      if (marker && markers[key]) return;
      if (!marker && !markers[key]) return;
  
      setMarkers((prev) => {
        if (marker) {
          return { ...prev, [key]: marker };
        } else {
          const newMarkers = { ...prev };
          delete newMarkers[key];
          return newMarkers;
        }
      });
    };
  
    const handleClick = (pointKey) => {
      setOpenMarkers((prev) => {
        const isOpen = prev[pointKey] || false;
        return { ...prev, [pointKey]: !isOpen };
      });
    };
  
    return (
      <>
        {points.map((point) => (
          <AdvancedMarker
            position={point}
            key={point.key}
            ref={(marker) => setMarkerRef(marker, point.key)}
            onClick={() => handleClick(point.key)}
          >
            <span style={{ fontSize: "2rem" }}>📜</span>
            {openMarkers[point.key] && (
              <InfoWindow position={point} onCloseClick={() => handleClick(point.key)}>
                <p className="text-orange-400">{point.name}</p>
              </InfoWindow>
            )}
          </AdvancedMarker>
        ))}
      </>
    );
  };