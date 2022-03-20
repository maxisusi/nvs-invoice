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

/***/ "./pages/components/clientList/useClientList.tsx":
/*!*******************************************************!*\
  !*** ./pages/components/clientList/useClientList.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useClientList\": function() { return /* binding */ useClientList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar useClientList = function(clientList) {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), rows = ref[0], setRows = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), openClient = ref1[0], setOpenClient = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), clientDetails = ref2[0], setClientDetails = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var trim = clientList.map(function(elem) {\n            return {\n                id: elem.id,\n                firstName: elem.firstName,\n                lastName: elem.lastName,\n                email: elem.email,\n                phone: elem.phone\n            };\n        });\n        setRows(trim);\n    }, [\n        clientList\n    ]);\n    var openClientDetails = function(id) {\n        var filteredList = clientList.filter(function(elem) {\n            return elem.id == id;\n        });\n        setOpenClient(true);\n        setClientDetails(filteredList[0]);\n    };\n    var columns = [\n        {\n            field: \"fullName\",\n            headerName: \"Full name\",\n            description: \"This column has a value getter and is not sortable.\",\n            sortable: false,\n            width: 160,\n            valueGetter: function(params) {\n                return \"\".concat(params.row.firstName || \"\", \" \").concat(params.row.lastName || \"\");\n            }\n        },\n        {\n            field: \"email\",\n            headerName: \"Email\",\n            width: 150,\n            editable: true\n        },\n        {\n            field: \"phone\",\n            headerName: \"Phone number\",\n            width: 150,\n            editable: true\n        },\n        {\n            field: \"view\",\n            headerName: \"View\",\n            renderCell: function(cellValues) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    variant: \"contained\",\n                    color: \"primary\",\n                    size: \"small\",\n                    onClick: function(event) {\n                        var id = cellValues.id;\n                        openClientDetails(id);\n                    },\n                    children: \"View\"\n                }, void 0, false, {\n                    fileName: \"/Users/maxbalej/Documents/dev/nvs-invoice-app/client/pages/components/clientList/useClientList.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, _this1));\n            }\n        }, \n    ];\n    return {\n        rows: rows,\n        columns: columns,\n        useClientList: useClientList,\n        openClientDetails: openClientDetails,\n        clientDetails: clientDetails,\n        openClient: openClient,\n        setOpenClient: setOpenClient\n    };\n};\n_s(useClientList, \"EZ4KpJZCe9O3Kd9M2AJmwstuaDY=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2NsaWVudExpc3QvdXNlQ2xpZW50TGlzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrRDtBQUNaOzs7QUFRL0IsR0FBSyxDQUFDSSxhQUFhLEdBQUcsUUFBUSxDQUFQQyxVQUF5QixFQUFLLENBQUM7OztJQUMzRCxHQUFLLENBQW1CSCxHQUFpQixHQUFqQkEsK0NBQVEsQ0FBTSxDQUFDLENBQUMsR0FBakNJLElBQUksR0FBYUosR0FBaUIsS0FBNUJLLE9BQU8sR0FBSUwsR0FBaUI7SUFDekMsR0FBSyxDQUErQkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBM0NNLFVBQVUsR0FBbUJOLElBQWUsS0FBaENPLGFBQWEsR0FBSVAsSUFBZTtJQUNuRCxHQUFLLENBQXFDQSxJQUErQixHQUEvQkEsK0NBQVEsQ0FBb0IsQ0FBQyxDQUFDLEdBQWpFUSxhQUFhLEdBQXNCUixJQUErQixLQUFuRFMsZ0JBQWdCLEdBQUlULElBQStCO0lBRXpFRCxnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmLEdBQUssQ0FBQ1csSUFBSSxHQUFHUCxVQUFVLENBQUNRLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBSyxDQUFDO1lBQ3JDLE1BQU0sQ0FBQyxDQUFDO2dCQUNOQyxFQUFFLEVBQUVELElBQUksQ0FBQ0MsRUFBRTtnQkFDWEMsU0FBUyxFQUFFRixJQUFJLENBQUNFLFNBQVM7Z0JBQ3pCQyxRQUFRLEVBQUVILElBQUksQ0FBQ0csUUFBUTtnQkFDdkJDLEtBQUssRUFBRUosSUFBSSxDQUFDSSxLQUFLO2dCQUNqQkMsS0FBSyxFQUFFTCxJQUFJLENBQUNLLEtBQUs7WUFDbkIsQ0FBQztRQUNILENBQUM7UUFDRFosT0FBTyxDQUFDSyxJQUFJO0lBQ2QsQ0FBQyxFQUFFLENBQUNQO1FBQUFBLFVBQVU7SUFBQSxDQUFDO0lBRWYsR0FBSyxDQUFDZSxpQkFBaUIsR0FBRyxRQUFRLENBQVBMLEVBQVUsRUFBSyxDQUFDO1FBQ3pDLEdBQUssQ0FBQ00sWUFBWSxHQUFHaEIsVUFBVSxDQUFDaUIsTUFBTSxDQUFDLFFBQVEsQ0FBUFIsSUFBSTtZQUFLQSxNQUFNLENBQU5BLElBQUksQ0FBQ0MsRUFBRSxJQUFJQSxFQUFFOztRQUM5RE4sYUFBYSxDQUFDLElBQUk7UUFDbEJFLGdCQUFnQixDQUFDVSxZQUFZLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsR0FBSyxDQUFDRSxPQUFPLEdBQWlCLENBQUM7UUFDN0IsQ0FBQztZQUNDQyxLQUFLLEVBQUUsQ0FBVTtZQUNqQkMsVUFBVSxFQUFFLENBQVc7WUFDdkJDLFdBQVcsRUFBRSxDQUFxRDtZQUNsRUMsUUFBUSxFQUFFLEtBQUs7WUFDZkMsS0FBSyxFQUFFLEdBQUc7WUFDVkMsV0FBVyxFQUFFLFFBQVEsQ0FBUEMsTUFBNkI7Z0JBQ3pDLE1BQU0sQ0FBTCxHQUFnQ0EsTUFBeUIsQ0FBdkRBLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDZixTQUFTLElBQUksQ0FBRSxHQUFDLENBQUMsSUFBNEIsT0FBMUJjLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDZCxRQUFRLElBQUksQ0FBRTs7UUFDOUQsQ0FBQztRQUNELENBQUM7WUFDQ08sS0FBSyxFQUFFLENBQU87WUFDZEMsVUFBVSxFQUFFLENBQU87WUFDbkJHLEtBQUssRUFBRSxHQUFHO1lBQ1ZJLFFBQVEsRUFBRSxJQUFJO1FBQ2hCLENBQUM7UUFDRCxDQUFDO1lBQ0NSLEtBQUssRUFBRSxDQUFPO1lBQ2RDLFVBQVUsRUFBRSxDQUFjO1lBQzFCRyxLQUFLLEVBQUUsR0FBRztZQUNWSSxRQUFRLEVBQUUsSUFBSTtRQUNoQixDQUFDO1FBQ0QsQ0FBQztZQUNDUixLQUFLLEVBQUUsQ0FBTTtZQUNiQyxVQUFVLEVBQUUsQ0FBTTtZQUNsQlEsVUFBVSxFQUFFLFFBQVEsQ0FBUEMsVUFBMEIsRUFBSyxDQUFDO2dCQUMzQyxNQUFNLDZFQUNIL0IsaURBQU07b0JBQ0xnQyxPQUFPLEVBQUMsQ0FBVztvQkFDbkJDLEtBQUssRUFBQyxDQUFTO29CQUNmQyxJQUFJLEVBQUMsQ0FBTztvQkFDWkMsT0FBTyxFQUFFLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7d0JBQ25CLEdBQUssQ0FBQ3hCLEVBQUUsR0FBR21CLFVBQVUsQ0FBQ25CLEVBQUU7d0JBQ3hCSyxpQkFBaUIsQ0FBQ0wsRUFBRTtvQkFDdEIsQ0FBQzs4QkFDRixDQUVEOzs7Ozs7WUFFSixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsQ0FBQztRQUNOVCxJQUFJLEVBQUpBLElBQUk7UUFDSmlCLE9BQU8sRUFBUEEsT0FBTztRQUNQbkIsYUFBYSxFQUFiQSxhQUFhO1FBQ2JnQixpQkFBaUIsRUFBakJBLGlCQUFpQjtRQUNqQlYsYUFBYSxFQUFiQSxhQUFhO1FBQ2JGLFVBQVUsRUFBVkEsVUFBVTtRQUNWQyxhQUFhLEVBQWJBLGFBQWE7SUFDZixDQUFDO0FBQ0gsQ0FBQztHQTVFWUwsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL2NsaWVudExpc3QvdXNlQ2xpZW50TGlzdC50c3g/ODlmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7XG4gIEdyaWRDZWxsUGFyYW1zLFxuICBHcmlkQ29sRGVmLFxuICBHcmlkVmFsdWVHZXR0ZXJQYXJhbXMsXG59IGZyb20gXCJAbXVpL3gtZGF0YS1ncmlkXCI7XG5pbXBvcnQgeyBJQ2xpZW50RGF0YSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgdXNlQ2xpZW50TGlzdCA9IChjbGllbnRMaXN0OiBJQ2xpZW50RGF0YVtdKSA9PiB7XG4gIGNvbnN0IFtyb3dzLCBzZXRSb3dzXSA9IHVzZVN0YXRlPGFueT4oW10pO1xuICBjb25zdCBbb3BlbkNsaWVudCwgc2V0T3BlbkNsaWVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjbGllbnREZXRhaWxzLCBzZXRDbGllbnREZXRhaWxzXSA9IHVzZVN0YXRlPElDbGllbnREYXRhIHwgYW55PihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0cmltID0gY2xpZW50TGlzdC5tYXAoKGVsZW0pID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBlbGVtLmlkLFxuICAgICAgICBmaXJzdE5hbWU6IGVsZW0uZmlyc3ROYW1lLFxuICAgICAgICBsYXN0TmFtZTogZWxlbS5sYXN0TmFtZSxcbiAgICAgICAgZW1haWw6IGVsZW0uZW1haWwsXG4gICAgICAgIHBob25lOiBlbGVtLnBob25lLFxuICAgICAgfTtcbiAgICB9KTtcbiAgICBzZXRSb3dzKHRyaW0pO1xuICB9LCBbY2xpZW50TGlzdF0pO1xuXG4gIGNvbnN0IG9wZW5DbGllbnREZXRhaWxzID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBmaWx0ZXJlZExpc3QgPSBjbGllbnRMaXN0LmZpbHRlcigoZWxlbSkgPT4gZWxlbS5pZCA9PSBpZCk7XG4gICAgc2V0T3BlbkNsaWVudCh0cnVlKTtcbiAgICBzZXRDbGllbnREZXRhaWxzKGZpbHRlcmVkTGlzdFswXSk7XG4gIH07XG5cbiAgY29uc3QgY29sdW1uczogR3JpZENvbERlZltdID0gW1xuICAgIHtcbiAgICAgIGZpZWxkOiBcImZ1bGxOYW1lXCIsXG4gICAgICBoZWFkZXJOYW1lOiBcIkZ1bGwgbmFtZVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBjb2x1bW4gaGFzIGEgdmFsdWUgZ2V0dGVyIGFuZCBpcyBub3Qgc29ydGFibGUuXCIsXG4gICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICB3aWR0aDogMTYwLFxuICAgICAgdmFsdWVHZXR0ZXI6IChwYXJhbXM6IEdyaWRWYWx1ZUdldHRlclBhcmFtcykgPT5cbiAgICAgICAgYCR7cGFyYW1zLnJvdy5maXJzdE5hbWUgfHwgXCJcIn0gJHtwYXJhbXMucm93Lmxhc3ROYW1lIHx8IFwiXCJ9YCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZpZWxkOiBcImVtYWlsXCIsXG4gICAgICBoZWFkZXJOYW1lOiBcIkVtYWlsXCIsXG4gICAgICB3aWR0aDogMTUwLFxuICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBmaWVsZDogXCJwaG9uZVwiLFxuICAgICAgaGVhZGVyTmFtZTogXCJQaG9uZSBudW1iZXJcIixcbiAgICAgIHdpZHRoOiAxNTAsXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZpZWxkOiBcInZpZXdcIixcbiAgICAgIGhlYWRlck5hbWU6IFwiVmlld1wiLFxuICAgICAgcmVuZGVyQ2VsbDogKGNlbGxWYWx1ZXM6IEdyaWRDZWxsUGFyYW1zKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpZCA9IGNlbGxWYWx1ZXMuaWQgYXMgc3RyaW5nO1xuICAgICAgICAgICAgICBvcGVuQ2xpZW50RGV0YWlscyhpZCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFZpZXdcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4ge1xuICAgIHJvd3MsXG4gICAgY29sdW1ucyxcbiAgICB1c2VDbGllbnRMaXN0LFxuICAgIG9wZW5DbGllbnREZXRhaWxzLFxuICAgIGNsaWVudERldGFpbHMsXG4gICAgb3BlbkNsaWVudCxcbiAgICBzZXRPcGVuQ2xpZW50LFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwidXNlQ2xpZW50TGlzdCIsImNsaWVudExpc3QiLCJyb3dzIiwic2V0Um93cyIsIm9wZW5DbGllbnQiLCJzZXRPcGVuQ2xpZW50IiwiY2xpZW50RGV0YWlscyIsInNldENsaWVudERldGFpbHMiLCJ0cmltIiwibWFwIiwiZWxlbSIsImlkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInBob25lIiwib3BlbkNsaWVudERldGFpbHMiLCJmaWx0ZXJlZExpc3QiLCJmaWx0ZXIiLCJjb2x1bW5zIiwiZmllbGQiLCJoZWFkZXJOYW1lIiwiZGVzY3JpcHRpb24iLCJzb3J0YWJsZSIsIndpZHRoIiwidmFsdWVHZXR0ZXIiLCJwYXJhbXMiLCJyb3ciLCJlZGl0YWJsZSIsInJlbmRlckNlbGwiLCJjZWxsVmFsdWVzIiwidmFyaWFudCIsImNvbG9yIiwic2l6ZSIsIm9uQ2xpY2siLCJldmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/clientList/useClientList.tsx\n");

/***/ })

});