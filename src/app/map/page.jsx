// "use client";

// import {
//   GoogleMap,
//   useJsApiLoader,
//   MarkerF,
//   MarkerClusterer,
// } from "@react-google-maps/api";
// import { useEffect, useState } from "react";
// import CollectTreasure from "./CollectTreasure";

// const containerStyle = {
//   width: "100%",
//   height: "90vh",
// };

// const treasures = [
//   { type: "treasure", name: "Big Ban", coords: { lat: 51.5007, lng: -0.1246 } },
//   { type: "treasure", name: "Big Ban2", coords: { lat: 51.5017, lng: -0.1246 } },
//   {
//     type: "treasure",
//     name: "Stonehenge",
//     coords: { lat: 51.1789, lng: -1.8262 },
//   },
//   { type: "treasure", name: "closest", coords: { lat: 52.25, lng: 0.1095 } },
//   {
//     type: "treasure",
//     name: "Edinburgh Castle",
//     coords: { lat: 55.9486, lng: -3.1999 },
//   },
// ];

// const icons = {
//   treasure: {
//     url: "/treasure.png",
//     scaledSize: { width: 50, height: 50 },
//   },
//   user: { url: "/user.png", scaledSize: { width: 50, height: 50 } },
// };

// function TreasureMap() {
//   const [currentLocation, setCurrentLocation] = useState({
//     type: "user",
//     name: "person",
//     coords: { lat: 0, lng: 0 },
//   });

//   const [points, setPoints] = useState(treasures);
//   const [isLoadedMap, setIsLoadedMap] = useState(false);
//   const options = { mapId: "b6a1e26ca756909b", mapTypeControl: false };

//   const [destination, setDestination] = useState([]);
//   const [minDistance, setMinDistance] = useState({});
//   const [collect, setCollect] = useState(false);

//   useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//   });

//   useEffect(() => {
//     function coordsDetecting(respond) {
//       let lng = respond.coords.longitude;
//       let lat = respond.coords.latitude;
//       setCurrentLocation((curr) => {
//         curr.coords.lat = lat;
//         curr.coords.lng = lng;
//         return curr;
//       });

//       setIsLoadedMap(true);
//     }

//     navigator.geolocation.getCurrentPosition(coordsDetecting);
//   }, []);

//   useEffect(() => {
//     const destinationArray = [];
//     points.map((point) => {
//       destinationArray.push(`${point.coords.lat}, ${point.coords.lng}`);
//     });
//     setDestination(destinationArray);
//   }, []);

//   const calculateDistances = () => {
//     if (currentLocation && points.length > 0) {
//       const service = new google.maps.DistanceMatrixService();
//       const origins = [
//         `${currentLocation.coords.lat}, ${currentLocation.coords.lng}`,
//       ];

//       service.getDistanceMatrix(
//         {
//           origins: origins,
//           destinations: destination,
//           travelMode: "WALKING",
//         },
//         (response, status) => {
//           if (status === "OK") {
//             let placeId = 0;
//             let min = response.rows[0].elements[placeId].distance.value;

//             response.rows[0].elements.map((element, i) => {
//               if (min > element.distance.value) {
//                 min = element.distance.value;
//                 placeId = i;
//               }
//             });
//             setMinDistance({ distance: min, place: points[placeId] });
//           } else {
//             console.error("Error calculating distances:", status);
//           }
//         }
//       );
//     }
//   };

//   useEffect(() => {
//     if (minDistance.distance < 100) {
//       setCollect(true);
//     }
//   }, [minDistance]);

//   const checkDistance = () => {
//     calculateDistances();
//   };

//   return isLoadedMap ? (
//     <>
//       <section className="userInteraction">
//         <div onClick={checkDistance} className="find button">
//           Find your Nearest Treasure
//         </div>
//         {collect ? <CollectTreasure treasure={minDistance.place} /> : ""}
//       </section>

//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={currentLocation.coords}
//         zoom={8}
//         options={options}
//       >
//         <MarkerClusterer>
//           {(clusterer) =>
//             points.map((treasure, i) => (
//               <MarkerF
//                 key={i}
//                 position={{
//                   lat: treasure.coords.lat,
//                   lng: treasure.coords.lng,
//                 }}
//                 icon={icons[treasure.type]}
//                 clusterer={clusterer}
//               />
//             ))
//           }
//         </MarkerClusterer>

//         <MarkerF
//           position={{
//             lat: currentLocation.coords.lat,
//             lng: currentLocation.coords.lng,
//           }}
//           icon={icons[currentLocation.type]}
//           label={"Its U!"}
//         />
//       </GoogleMap>
//     </>
//   ) : (
//     <><h1>Loading, please wait...</h1></>
//   );
// }

// export default TreasureMap;

"use client";
import React, { useState, useEffect, useRef } from "react";
import { Circle, GoogleMap, LoadScript, Marker, useJsApiLoader } from "@react-google-maps/api";
import { MarkerClusterer } from "@react-google-maps/api";
import api from "@/utils/api";
import { Inconsolata } from "next/font/google";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const options = {
  streetViewControl: false,
  // draggable: 
};

