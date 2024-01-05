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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-google-maps/api */ \"(app-pages-browser)/./node_modules/@react-google-maps/api/dist/esm.js\");\n// components/GoogleMap.js\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst containerStyle = {\n    width: \"100%\",\n    height: \"400px\"\n};\nconst treasureLocations = [\n    {\n        id: 1,\n        lat: 52.920724,\n        lng: -1.03536\n    },\n    {\n        id: 2,\n        lat: 52.920957,\n        lng: -1.031999\n    },\n    {\n        id: 3,\n        lat: 52.920776,\n        lng: -1.033433\n    },\n    {\n        id: 4,\n        lat: 52.921444,\n        lng: -1.034414\n    },\n    {\n        id: 5,\n        lat: 52.92318,\n        lng: -1.0303\n    }\n];\nconst GoogleMapComponent = ()=>{\n    _s();\n    // the default location will be the Northcoders base in Manchester\n    const [userLocation, setUserLocation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        lat: 53.47375,\n        lng: -2.24026\n    });\n    const [isInRange, setIsInRange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [collected, setCollected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // if the user scans and they are within the circle, a collect button appears\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (navigator.geolocation) {\n            navigator.geolocation.watchPosition((position)=>{\n                const userLatLng = {\n                    lat: position.coords.latitude,\n                    lng: position.coords.longitude\n                };\n                setUserLocation(userLatLng);\n            });\n        }\n    }, []);\n    console.log(userLocation);\n    const handleScan = ()=>{\n        const distances = treasureLocations.map((treasure1)=>{\n            return window.google.maps.geometry.spherical.computeDistanceBetween(userLocation, {\n                lat: treasure1.lat,\n                lng: treasure1.lng\n            });\n        });\n        console.log(distances);\n        distances.forEach((distance)=>{\n            if (distance <= 20) {\n                setIsInRange(true);\n            } else {\n                setIsInRange(false);\n            }\n        });\n    // (error) => {\n    //   console.error(\"Error getting location\");\n    // };\n    };\n    console.log(isInRange);\n    const handleCollect = ()=>{\n        setCollected(treasure.id);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.LoadScript, {\n        googleMapsApiKey: \"AIzaSyA6QXt8Vbg_VUnXcvmyb5J8OueJNUNAH-g\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\",\n                onClick: handleScan,\n                children: \"Scan!\"\n            }, void 0, false, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"\".concat(isInRange ? \"block\" : \"hidden\", \" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\"),\n                onClick: handleCollect,\n                children: \"Grab Treasure!\"\n            }, void 0, false, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.GoogleMap, {\n                mapContainerStyle: containerStyle,\n                center: userLocation,\n                zoom: 17,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.MarkerClusterer, {\n                        children: (clusterer)=>points.map((treasure1, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MarkerF, {\n                                    position: {\n                                        lat: treasure1.cords.lat,\n                                        lng: treasure1.cords.lng\n                                    },\n                                    icon: icons[treasure1.type],\n                                    clusterer: clusterer\n                                }, i, false, {\n                                    fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Marker, {\n                        position: userLocation\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: treasureLocations.map((treasure1)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: collected ? \"hidden\" : \"block\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Marker, {\n                                        position: treasure1\n                                    }, void 0, false, {\n                                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Circle, {\n                                        center: treasure1,\n                                        radius: 20,\n                                        options: {\n                                            strokeColor: \"#FF0000\",\n                                            strokeOpacity: 0.8,\n                                            strokeWeight: 2,\n                                            fillColor: \"#FF0000\",\n                                            fillOpacity: 0.35\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, treasure1.lat, true, {\n                                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                                lineNumber: 110,\n                                columnNumber: 15\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, undefined);\n};\n_s(GoogleMapComponent, \"hQj+Wr0+HTKUm2kM7mhWKpRq5tA=\");\n_c = GoogleMapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoogleMapComponent);\nvar _c;\n$RefreshReg$(_c, \"GoogleMapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbWFwL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMEJBQTBCOzs7QUFFcUQ7QUFDaUI7QUFFaEcsTUFBTVUsaUJBQWlCO0lBQ3JCQyxPQUFPO0lBQ1BDLFFBQVE7QUFDVjtBQUVBLE1BQU1DLG9CQUFvQjtJQUN4QjtRQUFFQyxJQUFJO1FBQUdDLEtBQUs7UUFBV0MsS0FBSyxDQUFDO0lBQVE7SUFDdkM7UUFBRUYsSUFBSTtRQUFHQyxLQUFLO1FBQVdDLEtBQUssQ0FBQztJQUFTO0lBQ3hDO1FBQUVGLElBQUk7UUFBR0MsS0FBSztRQUFXQyxLQUFLLENBQUM7SUFBUztJQUN4QztRQUFFRixJQUFJO1FBQUdDLEtBQUs7UUFBV0MsS0FBSyxDQUFDO0lBQVM7SUFDeEM7UUFBRUYsSUFBSTtRQUFHQyxLQUFLO1FBQVVDLEtBQUssQ0FBQztJQUFPO0NBQ3RDO0FBRUQsTUFBTUMscUJBQXFCOztJQUN6QixrRUFBa0U7SUFDbEUsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR2pCLCtDQUFRQSxDQUFDO1FBQy9DYSxLQUFLO1FBQ0xDLEtBQUssQ0FBQztJQUNSO0lBQ0EsTUFBTSxDQUFDSSxXQUFXQyxhQUFhLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNvQixXQUFXQyxhQUFhLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUUzQyw2RUFBNkU7SUFFN0VFLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSW9CLFVBQVVDLFdBQVcsRUFBRTtZQUN6QkQsVUFBVUMsV0FBVyxDQUFDQyxhQUFhLENBQUMsQ0FBQ0M7Z0JBQ25DLE1BQU1DLGFBQWE7b0JBQ2pCYixLQUFLWSxTQUFTRSxNQUFNLENBQUNDLFFBQVE7b0JBQzdCZCxLQUFLVyxTQUFTRSxNQUFNLENBQUNFLFNBQVM7Z0JBQ2hDO2dCQUNBWixnQkFBZ0JTO1lBQ2xCO1FBQ0Y7SUFDRixHQUFHLEVBQUU7SUFFTEksUUFBUUMsR0FBRyxDQUFDZjtJQUVaLE1BQU1nQixhQUFhO1FBQ2pCLE1BQU1DLFlBQVl0QixrQkFBa0J1QixHQUFHLENBQUMsQ0FBQ0M7WUFDdkMsT0FBT0MsT0FBT0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLFFBQVEsQ0FBQ0MsU0FBUyxDQUFDQyxzQkFBc0IsQ0FDakV6QixjQUNBO2dCQUFFSCxLQUFLc0IsVUFBU3RCLEdBQUc7Z0JBQUVDLEtBQUtxQixVQUFTckIsR0FBRztZQUFDO1FBRTNDO1FBQ0FnQixRQUFRQyxHQUFHLENBQUNFO1FBQ1pBLFVBQVVTLE9BQU8sQ0FBQyxDQUFDQztZQUNqQixJQUFJQSxZQUFZLElBQUk7Z0JBQ2xCeEIsYUFBYTtZQUNmLE9BQU87Z0JBQ0xBLGFBQWE7WUFDZjtRQUNGO0lBQ0EsZUFBZTtJQUNYLDZDQUE2QztJQUM3QyxLQUFLO0lBQ1Q7SUFDQVcsUUFBUUMsR0FBRyxDQUFDYjtJQUVkLE1BQU0wQixnQkFBZ0I7UUFDcEJ2QixhQUFhYyxTQUFTdkIsRUFBRTtJQUMxQjtJQUVBLHFCQUNFLDhEQUFDUiw4REFBVUE7UUFBQ3lDLGtCQUFrQkMseUNBQTJDOzswQkFDdkUsOERBQUNHO2dCQUNDQyxXQUFVO2dCQUNWQyxTQUFTbkI7MEJBQ1Y7Ozs7OzswQkFHRCw4REFBQ2lCO2dCQUNDQyxXQUFXLEdBRVYsT0FEQ2hDLFlBQVksVUFBVSxVQUN2QjtnQkFDRGlDLFNBQVNQOzBCQUNWOzs7Ozs7MEJBR0QsOERBQUN6Qyw2REFBU0E7Z0JBQ1JpRCxtQkFBbUI1QztnQkFDbkI2QyxRQUFRckM7Z0JBQ1JzQyxNQUFNOztrQ0FFTiw4REFBQ2hELG1FQUFlQTtrQ0FDYixDQUFDaUQsWUFDQUMsT0FBT3RCLEdBQUcsQ0FBQyxDQUFDQyxXQUFVc0Isa0JBQ3BCLDhEQUFDQztvQ0FFQ2pDLFVBQVU7d0NBQ1JaLEtBQUtzQixVQUFTd0IsS0FBSyxDQUFDOUMsR0FBRzt3Q0FDdkJDLEtBQUtxQixVQUFTd0IsS0FBSyxDQUFDN0MsR0FBRztvQ0FDekI7b0NBQ0E4QyxNQUFNQyxLQUFLLENBQUMxQixVQUFTMkIsSUFBSSxDQUFDO29DQUMxQlAsV0FBV0E7bUNBTk5FOzs7Ozs7Ozs7O2tDQVliLDhEQUFDcEQsMERBQU1BO3dCQUFDb0IsVUFBVVQ7Ozs7OztrQ0FDbEIsOERBQUMrQztrQ0FDRXBELGtCQUFrQnVCLEdBQUcsQ0FBQyxDQUFDQzs0QkFDdEIscUJBQ0UsOERBQUM2QjtnQ0FBc0JkLFdBQVc5QixZQUFZLFdBQVc7O2tEQUN2RCw4REFBQ2YsMERBQU1BO3dDQUFDb0IsVUFBVVU7Ozs7OztrREFDbEIsOERBQUM1QiwwREFBTUE7d0NBQ0w4QyxRQUFRbEI7d0NBQ1I4QixRQUFRO3dDQUNSQyxTQUFTOzRDQUNQQyxhQUFhOzRDQUNiQyxlQUFlOzRDQUNmQyxjQUFjOzRDQUNkQyxXQUFXOzRDQUNYQyxhQUFhO3dDQUVmOzs7Ozs7OytCQVpLcEMsVUFBU3RCLEdBQUc7Ozs7O3dCQWdCekI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtWO0dBaEhNRTtLQUFBQTtBQWtITiwrREFBZUEsa0JBQWtCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbWFwL3BhZ2UuanN4PzE0MGEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9Hb29nbGVNYXAuanNcblwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHb29nbGVNYXAsIExvYWRTY3JpcHQsIE1hcmtlciwgTWFya2VyQ2x1c3RlcmVyLCBDaXJjbGUgfSBmcm9tIFwiQHJlYWN0LWdvb2dsZS1tYXBzL2FwaVwiO1xuXG5jb25zdCBjb250YWluZXJTdHlsZSA9IHtcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICBoZWlnaHQ6IFwiNDAwcHhcIixcbn07XG5cbmNvbnN0IHRyZWFzdXJlTG9jYXRpb25zID0gW1xuICB7IGlkOiAxLCBsYXQ6IDUyLjkyMDcyNCwgbG5nOiAtMS4wMzUzNiB9LFxuICB7IGlkOiAyLCBsYXQ6IDUyLjkyMDk1NywgbG5nOiAtMS4wMzE5OTkgfSxcbiAgeyBpZDogMywgbGF0OiA1Mi45MjA3NzYsIGxuZzogLTEuMDMzNDMzIH0sXG4gIHsgaWQ6IDQsIGxhdDogNTIuOTIxNDQ0LCBsbmc6IC0xLjAzNDQxNCB9LFxuICB7IGlkOiA1LCBsYXQ6IDUyLjkyMzE4LCBsbmc6IC0xLjAzMDMgfVxuXTtcblxuY29uc3QgR29vZ2xlTWFwQ29tcG9uZW50ID0gKCkgPT4ge1xuICAvLyB0aGUgZGVmYXVsdCBsb2NhdGlvbiB3aWxsIGJlIHRoZSBOb3J0aGNvZGVycyBiYXNlIGluIE1hbmNoZXN0ZXJcbiAgY29uc3QgW3VzZXJMb2NhdGlvbiwgc2V0VXNlckxvY2F0aW9uXSA9IHVzZVN0YXRlKHtcbiAgICBsYXQ6IDUzLjQ3Mzc1LFxuICAgIGxuZzogLTIuMjQwMjYsXG4gIH0pO1xuICBjb25zdCBbaXNJblJhbmdlLCBzZXRJc0luUmFuZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29sbGVjdGVkLCBzZXRDb2xsZWN0ZWRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgLy8gaWYgdGhlIHVzZXIgc2NhbnMgYW5kIHRoZXkgYXJlIHdpdGhpbiB0aGUgY2lyY2xlLCBhIGNvbGxlY3QgYnV0dG9uIGFwcGVhcnNcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKChwb3NpdGlvbikgPT4ge1xuICAgICAgICBjb25zdCB1c2VyTGF0TG5nID0ge1xuICAgICAgICAgIGxhdDogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxuICAgICAgICAgIGxuZzogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSxcbiAgICAgICAgfTtcbiAgICAgICAgc2V0VXNlckxvY2F0aW9uKHVzZXJMYXRMbmcpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc29sZS5sb2codXNlckxvY2F0aW9uKVxuXG4gIGNvbnN0IGhhbmRsZVNjYW4gPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzdGFuY2VzID0gdHJlYXN1cmVMb2NhdGlvbnMubWFwKCh0cmVhc3VyZSkgPT4ge1xuICAgICAgcmV0dXJuIHdpbmRvdy5nb29nbGUubWFwcy5nZW9tZXRyeS5zcGhlcmljYWwuY29tcHV0ZURpc3RhbmNlQmV0d2VlbihcbiAgICAgICAgdXNlckxvY2F0aW9uLFxuICAgICAgICB7IGxhdDogdHJlYXN1cmUubGF0LCBsbmc6IHRyZWFzdXJlLmxuZyB9XG4gICAgICApO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGRpc3RhbmNlcyk7XG4gICAgZGlzdGFuY2VzLmZvckVhY2goKGRpc3RhbmNlKSA9PiB7XG4gICAgICBpZiAoZGlzdGFuY2UgPD0gMjApIHtcbiAgICAgICAgc2V0SXNJblJhbmdlKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0SXNJblJhbmdlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyAoZXJyb3IpID0+IHtcbiAgICAgICAgLy8gICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBsb2NhdGlvblwiKTtcbiAgICAgICAgLy8gfTtcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKGlzSW5SYW5nZSk7XG5cbiAgY29uc3QgaGFuZGxlQ29sbGVjdCA9ICgpID0+IHtcbiAgICBzZXRDb2xsZWN0ZWQodHJlYXN1cmUuaWQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExvYWRTY3JpcHQgZ29vZ2xlTWFwc0FwaUtleT17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX01BUFNfQVBJX0tFWX0+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT0nYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbCdcbiAgICAgICAgb25DbGljaz17aGFuZGxlU2Nhbn1cbiAgICAgID5cbiAgICAgICAgU2NhbiFcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgIGlzSW5SYW5nZSA/IFwiYmxvY2tcIiA6IFwiaGlkZGVuXCJcbiAgICAgICAgfSBiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsYH1cbiAgICAgICAgb25DbGljaz17aGFuZGxlQ29sbGVjdH1cbiAgICAgID5cbiAgICAgICAgR3JhYiBUcmVhc3VyZSFcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPEdvb2dsZU1hcFxuICAgICAgICBtYXBDb250YWluZXJTdHlsZT17Y29udGFpbmVyU3R5bGV9XG4gICAgICAgIGNlbnRlcj17dXNlckxvY2F0aW9ufVxuICAgICAgICB6b29tPXsxN31cbiAgICAgID5cbiAgICAgICAgPE1hcmtlckNsdXN0ZXJlcj5cbiAgICAgICAgICB7KGNsdXN0ZXJlcikgPT5cbiAgICAgICAgICAgIHBvaW50cy5tYXAoKHRyZWFzdXJlLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxNYXJrZXJGXG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgICBsYXQ6IHRyZWFzdXJlLmNvcmRzLmxhdCxcbiAgICAgICAgICAgICAgICAgIGxuZzogdHJlYXN1cmUuY29yZHMubG5nLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgaWNvbj17aWNvbnNbdHJlYXN1cmUudHlwZV19XG4gICAgICAgICAgICAgICAgY2x1c3RlcmVyPXtjbHVzdGVyZXJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9NYXJrZXJDbHVzdGVyZXI+XG4gICAgICAgIFxuICAgICAgICA8TWFya2VyIHBvc2l0aW9uPXt1c2VyTG9jYXRpb259IC8+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7dHJlYXN1cmVMb2NhdGlvbnMubWFwKCh0cmVhc3VyZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpIGtleT17dHJlYXN1cmUubGF0fSBjbGFzc05hbWU9e2NvbGxlY3RlZCA/IFwiaGlkZGVuXCIgOiBcImJsb2NrXCJ9PlxuICAgICAgICAgICAgICAgIDxNYXJrZXIgcG9zaXRpb249e3RyZWFzdXJlfSAvPlxuICAgICAgICAgICAgICAgIDxDaXJjbGVcbiAgICAgICAgICAgICAgICAgIGNlbnRlcj17dHJlYXN1cmV9XG4gICAgICAgICAgICAgICAgICByYWRpdXM9ezIwfVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogXCIjRkYwMDAwXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk6IDAuOCxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2VpZ2h0OiAyLFxuICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I6IFwiI0ZGMDAwMFwiLFxuICAgICAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eTogMC4zNSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L0dvb2dsZU1hcD5cbiAgICA8L0xvYWRTY3JpcHQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHb29nbGVNYXBDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsIkdvb2dsZU1hcCIsIkxvYWRTY3JpcHQiLCJNYXJrZXIiLCJNYXJrZXJDbHVzdGVyZXIiLCJDaXJjbGUiLCJjb250YWluZXJTdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwidHJlYXN1cmVMb2NhdGlvbnMiLCJpZCIsImxhdCIsImxuZyIsIkdvb2dsZU1hcENvbXBvbmVudCIsInVzZXJMb2NhdGlvbiIsInNldFVzZXJMb2NhdGlvbiIsImlzSW5SYW5nZSIsInNldElzSW5SYW5nZSIsImNvbGxlY3RlZCIsInNldENvbGxlY3RlZCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwid2F0Y2hQb3NpdGlvbiIsInBvc2l0aW9uIiwidXNlckxhdExuZyIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVNjYW4iLCJkaXN0YW5jZXMiLCJtYXAiLCJ0cmVhc3VyZSIsIndpbmRvdyIsImdvb2dsZSIsIm1hcHMiLCJnZW9tZXRyeSIsInNwaGVyaWNhbCIsImNvbXB1dGVEaXN0YW5jZUJldHdlZW4iLCJmb3JFYWNoIiwiZGlzdGFuY2UiLCJoYW5kbGVDb2xsZWN0IiwiZ29vZ2xlTWFwc0FwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19HT09HTEVfTUFQU19BUElfS0VZIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsIm1hcENvbnRhaW5lclN0eWxlIiwiY2VudGVyIiwiem9vbSIsImNsdXN0ZXJlciIsInBvaW50cyIsImkiLCJNYXJrZXJGIiwiY29yZHMiLCJpY29uIiwiaWNvbnMiLCJ0eXBlIiwidWwiLCJsaSIsInJhZGl1cyIsIm9wdGlvbnMiLCJzdHJva2VDb2xvciIsInN0cm9rZU9wYWNpdHkiLCJzdHJva2VXZWlnaHQiLCJmaWxsQ29sb3IiLCJmaWxsT3BhY2l0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/map/page.jsx\n"));

/***/ })

});