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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useClientList\": function() { return /* binding */ useClientList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar useClientList = function(clientList) {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), rows = ref[0], setRows = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), openClient = ref1[0], setOpenClient = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), clientDetails = ref2[0], setClientDetails = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var trim = clientList.map(function(elem) {\n            return {\n                id: elem.id,\n                firstName: elem.firstName,\n                lastName: elem.lastName,\n                email: elem.email,\n                phone: elem.phone\n            };\n        });\n        setRows(trim);\n    }, [\n        clientList\n    ]);\n    var openClientDetails = function(id) {\n        var filteredList = clientList.filter(function(elem) {\n            return elem.id == id;\n        });\n        setOpenClient(true);\n        setClientDetails(filteredList[0]);\n    };\n    var columns = [\n        {\n            field: \"fullName\",\n            headerName: \"Full name\",\n            description: \"This column has a value getter and is not sortable.\",\n            sortable: false,\n            width: 160,\n            valueGetter: function(params) {\n                return \"\".concat(params.row.firstName || \"\", \" \").concat(params.row.lastName || \"\");\n            }\n        },\n        {\n            field: \"email\",\n            headerName: \"Email\",\n            width: 150,\n            editable: true\n        },\n        {\n            field: \"phone\",\n            headerName: \"Phone number\",\n            width: 150,\n            editable: true\n        },\n        {\n            field: \"view\",\n            headerName: \"View\",\n            renderCell: function(cellValues) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    variant: \"contained\",\n                    color: \"primary\",\n                    size: \"small\",\n                    onClick: function(event) {\n                        var id = cellValues.id;\n                        openClientDetails(id);\n                    },\n                    children: \"View\"\n                }, void 0, false, {\n                    fileName: \"/Users/maxbalej/Documents/dev/nvs-invoice-app/client/pages/components/clientList/useClientList.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, _this1));\n            }\n        }, \n    ];\n    return {\n        rows: rows,\n        columns: columns,\n        useClientList: useClientList,\n        openClientDetails: openClientDetails,\n        clientDetails: clientDetails,\n        openClient: openClient,\n        setOpenClient: setOpenClient\n    };\n};\n_s(useClientList, \"EZ4KpJZCe9O3Kd9M2AJmwstuaDY=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2NsaWVudExpc3QvdXNlQ2xpZW50TGlzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrRDtBQUNaOzs7QUFRL0IsR0FBSyxDQUFDSSxhQUFhLEdBQUcsUUFBUSxDQUFQQyxVQUF5QixFQUFLLENBQUM7OztJQUMzRCxHQUFLLENBQW1CSCxHQUFpQixHQUFqQkEsK0NBQVEsQ0FBTSxDQUFDLENBQUMsR0FBakNJLElBQUksR0FBYUosR0FBaUIsS0FBNUJLLE9BQU8sR0FBSUwsR0FBaUI7SUFDekMsR0FBSyxDQUErQkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBM0NNLFVBQVUsR0FBbUJOLElBQWUsS0FBaENPLGFBQWEsR0FBSVAsSUFBZTtJQUNuRCxHQUFLLENBQXFDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQTlDUSxhQUFhLEdBQXNCUixJQUFZLEtBQWhDUyxnQkFBZ0IsR0FBSVQsSUFBWTtJQUV0REQsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZixHQUFLLENBQUNXLElBQUksR0FBR1AsVUFBVSxDQUFDUSxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJLEVBQUssQ0FBQztZQUNyQyxNQUFNLENBQUMsQ0FBQztnQkFDTkMsRUFBRSxFQUFFRCxJQUFJLENBQUNDLEVBQUU7Z0JBQ1hDLFNBQVMsRUFBRUYsSUFBSSxDQUFDRSxTQUFTO2dCQUN6QkMsUUFBUSxFQUFFSCxJQUFJLENBQUNHLFFBQVE7Z0JBQ3ZCQyxLQUFLLEVBQUVKLElBQUksQ0FBQ0ksS0FBSztnQkFDakJDLEtBQUssRUFBRUwsSUFBSSxDQUFDSyxLQUFLO1lBQ25CLENBQUM7UUFDSCxDQUFDO1FBQ0RaLE9BQU8sQ0FBQ0ssSUFBSTtJQUNkLENBQUMsRUFBRSxDQUFDUDtRQUFBQSxVQUFVO0lBQUEsQ0FBQztJQUVmLEdBQUssQ0FBQ2UsaUJBQWlCLEdBQUcsUUFBUSxDQUFQTCxFQUFFLEVBQUssQ0FBQztRQUNqQyxHQUFLLENBQUNNLFlBQVksR0FBR2hCLFVBQVUsQ0FBQ2lCLE1BQU0sQ0FBQyxRQUFRLENBQVBSLElBQUk7WUFBS0EsTUFBTSxDQUFOQSxJQUFJLENBQUNDLEVBQUUsSUFBSUEsRUFBRTs7UUFDOUROLGFBQWEsQ0FBQyxJQUFJO1FBQ2xCRSxnQkFBZ0IsQ0FBQ1UsWUFBWSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELEdBQUssQ0FBQ0UsT0FBTyxHQUFpQixDQUFDO1FBQzdCLENBQUM7WUFDQ0MsS0FBSyxFQUFFLENBQVU7WUFDakJDLFVBQVUsRUFBRSxDQUFXO1lBQ3ZCQyxXQUFXLEVBQUUsQ0FBcUQ7WUFDbEVDLFFBQVEsRUFBRSxLQUFLO1lBQ2ZDLEtBQUssRUFBRSxHQUFHO1lBQ1ZDLFdBQVcsRUFBRSxRQUFRLENBQVBDLE1BQTZCO2dCQUN6QyxNQUFNLENBQUwsR0FBZ0NBLE1BQXlCLENBQXZEQSxNQUFNLENBQUNDLEdBQUcsQ0FBQ2YsU0FBUyxJQUFJLENBQUUsR0FBQyxDQUFDLElBQTRCLE9BQTFCYyxNQUFNLENBQUNDLEdBQUcsQ0FBQ2QsUUFBUSxJQUFJLENBQUU7O1FBQzlELENBQUM7UUFDRCxDQUFDO1lBQ0NPLEtBQUssRUFBRSxDQUFPO1lBQ2RDLFVBQVUsRUFBRSxDQUFPO1lBQ25CRyxLQUFLLEVBQUUsR0FBRztZQUNWSSxRQUFRLEVBQUUsSUFBSTtRQUNoQixDQUFDO1FBQ0QsQ0FBQztZQUNDUixLQUFLLEVBQUUsQ0FBTztZQUNkQyxVQUFVLEVBQUUsQ0FBYztZQUMxQkcsS0FBSyxFQUFFLEdBQUc7WUFDVkksUUFBUSxFQUFFLElBQUk7UUFDaEIsQ0FBQztRQUNELENBQUM7WUFDQ1IsS0FBSyxFQUFFLENBQU07WUFDYkMsVUFBVSxFQUFFLENBQU07WUFDbEJRLFVBQVUsRUFBRSxRQUFRLENBQVBDLFVBQTBCLEVBQUssQ0FBQztnQkFDM0MsTUFBTSw2RUFDSC9CLGlEQUFNO29CQUNMZ0MsT0FBTyxFQUFDLENBQVc7b0JBQ25CQyxLQUFLLEVBQUMsQ0FBUztvQkFDZkMsSUFBSSxFQUFDLENBQU87b0JBQ1pDLE9BQU8sRUFBRSxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDO3dCQUNuQixHQUFLLENBQUN4QixFQUFFLEdBQUdtQixVQUFVLENBQUNuQixFQUFFO3dCQUN4QkssaUJBQWlCLENBQUNMLEVBQUU7b0JBQ3RCLENBQUM7OEJBQ0YsQ0FFRDs7Ozs7O1lBRUosQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLENBQUM7UUFDTlQsSUFBSSxFQUFKQSxJQUFJO1FBQ0ppQixPQUFPLEVBQVBBLE9BQU87UUFDUG5CLGFBQWEsRUFBYkEsYUFBYTtRQUNiZ0IsaUJBQWlCLEVBQWpCQSxpQkFBaUI7UUFDakJWLGFBQWEsRUFBYkEsYUFBYTtRQUNiRixVQUFVLEVBQVZBLFVBQVU7UUFDVkMsYUFBYSxFQUFiQSxhQUFhO0lBQ2YsQ0FBQztBQUNILENBQUM7R0E1RVlMLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9jbGllbnRMaXN0L3VzZUNsaWVudExpc3QudHN4Pzg5ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQge1xuICBHcmlkQ2VsbFBhcmFtcyxcbiAgR3JpZENvbERlZixcbiAgR3JpZFZhbHVlR2V0dGVyUGFyYW1zLFxufSBmcm9tIFwiQG11aS94LWRhdGEtZ3JpZFwiO1xuaW1wb3J0IHsgSUNsaWVudERhdGEgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IHVzZUNsaWVudExpc3QgPSAoY2xpZW50TGlzdDogSUNsaWVudERhdGFbXSkgPT4ge1xuICBjb25zdCBbcm93cywgc2V0Um93c10gPSB1c2VTdGF0ZTxhbnk+KFtdKTtcbiAgY29uc3QgW29wZW5DbGllbnQsIHNldE9wZW5DbGllbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY2xpZW50RGV0YWlscywgc2V0Q2xpZW50RGV0YWlsc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0cmltID0gY2xpZW50TGlzdC5tYXAoKGVsZW0pID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBlbGVtLmlkLFxuICAgICAgICBmaXJzdE5hbWU6IGVsZW0uZmlyc3ROYW1lLFxuICAgICAgICBsYXN0TmFtZTogZWxlbS5sYXN0TmFtZSxcbiAgICAgICAgZW1haWw6IGVsZW0uZW1haWwsXG4gICAgICAgIHBob25lOiBlbGVtLnBob25lLFxuICAgICAgfTtcbiAgICB9KTtcbiAgICBzZXRSb3dzKHRyaW0pO1xuICB9LCBbY2xpZW50TGlzdF0pO1xuXG4gIGNvbnN0IG9wZW5DbGllbnREZXRhaWxzID0gKGlkKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyZWRMaXN0ID0gY2xpZW50TGlzdC5maWx0ZXIoKGVsZW0pID0+IGVsZW0uaWQgPT0gaWQpO1xuICAgIHNldE9wZW5DbGllbnQodHJ1ZSk7XG4gICAgc2V0Q2xpZW50RGV0YWlscyhmaWx0ZXJlZExpc3RbMF0pO1xuICB9O1xuXG4gIGNvbnN0IGNvbHVtbnM6IEdyaWRDb2xEZWZbXSA9IFtcbiAgICB7XG4gICAgICBmaWVsZDogXCJmdWxsTmFtZVwiLFxuICAgICAgaGVhZGVyTmFtZTogXCJGdWxsIG5hbWVcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgY29sdW1uIGhhcyBhIHZhbHVlIGdldHRlciBhbmQgaXMgbm90IHNvcnRhYmxlLlwiLFxuICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgd2lkdGg6IDE2MCxcbiAgICAgIHZhbHVlR2V0dGVyOiAocGFyYW1zOiBHcmlkVmFsdWVHZXR0ZXJQYXJhbXMpID0+XG4gICAgICAgIGAke3BhcmFtcy5yb3cuZmlyc3ROYW1lIHx8IFwiXCJ9ICR7cGFyYW1zLnJvdy5sYXN0TmFtZSB8fCBcIlwifWAsXG4gICAgfSxcbiAgICB7XG4gICAgICBmaWVsZDogXCJlbWFpbFwiLFxuICAgICAgaGVhZGVyTmFtZTogXCJFbWFpbFwiLFxuICAgICAgd2lkdGg6IDE1MCxcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgZmllbGQ6IFwicGhvbmVcIixcbiAgICAgIGhlYWRlck5hbWU6IFwiUGhvbmUgbnVtYmVyXCIsXG4gICAgICB3aWR0aDogMTUwLFxuICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBmaWVsZDogXCJ2aWV3XCIsXG4gICAgICBoZWFkZXJOYW1lOiBcIlZpZXdcIixcbiAgICAgIHJlbmRlckNlbGw6IChjZWxsVmFsdWVzOiBHcmlkQ2VsbFBhcmFtcykgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaWQgPSBjZWxsVmFsdWVzLmlkIGFzIHN0cmluZztcbiAgICAgICAgICAgICAgb3BlbkNsaWVudERldGFpbHMoaWQpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBWaWV3XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgIH0sXG4gIF07XG5cbiAgcmV0dXJuIHtcbiAgICByb3dzLFxuICAgIGNvbHVtbnMsXG4gICAgdXNlQ2xpZW50TGlzdCxcbiAgICBvcGVuQ2xpZW50RGV0YWlscyxcbiAgICBjbGllbnREZXRhaWxzLFxuICAgIG9wZW5DbGllbnQsXG4gICAgc2V0T3BlbkNsaWVudCxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsInVzZUNsaWVudExpc3QiLCJjbGllbnRMaXN0Iiwicm93cyIsInNldFJvd3MiLCJvcGVuQ2xpZW50Iiwic2V0T3BlbkNsaWVudCIsImNsaWVudERldGFpbHMiLCJzZXRDbGllbnREZXRhaWxzIiwidHJpbSIsIm1hcCIsImVsZW0iLCJpZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwaG9uZSIsIm9wZW5DbGllbnREZXRhaWxzIiwiZmlsdGVyZWRMaXN0IiwiZmlsdGVyIiwiY29sdW1ucyIsImZpZWxkIiwiaGVhZGVyTmFtZSIsImRlc2NyaXB0aW9uIiwic29ydGFibGUiLCJ3aWR0aCIsInZhbHVlR2V0dGVyIiwicGFyYW1zIiwicm93IiwiZWRpdGFibGUiLCJyZW5kZXJDZWxsIiwiY2VsbFZhbHVlcyIsInZhcmlhbnQiLCJjb2xvciIsInNpemUiLCJvbkNsaWNrIiwiZXZlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/clientList/useClientList.tsx\n");

/***/ })

});