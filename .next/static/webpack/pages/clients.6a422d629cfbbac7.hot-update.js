"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/clients",{

/***/ "./pages/components/clientDetails/ClientDetails.tsx":
/*!**********************************************************!*\
  !*** ./pages/components/clientDetails/ClientDetails.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ClientDetails\": function() { return /* binding */ ClientDetails; }\n/* harmony export */ });\n/* harmony import */ var _Users_maxbalej_Documents_dev_nvs_invoice_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_maxbalej_Documents_dev_nvs_invoice_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_maxbalej_Documents_dev_nvs_invoice_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper */ \"./pages/components/clientDetails/helper.ts\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../firebase */ \"./firebase.js\");\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ClientDetails = function(param) {\n    var open = param.open, setOpenClient = param.setOpenClient, clientDetails = param.clientDetails;\n    _s();\n    var handleClose = function() {\n        return setOpenClient(false);\n    };\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var address = clientDetails.address, city = clientDetails.city, email = clientDetails.email, firstName = clientDetails.firstName, lastName = clientDetails.lastName, npa = clientDetails.npa, phone = clientDetails.phone, id = clientDetails.id;\n    console.log(id);\n    var handleDelete = function() {\n        var _ref = _asyncToGenerator(_Users_maxbalej_Documents_dev_nvs_invoice_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_maxbalej_Documents_dev_nvs_invoice_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.deleteDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, \"clients\", id));\n                    case 2:\n                        router.reload();\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleDelete() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Modal, {\n        open: open,\n        onClose: handleClose,\n        \"aria-labelledby\": \"modal-modal-title\",\n        \"aria-describedby\": \"modal-modal-description\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {\n            sx: _helper__WEBPACK_IMPORTED_MODULE_3__.style,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                    id: \"modal-modal-title\",\n                    variant: \"h3\",\n                    component: \"h2\",\n                    sx: {\n                        mb: 2\n                    },\n                    children: [\n                        firstName,\n                        \" \",\n                        lastName\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/maxbalej/Documents/dev/nvs-invoice-app/client/pages/components/clientDetails/ClientDetails.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                    children: email\n                }, void 0, false, {\n                    fileName: \"/Users/maxbalej/Documents/dev/nvs-invoice-app/client/pages/components/clientDetails/ClientDetails.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                    sx: {\n                        mb: 2\n                    },\n                    children: phone\n                }, void 0, false, {\n                    fileName: \"/Users/maxbalej/Documents/dev/nvs-invoice-app/client/pages/components/clientDetails/ClientDetails.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                    children: address\n                }, void 0, false, {\n                    fileName: \"/Users/maxbalej/Documents/dev/nvs-invoice-app/client/pages/components/clientDetails/ClientDetails.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                    sx: {\n                        mb: 5\n                    },\n                    children: [\n                        city,\n                        \" - \",\n                        npa\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/maxbalej/Documents/dev/nvs-invoice-app/client/pages/components/clientDetails/ClientDetails.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                    onClick: handleDelete,\n                    color: \"error\",\n                    children: \"Delete Client\"\n                }, void 0, false, {\n                    fileName: \"/Users/maxbalej/Documents/dev/nvs-invoice-app/client/pages/components/clientDetails/ClientDetails.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/maxbalej/Documents/dev/nvs-invoice-app/client/pages/components/clientDetails/ClientDetails.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/maxbalej/Documents/dev/nvs-invoice-app/client/pages/components/clientDetails/ClientDetails.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, _this));\n};\n_s(ClientDetails, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = ClientDetails;\nvar _c;\n$RefreshReg$(_c, \"ClientDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2NsaWVudERldGFpbHMvQ2xpZW50RGV0YWlscy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThEO0FBQ0o7QUFFbkI7QUFDWTtBQUNaO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLEdBQUssQ0FBQ1UsYUFBYSxHQUE2QixRQUNsRCxRQUdDLENBQUM7UUFITEMsSUFBSSxTQUFKQSxJQUFJLEVBQ0pDLGFBQWEsU0FBYkEsYUFBYSxFQUNiQyxhQUFhLFNBQWJBLGFBQWE7O0lBRWIsR0FBSyxDQUFDQyxXQUFXLEdBQUcsUUFBUTtRQUFGRixNQUFNLENBQU5BLGFBQWEsQ0FBQyxLQUFLOztJQUU3QyxHQUFLLENBQUNHLE1BQU0sR0FBR1Asc0RBQVM7SUFFeEIsR0FBSyxDQUNIUSxPQUFPLEdBUVFILGFBQWEsQ0FSNUJHLE9BQU8sRUFDUEMsSUFBSSxHQU9XSixhQUFhLENBUDVCSSxJQUFJLEVBQ0pDLEtBQUssR0FNVUwsYUFBYSxDQU41QkssS0FBSyxFQUNMQyxTQUFTLEdBS01OLGFBQWEsQ0FMNUJNLFNBQVMsRUFDVEMsUUFBUSxHQUlPUCxhQUFhLENBSjVCTyxRQUFRLEVBQ1JDLEdBQUcsR0FHWVIsYUFBYSxDQUg1QlEsR0FBRyxFQUNIQyxLQUFLLEdBRVVULGFBQWEsQ0FGNUJTLEtBQUssRUFDTEMsRUFBRSxHQUNhVixhQUFhLENBRDVCVSxFQUFFO0lBR0pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixFQUFFO0lBRWQsR0FBSyxDQUFDRyxZQUFZO3FNQUFHLFFBQVEsV0FBSSxDQUFDOzs7OzsrQkFDMUJuQiw2REFBUyxDQUFDRCx1REFBRyxDQUFDRyx5Q0FBRSxFQUFFLENBQVMsVUFBRWMsRUFBRTs7d0JBQ3JDUixNQUFNLENBQUNZLE1BQU07Ozs7OztRQUNmLENBQUM7d0JBSEtELFlBQVk7Ozs7SUFJbEIsTUFBTSw2RUFDSHhCLGdEQUFLO1FBQ0pTLElBQUksRUFBRUEsSUFBSTtRQUNWaUIsT0FBTyxFQUFFZCxXQUFXO1FBQ3BCZSxDQUFlLGtCQUFDLENBQW1CO1FBQ25DQyxDQUFnQixtQkFBQyxDQUF5Qjs4RkFFekM5Qiw4Q0FBRztZQUFDK0IsRUFBRSxFQUFFMUIsMENBQUs7OzRGQUNYRixxREFBVTtvQkFDVG9CLEVBQUUsRUFBQyxDQUFtQjtvQkFDdEJTLE9BQU8sRUFBQyxDQUFJO29CQUNaQyxTQUFTLEVBQUMsQ0FBSTtvQkFDZEYsRUFBRSxFQUFFLENBQUM7d0JBQUNHLEVBQUUsRUFBRSxDQUFDO29CQUFDLENBQUM7O3dCQUVaZixTQUFTO3dCQUFDLENBQUM7d0JBQUNDLFFBQVE7Ozs7Ozs7NEZBR3RCakIscURBQVU7OEJBQUVlLEtBQUs7Ozs7Ozs0RkFDakJmLHFEQUFVO29CQUFDNEIsRUFBRSxFQUFFLENBQUM7d0JBQUNHLEVBQUUsRUFBRSxDQUFDO29CQUFDLENBQUM7OEJBQUdaLEtBQUs7Ozs7Ozs0RkFDaENuQixxREFBVTs4QkFBRWEsT0FBTzs7Ozs7OzRGQUNuQmIscURBQVU7b0JBQUM0QixFQUFFLEVBQUUsQ0FBQzt3QkFBQ0csRUFBRSxFQUFFLENBQUM7b0JBQUMsQ0FBQzs7d0JBQ3RCakIsSUFBSTt3QkFBQyxDQUFHO3dCQUFDSSxHQUFHOzs7Ozs7OzRGQUdkcEIsaURBQU07b0JBQUNrQyxPQUFPLEVBQUVULFlBQVk7b0JBQUVVLEtBQUssRUFBQyxDQUFPOzhCQUFDLENBRTdDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlSLENBQUM7R0F4RFkxQixhQUFhOztRQU9URixrREFBUzs7O0tBUGJFLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9jbGllbnREZXRhaWxzL0NsaWVudERldGFpbHMudHN4PzYyMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24sIE1vZGFsLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElDbGllbnREYXRhIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQcm9wcywgc3R5bGUgfSBmcm9tIFwiLi9oZWxwZXJcIjtcbmltcG9ydCB7IGRvYywgZGVsZXRlRG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi8uLi8uLi9maXJlYmFzZVwiO1xuXG5leHBvcnQgY29uc3QgQ2xpZW50RGV0YWlsczogRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHtcbiAgb3BlbixcbiAgc2V0T3BlbkNsaWVudCxcbiAgY2xpZW50RGV0YWlscyxcbn0pID0+IHtcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiBzZXRPcGVuQ2xpZW50KGZhbHNlKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCB7XG4gICAgYWRkcmVzcyxcbiAgICBjaXR5LFxuICAgIGVtYWlsLFxuICAgIGZpcnN0TmFtZSxcbiAgICBsYXN0TmFtZSxcbiAgICBucGEsXG4gICAgcGhvbmUsXG4gICAgaWQsXG4gIH06IElDbGllbnREYXRhID0gY2xpZW50RGV0YWlscztcblxuICBjb25zb2xlLmxvZyhpZCk7XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGRlbGV0ZURvYyhkb2MoZGIsIFwiY2xpZW50c1wiLCBpZCkpO1xuICAgIHJvdXRlci5yZWxvYWQoKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8TW9kYWxcbiAgICAgIG9wZW49e29wZW59XG4gICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcbiAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXG4gICAgPlxuICAgICAgPEJveCBzeD17c3R5bGV9PlxuICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgIGlkPVwibW9kYWwtbW9kYWwtdGl0bGVcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJoM1wiXG4gICAgICAgICAgY29tcG9uZW50PVwiaDJcIlxuICAgICAgICAgIHN4PXt7IG1iOiAyIH19XG4gICAgICAgID5cbiAgICAgICAgICB7Zmlyc3ROYW1lfSB7bGFzdE5hbWV9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICA8VHlwb2dyYXBoeT57ZW1haWx9PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtYjogMiB9fT57cGhvbmV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeT57YWRkcmVzc308L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG1iOiA1IH19PlxuICAgICAgICAgIHtjaXR5fSAtIHtucGF9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZX0gY29sb3I9XCJlcnJvclwiPlxuICAgICAgICAgIERlbGV0ZSBDbGllbnRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0JveD5cbiAgICA8L01vZGFsPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJNb2RhbCIsIlR5cG9ncmFwaHkiLCJSZWFjdCIsInN0eWxlIiwiZG9jIiwiZGVsZXRlRG9jIiwidXNlUm91dGVyIiwiZGIiLCJDbGllbnREZXRhaWxzIiwib3BlbiIsInNldE9wZW5DbGllbnQiLCJjbGllbnREZXRhaWxzIiwiaGFuZGxlQ2xvc2UiLCJyb3V0ZXIiLCJhZGRyZXNzIiwiY2l0eSIsImVtYWlsIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJucGEiLCJwaG9uZSIsImlkIiwiY29uc29sZSIsImxvZyIsImhhbmRsZURlbGV0ZSIsInJlbG9hZCIsIm9uQ2xvc2UiLCJhcmlhLWxhYmVsbGVkYnkiLCJhcmlhLWRlc2NyaWJlZGJ5Iiwic3giLCJ2YXJpYW50IiwiY29tcG9uZW50IiwibWIiLCJvbkNsaWNrIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/clientDetails/ClientDetails.tsx\n");

/***/ })

});