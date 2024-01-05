"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/map/page",{

/***/ "(app-pages-browser)/./src/app/map/page.jsx":
/*!******************************!*\
  !*** ./src/app/map/page.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-google-maps/api */ \"(app-pages-browser)/./node_modules/@react-google-maps/api/dist/esm.js\");\n// components/GoogleMap.js\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst containerStyle = {\n    width: \"100%\",\n    height: \"400px\"\n};\nconst treasureLocations = [\n    {\n        id: 1,\n        type: \"treasure\",\n        coords: {\n            lat: 52.920724,\n            lng: -1.03536\n        }\n    },\n    {\n        id: 2,\n        type: \"treasure\",\n        coords: {\n            lat: 52.920957,\n            lng: -1.031999\n        }\n    },\n    {\n        id: 3,\n        type: \"treasure\",\n        coords: {\n            lat: 52.920776,\n            lng: -1.033433\n        }\n    },\n    {\n        id: 4,\n        type: \"treasure\",\n        coords: {\n            lat: 52.921444,\n            lng: -1.034414\n        }\n    },\n    {\n        id: 5,\n        type: \"treasure\",\n        coords: {\n            lat: 52.92318,\n            lng: -1.0303\n        }\n    }\n];\nconst GoogleMapComponent = ()=>{\n    _s();\n    // the default location will be the Northcoders base in Manchester\n    const [userLocation, setUserLocation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        lat: 53.47375,\n        lng: -2.24026\n    });\n    const [isInRange, setIsInRange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [collected, setCollected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // if the user scans and they are within the circle, a collect button appears\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (navigator.geolocation) {\n            navigator.geolocation.watchPosition((position)=>{\n                const userLatLng = {\n                    lat: position.coords.latitude,\n                    lng: position.coords.longitude\n                };\n                setUserLocation(userLatLng);\n            });\n        }\n    }, []);\n    console.log(userLocation);\n    const handleScan = ()=>{\n        const distances = treasureLocations.map((treasure1)=>{\n            return window.google.maps.geometry.spherical.computeDistanceBetween(userLocation, {\n                lat: treasure1.lat,\n                lng: treasure1.lng\n            });\n        });\n        console.log(distances);\n        distances.forEach((distance)=>{\n            if (distance <= 20) {\n                setIsInRange(true);\n            } else {\n                setIsInRange(false);\n            }\n        });\n    // (error) => {\n    //   console.error(\"Error getting location\");\n    // };\n    };\n    console.log(isInRange);\n    const handleCollect = ()=>{\n        setCollected(treasure.id);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.LoadScript, {\n        googleMapsApiKey: \"AIzaSyA6QXt8Vbg_VUnXcvmyb5J8OueJNUNAH-g\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\",\n                onClick: handleScan,\n                children: \"Scan!\"\n            }, void 0, false, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"\".concat(isInRange ? \"block\" : \"hidden\", \" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\"),\n                onClick: handleCollect,\n                children: \"Grab Treasure!\"\n            }, void 0, false, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.GoogleMap, {\n                mapContainerStyle: containerStyle,\n                center: userLocation,\n                zoom: 17,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.MarkerClusterer, {\n                        children: (clusterer)=>treasure.map((treasure1, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MarkerF, {\n                                    position: {\n                                        lat: treasure1.cords.lat,\n                                        lng: treasure1.cords.lng\n                                    },\n                                    icon: icons[treasure1.type],\n                                    clusterer: clusterer\n                                }, i, false, {\n                                    fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Marker, {\n                        position: userLocation\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: treasureLocations.map((treasure1)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: collected ? \"hidden\" : \"block\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Marker, {\n                                        position: treasure1\n                                    }, void 0, false, {\n                                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Circle, {\n                                        center: treasure1,\n                                        radius: 20,\n                                        options: {\n                                            strokeColor: \"#FF0000\",\n                                            strokeOpacity: 0.8,\n                                            strokeWeight: 2,\n                                            fillColor: \"#FF0000\",\n                                            fillOpacity: 0.35\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, treasure1.lat, true, {\n                                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                                lineNumber: 110,\n                                columnNumber: 15\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, undefined);\n};\n_s(GoogleMapComponent, \"hQj+Wr0+HTKUm2kM7mhWKpRq5tA=\");\n_c = GoogleMapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoogleMapComponent);\nvar _c;\n$RefreshReg$(_c, \"GoogleMapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbWFwL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMEJBQTBCOzs7QUFFcUQ7QUFDaUI7QUFFaEcsTUFBTVUsaUJBQWlCO0lBQ3JCQyxPQUFPO0lBQ1BDLFFBQVE7QUFDVjtBQUVBLE1BQU1DLG9CQUFvQjtJQUN4QjtRQUFFQyxJQUFJO1FBQUdDLE1BQU07UUFBWUMsUUFBUTtZQUFDQyxLQUFLO1lBQVdDLEtBQUssQ0FBQztRQUFPO0lBQUU7SUFDbkU7UUFBRUosSUFBSTtRQUFHQyxNQUFNO1FBQVlDLFFBQVE7WUFBQ0MsS0FBSztZQUFXQyxLQUFLLENBQUM7UUFBUTtJQUFFO0lBQ3BFO1FBQUVKLElBQUk7UUFBR0MsTUFBTTtRQUFZQyxRQUFRO1lBQUNDLEtBQUs7WUFBV0MsS0FBSyxDQUFDO1FBQVE7SUFBRTtJQUNwRTtRQUFFSixJQUFJO1FBQUdDLE1BQU07UUFBWUMsUUFBUTtZQUFDQyxLQUFLO1lBQVdDLEtBQUssQ0FBQztRQUFRO0lBQUU7SUFDcEU7UUFBRUosSUFBSTtRQUFHQyxNQUFNO1FBQVlDLFFBQVE7WUFBQ0MsS0FBSztZQUFVQyxLQUFLLENBQUM7UUFBTTtJQUFFO0NBQ2xFO0FBRUQsTUFBTUMscUJBQXFCOztJQUN6QixrRUFBa0U7SUFDbEUsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR25CLCtDQUFRQSxDQUFDO1FBQy9DZSxLQUFLO1FBQ0xDLEtBQUssQ0FBQztJQUNSO0lBQ0EsTUFBTSxDQUFDSSxXQUFXQyxhQUFhLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNzQixXQUFXQyxhQUFhLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUUzQyw2RUFBNkU7SUFFN0VFLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSXNCLFVBQVVDLFdBQVcsRUFBRTtZQUN6QkQsVUFBVUMsV0FBVyxDQUFDQyxhQUFhLENBQUMsQ0FBQ0M7Z0JBQ25DLE1BQU1DLGFBQWE7b0JBQ2pCYixLQUFLWSxTQUFTYixNQUFNLENBQUNlLFFBQVE7b0JBQzdCYixLQUFLVyxTQUFTYixNQUFNLENBQUNnQixTQUFTO2dCQUNoQztnQkFDQVgsZ0JBQWdCUztZQUNsQjtRQUNGO0lBQ0YsR0FBRyxFQUFFO0lBRUxHLFFBQVFDLEdBQUcsQ0FBQ2Q7SUFFWixNQUFNZSxhQUFhO1FBQ2pCLE1BQU1DLFlBQVl2QixrQkFBa0J3QixHQUFHLENBQUMsQ0FBQ0M7WUFDdkMsT0FBT0MsT0FBT0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLFFBQVEsQ0FBQ0MsU0FBUyxDQUFDQyxzQkFBc0IsQ0FDakV4QixjQUNBO2dCQUFFSCxLQUFLcUIsVUFBU3JCLEdBQUc7Z0JBQUVDLEtBQUtvQixVQUFTcEIsR0FBRztZQUFDO1FBRTNDO1FBQ0FlLFFBQVFDLEdBQUcsQ0FBQ0U7UUFDWkEsVUFBVVMsT0FBTyxDQUFDLENBQUNDO1lBQ2pCLElBQUlBLFlBQVksSUFBSTtnQkFDbEJ2QixhQUFhO1lBQ2YsT0FBTztnQkFDTEEsYUFBYTtZQUNmO1FBQ0Y7SUFDQSxlQUFlO0lBQ1gsNkNBQTZDO0lBQzdDLEtBQUs7SUFDVDtJQUNBVSxRQUFRQyxHQUFHLENBQUNaO0lBRWQsTUFBTXlCLGdCQUFnQjtRQUNwQnRCLGFBQWFhLFNBQVN4QixFQUFFO0lBQzFCO0lBRUEscUJBQ0UsOERBQUNSLDhEQUFVQTtRQUFDMEMsa0JBQWtCQyx5Q0FBMkM7OzBCQUN2RSw4REFBQ0c7Z0JBQ0NDLFdBQVU7Z0JBQ1ZDLFNBQVNuQjswQkFDVjs7Ozs7OzBCQUdELDhEQUFDaUI7Z0JBQ0NDLFdBQVcsR0FFVixPQURDL0IsWUFBWSxVQUFVLFVBQ3ZCO2dCQUNEZ0MsU0FBU1A7MEJBQ1Y7Ozs7OzswQkFHRCw4REFBQzFDLDZEQUFTQTtnQkFDUmtELG1CQUFtQjdDO2dCQUNuQjhDLFFBQVFwQztnQkFDUnFDLE1BQU07O2tDQUVOLDhEQUFDakQsbUVBQWVBO2tDQUNiLENBQUNrRCxZQUNBcEIsU0FBU0QsR0FBRyxDQUFDLENBQUNDLFdBQVVxQixrQkFDdEIsOERBQUNDO29DQUVDL0IsVUFBVTt3Q0FDUlosS0FBS3FCLFVBQVN1QixLQUFLLENBQUM1QyxHQUFHO3dDQUN2QkMsS0FBS29CLFVBQVN1QixLQUFLLENBQUMzQyxHQUFHO29DQUN6QjtvQ0FDQTRDLE1BQU1DLEtBQUssQ0FBQ3pCLFVBQVN2QixJQUFJLENBQUM7b0NBQzFCMkMsV0FBV0E7bUNBTk5DOzs7Ozs7Ozs7O2tDQVliLDhEQUFDcEQsMERBQU1BO3dCQUFDc0IsVUFBVVQ7Ozs7OztrQ0FDbEIsOERBQUM0QztrQ0FDRW5ELGtCQUFrQndCLEdBQUcsQ0FBQyxDQUFDQzs0QkFDdEIscUJBQ0UsOERBQUMyQjtnQ0FBc0JaLFdBQVc3QixZQUFZLFdBQVc7O2tEQUN2RCw4REFBQ2pCLDBEQUFNQTt3Q0FBQ3NCLFVBQVVTOzs7Ozs7a0RBQ2xCLDhEQUFDN0IsMERBQU1BO3dDQUNMK0MsUUFBUWxCO3dDQUNSNEIsUUFBUTt3Q0FDUkMsU0FBUzs0Q0FDUEMsYUFBYTs0Q0FDYkMsZUFBZTs0Q0FDZkMsY0FBYzs0Q0FDZEMsV0FBVzs0Q0FDWEMsYUFBYTt3Q0FFZjs7Ozs7OzsrQkFaS2xDLFVBQVNyQixHQUFHOzs7Ozt3QkFnQnpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVjtHQWhITUU7S0FBQUE7QUFrSE4sK0RBQWVBLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL21hcC9wYWdlLmpzeD8xNDBhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvR29vZ2xlTWFwLmpzXG5cInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR29vZ2xlTWFwLCBMb2FkU2NyaXB0LCBNYXJrZXIsIE1hcmtlckNsdXN0ZXJlciwgQ2lyY2xlIH0gZnJvbSBcIkByZWFjdC1nb29nbGUtbWFwcy9hcGlcIjtcblxuY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgaGVpZ2h0OiBcIjQwMHB4XCIsXG59O1xuXG5jb25zdCB0cmVhc3VyZUxvY2F0aW9ucyA9IFtcbiAgeyBpZDogMSwgdHlwZTogJ3RyZWFzdXJlJywgY29vcmRzOiB7bGF0OiA1Mi45MjA3MjQsIGxuZzogLTEuMDM1MzZ9IH0sXG4gIHsgaWQ6IDIsIHR5cGU6ICd0cmVhc3VyZScsIGNvb3Jkczoge2xhdDogNTIuOTIwOTU3LCBsbmc6IC0xLjAzMTk5OX0gfSxcbiAgeyBpZDogMywgdHlwZTogJ3RyZWFzdXJlJywgY29vcmRzOiB7bGF0OiA1Mi45MjA3NzYsIGxuZzogLTEuMDMzNDMzfSB9LFxuICB7IGlkOiA0LCB0eXBlOiAndHJlYXN1cmUnLCBjb29yZHM6IHtsYXQ6IDUyLjkyMTQ0NCwgbG5nOiAtMS4wMzQ0MTR9IH0sXG4gIHsgaWQ6IDUsIHR5cGU6ICd0cmVhc3VyZScsIGNvb3Jkczoge2xhdDogNTIuOTIzMTgsIGxuZzogLTEuMDMwM30gfVxuXTtcblxuY29uc3QgR29vZ2xlTWFwQ29tcG9uZW50ID0gKCkgPT4ge1xuICAvLyB0aGUgZGVmYXVsdCBsb2NhdGlvbiB3aWxsIGJlIHRoZSBOb3J0aGNvZGVycyBiYXNlIGluIE1hbmNoZXN0ZXJcbiAgY29uc3QgW3VzZXJMb2NhdGlvbiwgc2V0VXNlckxvY2F0aW9uXSA9IHVzZVN0YXRlKHtcbiAgICBsYXQ6IDUzLjQ3Mzc1LFxuICAgIGxuZzogLTIuMjQwMjYsXG4gIH0pO1xuICBjb25zdCBbaXNJblJhbmdlLCBzZXRJc0luUmFuZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29sbGVjdGVkLCBzZXRDb2xsZWN0ZWRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgLy8gaWYgdGhlIHVzZXIgc2NhbnMgYW5kIHRoZXkgYXJlIHdpdGhpbiB0aGUgY2lyY2xlLCBhIGNvbGxlY3QgYnV0dG9uIGFwcGVhcnNcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKChwb3NpdGlvbikgPT4ge1xuICAgICAgICBjb25zdCB1c2VyTGF0TG5nID0ge1xuICAgICAgICAgIGxhdDogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxuICAgICAgICAgIGxuZzogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSxcbiAgICAgICAgfTtcbiAgICAgICAgc2V0VXNlckxvY2F0aW9uKHVzZXJMYXRMbmcpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc29sZS5sb2codXNlckxvY2F0aW9uKVxuXG4gIGNvbnN0IGhhbmRsZVNjYW4gPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzdGFuY2VzID0gdHJlYXN1cmVMb2NhdGlvbnMubWFwKCh0cmVhc3VyZSkgPT4ge1xuICAgICAgcmV0dXJuIHdpbmRvdy5nb29nbGUubWFwcy5nZW9tZXRyeS5zcGhlcmljYWwuY29tcHV0ZURpc3RhbmNlQmV0d2VlbihcbiAgICAgICAgdXNlckxvY2F0aW9uLFxuICAgICAgICB7IGxhdDogdHJlYXN1cmUubGF0LCBsbmc6IHRyZWFzdXJlLmxuZyB9XG4gICAgICApO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGRpc3RhbmNlcyk7XG4gICAgZGlzdGFuY2VzLmZvckVhY2goKGRpc3RhbmNlKSA9PiB7XG4gICAgICBpZiAoZGlzdGFuY2UgPD0gMjApIHtcbiAgICAgICAgc2V0SXNJblJhbmdlKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0SXNJblJhbmdlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyAoZXJyb3IpID0+IHtcbiAgICAgICAgLy8gICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBsb2NhdGlvblwiKTtcbiAgICAgICAgLy8gfTtcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKGlzSW5SYW5nZSk7XG5cbiAgY29uc3QgaGFuZGxlQ29sbGVjdCA9ICgpID0+IHtcbiAgICBzZXRDb2xsZWN0ZWQodHJlYXN1cmUuaWQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExvYWRTY3JpcHQgZ29vZ2xlTWFwc0FwaUtleT17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX01BUFNfQVBJX0tFWX0+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT0nYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbCdcbiAgICAgICAgb25DbGljaz17aGFuZGxlU2Nhbn1cbiAgICAgID5cbiAgICAgICAgU2NhbiFcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgIGlzSW5SYW5nZSA/IFwiYmxvY2tcIiA6IFwiaGlkZGVuXCJcbiAgICAgICAgfSBiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsYH1cbiAgICAgICAgb25DbGljaz17aGFuZGxlQ29sbGVjdH1cbiAgICAgID5cbiAgICAgICAgR3JhYiBUcmVhc3VyZSFcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPEdvb2dsZU1hcFxuICAgICAgICBtYXBDb250YWluZXJTdHlsZT17Y29udGFpbmVyU3R5bGV9XG4gICAgICAgIGNlbnRlcj17dXNlckxvY2F0aW9ufVxuICAgICAgICB6b29tPXsxN31cbiAgICAgID5cbiAgICAgICAgPE1hcmtlckNsdXN0ZXJlcj5cbiAgICAgICAgICB7KGNsdXN0ZXJlcikgPT5cbiAgICAgICAgICAgIHRyZWFzdXJlLm1hcCgodHJlYXN1cmUsIGkpID0+IChcbiAgICAgICAgICAgICAgPE1hcmtlckZcbiAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgcG9zaXRpb249e3tcbiAgICAgICAgICAgICAgICAgIGxhdDogdHJlYXN1cmUuY29yZHMubGF0LFxuICAgICAgICAgICAgICAgICAgbG5nOiB0cmVhc3VyZS5jb3Jkcy5sbmcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBpY29uPXtpY29uc1t0cmVhc3VyZS50eXBlXX1cbiAgICAgICAgICAgICAgICBjbHVzdGVyZXI9e2NsdXN0ZXJlcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICA8L01hcmtlckNsdXN0ZXJlcj5cblxuICAgICAgICA8TWFya2VyIHBvc2l0aW9uPXt1c2VyTG9jYXRpb259IC8+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7dHJlYXN1cmVMb2NhdGlvbnMubWFwKCh0cmVhc3VyZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpIGtleT17dHJlYXN1cmUubGF0fSBjbGFzc05hbWU9e2NvbGxlY3RlZCA/IFwiaGlkZGVuXCIgOiBcImJsb2NrXCJ9PlxuICAgICAgICAgICAgICAgIDxNYXJrZXIgcG9zaXRpb249e3RyZWFzdXJlfSAvPlxuICAgICAgICAgICAgICAgIDxDaXJjbGVcbiAgICAgICAgICAgICAgICAgIGNlbnRlcj17dHJlYXN1cmV9XG4gICAgICAgICAgICAgICAgICByYWRpdXM9ezIwfVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogXCIjRkYwMDAwXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk6IDAuOCxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2VpZ2h0OiAyLFxuICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I6IFwiI0ZGMDAwMFwiLFxuICAgICAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eTogMC4zNSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L0dvb2dsZU1hcD5cbiAgICA8L0xvYWRTY3JpcHQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHb29nbGVNYXBDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsIkdvb2dsZU1hcCIsIkxvYWRTY3JpcHQiLCJNYXJrZXIiLCJNYXJrZXJDbHVzdGVyZXIiLCJDaXJjbGUiLCJjb250YWluZXJTdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwidHJlYXN1cmVMb2NhdGlvbnMiLCJpZCIsInR5cGUiLCJjb29yZHMiLCJsYXQiLCJsbmciLCJHb29nbGVNYXBDb21wb25lbnQiLCJ1c2VyTG9jYXRpb24iLCJzZXRVc2VyTG9jYXRpb24iLCJpc0luUmFuZ2UiLCJzZXRJc0luUmFuZ2UiLCJjb2xsZWN0ZWQiLCJzZXRDb2xsZWN0ZWQiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsIndhdGNoUG9zaXRpb24iLCJwb3NpdGlvbiIsInVzZXJMYXRMbmciLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTY2FuIiwiZGlzdGFuY2VzIiwibWFwIiwidHJlYXN1cmUiLCJ3aW5kb3ciLCJnb29nbGUiLCJtYXBzIiwiZ2VvbWV0cnkiLCJzcGhlcmljYWwiLCJjb21wdXRlRGlzdGFuY2VCZXR3ZWVuIiwiZm9yRWFjaCIsImRpc3RhbmNlIiwiaGFuZGxlQ29sbGVjdCIsImdvb2dsZU1hcHNBcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR09PR0xFX01BUFNfQVBJX0tFWSIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJtYXBDb250YWluZXJTdHlsZSIsImNlbnRlciIsInpvb20iLCJjbHVzdGVyZXIiLCJpIiwiTWFya2VyRiIsImNvcmRzIiwiaWNvbiIsImljb25zIiwidWwiLCJsaSIsInJhZGl1cyIsIm9wdGlvbnMiLCJzdHJva2VDb2xvciIsInN0cm9rZU9wYWNpdHkiLCJzdHJva2VXZWlnaHQiLCJmaWxsQ29sb3IiLCJmaWxsT3BhY2l0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/map/page.jsx\n"));

/***/ })

});