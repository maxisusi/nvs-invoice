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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useClientList\": function() { return /* binding */ useClientList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar useClientList = function(clientList) {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), rows = ref[0], setRows = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), openClient = ref1[0], setOpenClient = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), clientDetails = ref2[0], setClientDetails = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var trim = clientList.map(function(elem) {\n            return {\n                id: elem.id,\n                firstName: elem.firstName,\n                lastName: elem.lastName,\n                email: elem.email,\n                phone: elem.phone\n            };\n        });\n        setRows(trim);\n    }, [\n        clientList\n    ]);\n    var openClientDetails = function(id) {\n        var filteredList = clientList.filter(function(elem) {\n            return elem.id == id;\n        });\n        console.log(filteredList);\n    };\n    var columns = [\n        {\n            field: \"fullName\",\n            headerName: \"Full name\",\n            description: \"This column has a value getter and is not sortable.\",\n            sortable: false,\n            width: 160,\n            valueGetter: function(params) {\n                return \"\".concat(params.row.firstName || \"\", \" \").concat(params.row.lastName || \"\");\n            }\n        },\n        {\n            field: \"email\",\n            headerName: \"Email\",\n            width: 150,\n            editable: true\n        },\n        {\n            field: \"phone\",\n            headerName: \"Phone number\",\n            width: 150,\n            editable: true\n        },\n        {\n            field: \"view\",\n            headerName: \"View\",\n            renderCell: function(cellValues) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    variant: \"contained\",\n                    color: \"primary\",\n                    size: \"small\",\n                    onClick: function(event) {\n                        var id = cellValues.id;\n                        console.log(id);\n                        openClientDetails(id);\n                    },\n                    children: \"View\"\n                }, void 0, false, {\n                    fileName: \"/Users/maxbalej/Documents/dev/nvs-invoice-app/client/pages/components/clientList/useClientList.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, _this1));\n            }\n        }, \n    ];\n    return {\n        rows: rows,\n        columns: columns,\n        useClientList: useClientList,\n        openClientDetails: openClientDetails\n    };\n};\n_s(useClientList, \"EZ4KpJZCe9O3Kd9M2AJmwstuaDY=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2NsaWVudExpc3QvdXNlQ2xpZW50TGlzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFzQztBQU8rQjs7O0FBRzlELEdBQUssQ0FBQ0ksYUFBYSxHQUFHLFFBQVEsQ0FBUEMsVUFBVSxFQUFLLENBQUM7OztJQUM1QyxHQUFLLENBQW1CRixHQUFpQixHQUFqQkEsK0NBQVEsQ0FBTSxDQUFDLENBQUMsR0FBakNHLElBQUksR0FBYUgsR0FBaUIsS0FBNUJJLE9BQU8sR0FBSUosR0FBaUI7SUFDekMsR0FBSyxDQUErQkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBM0NLLFVBQVUsR0FBbUJMLElBQWUsS0FBaENNLGFBQWEsR0FBSU4sSUFBZTtJQUNuRCxHQUFLLENBQXFDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQTlDTyxhQUFhLEdBQXNCUCxJQUFZLEtBQWhDUSxnQkFBZ0IsR0FBSVIsSUFBWTtJQUV0REQsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZixHQUFLLENBQUNVLElBQUksR0FBR1AsVUFBVSxDQUFDUSxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJLEVBQUssQ0FBQztZQUNyQyxNQUFNLENBQUMsQ0FBQztnQkFDTkMsRUFBRSxFQUFFRCxJQUFJLENBQUNDLEVBQUU7Z0JBQ1hDLFNBQVMsRUFBRUYsSUFBSSxDQUFDRSxTQUFTO2dCQUN6QkMsUUFBUSxFQUFFSCxJQUFJLENBQUNHLFFBQVE7Z0JBQ3ZCQyxLQUFLLEVBQUVKLElBQUksQ0FBQ0ksS0FBSztnQkFDakJDLEtBQUssRUFBRUwsSUFBSSxDQUFDSyxLQUFLO1lBQ25CLENBQUM7UUFDSCxDQUFDO1FBQ0RaLE9BQU8sQ0FBQ0ssSUFBSTtJQUNkLENBQUMsRUFBRSxDQUFDUDtRQUFBQSxVQUFVO0lBQUEsQ0FBQztJQUVmLEdBQUssQ0FBQ2UsaUJBQWlCLEdBQUcsUUFBUSxDQUFQTCxFQUFFLEVBQUssQ0FBQztRQUNqQyxHQUFLLENBQUNNLFlBQVksR0FBR2hCLFVBQVUsQ0FBQ2lCLE1BQU0sQ0FBQyxRQUFRLENBQVBSLElBQUk7WUFBS0EsTUFBTSxDQUFOQSxJQUFJLENBQUNDLEVBQUUsSUFBSUEsRUFBRTs7UUFDOURRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxZQUFZO0lBQzFCLENBQUM7SUFFRCxHQUFLLENBQUNJLE9BQU8sR0FBaUIsQ0FBQztRQUM3QixDQUFDO1lBQ0NDLEtBQUssRUFBRSxDQUFVO1lBQ2pCQyxVQUFVLEVBQUUsQ0FBVztZQUN2QkMsV0FBVyxFQUFFLENBQXFEO1lBQ2xFQyxRQUFRLEVBQUUsS0FBSztZQUNmQyxLQUFLLEVBQUUsR0FBRztZQUNWQyxXQUFXLEVBQUUsUUFBUSxDQUFQQyxNQUE2QjtnQkFDekMsTUFBTSxDQUFMLEdBQWdDQSxNQUF5QixDQUF2REEsTUFBTSxDQUFDQyxHQUFHLENBQUNqQixTQUFTLElBQUksQ0FBRSxHQUFDLENBQUMsSUFBNEIsT0FBMUJnQixNQUFNLENBQUNDLEdBQUcsQ0FBQ2hCLFFBQVEsSUFBSSxDQUFFOztRQUM5RCxDQUFDO1FBQ0QsQ0FBQztZQUNDUyxLQUFLLEVBQUUsQ0FBTztZQUNkQyxVQUFVLEVBQUUsQ0FBTztZQUNuQkcsS0FBSyxFQUFFLEdBQUc7WUFDVkksUUFBUSxFQUFFLElBQUk7UUFDaEIsQ0FBQztRQUNELENBQUM7WUFDQ1IsS0FBSyxFQUFFLENBQU87WUFDZEMsVUFBVSxFQUFFLENBQWM7WUFDMUJHLEtBQUssRUFBRSxHQUFHO1lBQ1ZJLFFBQVEsRUFBRSxJQUFJO1FBQ2hCLENBQUM7UUFDRCxDQUFDO1lBQ0NSLEtBQUssRUFBRSxDQUFNO1lBQ2JDLFVBQVUsRUFBRSxDQUFNO1lBQ2xCUSxVQUFVLEVBQUUsUUFBUSxDQUFQQyxVQUEwQixFQUFLLENBQUM7Z0JBQzNDLE1BQU0sNkVBQ0hwQyxpREFBTTtvQkFDTHFDLE9BQU8sRUFBQyxDQUFXO29CQUNuQkMsS0FBSyxFQUFDLENBQVM7b0JBQ2ZDLElBQUksRUFBQyxDQUFPO29CQUNaQyxPQUFPLEVBQUUsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQzt3QkFDbkIsR0FBSyxDQUFDMUIsRUFBRSxHQUFHcUIsVUFBVSxDQUFDckIsRUFBRTt3QkFDeEJRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxFQUFFO3dCQUNkSyxpQkFBaUIsQ0FBQ0wsRUFBRTtvQkFDdEIsQ0FBQzs4QkFDRixDQUVEOzs7Ozs7WUFFSixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsQ0FBQztRQUNOVCxJQUFJLEVBQUpBLElBQUk7UUFDSm1CLE9BQU8sRUFBUEEsT0FBTztRQUNQckIsYUFBYSxFQUFiQSxhQUFhO1FBQ2JnQixpQkFBaUIsRUFBakJBLGlCQUFpQjtJQUNuQixDQUFDO0FBQ0gsQ0FBQztHQXpFWWhCLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9jbGllbnRMaXN0L3VzZUNsaWVudExpc3QudHN4Pzg5ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7XG4gIEdyaWRDZWxsUGFyYW1zLFxuICBHcmlkQ29sRGVmLFxuICBHcmlkVmFsdWVHZXR0ZXJQYXJhbXMsXG59IGZyb20gXCJAbXVpL3gtZGF0YS1ncmlkXCI7XG5cbmltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tIFwiLi9oZWxwZXJcIjtcblxuZXhwb3J0IGNvbnN0IHVzZUNsaWVudExpc3QgPSAoY2xpZW50TGlzdCkgPT4ge1xuICBjb25zdCBbcm93cywgc2V0Um93c10gPSB1c2VTdGF0ZTxhbnk+KFtdKTtcbiAgY29uc3QgW29wZW5DbGllbnQsIHNldE9wZW5DbGllbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY2xpZW50RGV0YWlscywgc2V0Q2xpZW50RGV0YWlsc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0cmltID0gY2xpZW50TGlzdC5tYXAoKGVsZW0pID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBlbGVtLmlkLFxuICAgICAgICBmaXJzdE5hbWU6IGVsZW0uZmlyc3ROYW1lLFxuICAgICAgICBsYXN0TmFtZTogZWxlbS5sYXN0TmFtZSxcbiAgICAgICAgZW1haWw6IGVsZW0uZW1haWwsXG4gICAgICAgIHBob25lOiBlbGVtLnBob25lLFxuICAgICAgfTtcbiAgICB9KTtcbiAgICBzZXRSb3dzKHRyaW0pO1xuICB9LCBbY2xpZW50TGlzdF0pO1xuXG4gIGNvbnN0IG9wZW5DbGllbnREZXRhaWxzID0gKGlkKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyZWRMaXN0ID0gY2xpZW50TGlzdC5maWx0ZXIoKGVsZW0pID0+IGVsZW0uaWQgPT0gaWQpO1xuICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkTGlzdCk7XG4gIH07XG5cbiAgY29uc3QgY29sdW1uczogR3JpZENvbERlZltdID0gW1xuICAgIHtcbiAgICAgIGZpZWxkOiBcImZ1bGxOYW1lXCIsXG4gICAgICBoZWFkZXJOYW1lOiBcIkZ1bGwgbmFtZVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBjb2x1bW4gaGFzIGEgdmFsdWUgZ2V0dGVyIGFuZCBpcyBub3Qgc29ydGFibGUuXCIsXG4gICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICB3aWR0aDogMTYwLFxuICAgICAgdmFsdWVHZXR0ZXI6IChwYXJhbXM6IEdyaWRWYWx1ZUdldHRlclBhcmFtcykgPT5cbiAgICAgICAgYCR7cGFyYW1zLnJvdy5maXJzdE5hbWUgfHwgXCJcIn0gJHtwYXJhbXMucm93Lmxhc3ROYW1lIHx8IFwiXCJ9YCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZpZWxkOiBcImVtYWlsXCIsXG4gICAgICBoZWFkZXJOYW1lOiBcIkVtYWlsXCIsXG4gICAgICB3aWR0aDogMTUwLFxuICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBmaWVsZDogXCJwaG9uZVwiLFxuICAgICAgaGVhZGVyTmFtZTogXCJQaG9uZSBudW1iZXJcIixcbiAgICAgIHdpZHRoOiAxNTAsXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZpZWxkOiBcInZpZXdcIixcbiAgICAgIGhlYWRlck5hbWU6IFwiVmlld1wiLFxuICAgICAgcmVuZGVyQ2VsbDogKGNlbGxWYWx1ZXM6IEdyaWRDZWxsUGFyYW1zKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpZCA9IGNlbGxWYWx1ZXMuaWQgYXMgc3RyaW5nO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgICAgICAgICAgIG9wZW5DbGllbnREZXRhaWxzKGlkKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVmlld1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApO1xuICAgICAgfSxcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiB7XG4gICAgcm93cyxcbiAgICBjb2x1bW5zLFxuICAgIHVzZUNsaWVudExpc3QsXG4gICAgb3BlbkNsaWVudERldGFpbHMsXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VDbGllbnRMaXN0IiwiY2xpZW50TGlzdCIsInJvd3MiLCJzZXRSb3dzIiwib3BlbkNsaWVudCIsInNldE9wZW5DbGllbnQiLCJjbGllbnREZXRhaWxzIiwic2V0Q2xpZW50RGV0YWlscyIsInRyaW0iLCJtYXAiLCJlbGVtIiwiaWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGhvbmUiLCJvcGVuQ2xpZW50RGV0YWlscyIsImZpbHRlcmVkTGlzdCIsImZpbHRlciIsImNvbnNvbGUiLCJsb2ciLCJjb2x1bW5zIiwiZmllbGQiLCJoZWFkZXJOYW1lIiwiZGVzY3JpcHRpb24iLCJzb3J0YWJsZSIsIndpZHRoIiwidmFsdWVHZXR0ZXIiLCJwYXJhbXMiLCJyb3ciLCJlZGl0YWJsZSIsInJlbmRlckNlbGwiLCJjZWxsVmFsdWVzIiwidmFyaWFudCIsImNvbG9yIiwic2l6ZSIsIm9uQ2xpY2siLCJldmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/clientList/useClientList.tsx\n");

/***/ })

});