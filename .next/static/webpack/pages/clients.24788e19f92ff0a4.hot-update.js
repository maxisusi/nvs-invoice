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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useClientList\": function() { return /* binding */ useClientList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar useClientList = function(clientList) {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), rows = ref[0], setRows = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), openClient = ref1[0], setOpenClient = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var trim = clientList.map(function(elem) {\n            return {\n                id: elem.id,\n                firstName: elem.firstName,\n                lastName: elem.lastName,\n                email: elem.email,\n                phone: elem.phone\n            };\n        });\n        setRows(trim);\n    }, [\n        clientList\n    ]);\n    var openClientDetails = function(id) {\n        var filteredList = clientList.filter(function(elem) {\n            return elem.id == id;\n        });\n        console.log(filteredList);\n    };\n    var columns = [\n        {\n            field: \"fullName\",\n            headerName: \"Full name\",\n            description: \"This column has a value getter and is not sortable.\",\n            sortable: false,\n            width: 160,\n            valueGetter: function(params) {\n                return \"\".concat(params.row.firstName || \"\", \" \").concat(params.row.lastName || \"\");\n            }\n        },\n        {\n            field: \"email\",\n            headerName: \"Email\",\n            width: 150,\n            editable: true\n        },\n        {\n            field: \"phone\",\n            headerName: \"Phone number\",\n            width: 150,\n            editable: true\n        },\n        {\n            field: \"view\",\n            headerName: \"View\",\n            renderCell: function(cellValues) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    variant: \"contained\",\n                    color: \"primary\",\n                    size: \"small\",\n                    onClick: function(event) {\n                        var id = cellValues.id;\n                        console.log(id);\n                        setOpenClientDetails(id);\n                    },\n                    children: \"View\"\n                }, void 0, false, {\n                    fileName: \"/Users/maxbalej/Documents/dev/nvs-invoice-app/client/pages/components/clientList/useClientList.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, _this1));\n            }\n        }, \n    ];\n    return {\n        rows: rows,\n        columns: columns,\n        useClientList: useClientList,\n        openClientDetails: openClientDetails\n    };\n};\n_s(useClientList, \"e+Qj8lEadTQIYcROuVnJ4J/+oDY=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2NsaWVudExpc3QvdXNlQ2xpZW50TGlzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFzQztBQU8rQjs7O0FBRzlELEdBQUssQ0FBQ0ksYUFBYSxHQUFHLFFBQVEsQ0FBUEMsVUFBVSxFQUFLLENBQUM7OztJQUM1QyxHQUFLLENBQW1CRixHQUFpQixHQUFqQkEsK0NBQVEsQ0FBTSxDQUFDLENBQUMsR0FBakNHLElBQUksR0FBYUgsR0FBaUIsS0FBNUJJLE9BQU8sR0FBSUosR0FBaUI7SUFDekMsR0FBSyxDQUErQkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBM0NLLFVBQVUsR0FBbUJMLElBQWUsS0FBaENNLGFBQWEsR0FBSU4sSUFBZTtJQUVuREQsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZixHQUFLLENBQUNRLElBQUksR0FBR0wsVUFBVSxDQUFDTSxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJLEVBQUssQ0FBQztZQUNyQyxNQUFNLENBQUMsQ0FBQztnQkFDTkMsRUFBRSxFQUFFRCxJQUFJLENBQUNDLEVBQUU7Z0JBQ1hDLFNBQVMsRUFBRUYsSUFBSSxDQUFDRSxTQUFTO2dCQUN6QkMsUUFBUSxFQUFFSCxJQUFJLENBQUNHLFFBQVE7Z0JBQ3ZCQyxLQUFLLEVBQUVKLElBQUksQ0FBQ0ksS0FBSztnQkFDakJDLEtBQUssRUFBRUwsSUFBSSxDQUFDSyxLQUFLO1lBQ25CLENBQUM7UUFDSCxDQUFDO1FBQ0RWLE9BQU8sQ0FBQ0csSUFBSTtJQUNkLENBQUMsRUFBRSxDQUFDTDtRQUFBQSxVQUFVO0lBQUEsQ0FBQztJQUVmLEdBQUssQ0FBQ2EsaUJBQWlCLEdBQUcsUUFBUSxDQUFQTCxFQUFFLEVBQUssQ0FBQztRQUNqQyxHQUFLLENBQUNNLFlBQVksR0FBR2QsVUFBVSxDQUFDZSxNQUFNLENBQUMsUUFBUSxDQUFQUixJQUFJO1lBQUtBLE1BQU0sQ0FBTkEsSUFBSSxDQUFDQyxFQUFFLElBQUlBLEVBQUU7O1FBRTlEUSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsWUFBWTtJQUMxQixDQUFDO0lBRUQsR0FBSyxDQUFDSSxPQUFPLEdBQWlCLENBQUM7UUFDN0IsQ0FBQztZQUNDQyxLQUFLLEVBQUUsQ0FBVTtZQUNqQkMsVUFBVSxFQUFFLENBQVc7WUFDdkJDLFdBQVcsRUFBRSxDQUFxRDtZQUNsRUMsUUFBUSxFQUFFLEtBQUs7WUFDZkMsS0FBSyxFQUFFLEdBQUc7WUFDVkMsV0FBVyxFQUFFLFFBQVEsQ0FBUEMsTUFBNkI7Z0JBQ3pDLE1BQU0sQ0FBTCxHQUFnQ0EsTUFBeUIsQ0FBdkRBLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDakIsU0FBUyxJQUFJLENBQUUsR0FBQyxDQUFDLElBQTRCLE9BQTFCZ0IsTUFBTSxDQUFDQyxHQUFHLENBQUNoQixRQUFRLElBQUksQ0FBRTs7UUFDOUQsQ0FBQztRQUNELENBQUM7WUFDQ1MsS0FBSyxFQUFFLENBQU87WUFDZEMsVUFBVSxFQUFFLENBQU87WUFDbkJHLEtBQUssRUFBRSxHQUFHO1lBQ1ZJLFFBQVEsRUFBRSxJQUFJO1FBQ2hCLENBQUM7UUFDRCxDQUFDO1lBQ0NSLEtBQUssRUFBRSxDQUFPO1lBQ2RDLFVBQVUsRUFBRSxDQUFjO1lBQzFCRyxLQUFLLEVBQUUsR0FBRztZQUNWSSxRQUFRLEVBQUUsSUFBSTtRQUNoQixDQUFDO1FBQ0QsQ0FBQztZQUNDUixLQUFLLEVBQUUsQ0FBTTtZQUNiQyxVQUFVLEVBQUUsQ0FBTTtZQUNsQlEsVUFBVSxFQUFFLFFBQVEsQ0FBUEMsVUFBMEIsRUFBSyxDQUFDO2dCQUMzQyxNQUFNLDZFQUNIbEMsaURBQU07b0JBQ0xtQyxPQUFPLEVBQUMsQ0FBVztvQkFDbkJDLEtBQUssRUFBQyxDQUFTO29CQUNmQyxJQUFJLEVBQUMsQ0FBTztvQkFDWkMsT0FBTyxFQUFFLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7d0JBQ25CLEdBQUssQ0FBQzFCLEVBQUUsR0FBR3FCLFVBQVUsQ0FBQ3JCLEVBQUU7d0JBQ3hCUSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsRUFBRTt3QkFDZDJCLG9CQUFvQixDQUFDM0IsRUFBRTtvQkFDekIsQ0FBQzs4QkFDRixDQUVEOzs7Ozs7WUFFSixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsQ0FBQztRQUNOUCxJQUFJLEVBQUpBLElBQUk7UUFDSmlCLE9BQU8sRUFBUEEsT0FBTztRQUNQbkIsYUFBYSxFQUFiQSxhQUFhO1FBQ2JjLGlCQUFpQixFQUFqQkEsaUJBQWlCO0lBQ25CLENBQUM7QUFDSCxDQUFDO0dBekVZZCxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvY2xpZW50TGlzdC91c2VDbGllbnRMaXN0LnRzeD84OWZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQge1xuICBHcmlkQ2VsbFBhcmFtcyxcbiAgR3JpZENvbERlZixcbiAgR3JpZFZhbHVlR2V0dGVyUGFyYW1zLFxufSBmcm9tIFwiQG11aS94LWRhdGEtZ3JpZFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFByb3BzIH0gZnJvbSBcIi4vaGVscGVyXCI7XG5cbmV4cG9ydCBjb25zdCB1c2VDbGllbnRMaXN0ID0gKGNsaWVudExpc3QpID0+IHtcbiAgY29uc3QgW3Jvd3MsIHNldFJvd3NdID0gdXNlU3RhdGU8YW55PihbXSk7XG4gIGNvbnN0IFtvcGVuQ2xpZW50LCBzZXRPcGVuQ2xpZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRyaW0gPSBjbGllbnRMaXN0Lm1hcCgoZWxlbSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGVsZW0uaWQsXG4gICAgICAgIGZpcnN0TmFtZTogZWxlbS5maXJzdE5hbWUsXG4gICAgICAgIGxhc3ROYW1lOiBlbGVtLmxhc3ROYW1lLFxuICAgICAgICBlbWFpbDogZWxlbS5lbWFpbCxcbiAgICAgICAgcGhvbmU6IGVsZW0ucGhvbmUsXG4gICAgICB9O1xuICAgIH0pO1xuICAgIHNldFJvd3ModHJpbSk7XG4gIH0sIFtjbGllbnRMaXN0XSk7XG5cbiAgY29uc3Qgb3BlbkNsaWVudERldGFpbHMgPSAoaWQpID0+IHtcbiAgICBjb25zdCBmaWx0ZXJlZExpc3QgPSBjbGllbnRMaXN0LmZpbHRlcigoZWxlbSkgPT4gZWxlbS5pZCA9PSBpZCk7XG5cbiAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZExpc3QpO1xuICB9O1xuXG4gIGNvbnN0IGNvbHVtbnM6IEdyaWRDb2xEZWZbXSA9IFtcbiAgICB7XG4gICAgICBmaWVsZDogXCJmdWxsTmFtZVwiLFxuICAgICAgaGVhZGVyTmFtZTogXCJGdWxsIG5hbWVcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgY29sdW1uIGhhcyBhIHZhbHVlIGdldHRlciBhbmQgaXMgbm90IHNvcnRhYmxlLlwiLFxuICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgd2lkdGg6IDE2MCxcbiAgICAgIHZhbHVlR2V0dGVyOiAocGFyYW1zOiBHcmlkVmFsdWVHZXR0ZXJQYXJhbXMpID0+XG4gICAgICAgIGAke3BhcmFtcy5yb3cuZmlyc3ROYW1lIHx8IFwiXCJ9ICR7cGFyYW1zLnJvdy5sYXN0TmFtZSB8fCBcIlwifWAsXG4gICAgfSxcbiAgICB7XG4gICAgICBmaWVsZDogXCJlbWFpbFwiLFxuICAgICAgaGVhZGVyTmFtZTogXCJFbWFpbFwiLFxuICAgICAgd2lkdGg6IDE1MCxcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgZmllbGQ6IFwicGhvbmVcIixcbiAgICAgIGhlYWRlck5hbWU6IFwiUGhvbmUgbnVtYmVyXCIsXG4gICAgICB3aWR0aDogMTUwLFxuICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBmaWVsZDogXCJ2aWV3XCIsXG4gICAgICBoZWFkZXJOYW1lOiBcIlZpZXdcIixcbiAgICAgIHJlbmRlckNlbGw6IChjZWxsVmFsdWVzOiBHcmlkQ2VsbFBhcmFtcykgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaWQgPSBjZWxsVmFsdWVzLmlkIGFzIHN0cmluZztcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coaWQpO1xuICAgICAgICAgICAgICBzZXRPcGVuQ2xpZW50RGV0YWlscyhpZCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFZpZXdcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4ge1xuICAgIHJvd3MsXG4gICAgY29sdW1ucyxcbiAgICB1c2VDbGllbnRMaXN0LFxuICAgIG9wZW5DbGllbnREZXRhaWxzLFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ2xpZW50TGlzdCIsImNsaWVudExpc3QiLCJyb3dzIiwic2V0Um93cyIsIm9wZW5DbGllbnQiLCJzZXRPcGVuQ2xpZW50IiwidHJpbSIsIm1hcCIsImVsZW0iLCJpZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwaG9uZSIsIm9wZW5DbGllbnREZXRhaWxzIiwiZmlsdGVyZWRMaXN0IiwiZmlsdGVyIiwiY29uc29sZSIsImxvZyIsImNvbHVtbnMiLCJmaWVsZCIsImhlYWRlck5hbWUiLCJkZXNjcmlwdGlvbiIsInNvcnRhYmxlIiwid2lkdGgiLCJ2YWx1ZUdldHRlciIsInBhcmFtcyIsInJvdyIsImVkaXRhYmxlIiwicmVuZGVyQ2VsbCIsImNlbGxWYWx1ZXMiLCJ2YXJpYW50IiwiY29sb3IiLCJzaXplIiwib25DbGljayIsImV2ZW50Iiwic2V0T3BlbkNsaWVudERldGFpbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/clientList/useClientList.tsx\n");

/***/ })

});