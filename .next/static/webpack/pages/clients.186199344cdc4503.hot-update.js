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

/***/ "./pages/components/clientList/ClientList.tsx":
/*!****************************************************!*\
  !*** ./pages/components/clientList/ClientList.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ClientList\": function() { return /* binding */ ClientList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/x-data-grid */ \"./node_modules/@mui/x-data-grid/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar columns = [\n    {\n        field: \"fullName\",\n        headerName: \"Full name\",\n        description: \"This column has a value getter and is not sortable.\",\n        sortable: false,\n        width: 160,\n        valueGetter: function(params) {\n            return \"\".concat(params.row.firstName || \"\", \" \").concat(params.row.lastName || \"\");\n        }\n    },\n    {\n        field: \"email\",\n        headerName: \"Email\",\n        width: 150,\n        editable: true\n    },\n    {\n        field: \"phone\",\n        headerName: \"Phone number\",\n        width: 150,\n        editable: true\n    },\n    {\n        field: \"view\",\n        headerName: \"View\",\n        renderCell: function(cellValues) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                variant: \"contained\",\n                color: \"primary\",\n                size: \"small\",\n                onClick: function(event) {\n                    var id = cellValues.id;\n                    console.log(id);\n                // openInvoiceDetails(id);\n                },\n                children: \"View\"\n            }, void 0, false, {\n                fileName: \"/Users/maxbalej/Documents/dev/nvs-invoice-app/client/pages/components/clientList/ClientList.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, _this));\n        }\n    }, \n];\nvar ClientList = function(param) {\n    var clientList = param.clientList;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), rows = ref[0], setRows = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var trim = clientList.map(function(elem) {\n            return {\n                id: elem.id,\n                firstName: elem.firstName,\n                lastName: elem.lastName,\n                email: elem.email,\n                phone: elem.phone\n            };\n        });\n        setRows(trim);\n    }, [\n        clientList\n    ]);\n    console.log(clientList);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                height: 500,\n                width: \"100%\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_3__.DataGrid, {\n                rows: rows,\n                columns: columns\n            }, void 0, false, {\n                fileName: \"/Users/maxbalej/Documents/dev/nvs-invoice-app/client/pages/components/clientList/ClientList.tsx\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/maxbalej/Documents/dev/nvs-invoice-app/client/pages/components/clientList/ClientList.tsx\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false));\n};\n_s(ClientList, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = ClientList;\nvar _c;\n$RefreshReg$(_c, \"ClientList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2NsaWVudExpc3QvQ2xpZW50TGlzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBcUU7QUFNNUM7QUFDYTs7O0FBSXRDLEdBQUssQ0FBQ0ssT0FBTyxHQUFpQixDQUFDO0lBQzdCLENBQUM7UUFDQ0MsS0FBSyxFQUFFLENBQVU7UUFDakJDLFVBQVUsRUFBRSxDQUFXO1FBQ3ZCQyxXQUFXLEVBQUUsQ0FBcUQ7UUFDbEVDLFFBQVEsRUFBRSxLQUFLO1FBQ2ZDLEtBQUssRUFBRSxHQUFHO1FBQ1ZDLFdBQVcsRUFBRSxRQUFRLENBQVBDLE1BQTZCO1lBQ3pDLE1BQU0sQ0FBTCxHQUFnQ0EsTUFBeUIsQ0FBdkRBLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFTLElBQUksQ0FBRSxHQUFDLENBQUMsSUFBNEIsT0FBMUJGLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDRSxRQUFRLElBQUksQ0FBRTs7SUFDOUQsQ0FBQztJQUNELENBQUM7UUFDQ1QsS0FBSyxFQUFFLENBQU87UUFDZEMsVUFBVSxFQUFFLENBQU87UUFDbkJHLEtBQUssRUFBRSxHQUFHO1FBQ1ZNLFFBQVEsRUFBRSxJQUFJO0lBQ2hCLENBQUM7SUFDRCxDQUFDO1FBQ0NWLEtBQUssRUFBRSxDQUFPO1FBQ2RDLFVBQVUsRUFBRSxDQUFjO1FBQzFCRyxLQUFLLEVBQUUsR0FBRztRQUNWTSxRQUFRLEVBQUUsSUFBSTtJQUNoQixDQUFDO0lBQ0QsQ0FBQztRQUNDVixLQUFLLEVBQUUsQ0FBTTtRQUNiQyxVQUFVLEVBQUUsQ0FBTTtRQUNsQlUsVUFBVSxFQUFFLFFBQVEsQ0FBUEMsVUFBMEIsRUFBSyxDQUFDO1lBQzNDLE1BQU0sNkVBQ0hkLGlEQUFNO2dCQUNMZSxPQUFPLEVBQUMsQ0FBVztnQkFDbkJDLEtBQUssRUFBQyxDQUFTO2dCQUNmQyxJQUFJLEVBQUMsQ0FBTztnQkFDWkMsT0FBTyxFQUFFLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7b0JBQ25CLEdBQUssQ0FBQ0MsRUFBRSxHQUFHTixVQUFVLENBQUNNLEVBQUU7b0JBQ3hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsRUFBRTtnQkFDZCxFQUEwQjtnQkFDNUIsQ0FBQzswQkFDRixDQUVEOzs7Ozs7UUFFSixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFTSxHQUFLLENBQUNHLFVBQVUsR0FBNkIsUUFBUSxRQUFZLENBQUM7UUFBbEJDLFVBQVUsU0FBVkEsVUFBVTs7SUFDL0QsR0FBSyxDQUFtQjFCLEdBQWlCLEdBQWpCQSwrQ0FBUSxDQUFNLENBQUMsQ0FBQyxHQUFqQzJCLElBQUksR0FBYTNCLEdBQWlCLEtBQTVCNEIsT0FBTyxHQUFJNUIsR0FBaUI7SUFDekNELGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2YsR0FBSyxDQUFDOEIsSUFBSSxHQUFHSCxVQUFVLENBQUNJLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBSyxDQUFDO1lBQ3JDLE1BQU0sQ0FBQyxDQUFDO2dCQUNOVCxFQUFFLEVBQUVTLElBQUksQ0FBQ1QsRUFBRTtnQkFDWFYsU0FBUyxFQUFFbUIsSUFBSSxDQUFDbkIsU0FBUztnQkFDekJDLFFBQVEsRUFBRWtCLElBQUksQ0FBQ2xCLFFBQVE7Z0JBQ3ZCbUIsS0FBSyxFQUFFRCxJQUFJLENBQUNDLEtBQUs7Z0JBQ2pCQyxLQUFLLEVBQUVGLElBQUksQ0FBQ0UsS0FBSztZQUNuQixDQUFDO1FBQ0gsQ0FBQztRQUNETCxPQUFPLENBQUNDLElBQUk7SUFDZCxDQUFDLEVBQUUsQ0FBQ0g7UUFBQUEsVUFBVTtJQUFBLENBQUM7SUFDZkgsT0FBTyxDQUFDQyxHQUFHLENBQUNFLFVBQVU7SUFDdEIsTUFBTTs4RkFFRFEsQ0FBRztZQUFDQyxLQUFLLEVBQUUsQ0FBQztnQkFBQ0MsTUFBTSxFQUFFLEdBQUc7Z0JBQUU1QixLQUFLLEVBQUUsQ0FBTTtZQUFDLENBQUM7a0dBQ3ZDUCxzREFBUTtnQkFBQzBCLElBQUksRUFBRUEsSUFBSTtnQkFBRXhCLE9BQU8sRUFBRUEsT0FBTzs7Ozs7Ozs7Ozs7O0FBSzlDLENBQUM7R0F2QllzQixVQUFVO0tBQVZBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9jbGllbnRMaXN0L0NsaWVudExpc3QudHN4PzdkNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBEYXRhR3JpZCxcbiAgR3JpZENlbGxQYXJhbXMsXG4gIEdyaWRDb2xEZWYsXG4gIEdyaWRWYWx1ZUdldHRlclBhcmFtcyxcbn0gZnJvbSBcIkBtdWkveC1kYXRhLWdyaWRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gXCIuL2hlbHBlclwiO1xuaW1wb3J0IHsgQ2xpZW50RGV0YWlscyB9IGZyb20gXCIuLi9jbGllbnREZXRhaWxzXCI7XG5cbmNvbnN0IGNvbHVtbnM6IEdyaWRDb2xEZWZbXSA9IFtcbiAge1xuICAgIGZpZWxkOiBcImZ1bGxOYW1lXCIsXG4gICAgaGVhZGVyTmFtZTogXCJGdWxsIG5hbWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGNvbHVtbiBoYXMgYSB2YWx1ZSBnZXR0ZXIgYW5kIGlzIG5vdCBzb3J0YWJsZS5cIixcbiAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgd2lkdGg6IDE2MCxcbiAgICB2YWx1ZUdldHRlcjogKHBhcmFtczogR3JpZFZhbHVlR2V0dGVyUGFyYW1zKSA9PlxuICAgICAgYCR7cGFyYW1zLnJvdy5maXJzdE5hbWUgfHwgXCJcIn0gJHtwYXJhbXMucm93Lmxhc3ROYW1lIHx8IFwiXCJ9YCxcbiAgfSxcbiAge1xuICAgIGZpZWxkOiBcImVtYWlsXCIsXG4gICAgaGVhZGVyTmFtZTogXCJFbWFpbFwiLFxuICAgIHdpZHRoOiAxNTAsXG4gICAgZWRpdGFibGU6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBmaWVsZDogXCJwaG9uZVwiLFxuICAgIGhlYWRlck5hbWU6IFwiUGhvbmUgbnVtYmVyXCIsXG4gICAgd2lkdGg6IDE1MCxcbiAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIGZpZWxkOiBcInZpZXdcIixcbiAgICBoZWFkZXJOYW1lOiBcIlZpZXdcIixcbiAgICByZW5kZXJDZWxsOiAoY2VsbFZhbHVlczogR3JpZENlbGxQYXJhbXMpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGNlbGxWYWx1ZXMuaWQgYXMgc3RyaW5nO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaWQpO1xuICAgICAgICAgICAgLy8gb3Blbkludm9pY2VEZXRhaWxzKGlkKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgVmlld1xuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICk7XG4gICAgfSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBDbGllbnRMaXN0OiBGdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoeyBjbGllbnRMaXN0IH0pID0+IHtcbiAgY29uc3QgW3Jvd3MsIHNldFJvd3NdID0gdXNlU3RhdGU8YW55PihbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdHJpbSA9IGNsaWVudExpc3QubWFwKChlbGVtKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogZWxlbS5pZCxcbiAgICAgICAgZmlyc3ROYW1lOiBlbGVtLmZpcnN0TmFtZSxcbiAgICAgICAgbGFzdE5hbWU6IGVsZW0ubGFzdE5hbWUsXG4gICAgICAgIGVtYWlsOiBlbGVtLmVtYWlsLFxuICAgICAgICBwaG9uZTogZWxlbS5waG9uZSxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgc2V0Um93cyh0cmltKTtcbiAgfSwgW2NsaWVudExpc3RdKTtcbiAgY29uc29sZS5sb2coY2xpZW50TGlzdCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiA1MDAsIHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgICAgPERhdGFHcmlkIHJvd3M9e3Jvd3N9IGNvbHVtbnM9e2NvbHVtbnN9IC8+XG4gICAgICAgIHsvKiA8Q2xpZW50RGV0YWlscyBvcGVuPXtvcGVuSW52b2ljZX0gLz4gKi99XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRhdGFHcmlkIiwiQnV0dG9uIiwiY29sdW1ucyIsImZpZWxkIiwiaGVhZGVyTmFtZSIsImRlc2NyaXB0aW9uIiwic29ydGFibGUiLCJ3aWR0aCIsInZhbHVlR2V0dGVyIiwicGFyYW1zIiwicm93IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlZGl0YWJsZSIsInJlbmRlckNlbGwiLCJjZWxsVmFsdWVzIiwidmFyaWFudCIsImNvbG9yIiwic2l6ZSIsIm9uQ2xpY2siLCJldmVudCIsImlkIiwiY29uc29sZSIsImxvZyIsIkNsaWVudExpc3QiLCJjbGllbnRMaXN0Iiwicm93cyIsInNldFJvd3MiLCJ0cmltIiwibWFwIiwiZWxlbSIsImVtYWlsIiwicGhvbmUiLCJkaXYiLCJzdHlsZSIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/clientList/ClientList.tsx\n");

/***/ })

});