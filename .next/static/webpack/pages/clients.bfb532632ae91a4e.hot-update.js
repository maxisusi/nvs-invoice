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

/***/ "./pages/components/clientDetails/helper.ts":
/*!**************************************************!*\
  !*** ./pages/components/clientDetails/helper.ts ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"style\": function() { return /* binding */ style; }\n/* harmony export */ });\nvar style = {\n    position: \"absolute\",\n    top: \"50%\",\n    left: \"50%\",\n    transform: \"translate(-50%, -50%)\",\n    minWidth: \"30%\",\n    bgcolor: \"background.paper\",\n    border: \"2px solid #000\",\n    boxShadow: 24,\n    p: 4\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2NsaWVudERldGFpbHMvaGVscGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFTyxHQUFLLENBQUNBLEtBQUssR0FBRyxDQUFDO0lBQ3BCQyxRQUFRLEVBQUUsQ0FBVTtJQUNwQkMsR0FBRyxFQUFFLENBQUs7SUFDVkMsSUFBSSxFQUFFLENBQUs7SUFDWEMsU0FBUyxFQUFFLENBQXVCO0lBQ2xDQyxRQUFRLEVBQUUsQ0FBSztJQUNmQyxPQUFPLEVBQUUsQ0FBa0I7SUFDM0JDLE1BQU0sRUFBRSxDQUFnQjtJQUN4QkMsU0FBUyxFQUFFLEVBQUU7SUFDYkMsQ0FBQyxFQUFFLENBQUM7QUFDTixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvY2xpZW50RGV0YWlscy9oZWxwZXIudHM/MDZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQ2xpZW50RGF0YSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3Qgc3R5bGUgPSB7XG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIgYXMgXCJhYnNvbHV0ZVwiLFxuICB0b3A6IFwiNTAlXCIsXG4gIGxlZnQ6IFwiNTAlXCIsXG4gIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcbiAgbWluV2lkdGg6IFwiMzAlXCIsXG4gIGJnY29sb3I6IFwiYmFja2dyb3VuZC5wYXBlclwiLFxuICBib3JkZXI6IFwiMnB4IHNvbGlkICMwMDBcIixcbiAgYm94U2hhZG93OiAyNCxcbiAgcDogNCxcbn07XG5cbmV4cG9ydCB0eXBlIFByb3BzID0ge1xuICBvcGVuOiBib29sZWFuO1xuICBzZXRPcGVuQ2xpZW50KHBhcmFtOiBib29sZWFuKTogdm9pZDtcbiAgY2xpZW50RGV0YWlsczogSUNsaWVudERhdGEgfCBbXTtcbn07XG4iXSwibmFtZXMiOlsic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJtaW5XaWR0aCIsImJnY29sb3IiLCJib3JkZXIiLCJib3hTaGFkb3ciLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/clientDetails/helper.ts\n");

/***/ })

});