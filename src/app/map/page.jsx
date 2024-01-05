"use client";

import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  MarkerClusterer,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";
import CollectTreasure from "./CollectTreasure";

const containerStyle = {
  width: "100%",
  height: "90vh",
};

const treasures = [
  { type: "treasure", name: "Big Ban", cords: { lat: 51.5007, lng: -0.1246 } },
  { type: "treasure", name: "Big Ban2", cords: { lat: 51.5017, lng: -0.1246 } },
  {
    type: "treasure",
    name: "Stonehenge",
    cords: { lat: 51.1789, lng: -1.8262 },
  },
  { type: "treasure", name: "closest", cords: { lat: 52.25, lng: 0.1095 } },
  {
    type: "treasure",
    name: "Edinburgh Castle",
    cords: { lat: 55.9486, lng: -3.1999 },
  },
];

const icons = {
  treasure: {
    url: "/treasure.png",
    scaledSize: { width: 50, height: 50 },
  },
  user: { url: "/user.png", scaledSize: { width: 50, height: 50 } },
};

function MyComponent() {
  const [currentLocation, setCurrentLocation] = useState({
    type: "user",
    name: "person",
    cords: { lat: 0, lng: 0 },
  });

  const [points, setPoints] = useState(treasures);
  const [isLoadedMap, setIsLoadedMap] = useState(false);
  const options = { mapId: "b6a1e26ca756909b", mapTypeControl: false };

  const [destination, setDestination] = useState([]);
  const [minDistance, setMinDistance] = useState({});
  const [collect, setCollect] = useState(false);

  useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    function coordsDetecting(respond) {
      let lng = respond.coords.longitude;
      let lat = respond.coords.latitude;
      setCurrentLocation((curr) => {
        curr.cords.lat = lat;
        curr.cords.lng = lng;
        return curr;
      });

      setIsLoadedMap(true);
    }

    navigator.geolocation.getCurrentPosition(coordsDetecting);
  }, []);

  useEffect(() => {
    const destinationArray = [];
    points.map((point) => {
      destinationArray.push(`${point.cords.lat}, ${point.cords.lng}`);
    });
    setDestination(destinationArray);
  }, []);

  const calculateDistances = () => {
    if (currentLocation && points.length > 0) {
      const service = new google.maps.DistanceMatrixService();
      const origins = [
        `${currentLocation.cords.lat}, ${currentLocation.cords.lng}`,
      ];

      service.getDistanceMatrix(
        {
          origins: origins,
          destinations: destination,
          travelMode: "WALKING",
        },
        (response, status) => {
          if (status === "OK") {
            let placeId = 0;
            let min = response.rows[0].elements[placeId].distance.value;

            response.rows[0].elements.map((element, i) => {
              if (min > element.distance.value) {
                min = element.distance.value;
                placeId = i;
              }
            });
            setMinDistance({ distance: min, place: points[placeId] });
          } else {
            console.error("Error calculating distances:", status);
          }
        }
      );
    }
  };

  useEffect(() => {
    if (minDistance.distance < 100) {
      setCollect(true);
    }
  }, [minDistance]);

  const checkDistance = () => {
    calculateDistances();
  };

  return isLoadedMap ? (
    <>
      <section className="userInteraction">
        <div onClick={checkDistance} className="find button">
          Find Closest Treasure
        </div>
        {collect ? <CollectTreasure treasure={minDistance.place} /> : ""}
      </section>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentLocation.cords}
        zoom={8}
        options={options}
      >
        <MarkerClusterer>
          {(clusterer) =>
            points.map((treasure, i) => (
              <MarkerF
                key={i}
                position={{
                  lat: treasure.cords.lat,
                  lng: treasure.cords.lng,
                }}
                icon={icons[treasure.type]}
                clusterer={clusterer}
              />
            ))
          }
        </MarkerClusterer>

        <MarkerF
          position={{
            lat: currentLocation.cords.lat,
            lng: currentLocation.cords.lng,
          }}
          icon={icons[currentLocation.type]}
          label={"Its U!"}
        />
      </GoogleMap>
    </>
  ) : (
    <><h1>Loading, please wait...</h1></>
  );
}

export default MyComponent;
