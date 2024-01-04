"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/_lib/LoginCard.jsx":
/*!************************************!*\
  !*** ./src/app/_lib/LoginCard.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/api */ \"(app-pages-browser)/./src/utils/api.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction LoginCard(param) {\n    let { defaultPageInfo: { firstFormButtonName, secondFormButtonName, secondFormDescription }, pageName, setPageName, setUser } = param;\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isSubmitted, setIsSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (firstFormButtonName === \"Login\") {\n            console.log(\"send get request\");\n        } else if (firstFormButtonName === \"Sign Up\") {\n            console.log(\"send a get and a post request?\");\n        }\n        setUser();\n        router.push(\"/home\");\n        setUsername(\"\");\n        setPassword(\"\");\n        setIsSubmitted(true);\n    };\n    const handleClick = (e)=>{\n        e.preventDefault();\n        if (pageName === \"Sign Up\") {\n            setPageName(\"Login\");\n        } else if (pageName === \"Login\") {\n            setPageName(\"Sign Up\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (isSubmitted) {\n            (0,_utils_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        }\n    }, [\n        isSubmitted\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"w-full max-w-md mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden p-8 m-8\",\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none dark:text-gray-300 dark:bg-gray-700\",\n                        type: \"text\",\n                        placeholder: \"Username...\",\n                        value: username,\n                        required: true,\n                        onChange: (e)=>setUsername(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/_lib/LoginCard.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none dark:text-gray-300 dark:bg-gray-700\",\n                        type: \"password\",\n                        placeholder: \"Password...\",\n                        value: password,\n                        required: true,\n                        onChange: (e)=>setPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/_lib/LoginCard.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4 mt-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600\",\n                            type: \"submit\",\n                            children: firstFormButtonName\n                        }, void 0, false, {\n                            fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/_lib/LoginCard.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/_lib/LoginCard.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/_lib/LoginCard.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"w-full max-w-md mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden p-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: secondFormDescription\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/_lib/LoginCard.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4 mt-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600\",\n                            type: \"submit\",\n                            onClick: handleClick,\n                            children: secondFormButtonName\n                        }, void 0, false, {\n                            fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/_lib/LoginCard.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/_lib/LoginCard.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/_lib/LoginCard.jsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(LoginCard, \"6yBappKxGPE1iONJDDv4fIalmRM=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = LoginCard;\nvar _c;\n$RefreshReg$(_c, \"LoginCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2xpYi9Mb2dpbkNhcmQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFvQztBQUNRO0FBQ0E7QUFFN0IsU0FBU0ksVUFBVSxLQVNqQztRQVRpQyxFQUNoQ0MsaUJBQWlCLEVBQ2ZDLG1CQUFtQixFQUNuQkMsb0JBQW9CLEVBQ3BCQyxxQkFBcUIsRUFDdEIsRUFDREMsUUFBUSxFQUNSQyxXQUFXLEVBQ1hDLE9BQU8sRUFDUixHQVRpQzs7SUFVaEMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ2EsVUFBVUMsWUFBWSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNlLGFBQWFDLGVBQWUsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1pQixTQUFTZiwwREFBU0E7SUFFeEIsTUFBTWdCLGVBQWUsQ0FBQ0M7UUFDcEJBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSWYsd0JBQXdCLFNBQVM7WUFDbkNnQixRQUFRQyxHQUFHLENBQUM7UUFDZCxPQUFPLElBQUlqQix3QkFBd0IsV0FBVztZQUM1Q2dCLFFBQVFDLEdBQUcsQ0FBQztRQUNkO1FBQ0FaO1FBQ0FPLE9BQU9NLElBQUksQ0FBQztRQUNaWCxZQUFZO1FBQ1pFLFlBQVk7UUFDWkUsZUFBZTtJQUNqQjtJQUVBLE1BQU1RLGNBQWMsQ0FBQ0w7UUFDbkJBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSVosYUFBYSxXQUFXO1lBQzFCQyxZQUFZO1FBQ2QsT0FBTyxJQUFJRCxhQUFhLFNBQVM7WUFDL0JDLFlBQVk7UUFDZDtJQUNGO0lBRUFSLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSWMsYUFBYTtZQUNmaEIsc0RBQVNBO1FBQ1g7SUFDRixHQUFHO1FBQUNnQjtLQUFZO0lBRWhCLHFCQUNFOzswQkFDRSw4REFBQ1U7Z0JBQ0NDLFdBQVU7Z0JBQ1ZDLFVBQVVUOztrQ0FFViw4REFBQ1U7d0JBQ0NGLFdBQVU7d0JBQ1ZHLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLE9BQU9wQjt3QkFDUHFCLFFBQVE7d0JBQ1JDLFVBQVUsQ0FBQ2QsSUFBTVAsWUFBWU8sRUFBRWUsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0NBRzdDLDhEQUFDSDt3QkFDQ0YsV0FBVTt3QkFDVkcsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsT0FBT2xCO3dCQUNQbUIsUUFBUTt3QkFDUkMsVUFBVSxDQUFDZCxJQUFNTCxZQUFZSyxFQUFFZSxNQUFNLENBQUNILEtBQUs7Ozs7OztrQ0FFN0MsOERBQUNJO3dCQUFJVCxXQUFVO2tDQUNiLDRFQUFDVTs0QkFDQ1YsV0FBVTs0QkFDVkcsTUFBSztzQ0FFSnhCOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLUCw4REFBQ29CO2dCQUFLQyxXQUFVOztrQ0FDZCw4REFBQ1c7a0NBQUc5Qjs7Ozs7O2tDQUNKLDhEQUFDNEI7d0JBQUlULFdBQVU7a0NBQ2IsNEVBQUNVOzRCQUNDVixXQUFVOzRCQUNWRyxNQUFLOzRCQUNMUyxTQUFTZDtzQ0FFUmxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWI7R0EzRndCSDs7UUFhUEQsc0RBQVNBOzs7S0FiRkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9fbGliL0xvZ2luQ2FyZC5qc3g/NmJjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2hEYXRhIGZyb20gXCJAL3V0aWxzL2FwaVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkNhcmQoe1xuICBkZWZhdWx0UGFnZUluZm86IHtcbiAgICBmaXJzdEZvcm1CdXR0b25OYW1lLFxuICAgIHNlY29uZEZvcm1CdXR0b25OYW1lLFxuICAgIHNlY29uZEZvcm1EZXNjcmlwdGlvbixcbiAgfSxcbiAgcGFnZU5hbWUsXG4gIHNldFBhZ2VOYW1lLFxuICBzZXRVc2VyXG59KSB7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc1N1Ym1pdHRlZCwgc2V0SXNTdWJtaXR0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZmlyc3RGb3JtQnV0dG9uTmFtZSA9PT0gJ0xvZ2luJykge1xuICAgICAgY29uc29sZS5sb2coJ3NlbmQgZ2V0IHJlcXVlc3QnKVxuICAgIH0gZWxzZSBpZiAoZmlyc3RGb3JtQnV0dG9uTmFtZSA9PT0gJ1NpZ24gVXAnKSB7XG4gICAgICBjb25zb2xlLmxvZygnc2VuZCBhIGdldCBhbmQgYSBwb3N0IHJlcXVlc3Q/JylcbiAgICB9XG4gICAgc2V0VXNlcigpXG4gICAgcm91dGVyLnB1c2goJy9ob21lJylcbiAgICBzZXRVc2VybmFtZShcIlwiKTtcbiAgICBzZXRQYXNzd29yZChcIlwiKTtcbiAgICBzZXRJc1N1Ym1pdHRlZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChwYWdlTmFtZSA9PT0gXCJTaWduIFVwXCIpIHtcbiAgICAgIHNldFBhZ2VOYW1lKFwiTG9naW5cIik7XG4gICAgfSBlbHNlIGlmIChwYWdlTmFtZSA9PT0gXCJMb2dpblwiKSB7XG4gICAgICBzZXRQYWdlTmFtZShcIlNpZ24gVXBcIik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzU3VibWl0dGVkKSB7XG4gICAgICBmZXRjaERhdGEoKTtcbiAgICB9XG4gIH0sIFtpc1N1Ym1pdHRlZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxmb3JtXG4gICAgICAgIGNsYXNzTmFtZT0ndy1mdWxsIG1heC13LW1kIG14LWF1dG8gYmctd2hpdGUgZGFyazpiZy1ncmF5LTgwMCBzaGFkb3ctbWQgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gcC04IG0tOCdcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgcHgtNCBweS0yIG10LTIgdGV4dC1ncmF5LTcwMCBiZy1ncmF5LTIwMCByb3VuZGVkLWxnIGZvY3VzOm91dGxpbmUtbm9uZSBkYXJrOnRleHQtZ3JheS0zMDAgZGFyazpiZy1ncmF5LTcwMCdcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgIHBsYWNlaG9sZGVyPSdVc2VybmFtZS4uLidcbiAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cblxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBweC00IHB5LTIgbXQtMiB0ZXh0LWdyYXktNzAwIGJnLWdyYXktMjAwIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGRhcms6dGV4dC1ncmF5LTMwMCBkYXJrOmJnLWdyYXktNzAwJ1xuICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xuICAgICAgICAgIHBsYWNlaG9sZGVyPSdQYXNzd29yZC4uLidcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTQgbXQtNCc+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgcHgtNCBweS0yIHRyYWNraW5nLXdpZGUgdGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgdHJhbnNmb3JtIGJnLWdyYXktODAwIHJvdW5kZWQgaG92ZXI6YmctZ3JheS02MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLWdyYXktNjAwJ1xuICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgID5cbiAgICAgICAgICAgIHtmaXJzdEZvcm1CdXR0b25OYW1lfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgPGZvcm0gY2xhc3NOYW1lPSd3LWZ1bGwgbWF4LXctbWQgbXgtYXV0byBiZy13aGl0ZSBkYXJrOmJnLWdyYXktODAwIHNoYWRvdy1tZCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBwLTgnPlxuICAgICAgICA8cD57c2Vjb25kRm9ybURlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTQgbXQtNCc+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgcHgtNCBweS0yIHRyYWNraW5nLXdpZGUgdGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgdHJhbnNmb3JtIGJnLWdyYXktODAwIHJvdW5kZWQgaG92ZXI6YmctZ3JheS02MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLWdyYXktNjAwJ1xuICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NlY29uZEZvcm1CdXR0b25OYW1lfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJmZXRjaERhdGEiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkxvZ2luQ2FyZCIsImRlZmF1bHRQYWdlSW5mbyIsImZpcnN0Rm9ybUJ1dHRvbk5hbWUiLCJzZWNvbmRGb3JtQnV0dG9uTmFtZSIsInNlY29uZEZvcm1EZXNjcmlwdGlvbiIsInBhZ2VOYW1lIiwic2V0UGFnZU5hbWUiLCJzZXRVc2VyIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJpc1N1Ym1pdHRlZCIsInNldElzU3VibWl0dGVkIiwicm91dGVyIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInB1c2giLCJoYW5kbGVDbGljayIsImZvcm0iLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJyZXF1aXJlZCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiZGl2IiwiYnV0dG9uIiwicCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_lib/LoginCard.jsx\n"));

/***/ })

});