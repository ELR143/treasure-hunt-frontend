"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/profile/page",{

/***/ "(app-pages-browser)/./src/app/profile/page.jsx":
/*!**********************************!*\
  !*** ./src/app/profile/page.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_RxAvatar_react_icons_rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=RxAvatar!=!react-icons/rx */ \"(app-pages-browser)/./node_modules/react-icons/rx/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/Card */ \"(app-pages-browser)/./src/app/_lib/Card.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Profile() {\n    _s();\n    const [avatar, setAvatar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RxAvatar_react_icons_rx__WEBPACK_IMPORTED_MODULE_3__.RxAvatar, {\n        className: \"w-20 h-20\"\n    }, void 0, false, {\n        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/profile/page.jsx\",\n        lineNumber: 7,\n        columnNumber: 40\n    }, this));\n    const profileLinks = [\n        {\n            name: \"Leaderboard\",\n            href: \"/leaderboard\"\n        },\n        {\n            name: \"Treasure Collection\",\n            href: \"/collection\"\n        }\n    ];\n    const profileRequests = [\n        {\n            name: \"Change avatar\"\n        },\n        {\n            name: \"Change username\"\n        },\n        {\n            name: \"Change password\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"w-full mt-2 flex flex-col mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto\",\n                children: avatar\n            }, void 0, false, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/profile/page.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"w-1/4 text-center mx-auto mt-1 px-2 py-1 tracking-wide text-white transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600\",\n                children: \"Change avatar\"\n            }, void 0, false, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/profile/page.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: profileLinks.map((link, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        cardHeading: link\n                    }, i, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/profile/page.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 18\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/profile/page.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: profileRequests.map((request, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RequCard, {\n                        cardHeading: request.name\n                    }, i, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/profile/page.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 18\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/profile/page.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/profile/page.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n} // setAvatar(<img src={link} />)\n_s(Profile, \"cR2JoHhoicjnkNQCsDfakUyEm3U=\");\n_c = Profile;\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUMwQztBQUNUO0FBQ0Q7QUFFakIsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSiwrQ0FBUUEsZUFBQyw4REFBQ0Qsb0ZBQVFBO1FBQUNNLFdBQVU7Ozs7OztJQUV6RCxNQUFNQyxlQUFlO1FBQ25CO1lBQUVDLE1BQU07WUFBZUMsTUFBTTtRQUFlO1FBQzVDO1lBQUVELE1BQU07WUFBdUJDLE1BQU07UUFBYztLQUNwRDtJQUVELE1BQU1DLGtCQUFrQjtRQUN0QjtZQUFDRixNQUFNO1FBQWdCO1FBQ3ZCO1lBQUNBLE1BQU07UUFBa0I7UUFDekI7WUFBQ0EsTUFBTTtRQUFrQjtLQUMxQjtJQUVELHFCQUNFLDhEQUFDRztRQUFLTCxXQUFVOzswQkFDZCw4REFBQ007Z0JBQUlOLFdBQVU7MEJBQVdGOzs7Ozs7MEJBQzFCLDhEQUFDUztnQkFBT1AsV0FBVTswQkFBd0w7Ozs7OzswQkFHMU0sOERBQUNROzBCQUNFUCxhQUFhUSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUM7b0JBQ3ZCLHFCQUFPLDhEQUFDZixpREFBSUE7d0JBQVVnQixhQUFhRjt1QkFBaEJDOzs7OztnQkFDckI7Ozs7OzswQkFFRiw4REFBQ0g7MEJBQ0VKLGdCQUFnQkssR0FBRyxDQUFDLENBQUNJLFNBQVNGO29CQUM3QixxQkFBTyw4REFBQ0c7d0JBQWtCRixhQUFhQyxRQUFRWCxJQUFJO3VCQUE1QlM7Ozs7O2dCQUN6Qjs7Ozs7Ozs7Ozs7O0FBSVIsRUFFQSxnQ0FBZ0M7R0FsQ1JkO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcHJvZmlsZS9wYWdlLmpzeD8wYjlmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgUnhBdmF0YXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvcnhcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vX2xpYi9DYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoKSB7XG4gIGNvbnN0IFthdmF0YXIsIHNldEF2YXRhcl0gPSB1c2VTdGF0ZSg8UnhBdmF0YXIgY2xhc3NOYW1lPSd3LTIwIGgtMjAnIC8+KTtcblxuICBjb25zdCBwcm9maWxlTGlua3MgPSBbXG4gICAgeyBuYW1lOiBcIkxlYWRlcmJvYXJkXCIsIGhyZWY6IFwiL2xlYWRlcmJvYXJkXCIgfSxcbiAgICB7IG5hbWU6IFwiVHJlYXN1cmUgQ29sbGVjdGlvblwiLCBocmVmOiBcIi9jb2xsZWN0aW9uXCIgfSxcbiAgXTtcblxuICBjb25zdCBwcm9maWxlUmVxdWVzdHMgPSBbXG4gICAge25hbWU6ICdDaGFuZ2UgYXZhdGFyJyB9LFxuICAgIHtuYW1lOiAnQ2hhbmdlIHVzZXJuYW1lJyB9LFxuICAgIHtuYW1lOiAnQ2hhbmdlIHBhc3N3b3JkJyB9XG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT0ndy1mdWxsIG10LTIgZmxleCBmbGV4LWNvbCBteC1hdXRvJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdteC1hdXRvJz57YXZhdGFyfTwvZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3ctMS80IHRleHQtY2VudGVyIG14LWF1dG8gbXQtMSBweC0yIHB5LTEgdHJhY2tpbmctd2lkZSB0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCB0cmFuc2Zvcm0gYmctZ3JheS04MDAgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTYwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6YmctZ3JheS02MDAnPlxuICAgICAgICBDaGFuZ2UgYXZhdGFyXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDx1bD5cbiAgICAgICAge3Byb2ZpbGVMaW5rcy5tYXAoKGxpbmssIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gPENhcmQga2V5ID17aX0gY2FyZEhlYWRpbmc9e2xpbmt9IC8+O1xuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgICA8dWw+XG4gICAgICAgIHtwcm9maWxlUmVxdWVzdHMubWFwKChyZXF1ZXN0LCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxSZXF1Q2FyZCBrZXkgPXtpfSBjYXJkSGVhZGluZz17cmVxdWVzdC5uYW1lfSAvPjtcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cblxuLy8gc2V0QXZhdGFyKDxpbWcgc3JjPXtsaW5rfSAvPilcbiJdLCJuYW1lcyI6WyJSeEF2YXRhciIsInVzZVN0YXRlIiwiQ2FyZCIsIlByb2ZpbGUiLCJhdmF0YXIiLCJzZXRBdmF0YXIiLCJjbGFzc05hbWUiLCJwcm9maWxlTGlua3MiLCJuYW1lIiwiaHJlZiIsInByb2ZpbGVSZXF1ZXN0cyIsIm1haW4iLCJkaXYiLCJidXR0b24iLCJ1bCIsIm1hcCIsImxpbmsiLCJpIiwiY2FyZEhlYWRpbmciLCJyZXF1ZXN0IiwiUmVxdUNhcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/page.jsx\n"));

/***/ })

});