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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-google-maps/api */ \"(app-pages-browser)/./node_modules/@react-google-maps/api/dist/esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CollectTreasure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CollectTreasure */ \"(app-pages-browser)/./src/app/map/CollectTreasure.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst containerStyle = {\n    width: \"100%\",\n    height: \"90vh\"\n};\nconst treasures = [\n    {\n        type: \"treasure\",\n        name: \"Big Ban\",\n        cords: {\n            lat: 51.5007,\n            lng: -0.1246\n        }\n    },\n    {\n        type: \"treasure\",\n        name: \"Big Ban2\",\n        cords: {\n            lat: 51.5017,\n            lng: -0.1246\n        }\n    },\n    {\n        type: \"treasure\",\n        name: \"Stonehenge\",\n        cords: {\n            lat: 51.1789,\n            lng: -1.8262\n        }\n    },\n    {\n        type: \"treasure\",\n        name: \"closest\",\n        cords: {\n            lat: 52.25,\n            lng: 0.1095\n        }\n    },\n    {\n        type: \"treasure\",\n        name: \"Edinburgh Castle\",\n        cords: {\n            lat: 55.9486,\n            lng: -3.1999\n        }\n    }\n];\nconst icons = {\n    treasure: {\n        url: \"/treasure.png\",\n        scaledSize: {\n            width: 50,\n            height: 50\n        }\n    },\n    user: {\n        url: \"/user.png\",\n        scaledSize: {\n            width: 50,\n            height: 50\n        }\n    }\n};\nfunction MyComponent() {\n    _s();\n    const [currentLocation, setCurrentLocation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        type: \"user\",\n        name: \"person\",\n        cords: {\n            lat: 0,\n            lng: 0\n        }\n    });\n    const [points, setPoints] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(treasures);\n    const [isLoadedMap, setIsLoadedMap] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const options = {\n        mapId: \"b6a1e26ca756909b\",\n        mapTypeControl: false\n    };\n    const [destination, setDestination] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [minDistance, setMinDistance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [collect, setCollect] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.useJsApiLoader)({\n        id: \"google-map-script\",\n        googleMapsApiKey: \"AIzaSyA6QXt8Vbg_VUnXcvmyb5J8OueJNUNAH-g\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function cordsDetecting(respond) {\n            let lng = respond.coords.longitude;\n            let lat = respond.coords.latitude;\n            setCurrentLocation((curr)=>{\n                curr.cords.lat = lat;\n                curr.cords.lng = lng;\n                return curr;\n            });\n            setIsLoadedMap(true);\n        }\n        navigator.geolocation.getCurrentPosition(cordsDetecting);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const destinationArray = [];\n        points.map((point)=>{\n            destinationArray.push(\"\".concat(point.cords.lat, \", \").concat(point.cords.lng));\n        });\n        setDestination(destinationArray);\n    }, []);\n    const calculateDistances = ()=>{\n        if (currentLocation && points.length > 0) {\n            const service = new google.maps.DistanceMatrixService();\n            const origins = [\n                \"\".concat(currentLocation.cords.lat, \", \").concat(currentLocation.cords.lng)\n            ];\n            service.getDistanceMatrix({\n                origins: origins,\n                destinations: destination,\n                travelMode: \"WALKING\"\n            }, (response, status)=>{\n                if (status === \"OK\") {\n                    let placeId = 0;\n                    let min = response.rows[0].elements[placeId].distance.value;\n                    response.rows[0].elements.map((element, i)=>{\n                        if (min > element.distance.value) {\n                            min = element.distance.value;\n                            placeId = i;\n                        }\n                    });\n                    setMinDistance({\n                        distance: min,\n                        place: points[placeId]\n                    });\n                } else {\n                    console.error(\"Error calculating distances:\", status);\n                }\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (minDistance.distance < 100) {\n            setCollect(true);\n        }\n    }, [\n        minDistance\n    ]);\n    const checkDistance = ()=>{\n        calculateDistances();\n    };\n    return isLoadedMap ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"userInteraction\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: checkDistance,\n                    className: \"find button\",\n                    children: \"Find Closest Treasure\"\n                }, void 0, false, {\n                    fileName: \"/home/alina/northcoders/final-project/treasure-hunt-frontend/src/app/map/page.jsx\",\n                    lineNumber: 131,\n                    columnNumber: 9\n                }, this),\n                collect ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CollectTreasure__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    treasure: minDistance.place\n                }, void 0, false, {\n                    fileName: \"/home/alina/northcoders/final-project/treasure-hunt-frontend/src/app/map/page.jsx\",\n                    lineNumber: 134,\n                    columnNumber: 20\n                }, this) : \"\"\n            ]\n        }, void 0, true, {\n            fileName: \"/home/alina/northcoders/final-project/treasure-hunt-frontend/src/app/map/page.jsx\",\n            lineNumber: 130,\n            columnNumber: 7\n        }, this)\n    }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n}\n_s(MyComponent, \"0FcxEd8MTq6pBtyz/4EpVYZvSI8=\", false, function() {\n    return [\n        _react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.useJsApiLoader\n    ];\n});\n_c = MyComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyComponent);\nvar _c;\n$RefreshReg$(_c, \"MyComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbWFwL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBT2dDO0FBQ1k7QUFDSTtBQUVoRCxNQUFNTyxpQkFBaUI7SUFDckJDLE9BQU87SUFDUEMsUUFBUTtBQUNWO0FBRUEsTUFBTUMsWUFBWTtJQUNoQjtRQUFFQyxNQUFNO1FBQVlDLE1BQU07UUFBV0MsT0FBTztZQUFFQyxLQUFLO1lBQVNDLEtBQUssQ0FBQztRQUFPO0lBQUU7SUFDM0U7UUFBRUosTUFBTTtRQUFZQyxNQUFNO1FBQVlDLE9BQU87WUFBRUMsS0FBSztZQUFTQyxLQUFLLENBQUM7UUFBTztJQUFFO0lBQzVFO1FBQ0VKLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxPQUFPO1lBQUVDLEtBQUs7WUFBU0MsS0FBSyxDQUFDO1FBQU87SUFDdEM7SUFDQTtRQUFFSixNQUFNO1FBQVlDLE1BQU07UUFBV0MsT0FBTztZQUFFQyxLQUFLO1lBQU9DLEtBQUs7UUFBTztJQUFFO0lBQ3hFO1FBQ0VKLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxPQUFPO1lBQUVDLEtBQUs7WUFBU0MsS0FBSyxDQUFDO1FBQU87SUFDdEM7Q0FDRDtBQUVELE1BQU1DLFFBQVE7SUFDWkMsVUFBVTtRQUNSQyxLQUFLO1FBQ0xDLFlBQVk7WUFBRVgsT0FBTztZQUFJQyxRQUFRO1FBQUc7SUFDdEM7SUFDQVcsTUFBTTtRQUFFRixLQUFLO1FBQWFDLFlBQVk7WUFBRVgsT0FBTztZQUFJQyxRQUFRO1FBQUc7SUFBRTtBQUNsRTtBQUVBLFNBQVNZOztJQUNQLE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR2xCLCtDQUFRQSxDQUFDO1FBQ3JETSxNQUFNO1FBQ05DLE1BQU07UUFDTkMsT0FBTztZQUFFQyxLQUFLO1lBQUdDLEtBQUs7UUFBRTtJQUMxQjtJQUVBLE1BQU0sQ0FBQ1MsUUFBUUMsVUFBVSxHQUFHcEIsK0NBQVFBLENBQUNLO0lBQ3JDLE1BQU0sQ0FBQ2dCLGFBQWFDLGVB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QUFVZ0IsWUFBWTBDLEtBQUs7Ozs7OzJCQUFPOzs7Ozs7O3NDQXFDbEU7QUFFSjtHQXBJU3REOztRQWVQcEIsa0VBQWNBOzs7S0FmUG9CO0FBc0lULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbWFwL3BhZ2UuanN4PzE0MGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7XG4gIEdvb2dsZU1hcCxcbiAgdXNlSnNBcGlMb2FkZXIsXG4gIE1hcmtlckYsXG4gIE1hcmtlckNsdXN0ZXJlcixcbn0gZnJvbSBcIkByZWFjdC1nb29nbGUtbWFwcy9hcGlcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb2xsZWN0VHJlYXN1cmUgZnJvbSBcIi4vQ29sbGVjdFRyZWFzdXJlXCI7XG5cbmNvbnN0IGNvbnRhaW5lclN0eWxlID0ge1xuICB3aWR0aDogXCIxMDAlXCIsXG4gIGhlaWdodDogXCI5MHZoXCIsXG59O1xuXG5jb25zdCB0cmVhc3VyZXMgPSBbXG4gIHsgdHlwZTogXCJ0cmVhc3VyZVwiLCBuYW1lOiBcIkJpZyBCYW5cIiwgY29yZHM6IHsgbGF0OiA1MS41MDA3LCBsbmc6IC0wLjEyNDYgfSB9LFxuICB7IHR5cGU6IFwidHJlYXN1cmVcIiwgbmFtZTogXCJCaWcgQmFuMlwiLCBjb3JkczogeyBsYXQ6IDUxLjUwMTcsIGxuZzogLTAuMTI0NiB9IH0sXG4gIHtcbiAgICB0eXBlOiBcInRyZWFzdXJlXCIsXG4gICAgbmFtZTogXCJTdG9uZWhlbmdlXCIsXG4gICAgY29yZHM6IHsgbGF0OiA1MS4xNzg5LCBsbmc6IC0xLjgyNjIgfSxcbiAgfSxcbiAgeyB0eXBlOiBcInRyZWFzdXJlXCIsIG5hbWU6IFwiY2xvc2VzdFwiLCBjb3JkczogeyBsYXQ6IDUyLjI1LCBsbmc6IDAuMTA5NSB9IH0sXG4gIHtcbiAgICB0eXBlOiBcInRyZWFzdXJlXCIsXG4gICAgbmFtZTogXCJFZGluYnVyZ2ggQ2FzdGxlXCIsXG4gICAgY29yZHM6IHsgbGF0OiA1NS45NDg2LCBsbmc6IC0zLjE5OTkgfSxcbiAgfSxcbl07XG5cbmNvbnN0IGljb25zID0ge1xuICB0cmVhc3VyZToge1xuICAgIHVybDogXCIvdHJlYXN1cmUucG5nXCIsXG4gICAgc2NhbGVkU2l6ZTogeyB3aWR0aDogNTAsIGhlaWdodDogNTAgfSxcbiAgfSxcbiAgdXNlcjogeyB1cmw6IFwiL3VzZXIucG5nXCIsIHNjYWxlZFNpemU6IHsgd2lkdGg6IDUwLCBoZWlnaHQ6IDUwIH0gfSxcbn07XG5cbmZ1bmN0aW9uIE15Q29tcG9uZW50KCkge1xuICBjb25zdCBbY3VycmVudExvY2F0aW9uLCBzZXRDdXJyZW50TG9jYXRpb25dID0gdXNlU3RhdGUoe1xuICAgIHR5cGU6IFwidXNlclwiLFxuICAgIG5hbWU6IFwicGVyc29uXCIsXG4gICAgY29yZHM6IHsgbGF0OiAwLCBsbmc6IDAgfSxcbiAgfSk7XG5cbiAgY29uc3QgW3BvaW50cywgc2V0UG9pbnRzXSA9IHVzZVN0YXRlKHRyZWFzdXJlcyk7XG4gIGNvbnN0IFtpc0xvYWRlZE1hcCwgc2V0SXNMb2FkZWRNYXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBvcHRpb25zID0geyBtYXBJZDogXCJiNmExZTI2Y2E3NTY5MDliXCIsIG1hcFR5cGVDb250cm9sOiBmYWxzZSB9O1xuXG4gIGNvbnN0IFtkZXN0aW5hdGlvbiwgc2V0RGVzdGluYXRpb25dID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbWluRGlzdGFuY2UsIHNldE1pbkRpc3RhbmNlXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2NvbGxlY3QsIHNldENvbGxlY3RdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUpzQXBpTG9hZGVyKHtcbiAgICBpZDogXCJnb29nbGUtbWFwLXNjcmlwdFwiLFxuICAgIGdvb2dsZU1hcHNBcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9NQVBTX0FQSV9LRVksXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gY29yZHNEZXRlY3RpbmcocmVzcG9uZCkge1xuICAgICAgbGV0IGxuZyA9IHJlc3BvbmQuY29vcmRzLmxvbmdpdHVkZTtcbiAgICAgIGxldCBsYXQgPSByZXNwb25kLmNvb3Jkcy5sYXRpdHVkZTtcbiAgICAgIHNldEN1cnJlbnRMb2NhdGlvbigoY3VycikgPT4ge1xuICAgICAgICBjdXJyLmNvcmRzLmxhdCA9IGxhdDtcbiAgICAgICAgY3Vyci5jb3Jkcy5sbmcgPSBsbmc7XG4gICAgICAgIHJldHVybiBjdXJyO1xuICAgICAgfSk7XG5cbiAgICAgIHNldElzTG9hZGVkTWFwKHRydWUpO1xuICAgIH1cblxuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oY29yZHNEZXRlY3RpbmcpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBkZXN0aW5hdGlvbkFycmF5ID0gW107XG4gICAgcG9pbnRzLm1hcCgocG9pbnQpID0+IHtcbiAgICAgIGRlc3RpbmF0aW9uQXJyYXkucHVzaChgJHtwb2ludC5jb3Jkcy5sYXR9LCAke3BvaW50LmNvcmRzLmxuZ31gKTtcbiAgICB9KTtcbiAgICBzZXREZXN0aW5hdGlvbihkZXN0aW5hdGlvbkFycmF5KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNhbGN1bGF0ZURpc3RhbmNlcyA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudExvY2F0aW9uICYmIHBvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpc3RhbmNlTWF0cml4U2VydmljZSgpO1xuICAgICAgY29uc3Qgb3JpZ2lucyA9IFtcbiAgICAgICAgYCR7Y3VycmVudExvY2F0aW9uLmNvcmRzLmxhdH0sICR7Y3VycmVudExvY2F0aW9uLmNvcmRzLmxuZ31gLFxuICAgICAgXTtcblxuICAgICAgc2VydmljZS5nZXREaXN0YW5jZU1hdHJpeChcbiAgICAgICAge1xuICAgICAgICAgIG9yaWdpbnM6IG9yaWdpbnMsXG4gICAgICAgICAgZGVzdGluYXRpb25zOiBkZXN0aW5hdGlvbixcbiAgICAgICAgICB0cmF2ZWxNb2RlOiBcIldBTEtJTkdcIixcbiAgICAgICAgfSxcbiAgICAgICAgKHJlc3BvbnNlLCBzdGF0dXMpID0+IHtcbiAgICAgICAgICBpZiAoc3RhdHVzID09PSBcIk9LXCIpIHtcbiAgICAgICAgICAgIGxldCBwbGFjZUlkID0gMDtcbiAgICAgICAgICAgIGxldCBtaW4gPSByZXNwb25zZS5yb3dzWzBdLmVsZW1lbnRzW3BsYWNlSWRdLmRpc3RhbmNlLnZhbHVlO1xuXG4gICAgICAgICAgICByZXNwb25zZS5yb3dzWzBdLmVsZW1lbnRzLm1hcCgoZWxlbWVudCwgaSkgPT4ge1xuICAgICAgICAgICAgICBpZiAobWluID4gZWxlbWVudC5kaXN0YW5jZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIG1pbiA9IGVsZW1lbnQuZGlzdGFuY2UudmFsdWU7XG4gICAgICAgICAgICAgICAgcGxhY2VJZCA9IGk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0TWluRGlzdGFuY2UoeyBkaXN0YW5jZTogbWluLCBwbGFjZTogcG9pbnRzW3BsYWNlSWRdIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY2FsY3VsYXRpbmcgZGlzdGFuY2VzOlwiLCBzdGF0dXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobWluRGlzdGFuY2UuZGlzdGFuY2UgPCAxMDApIHtcbiAgICAgIHNldENvbGxlY3QodHJ1ZSk7XG4gICAgfVxuICB9LCBbbWluRGlzdGFuY2VdKTtcblxuICBjb25zdCBjaGVja0Rpc3RhbmNlID0gKCkgPT4ge1xuICAgIGNhbGN1bGF0ZURpc3RhbmNlcygpO1xuICB9O1xuXG4gIHJldHVybiBpc0xvYWRlZE1hcCA/IChcbiAgICA8PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidXNlckludGVyYWN0aW9uXCI+XG4gICAgICAgIDxkaXYgb25DbGljaz17Y2hlY2tEaXN0YW5jZX0gY2xhc3NOYW1lPVwiZmluZCBidXR0b25cIj5cbiAgICAgICAgICBGaW5kIENsb3Nlc3QgVHJlYXN1cmVcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtjb2xsZWN0ID8gPENvbGxlY3RUcmVhc3VyZSB0cmVhc3VyZT17bWluRGlzdGFuY2UucGxhY2V9IC8+IDogXCJcIn1cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIDxHb29nbGVNYXBcbiAgICAgICAgbWFwQ29udGFpbmVyU3R5bGU9e2NvbnRhaW5lclN0eWxlfVxuICAgICAgICBjZW50ZXI9e2N1cnJlbnRMb2NhdGlvbi5jb3Jkc31cbiAgICAgICAgem9vbT17OH1cbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgID5cbiAgICAgICAgPE1hcmtlckNsdXN0ZXJlcj5cbiAgICAgICAgICB7KGNsdXN0ZXJlcikgPT5cbiAgICAgICAgICAgIHBvaW50cy5tYXAoKHRyZWFzdXJlLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxNYXJrZXJGXG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgICBsYXQ6IHRyZWFzdXJlLmNvcmRzLmxhdCxcbiAgICAgICAgICAgICAgICAgIGxuZzogdHJlYXN1cmUuY29yZHMubG5nLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgaWNvbj17aWNvbnNbdHJlYXN1cmUudHlwZV19XG4gICAgICAgICAgICAgICAgY2x1c3RlcmVyPXtjbHVzdGVyZXJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9NYXJrZXJDbHVzdGVyZXI+XG5cbiAgICAgICAgPE1hcmtlckZcbiAgICAgICAgICBwb3NpdGlvbj17e1xuICAgICAgICAgICAgbGF0OiBjdXJyZW50TG9jYXRpb24uY29yZHMubGF0LFxuICAgICAgICAgICAgbG5nOiBjdXJyZW50TG9jYXRpb24uY29yZHMubG5nLFxuICAgICAgICAgIH19XG4gICAgICAgICAgaWNvbj17aWNvbnNbY3VycmVudExvY2F0aW9uLnR5cGVdfVxuICAgICAgICAgIGxhYmVsPXtcIkl0cyBVIVwifVxuICAgICAgICAvPlxuICAgICAgICA8PjwvPlxuICAgICAgPC9Hb29nbGVNYXA+ICAqL31cbiAgICA8Lz5cbiAgKSA6IChcbiAgICA8PjwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUNvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJHb29nbGVNYXAiLCJ1c2VKc0FwaUxvYWRlciIsIk1hcmtlckYiLCJNYXJrZXJDbHVzdGVyZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbGxlY3RUcmVhc3VyZSIsImNvbnRhaW5lclN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJ0cmVhc3VyZXMiLCJ0eXBlIiwibmFtZSIsImNvcmRzIiwibGF0IiwibG5nIiwiaWNvbnMiLCJ0cmVhc3VyZSIsInVybCIsInNjYWxlZFNpemUiLCJ1c2VyIiwiTXlDb21wb25lbnQiLCJjdXJyZW50TG9jYXRpb24iLCJzZXRDdXJyZW50TG9jYXRpb24iLCJwb2ludHMiLCJzZXRQb2ludHMiLCJpc0xvYWRlZE1hcCIsInNldElzTG9hZGVkTWFwIiwib3B0aW9ucyIsIm1hcElkIiwibWFwVHlwZUNvbnRyb2wiLCJkZXN0aW5hdGlvbiIsInNldERlc3RpbmF0aW9uIiwibWluRGlzdGFuY2UiLCJzZXRNaW5EaXN0YW5jZSIsImNvbGxlY3QiLCJzZXRDb2xsZWN0IiwiaWQiLCJnb29nbGVNYXBzQXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0dPT0dMRV9NQVBTX0FQSV9LRVkiLCJjb3Jkc0RldGVjdGluZyIsInJlc3BvbmQiLCJjb29yZHMiLCJsb25naXR1ZGUiLCJsYXRpdHVkZSIsImN1cnIiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImRlc3RpbmF0aW9uQXJyYXkiLCJtYXAiLCJwb2ludCIsInB1c2giLCJjYWxjdWxhdGVEaXN0YW5jZXMiLCJsZW5ndGgiLCJzZXJ2aWNlIiwiZ29vZ2xlIiwibWFwcyIsIkRpc3RhbmNlTWF0cml4U2VydmljZSIsIm9yaWdpbnMiLCJnZXREaXN0YW5jZU1hdHJpeCIsImRlc3RpbmF0aW9ucyIsInRyYXZlbE1vZGUiLCJyZXNwb25zZSIsInN0YXR1cyIsInBsYWNlSWQiLCJtaW4iLCJyb3dzIiwiZWxlbWVudHMiLCJkaXN0YW5jZSIsInZhbHVlIiwiZWxlbWVudCIsImkiLCJwbGFjZSIsImNvbnNvbGUiLCJlcnJvciIsImNoZWNrRGlzdGFuY2UiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/map/page.jsx\n"));

/***/ })

});