const GoogleMapComponent = () => {
  // the default location will be the Northcoders base in Manchester
  const [userLocation, setUserLocation] = useState({
    lat: 53.47375,
    lng: -2.24026,
  });
  const [isInRange, setIsInRange] = useState(false);
  const [collected, setCollected] = useState(null);
  const [treasureLocations, setTreasureLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [watchingPosition, setWatchingPosition] = useState(true);
  const [mapZoom, setMapZoom] = useState(15);
  const [firstLoad, setFirstLoad] = useState(true)
  const [theMap, setTheMap] = useState(null)

  // if the user scans and they are within the circle, a collect button appears

  const icons = {
    treasure: {
      url: "/treasure.png",
      scaledSize: { width: 50, height: 50 },
    },
    user: { url: "/user.png", scaledSize: { width: 50, height: 50 } },
    cluster: { url: "/magikarp.png", scaledSize: { width: 50, height: 50 } }
  };

  const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      });

  useEffect(() => {
    if (watchingPosition) {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition((position) => {
          const userLatLng = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(userLatLng);
        });
        if (firstLoad === false){
          theMap.setOptions({
            draggable: false
          })
        }
      }
    } else {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const userLatLng = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(userLatLng);
        });
        if (firstLoad === false){
          theMap.setOptions({
            draggable: true
          })
        }
      }
    }
  }, [watchingPosition]);

  useEffect(() => {
    api
      .getAllTreasures()
      .then((data) => {
        setTreasureLocations(data);
      })
      .catch((error) => {
        console.error("Error fetching treasures:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleScan = async () => {
    try {
      const distancesMatrix =
        await new window.google.maps.DistanceMatrixService().getDistanceMatrix({
          origins: [
            new window.google.maps.LatLng(userLocation.lat, userLocation.lng),
          ],
          destinations: treasureLocations.map(
            (treasure) =>{
            return new window.google.maps.LatLng(treasure.lat, treasure.lng)
            }
          ),
          travelMode: "WALKING",
        });

      distancesMatrix.rows[0].elements.map(
        (element, i) => {
          console.log(element)
          treasureLocations[i].distances = element.distance.value
          if (element.distance.value <= 600) {
            setIsInRange(true)
            treasureLocations[i].inRange = true
          }
        }
        );
        console.log(treasureLocations)

    } catch (error) {
      console.error("Error calculating distances:", error);
    }
  };

  const handleCollect = (id) => {
    console.log("treasure id", id)
  };

  const handleToggleWatchPosition = () => {
    setWatchingPosition((prevWatching) => !prevWatching);
  };

  const mapRef = useRef('map')

  const handleZoomChanged = () => {
    if (firstLoad === false) {
      setMapZoom(theMap.zoom)
      console.log(theMap.zoom);
    } else {
      setFirstLoad(false)
    }
  };

  return isLoaded ? (
    <>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
        onClick={handleScan}
      >
        Scan for Treasures!
      </button>
      <button
        className={`${
          isInRange ? "block" : "hidden"
        } bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full`}
        onClick={handleCollect}
      >
        Collect Treasure!
      </button>
      <button
        className={`bg-${watchingPosition ? "red" : "green"}-500 hover:bg-${
          watchingPosition ? "red" : "green"
        }-700 text-white font-bold py-2 px-4 rounded-full`}
        onClick={handleToggleWatchPosition}
      >
        {watchingPosition
          ? "Stop Watching Position"
          : "Start Watching Position"}
      </button>
      {isLoading && <p>Loading treasures...</p>}
      <GoogleMap
        ref={mapRef}
        mapContainerStyle={containerStyle}
        center={watchingPosition ? userLocation : null}
        zoom={mapZoom}
        options={options}
        onZoomChanged={handleZoomChanged}
        onLoad={(map)=>{
          setTheMap(map)
        }}
        onUnmount={()=>{
          window.google.maps.event.clearInstanceListeners(theMap)
          setTheMap(null)
          console.log("unmounting")
        }}
      >
        <Marker position={userLocation} icon={icons.user}/>
        <MarkerClusterer gridSize={300}>
          {(clusterer) =>
            treasureLocations.map((treasure) => {
              console.log("treasure", treasure)
              if (mapZoom >= 16 && !treasure.inRange) {
                //zoomed in and not scanned; should be circle
                return <Circle
                  key={"circle"+treasure.id}
                  center={treasure}
                  radius={20}
                  options={{
                    strokeColor: "#FF0000",
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: "#FF0000",
                    fillOpacity: 0.35,
                  }}
                />
              } else if (mapZoom >= 16 && treasure.inRange) {
                //zoomed in and scanned; should be marker
                return <Marker
                  key={treasure.id}
                  position={treasure}
                  icon={icons.treasure}
                  clusterer={clusterer}
                  value={treasure.id}
                  onClick={() => {
                    handleCollect(treasure.id)
                  }}
                />
              } else {
                //zoomed out; should be clustered
                return <Marker
                  key={treasure.id}
                  position={treasure}
                  icon={icons.cluster}
                  clusterer={clusterer}
                  value={treasure.id}
                  onClick={handleCollect}
                />
              }
            //   return mapZoom >= 16 && treasure.inRange != true ? (
            //     <Circle
            //       key={"circle"+treasure.id}
            //       center={treasure}
            //       radius={20}
            //       options={{
            //         strokeColor: "#FF0000",
            //         strokeOpacity: 0.8,
            //         strokeWeight: 2,
            //         fillColor: "#FF0000",
            //         fillOpacity: 0.35,
            //       }}
            //     />
            //   ) : (
            //       <Marker
            //         key={treasure.id}
            //         position={treasure}
            //         icon={icons.treasure}
            //         clusterer={clusterer}
            //         value={treasure.id}
            //         onClick={handleCollect}
            //       />
            // )
          }
          )}
        </MarkerClusterer>
      </GoogleMap>
    </>
  ) : <h1>not loaded lmao</h1>
};

export default GoogleMapComponent;
