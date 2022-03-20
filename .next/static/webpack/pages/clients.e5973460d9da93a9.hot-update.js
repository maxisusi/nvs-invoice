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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useClientList\": function() { return /* binding */ useClientList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar useClientList = function(clientList) {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), rows = ref[0], setRows = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(string), openClientDetails = ref1[0], setOpenClientDetails = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var trim = clientList.map(function(elem) {\n            return {\n                id: elem.id,\n                firstName: elem.firstName,\n                lastName: elem.lastName,\n                email: elem.email,\n                phone: elem.phone\n            };\n        });\n        setRows(trim);\n    }, [\n        clientList\n    ]);\n    var columns = [\n        {\n            field: \"fullName\",\n            headerName: \"Full name\",\n            description: \"This column has a value getter and is not sortable.\",\n            sortable: false,\n            width: 160,\n            valueGetter: function(params) {\n                return \"\".concat(params.row.firstName || \"\", \" \").concat(params.row.lastName || \"\");\n            }\n        },\n        {\n            field: \"email\",\n            headerName: \"Email\",\n            width: 150,\n            editable: true\n        },\n        {\n            field: \"phone\",\n            headerName: \"Phone number\",\n            width: 150,\n            editable: true\n        },\n        {\n            field: \"view\",\n            headerName: \"View\",\n            renderCell: function(cellValues) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    variant: \"contained\",\n                    color: \"primary\",\n                    size: \"small\",\n                    onClick: function(event) {\n                        var id = cellValues.id;\n                        console.log(id);\n                        setOpenClientDetails(id);\n                    },\n                    children: \"View\"\n                }, void 0, false, {\n                    fileName: \"/Users/maxbalej/Documents/dev/nvs-invoice-app/client/pages/components/clientList/useClientList.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, _this1));\n            }\n        }, \n    ];\n    return {\n        rows: rows,\n        columns: columns,\n        useClientList: useClientList,\n        openClientDetails: openClientDetails\n    };\n};\n_s(useClientList, \"RFpPzTXiaLI4mAVCwLlV1KbkYG0=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2NsaWVudExpc3QvdXNlQ2xpZW50TGlzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFzQztBQU8rQjs7O0FBRzlELEdBQUssQ0FBQ0ksYUFBYSxHQUFHLFFBQVEsQ0FBUEMsVUFBVSxFQUFLLENBQUM7OztJQUM1QyxHQUFLLENBQW1CRixHQUFpQixHQUFqQkEsK0NBQVEsQ0FBTSxDQUFDLENBQUMsR0FBakNHLElBQUksR0FBYUgsR0FBaUIsS0FBNUJJLE9BQU8sR0FBSUosR0FBaUI7SUFDekMsR0FBSyxDQUE2Q0EsSUFBZ0IsR0FBaEJBLCtDQUFRLENBQUNLLE1BQU0sR0FBMURDLGlCQUFpQixHQUEwQk4sSUFBZ0IsS0FBeENPLG9CQUFvQixHQUFJUCxJQUFnQjtJQUVsRUQsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZixHQUFLLENBQUNTLElBQUksR0FBR04sVUFBVSxDQUFDTyxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJLEVBQUssQ0FBQztZQUNyQyxNQUFNLENBQUMsQ0FBQztnQkFDTkMsRUFBRSxFQUFFRCxJQUFJLENBQUNDLEVBQUU7Z0JBQ1hDLFNBQVMsRUFBRUYsSUFBSSxDQUFDRSxTQUFTO2dCQUN6QkMsUUFBUSxFQUFFSCxJQUFJLENBQUNHLFFBQVE7Z0JBQ3ZCQyxLQUFLLEVBQUVKLElBQUksQ0FBQ0ksS0FBSztnQkFDakJDLEtBQUssRUFBRUwsSUFBSSxDQUFDSyxLQUFLO1lBQ25CLENBQUM7UUFDSCxDQUFDO1FBQ0RYLE9BQU8sQ0FBQ0ksSUFBSTtJQUNkLENBQUMsRUFBRSxDQUFDTjtRQUFBQSxVQUFVO0lBQUEsQ0FBQztJQUVmLEdBQUssQ0FBQ2MsT0FBTyxHQUFpQixDQUFDO1FBQzdCLENBQUM7WUFDQ0MsS0FBSyxFQUFFLENBQVU7WUFDakJDLFVBQVUsRUFBRSxDQUFXO1lBQ3ZCQyxXQUFXLEVBQUUsQ0FBcUQ7WUFDbEVDLFFBQVEsRUFBRSxLQUFLO1lBQ2ZDLEtBQUssRUFBRSxHQUFHO1lBQ1ZDLFdBQVcsRUFBRSxRQUFRLENBQVBDLE1BQTZCO2dCQUN6QyxNQUFNLENBQUwsR0FBZ0NBLE1BQXlCLENBQXZEQSxNQUFNLENBQUNDLEdBQUcsQ0FBQ1osU0FBUyxJQUFJLENBQUUsR0FBQyxDQUFDLElBQTRCLE9BQTFCVyxNQUFNLENBQUNDLEdBQUcsQ0FBQ1gsUUFBUSxJQUFJLENBQUU7O1FBQzlELENBQUM7UUFDRCxDQUFDO1lBQ0NJLEtBQUssRUFBRSxDQUFPO1lBQ2RDLFVBQVUsRUFBRSxDQUFPO1lBQ25CRyxLQUFLLEVBQUUsR0FBRztZQUNWSSxRQUFRLEVBQUUsSUFBSTtRQUNoQixDQUFDO1FBQ0QsQ0FBQztZQUNDUixLQUFLLEVBQUUsQ0FBTztZQUNkQyxVQUFVLEVBQUUsQ0FBYztZQUMxQkcsS0FBSyxFQUFFLEdBQUc7WUFDVkksUUFBUSxFQUFFLElBQUk7UUFDaEIsQ0FBQztRQUNELENBQUM7WUFDQ1IsS0FBSyxFQUFFLENBQU07WUFDYkMsVUFBVSxFQUFFLENBQU07WUFDbEJRLFVBQVUsRUFBRSxRQUFRLENBQVBDLFVBQTBCLEVBQUssQ0FBQztnQkFDM0MsTUFBTSw2RUFDSDlCLGlEQUFNO29CQUNMK0IsT0FBTyxFQUFDLENBQVc7b0JBQ25CQyxLQUFLLEVBQUMsQ0FBUztvQkFDZkMsSUFBSSxFQUFDLENBQU87b0JBQ1pDLE9BQU8sRUFBRSxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDO3dCQUNuQixHQUFLLENBQUNyQixFQUFFLEdBQUdnQixVQUFVLENBQUNoQixFQUFFO3dCQUN4QnNCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDdkIsRUFBRTt3QkFDZEosb0JBQW9CLENBQUNJLEVBQUU7b0JBQ3pCLENBQUM7OEJBQ0YsQ0FFRDs7Ozs7O1lBRUosQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLENBQUM7UUFDTlIsSUFBSSxFQUFKQSxJQUFJO1FBQ0phLE9BQU8sRUFBUEEsT0FBTztRQUNQZixhQUFhLEVBQWJBLGFBQWE7UUFDYkssaUJBQWlCLEVBQWpCQSxpQkFBaUI7SUFDbkIsQ0FBQztBQUNILENBQUM7R0FuRVlMLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9jbGllbnRMaXN0L3VzZUNsaWVudExpc3QudHN4Pzg5ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7XG4gIEdyaWRDZWxsUGFyYW1zLFxuICBHcmlkQ29sRGVmLFxuICBHcmlkVmFsdWVHZXR0ZXJQYXJhbXMsXG59IGZyb20gXCJAbXVpL3gtZGF0YS1ncmlkXCI7XG5cbmltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tIFwiLi9oZWxwZXJcIjtcblxuZXhwb3J0IGNvbnN0IHVzZUNsaWVudExpc3QgPSAoY2xpZW50TGlzdCkgPT4ge1xuICBjb25zdCBbcm93cywgc2V0Um93c10gPSB1c2VTdGF0ZTxhbnk+KFtdKTtcbiAgY29uc3QgW29wZW5DbGllbnREZXRhaWxzLCBzZXRPcGVuQ2xpZW50RGV0YWlsc10gPSB1c2VTdGF0ZShzdHJpbmcpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdHJpbSA9IGNsaWVudExpc3QubWFwKChlbGVtKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogZWxlbS5pZCxcbiAgICAgICAgZmlyc3ROYW1lOiBlbGVtLmZpcnN0TmFtZSxcbiAgICAgICAgbGFzdE5hbWU6IGVsZW0ubGFzdE5hbWUsXG4gICAgICAgIGVtYWlsOiBlbGVtLmVtYWlsLFxuICAgICAgICBwaG9uZTogZWxlbS5waG9uZSxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgc2V0Um93cyh0cmltKTtcbiAgfSwgW2NsaWVudExpc3RdKTtcblxuICBjb25zdCBjb2x1bW5zOiBHcmlkQ29sRGVmW10gPSBbXG4gICAge1xuICAgICAgZmllbGQ6IFwiZnVsbE5hbWVcIixcbiAgICAgIGhlYWRlck5hbWU6IFwiRnVsbCBuYW1lXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGNvbHVtbiBoYXMgYSB2YWx1ZSBnZXR0ZXIgYW5kIGlzIG5vdCBzb3J0YWJsZS5cIixcbiAgICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgICAgIHdpZHRoOiAxNjAsXG4gICAgICB2YWx1ZUdldHRlcjogKHBhcmFtczogR3JpZFZhbHVlR2V0dGVyUGFyYW1zKSA9PlxuICAgICAgICBgJHtwYXJhbXMucm93LmZpcnN0TmFtZSB8fCBcIlwifSAke3BhcmFtcy5yb3cubGFzdE5hbWUgfHwgXCJcIn1gLFxuICAgIH0sXG4gICAge1xuICAgICAgZmllbGQ6IFwiZW1haWxcIixcbiAgICAgIGhlYWRlck5hbWU6IFwiRW1haWxcIixcbiAgICAgIHdpZHRoOiAxNTAsXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZpZWxkOiBcInBob25lXCIsXG4gICAgICBoZWFkZXJOYW1lOiBcIlBob25lIG51bWJlclwiLFxuICAgICAgd2lkdGg6IDE1MCxcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgZmllbGQ6IFwidmlld1wiLFxuICAgICAgaGVhZGVyTmFtZTogXCJWaWV3XCIsXG4gICAgICByZW5kZXJDZWxsOiAoY2VsbFZhbHVlczogR3JpZENlbGxQYXJhbXMpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGlkID0gY2VsbFZhbHVlcy5pZCBhcyBzdHJpbmc7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkKTtcbiAgICAgICAgICAgICAgc2V0T3BlbkNsaWVudERldGFpbHMoaWQpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBWaWV3XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgIH0sXG4gIF07XG5cbiAgcmV0dXJuIHtcbiAgICByb3dzLFxuICAgIGNvbHVtbnMsXG4gICAgdXNlQ2xpZW50TGlzdCxcbiAgICBvcGVuQ2xpZW50RGV0YWlscyxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNsaWVudExpc3QiLCJjbGllbnRMaXN0Iiwicm93cyIsInNldFJvd3MiLCJzdHJpbmciLCJvcGVuQ2xpZW50RGV0YWlscyIsInNldE9wZW5DbGllbnREZXRhaWxzIiwidHJpbSIsIm1hcCIsImVsZW0iLCJpZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwaG9uZSIsImNvbHVtbnMiLCJmaWVsZCIsImhlYWRlck5hbWUiLCJkZXNjcmlwdGlvbiIsInNvcnRhYmxlIiwid2lkdGgiLCJ2YWx1ZUdldHRlciIsInBhcmFtcyIsInJvdyIsImVkaXRhYmxlIiwicmVuZGVyQ2VsbCIsImNlbGxWYWx1ZXMiLCJ2YXJpYW50IiwiY29sb3IiLCJzaXplIiwib25DbGljayIsImV2ZW50IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/clientList/useClientList.tsx\n");

/***/ })

});