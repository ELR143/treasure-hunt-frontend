"use client"
import React, { useState, useEffect, useRef } from "react"
import {
    Circle,
    GoogleMap,
    LoadScript,
    Marker,
    useJsApiLoader,
} from "@react-google-maps/api"
import { MarkerClusterer } from "@react-google-maps/api"
import api from "@/utils/api"
import { Inconsolata } from "next/font/google"
import { amp } from "../../../next.config"
import Link from "next/link"
import { useRouter } from "next/navigation"

const GoogleMapComponent = () => {
    // the default location will be the Northcoders base in Manchester
    const [userLocation, setUserLocation] = useState({
        lat: 53.47221,
        lng: -2.23861,
    })
    const [isInRange, setIsInRange] = useState(false)
    const [treasureLocations, setTreasureLocations] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [watchingPosition, setWatchingPosition] = useState(true)
    const [mapZoom, setMapZoom] = useState(15)
    const [firstLoad, setFirstLoad] = useState(true)
    const [theMap, setTheMap] = useState(null)
    const [watchPstButtonClr, setWatchPstButtonClr] = useState("red")
    const [minClusSize, setMinClusSize] = useState(1)
    const router = useRouter()
    const range = 25

    // if the user scans and they are within the circle, a collect button appears

    const icons = {
        treasure: {
            url: "/chest-find.gif",
            scaledSize: { width: 100, height: 100 },
        },
        user: { url: "/user.png", scaledSize: { width: 50, height: 50 } },
        cluster: {
            url: "/magikarp.png",
            scaledSize: { width: 50, height: 50 },
        },
        circle: {
            url: "/circle.png",
            scaledSize: {
                width: 2.1 ** mapZoom / 1275,
                height: 2.08 ** mapZoom / 1275,
            },
        },
    }

    const containerStyle = {
        width: "100%",
        height: "80vh",
        margin: "2px",
        borderRadius: "8px",
        paddingTop: "100px",
    }

    const options = {
        disableDefaultUI: true,
        styles: [
            { stylers: [{ visibility: "off" }] },
            {
                featureType: "road",
                stylers: [{ visibility: "on" }, { color: "#d39246" }],
            },
            {
                featureType: "road.arterial",
                stylers: [{ visibility: "on" }, { color: "#d39246" }],
            },
            {
                featureType: "road.highway",
                stylers: [{ visibility: "on" }, { color: "#d39246" }],
            },
            {
                featureType: "landscape",
                stylers: [{ visibility: "on" }, { color: "#EDC182" }],
            },
            {
                featureType: "water",
                stylers: [{ visibility: "on" }, { color: "#c29156" }],
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ visibility: "on" }, { color: "#696969" }],
            },
            {
                featureType: "poi.park",
                elementType: "geometry.fill",
                stylers: [{ visibility: "on" }, { color: "#c68355" }],
            },
        ],
    }

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    })

    useEffect(() => {
        if (watchingPosition) {
            setWatchPstButtonClr("red")
            if (navigator.geolocation) {
                navigator.geolocation.watchPosition((position) => {
                    const userLatLng = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    }
                    setUserLocation(userLatLng)
                })
                if (firstLoad === false) {
                    theMap.setOptions({
                        draggable: false,
                    })
                }
            }
        } else {
            setWatchPstButtonClr("green")
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const userLatLng = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    }
                    setUserLocation(userLatLng)
                })
                if (firstLoad === false) {
                    theMap.setOptions({
                        draggable: true,
                    })
                }
            }
        }
    }, [watchingPosition])

    useEffect(() => {
        api.getAllTreasures()
            .then((data) => {
                setTreasureLocations(data)
            })
            .catch((error) => {
                console.error("Error fetching treasures:", error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    const handleScan = async () => {
        try {
            const distancesMatrix =
                await new window.google.maps.DistanceMatrixService().getDistanceMatrix(
                    {
                        origins: [
                            new window.google.maps.LatLng(
                                userLocation.lat,
                                userLocation.lng
                            ),
                        ],
                        destinations: treasureLocations.map((treasure) => {
                            return new window.google.maps.LatLng(
                                treasure.lat,
                                treasure.lng
                            )
                        }),
                        travelMode: "WALKING",
                    }
                )

            distancesMatrix.rows[0].elements.map((element, i) => {
                treasureLocations[i].distances = element.distance.value
                if (element.distance.value <= range) {
                    setIsInRange(true)
                    treasureLocations[i].inRange = true
                }
            })
        } catch (error) {
            console.error("Error calculating distances:", error)
        }
    }

    const handleCollect = (id) => {
        router.push(`/treasure/${id}`)
    }

    const handleToggleWatchPosition = () => {
        setWatchingPosition((prevWatching) => !prevWatching)
    }

    const mapRef = useRef("map")

    const handleZoomChanged = () => {
        if (firstLoad === false) {
            setMapZoom(theMap.zoom)
            if (theMap.zoom >= 16) {
              setMinClusSize(2)
            } else if (theMap.zoom < 16) {
              setMinClusSize(1)
            }
            console.log(theMap.zoom)
        } else {
            setFirstLoad(false)
        }
    }

    return isLoaded ? (
        <>
            {isLoading && <p>Loading treasures...</p>}
            <GoogleMap
                ref={mapRef}
                mapContainerStyle={containerStyle}
                center={watchingPosition ? userLocation : null}
                zoom={mapZoom}
                options={options}
                onZoomChanged={handleZoomChanged}
                onLoad={(map) => {
                    setTheMap(map)
                }}
                onUnmount={() => {
                    window.google.maps.event.clearInstanceListeners(theMap)
                    setTheMap(null)
                }}
            >
                <Marker position={userLocation} icon={icons.user} />
                <Circle center={userLocation} radius={range} />
                <MarkerClusterer
                    gridSize={200}
                    averageCenter={true}
                    minimumClusterSize={minClusSize}
                >
                    {(clusterer) =>
                        treasureLocations.map((treasure) => {
                            if (mapZoom >= 16 && !treasure.inRange) {
                                //zoomed in and not scanned; should be circle
                                return (
                                    <Marker
                                        key={"circle" + treasure.id}
                                        position={{
                                            lat: treasure.lat - 0.0004,
                                            lng: treasure.lng,
                                        }}
                                        icon={icons.circle}
                                        options={{
                                            opacity: 0.5,
                                        }}
                                    />
                                )
                            } else if (mapZoom >= 16 && treasure.inRange) {
                                //zoomed in and scanned; should be marker
                                return (
                                    <Marker
                                        key={treasure.id}
                                        position={treasure}
                                        icon={icons.treasure}
                                        clusterer={clusterer}
                                        value={treasure.id}
                                        onClick={() => {
                                            handleCollect(treasure.id)
                                        }}
                                        options={{ animation: "bounce" }}
                                    />
                                )
                            } else {
                                //zoomed out; should be clustered
                                return (
                                    <Marker
                                        key={treasure.id}
                                        position={treasure}
                                        icon={icons.cluster}
                                        clusterer={clusterer}
                                    />
                                )
                            }
                        })
                    }
                </MarkerClusterer>
            </GoogleMap>
            <section className="flex flex-row">
                <button
                    className={`bg-${
                        watchingPosition ? "red" : "blue"
                    }-500 hover:bg-${
                        watchingPosition ? "red" : "blue"
                    }-700 text-white font-bold py-2 px-4 rounded-full mx-auto `}
                    onClick={handleToggleWatchPosition}
                >
                    {watchingPosition
                        ? "Stop Watching Position"
                        : "Start Watching Position"}
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-auto "
                    onClick={handleScan}
                >
                    Scan for Treasures!
                </button>
            </section>
        </>
    ) : (
        <h1>Map Loading...</h1>
    )
}

export default GoogleMapComponent
