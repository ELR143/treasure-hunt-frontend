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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-google-maps/api */ \"(app-pages-browser)/./node_modules/@react-google-maps/api/dist/esm.js\");\n// components/GoogleMap.js\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst containerStyle = {\n    width: \"100%\",\n    height: \"400px\"\n};\nconst treasureLocations = [\n    {\n        id: 1,\n        lat: 52.920724,\n        lng: -1.03536\n    },\n    {\n        id: 2,\n        lat: 52.920957,\n        lng: -1.031999\n    },\n    {\n        id: 3,\n        lat: 52.920776,\n        lng: -1.033433\n    },\n    {\n        id: 4,\n        lat: 52.921444,\n        lng: -1.034414\n    },\n    {\n        id: 5,\n        lat: 52.92318,\n        lng: -1.0303\n    }\n];\nconst GoogleMapComponent = ()=>{\n    _s();\n    // the default location will be the Northcoders base in Manchester\n    const [userLocation, setUserLocation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        lat: 53.47375,\n        lng: -2.24026\n    });\n    const [isInRange, setIsInRange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [collected, setCollected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // if the user scans and they are within the circle, a collect button appears\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (navigator.geolocation) {\n            navigator.geolocation.watchPosition((position)=>{\n                const userLatLng = {\n                    lat: position.coords.latitude,\n                    lng: position.coords.longitude\n                };\n                setUserLocation(userLatLng);\n            });\n        }\n    }, []);\n    console.log(userLocation);\n    const handleScan = ()=>{\n        const distances = treasureLocations.map((treasure1)=>{\n            return window.google.maps.geometry.spherical.computeDistanceBetween(userLocation, {\n                lat: treasure1.lat,\n                lng: treasure1.lng\n            });\n        });\n        console.log(distances);\n        distances.forEach((distance)=>{\n            if (distance <= 20) {\n                setIsInRange(true);\n            } else {\n                setIsInRange(false);\n            }\n        });\n        console.log(isInRange);\n    // (error) => {\n    //   console.error(\"Error getting location\");\n    // };\n    };\n    const handleCollect = ()=>{\n        setCollected(treasure.id);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.LoadScript, {\n        googleMapsApiKey: \"AIzaSyA6QXt8Vbg_VUnXcvmyb5J8OueJNUNAH-g\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\",\n                onClick: handleScan,\n                children: \"Scan!\"\n            }, void 0, false, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"\".concat(isInRange ? \"block\" : \"hidden\", \" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\"),\n                onClick: handleCollect,\n                children: \"Grab Treasure!\"\n            }, void 0, false, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.GoogleMap, {\n                mapContainerStyle: containerStyle,\n                center: userLocation,\n                zoom: 17,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Marker, {\n                        position: userLocation\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: treasureLocations.map((treasure1)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: collected ? \"hidden\" : \"block\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Marker, {\n                                        position: treasure1\n                                    }, void 0, false, {\n                                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Circle, {\n                                        center: treasure1,\n                                        radius: 20,\n                                        options: {\n                                            strokeColor: \"#FF0000\",\n                                            strokeOpacity: 0.8,\n                                            strokeWeight: 2,\n                                            fillColor: \"#FF0000\",\n                                            fillOpacity: 0.35\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, treasure1.lat, true, {\n                                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                                lineNumber: 94,\n                                columnNumber: 15\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, undefined);\n};\n_s(GoogleMapComponent, \"hQj+Wr0+HTKUm2kM7mhWKpRq5tA=\");\n_c = GoogleMapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoogleMapComponent);\nvar _c;\n$RefreshReg$(_c, \"GoogleMapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbWFwL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMEJBQTBCOzs7QUFFcUQ7QUFDQTtBQUUvRSxNQUFNUyxpQkFBaUI7SUFDckJDLE9BQU87SUFDUEMsUUFBUTtBQUNWO0FBRUEsTUFBTUMsb0JBQW9CO0lBQ3hCO1FBQUVDLElBQUk7UUFBR0MsS0FBSztRQUFXQyxLQUFLLENBQUM7SUFBUTtJQUN2QztRQUFFRixJQUFJO1FBQUdDLEtBQUs7UUFBV0MsS0FBSyxDQUFDO0lBQVM7SUFDeEM7UUFBRUYsSUFBSTtRQUFHQyxLQUFLO1FBQVdDLEtBQUssQ0FBQztJQUFTO0lBQ3hDO1FBQUVGLElBQUk7UUFBR0MsS0FBSztRQUFXQyxLQUFLLENBQUM7SUFBUztJQUN4QztRQUFFRixJQUFJO1FBQUdDLEtBQUs7UUFBVUMsS0FBSyxDQUFDO0lBQU87Q0FDdEM7QUFFRCxNQUFNQyxxQkFBcUI7O0lBQ3pCLGtFQUFrRTtJQUNsRSxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHaEIsK0NBQVFBLENBQUM7UUFDL0NZLEtBQUs7UUFDTEMsS0FBSyxDQUFDO0lBQ1I7SUFDQSxNQUFNLENBQUNJLFdBQVdDLGFBQWEsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ21CLFdBQVdDLGFBQWEsR0FBR3BCLCtDQUFRQSxDQUFDO0lBRTNDLDZFQUE2RTtJQUU3RUUsZ0RBQVNBLENBQUM7UUFDUixJQUFJbUIsVUFBVUMsV0FBVyxFQUFFO1lBQ3pCRCxVQUFVQyxXQUFXLENBQUNDLGFBQWEsQ0FBQyxDQUFDQztnQkFDbkMsTUFBTUMsYUFBYTtvQkFDakJiLEtBQUtZLFNBQVNFLE1BQU0sQ0FBQ0MsUUFBUTtvQkFDN0JkLEtBQUtXLFNBQVNFLE1BQU0sQ0FBQ0UsU0FBUztnQkFDaEM7Z0JBQ0FaLGdCQUFnQlM7WUFDbEI7UUFDRjtJQUNGLEdBQUcsRUFBRTtJQUVMSSxRQUFRQyxHQUFHLENBQUNmO0lBRVosTUFBTWdCLGFBQWE7UUFDakIsTUFBTUMsWUFBWXRCLGtCQUFrQnVCLEdBQUcsQ0FBQyxDQUFDQztZQUN2QyxPQUFPQyxPQUFPQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxTQUFTLENBQUNDLHNCQUFzQixDQUNqRXpCLGNBQ0E7Z0JBQUVILEtBQUtzQixVQUFTdEIsR0FBRztnQkFBRUMsS0FBS3FCLFVBQVNyQixHQUFHO1lBQUM7UUFFM0M7UUFDQWdCLFFBQVFDLEdBQUcsQ0FBQ0U7UUFDWkEsVUFBVVMsT0FBTyxDQUFDLENBQUNDO1lBQ2pCLElBQUlBLFlBQVksSUFBSTtnQkFDbEJ4QixhQUFhO1lBQ2YsT0FBTztnQkFDTEEsYUFBYTtZQUNmO1FBQ0Y7UUFDQVcsUUFBUUMsR0FBRyxDQUFDYjtJQUNaLGVBQWU7SUFDZiw2Q0FBNkM7SUFDN0MsS0FBSztJQUNQO0lBRUEsTUFBTTBCLGdCQUFnQjtRQUNwQnZCLGFBQWFjLFNBQVN2QixFQUFFO0lBQzFCO0lBRUEscUJBQ0UsOERBQUNQLDhEQUFVQTtRQUFDd0Msa0JBQWtCQyx5Q0FBMkM7OzBCQUN2RSw4REFBQ0c7Z0JBQ0NDLFdBQVU7Z0JBQ1ZDLFNBQVNuQjswQkFDVjs7Ozs7OzBCQUdELDhEQUFDaUI7Z0JBQ0NDLFdBQVcsR0FFVixPQURDaEMsWUFBWSxVQUFVLFVBQ3ZCO2dCQUNEaUMsU0FBU1A7MEJBQ1Y7Ozs7OzswQkFHRCw4REFBQ3hDLDZEQUFTQTtnQkFDUmdELG1CQUFtQjVDO2dCQUNuQjZDLFFBQVFyQztnQkFDUnNDLE1BQU07O2tDQUVOLDhEQUFDaEQsMERBQU1BO3dCQUFDbUIsVUFBVVQ7Ozs7OztrQ0FDbEIsOERBQUN1QztrQ0FDRTVDLGtCQUFrQnVCLEdBQUcsQ0FBQyxDQUFDQzs0QkFDdEIscUJBQ0UsOERBQUNxQjtnQ0FBc0JOLFdBQVc5QixZQUFZLFdBQVc7O2tEQUN2RCw4REFBQ2QsMERBQU1BO3dDQUFDbUIsVUFBVVU7Ozs7OztrREFDbEIsOERBQUM1QiwwREFBTUE7d0NBQ0w4QyxRQUFRbEI7d0NBQ1JzQixRQUFRO3dDQUNSQyxTQUFTOzRDQUNQQyxhQUFhOzRDQUNiQyxlQUFlOzRDQUNmQyxjQUFjOzRDQUNkQyxXQUFXOzRDQUNYQyxhQUFhO3dDQUVmOzs7Ozs7OytCQVpLNUIsVUFBU3RCLEdBQUc7Ozs7O3dCQWdCekI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtWO0dBaEdNRTtLQUFBQTtBQWtHTiwrREFBZUEsa0JBQWtCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbWFwL3BhZ2UuanN4PzE0MGEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9Hb29nbGVNYXAuanNcblwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHb29nbGVNYXAsIExvYWRTY3JpcHQsIE1hcmtlciwgQ2lyY2xlIH0gZnJvbSBcIkByZWFjdC1nb29nbGUtbWFwcy9hcGlcIjtcblxuY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgaGVpZ2h0OiBcIjQwMHB4XCIsXG59O1xuXG5jb25zdCB0cmVhc3VyZUxvY2F0aW9ucyA9IFtcbiAgeyBpZDogMSwgbGF0OiA1Mi45MjA3MjQsIGxuZzogLTEuMDM1MzYgfSxcbiAgeyBpZDogMiwgbGF0OiA1Mi45MjA5NTcsIGxuZzogLTEuMDMxOTk5IH0sXG4gIHsgaWQ6IDMsIGxhdDogNTIuOTIwNzc2LCBsbmc6IC0xLjAzMzQzMyB9LFxuICB7IGlkOiA0LCBsYXQ6IDUyLjkyMTQ0NCwgbG5nOiAtMS4wMzQ0MTQgfSxcbiAgeyBpZDogNSwgbGF0OiA1Mi45MjMxOCwgbG5nOiAtMS4wMzAzIH1cbl07XG5cbmNvbnN0IEdvb2dsZU1hcENvbXBvbmVudCA9ICgpID0+IHtcbiAgLy8gdGhlIGRlZmF1bHQgbG9jYXRpb24gd2lsbCBiZSB0aGUgTm9ydGhjb2RlcnMgYmFzZSBpbiBNYW5jaGVzdGVyXG4gIGNvbnN0IFt1c2VyTG9jYXRpb24sIHNldFVzZXJMb2NhdGlvbl0gPSB1c2VTdGF0ZSh7XG4gICAgbGF0OiA1My40NzM3NSxcbiAgICBsbmc6IC0yLjI0MDI2LFxuICB9KTtcbiAgY29uc3QgW2lzSW5SYW5nZSwgc2V0SXNJblJhbmdlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvbGxlY3RlZCwgc2V0Q29sbGVjdGVkXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIC8vIGlmIHRoZSB1c2VyIHNjYW5zIGFuZCB0aGV5IGFyZSB3aXRoaW4gdGhlIGNpcmNsZSwgYSBjb2xsZWN0IGJ1dHRvbiBhcHBlYXJzXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24ud2F0Y2hQb3NpdGlvbigocG9zaXRpb24pID0+IHtcbiAgICAgICAgY29uc3QgdXNlckxhdExuZyA9IHtcbiAgICAgICAgICBsYXQ6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICBsbmc6IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsXG4gICAgICAgIH07XG4gICAgICAgIHNldFVzZXJMb2NhdGlvbih1c2VyTGF0TG5nKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnNvbGUubG9nKHVzZXJMb2NhdGlvbilcblxuICBjb25zdCBoYW5kbGVTY2FuID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpc3RhbmNlcyA9IHRyZWFzdXJlTG9jYXRpb25zLm1hcCgodHJlYXN1cmUpID0+IHtcbiAgICAgIHJldHVybiB3aW5kb3cuZ29vZ2xlLm1hcHMuZ2VvbWV0cnkuc3BoZXJpY2FsLmNvbXB1dGVEaXN0YW5jZUJldHdlZW4oXG4gICAgICAgIHVzZXJMb2NhdGlvbixcbiAgICAgICAgeyBsYXQ6IHRyZWFzdXJlLmxhdCwgbG5nOiB0cmVhc3VyZS5sbmcgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhkaXN0YW5jZXMpO1xuICAgIGRpc3RhbmNlcy5mb3JFYWNoKChkaXN0YW5jZSkgPT4ge1xuICAgICAgaWYgKGRpc3RhbmNlIDw9IDIwKSB7XG4gICAgICAgIHNldElzSW5SYW5nZSh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldElzSW5SYW5nZShmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coaXNJblJhbmdlKTtcbiAgICAvLyAoZXJyb3IpID0+IHtcbiAgICAvLyAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZXR0aW5nIGxvY2F0aW9uXCIpO1xuICAgIC8vIH07XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ29sbGVjdCA9ICgpID0+IHtcbiAgICBzZXRDb2xsZWN0ZWQodHJlYXN1cmUuaWQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExvYWRTY3JpcHQgZ29vZ2xlTWFwc0FwaUtleT17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX01BUFNfQVBJX0tFWX0+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT0nYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbCdcbiAgICAgICAgb25DbGljaz17aGFuZGxlU2Nhbn1cbiAgICAgID5cbiAgICAgICAgU2NhbiFcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgIGlzSW5SYW5nZSA/IFwiYmxvY2tcIiA6IFwiaGlkZGVuXCJcbiAgICAgICAgfSBiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsYH1cbiAgICAgICAgb25DbGljaz17aGFuZGxlQ29sbGVjdH1cbiAgICAgID5cbiAgICAgICAgR3JhYiBUcmVhc3VyZSFcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPEdvb2dsZU1hcFxuICAgICAgICBtYXBDb250YWluZXJTdHlsZT17Y29udGFpbmVyU3R5bGV9XG4gICAgICAgIGNlbnRlcj17dXNlckxvY2F0aW9ufVxuICAgICAgICB6b29tPXsxN31cbiAgICAgID5cbiAgICAgICAgPE1hcmtlciBwb3NpdGlvbj17dXNlckxvY2F0aW9ufSAvPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3RyZWFzdXJlTG9jYXRpb25zLm1hcCgodHJlYXN1cmUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3RyZWFzdXJlLmxhdH0gY2xhc3NOYW1lPXtjb2xsZWN0ZWQgPyBcImhpZGRlblwiIDogXCJibG9ja1wifT5cbiAgICAgICAgICAgICAgICA8TWFya2VyIHBvc2l0aW9uPXt0cmVhc3VyZX0gLz5cbiAgICAgICAgICAgICAgICA8Q2lyY2xlXG4gICAgICAgICAgICAgICAgICBjZW50ZXI9e3RyZWFzdXJlfVxuICAgICAgICAgICAgICAgICAgcmFkaXVzPXsyMH1cbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IFwiI0ZGMDAwMFwiLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VPcGFjaXR5OiAwLjgsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdlaWdodDogMixcbiAgICAgICAgICAgICAgICAgICAgZmlsbENvbG9yOiBcIiNGRjAwMDBcIixcbiAgICAgICAgICAgICAgICAgICAgZmlsbE9wYWNpdHk6IDAuMzUsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9Hb29nbGVNYXA+XG4gICAgPC9Mb2FkU2NyaXB0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR29vZ2xlTWFwQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJHb29nbGVNYXAiLCJMb2FkU2NyaXB0IiwiTWFya2VyIiwiQ2lyY2xlIiwiY29udGFpbmVyU3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInRyZWFzdXJlTG9jYXRpb25zIiwiaWQiLCJsYXQiLCJsbmciLCJHb29nbGVNYXBDb21wb25lbnQiLCJ1c2VyTG9jYXRpb24iLCJzZXRVc2VyTG9jYXRpb24iLCJpc0luUmFuZ2UiLCJzZXRJc0luUmFuZ2UiLCJjb2xsZWN0ZWQiLCJzZXRDb2xsZWN0ZWQiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsIndhdGNoUG9zaXRpb24iLCJwb3NpdGlvbiIsInVzZXJMYXRMbmciLCJjb29yZHMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTY2FuIiwiZGlzdGFuY2VzIiwibWFwIiwidHJlYXN1cmUiLCJ3aW5kb3ciLCJnb29nbGUiLCJtYXBzIiwiZ2VvbWV0cnkiLCJzcGhlcmljYWwiLCJjb21wdXRlRGlzdGFuY2VCZXR3ZWVuIiwiZm9yRWFjaCIsImRpc3RhbmNlIiwiaGFuZGxlQ29sbGVjdCIsImdvb2dsZU1hcHNBcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR09PR0xFX01BUFNfQVBJX0tFWSIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJtYXBDb250YWluZXJTdHlsZSIsImNlbnRlciIsInpvb20iLCJ1bCIsImxpIiwicmFkaXVzIiwib3B0aW9ucyIsInN0cm9rZUNvbG9yIiwic3Ryb2tlT3BhY2l0eSIsInN0cm9rZVdlaWdodCIsImZpbGxDb2xvciIsImZpbGxPcGFjaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/map/page.jsx\n"));

/***/ })

});