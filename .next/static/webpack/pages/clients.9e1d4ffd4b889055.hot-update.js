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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"style\": function() { return /* binding */ style; },\n/* harmony export */   \"ClientDetails\": function() { return /* binding */ ClientDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _this = undefined;\nvar style = {\n    position: \"absolute\",\n    top: \"50%\",\n    left: \"50%\",\n    transform: \"translate(-50%, -50%)\",\n    minWidth: \"50%\",\n    bgcolor: \"background.paper\",\n    border: \"2px solid #000\",\n    boxShadow: 24,\n    p: 4\n};\nvar ClientDetails = function(param) {\n    var open = param.open, setOpenClient = param.setOpenClient, clientDetails = param.clientDetails;\n    var handleClose = function() {\n        return setOpenClient(false);\n    };\n    var address = clientDetails.address, city = clientDetails.city, email = clientDetails.email, firstName = clientDetails.firstName, lastName = clientDetails.lastName, npa = clientDetails.npa, phone = clientDetails.phone, id = clientDetails.id;\n    console.log(clientDetails);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Modal, {\n        open: open,\n        onClose: handleClose,\n        \"aria-labelledby\": \"modal-modal-title\",\n        \"aria-describedby\": \"modal-modal-description\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            sx: style,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                id: \"modal-modal-title\",\n                variant: \"h5\",\n                component: \"h2\",\n                sx: {\n                    mb: 2\n                },\n                children: \"firstName\"\n            }, void 0, false, {\n                fileName: \"/Users/maxbalej/Documents/dev/nvs-invoice-app/client/pages/components/clientDetails/ClientDetails.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/maxbalej/Documents/dev/nvs-invoice-app/client/pages/components/clientDetails/ClientDetails.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/maxbalej/Documents/dev/nvs-invoice-app/client/pages/components/clientDetails/ClientDetails.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, _this));\n};\n_c = ClientDetails;\nvar _c;\n$RefreshReg$(_c, \"ClientDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2NsaWVudERldGFpbHMvQ2xpZW50RGV0YWlscy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBc0Q7QUFDZjs7QUFHaEMsR0FBSyxDQUFDSSxLQUFLLEdBQUcsQ0FBQztJQUNwQkMsUUFBUSxFQUFFLENBQVU7SUFDcEJDLEdBQUcsRUFBRSxDQUFLO0lBQ1ZDLElBQUksRUFBRSxDQUFLO0lBQ1hDLFNBQVMsRUFBRSxDQUF1QjtJQUNsQ0MsUUFBUSxFQUFFLENBQUs7SUFDZkMsT0FBTyxFQUFFLENBQWtCO0lBQzNCQyxNQUFNLEVBQUUsQ0FBZ0I7SUFDeEJDLFNBQVMsRUFBRSxFQUFFO0lBQ2JDLENBQUMsRUFBRSxDQUFDO0FBQ04sQ0FBQztBQUVNLEdBQUssQ0FBQ0MsYUFBYSxHQUFHLFFBQVEsUUFBb0MsQ0FBQztRQUExQ0MsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLGFBQWEsU0FBYkEsYUFBYSxFQUFFQyxhQUFhLFNBQWJBLGFBQWE7SUFDaEUsR0FBSyxDQUFDQyxXQUFXLEdBQUcsUUFBUTtRQUFGRixNQUFNLENBQU5BLGFBQWEsQ0FBQyxLQUFLOztJQUU3QyxHQUFLLENBQ0hHLE9BQU8sR0FRUUYsYUFBYSxDQVI1QkUsT0FBTyxFQUNQQyxJQUFJLEdBT1dILGFBQWEsQ0FQNUJHLElBQUksRUFDSkMsS0FBSyxHQU1VSixhQUFhLENBTjVCSSxLQUFLLEVBQ0xDLFNBQVMsR0FLTUwsYUFBYSxDQUw1QkssU0FBUyxFQUNUQyxRQUFRLEdBSU9OLGFBQWEsQ0FKNUJNLFFBQVEsRUFDUkMsR0FBRyxHQUdZUCxhQUFhLENBSDVCTyxHQUFHLEVBQ0hDLEtBQUssR0FFVVIsYUFBYSxDQUY1QlEsS0FBSyxFQUNMQyxFQUFFLEdBQ2FULGFBQWEsQ0FENUJTLEVBQUU7SUFFSkMsT0FBTyxDQUFDQyxHQUFHLENBQUNYLGFBQWE7SUFDekIsTUFBTSw2RUFDSGhCLGdEQUFLO1FBQ0pjLElBQUksRUFBRUEsSUFBSTtRQUNWYyxPQUFPLEVBQUVYLFdBQVc7UUFDcEJZLENBQWUsa0JBQUMsQ0FBbUI7UUFDbkNDLENBQWdCLG1CQUFDLENBQXlCOzhGQUV6Qy9CLDhDQUFHO1lBQUNnQyxFQUFFLEVBQUU1QixLQUFLO2tHQUNYRixxREFBVTtnQkFDVHdCLEVBQUUsRUFBQyxDQUFtQjtnQkFDdEJPLE9BQU8sRUFBQyxDQUFJO2dCQUNaQyxTQUFTLEVBQUMsQ0FBSTtnQkFDZEYsRUFBRSxFQUFFLENBQUM7b0JBQUNHLEVBQUUsRUFBRSxDQUFDO2dCQUFDLENBQUM7MEJBQ2QsQ0FFRDs7Ozs7Ozs7Ozs7Ozs7OztBQUlSLENBQUM7S0FqQ1lyQixhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvY2xpZW50RGV0YWlscy9DbGllbnREZXRhaWxzLnRzeD82MjIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgTW9kYWwsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJQ2xpZW50RGF0YSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3Qgc3R5bGUgPSB7XG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIgYXMgXCJhYnNvbHV0ZVwiLFxuICB0b3A6IFwiNTAlXCIsXG4gIGxlZnQ6IFwiNTAlXCIsXG4gIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcbiAgbWluV2lkdGg6IFwiNTAlXCIsXG4gIGJnY29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiLFxuICBib3JkZXI6IFwiMnB4IHNvbGlkICMwMDBcIixcbiAgYm94U2hhZG93OiAyNCxcbiAgcDogNCxcbn07XG5cbmV4cG9ydCBjb25zdCBDbGllbnREZXRhaWxzID0gKHsgb3Blbiwgc2V0T3BlbkNsaWVudCwgY2xpZW50RGV0YWlscyB9KSA9PiB7XG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4gc2V0T3BlbkNsaWVudChmYWxzZSk7XG5cbiAgY29uc3Qge1xuICAgIGFkZHJlc3MsXG4gICAgY2l0eSxcbiAgICBlbWFpbCxcbiAgICBmaXJzdE5hbWUsXG4gICAgbGFzdE5hbWUsXG4gICAgbnBhLFxuICAgIHBob25lLFxuICAgIGlkLFxuICB9OiBJQ2xpZW50RGF0YSA9IGNsaWVudERldGFpbHM7XG4gIGNvbnNvbGUubG9nKGNsaWVudERldGFpbHMpO1xuICByZXR1cm4gKFxuICAgIDxNb2RhbFxuICAgICAgb3Blbj17b3Blbn1cbiAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxuICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcbiAgICA+XG4gICAgICA8Qm94IHN4PXtzdHlsZX0+XG4gICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgaWQ9XCJtb2RhbC1tb2RhbC10aXRsZVwiXG4gICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICBjb21wb25lbnQ9XCJoMlwiXG4gICAgICAgICAgc3g9e3sgbWI6IDIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIGZpcnN0TmFtZVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L0JveD5cbiAgICA8L01vZGFsPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJCb3giLCJNb2RhbCIsIlR5cG9ncmFwaHkiLCJSZWFjdCIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwibWluV2lkdGgiLCJiZ2NvbG9yIiwiYm9yZGVyIiwiYm94U2hhZG93IiwicCIsIkNsaWVudERldGFpbHMiLCJvcGVuIiwic2V0T3BlbkNsaWVudCIsImNsaWVudERldGFpbHMiLCJoYW5kbGVDbG9zZSIsImFkZHJlc3MiLCJjaXR5IiwiZW1haWwiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsIm5wYSIsInBob25lIiwiaWQiLCJjb25zb2xlIiwibG9nIiwib25DbG9zZSIsImFyaWEtbGFiZWxsZWRieSIsImFyaWEtZGVzY3JpYmVkYnkiLCJzeCIsInZhcmlhbnQiLCJjb21wb25lbnQiLCJtYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/clientDetails/ClientDetails.tsx\n");

/***/ })

});