/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/components/stock.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/stock.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar Stock = function Stock(props) {\n\n    return React.createElement(\n        'a',\n        { href: '#' },\n        React.createElement(\n            'div',\n            null,\n            React.createElement(\n                'div',\n                null,\n                React.createElement(\n                    'p',\n                    null,\n                    React.createElement(\n                        'strong',\n                        null,\n                        'Apple '\n                    )\n                )\n            ),\n            React.createElement(\n                'div',\n                { id: 'analystRating' },\n                React.createElement(\n                    'div',\n                    { id: 'tag' },\n                    React.createElement(\n                        'svg',\n                        { width: '20', height: '20', viewBox: '0 0 20 20' },\n                        React.createElement(\n                            'g',\n                            { fillRule: 'evenodd', transform: 'translate(-4 -4)' },\n                            React.createElement('path', { id: 'tagA', d: 'M20.99975,8 C20.44775,8 19.99975,7.552 19.99975,7 C19.99975,6.448 20.44775,6 20.99975,6 C21.55175,6 21.99975,6.448 21.99975,7 C21.99975,7.552 21.55175,8 20.99975,8 M21.99975,4 L14.82775,4 C14.29775,4 13.78875,4.21 13.41375,4.585 L4.58575,13.414 C3.80475,14.195 3.80475,15.461 4.58575,16.242 L11.75675,23.414 C12.53775,24.195 13.80475,24.195 14.58575,23.414 L23.41375,14.586 C23.78875,14.211 23.99975,13.702 23.99975,13.172 L23.99975,6 C23.99975,4.896 23.10375,4 21.99975,4' })\n                        )\n                    )\n                ),\n                React.createElement(\n                    'div',\n                    { id: 'percent' },\n                    React.createElement(\n                        'h6',\n                        null,\n                        ' 60 % '\n                    )\n                )\n            ),\n            React.createElement(\n                'div',\n                null,\n                React.createElement(\n                    'h2',\n                    null,\n                    ' $192.20 '\n                ),\n                React.createElement(\n                    'span',\n                    null,\n                    ' + ',\n                    React.createElement(\n                        'span',\n                        null,\n                        ' 0.95% '\n                    ),\n                    ' '\n                )\n            )\n        )\n    );\n};\n\nexports.default = Stock;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvc3RvY2suanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9zdG9jay5qc3g/ZTJkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU3RvY2sgPSAocHJvcHMpID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxhIGhyZWY9JyMnPlxuICAgICAgICA8ZGl2PiBcbiAgICAgICAgICAgIDxkaXY+IFxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+QXBwbGUgPC9zdHJvbmc+PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdhbmFseXN0UmF0aW5nJz4gXG4gICAgICAgICAgICAgICAgPGRpdiBpZD0ndGFnJz5cbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGcgZmlsbFJ1bGU9XCJldmVub2RkXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC00IC00KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJ0YWdBXCIgZD1cIk0yMC45OTk3NSw4IEMyMC40NDc3NSw4IDE5Ljk5OTc1LDcuNTUyIDE5Ljk5OTc1LDcgQzE5Ljk5OTc1LDYuNDQ4IDIwLjQ0Nzc1LDYgMjAuOTk5NzUsNiBDMjEuNTUxNzUsNiAyMS45OTk3NSw2LjQ0OCAyMS45OTk3NSw3IEMyMS45OTk3NSw3LjU1MiAyMS41NTE3NSw4IDIwLjk5OTc1LDggTTIxLjk5OTc1LDQgTDE0LjgyNzc1LDQgQzE0LjI5Nzc1LDQgMTMuNzg4NzUsNC4yMSAxMy40MTM3NSw0LjU4NSBMNC41ODU3NSwxMy40MTQgQzMuODA0NzUsMTQuMTk1IDMuODA0NzUsMTUuNDYxIDQuNTg1NzUsMTYuMjQyIEwxMS43NTY3NSwyMy40MTQgQzEyLjUzNzc1LDI0LjE5NSAxMy44MDQ3NSwyNC4xOTUgMTQuNTg1NzUsMjMuNDE0IEwyMy40MTM3NSwxNC41ODYgQzIzLjc4ODc1LDE0LjIxMSAyMy45OTk3NSwxMy43MDIgMjMuOTk5NzUsMTMuMTcyIEwyMy45OTk3NSw2IEMyMy45OTk3NSw0Ljg5NiAyMy4xMDM3NSw0IDIxLjk5OTc1LDRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9J3BlcmNlbnQnPlxuICAgICAgICAgICAgICAgICAgICA8aDY+IDYwICUgPC9oNj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+ICQxOTIuMjAgPC9oMj5cbiAgICAgICAgICAgICAgICA8c3Bhbj4gKyA8c3Bhbj4gMC45NSUgPC9zcGFuPiA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYT5cbiAgICApXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBTdG9jazsiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFUQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFqQkE7QUFEQTtBQTBCQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/stock.jsx\n");

/***/ }),

/***/ "./client/src/components/stockList.jsx":
/*!*********************************************!*\
  !*** ./client/src/components/stockList.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _stock = __webpack_require__(/*! ./stock.jsx */ \"./client/src/components/stock.jsx\");\n\nvar _stock2 = _interopRequireDefault(_stock);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar StockList = function StockList(props) {\n    var carousel1, carousel2, carousel3;\n    carousel1 = carousel2 = carousel3 = [];\n\n    carousel1 = populateCarousel(carousel1);\n    carousel2 = populateCarousel(carousel2);\n    carousel3 = populateCarousel(carousel3);\n\n    return React.createElement(\n        'section',\n        { className: 'carousel' },\n        React.createElement(\n            'div',\n            null,\n            carousel1\n        ),\n        React.createElement(\n            'div',\n            null,\n            carousel2\n        ),\n        React.createElement(\n            'div',\n            null,\n            carousel3\n        )\n    );\n};\n\nexports.default = StockList;\n\n\nfunction populateCarousel(carousel) {\n    for (var i = 1; i <= 4; i++) {\n        carousel.push(React.createElement(\n            'div',\n            { className: 'stocks' },\n            React.createElement(_stock2.default, null)\n        ));\n    }\n\n    return carousel;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvc3RvY2tMaXN0LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvc3JjL2NvbXBvbmVudHMvc3RvY2tMaXN0LmpzeD8zNDZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdG9jayBmcm9tICcuL3N0b2NrLmpzeCc7XG5cbnZhciBTdG9ja0xpc3QgPSAocHJvcHMpID0+IHtcbiAgICB2YXIgY2Fyb3VzZWwxLCBjYXJvdXNlbDIsIGNhcm91c2VsMztcbiAgICBjYXJvdXNlbDEgPSBjYXJvdXNlbDIgPSBjYXJvdXNlbDMgPSBbXTtcblxuICAgIGNhcm91c2VsMSA9IHBvcHVsYXRlQ2Fyb3VzZWwoY2Fyb3VzZWwxKTtcbiAgICBjYXJvdXNlbDIgPSBwb3B1bGF0ZUNhcm91c2VsKGNhcm91c2VsMik7XG4gICAgY2Fyb3VzZWwzID0gcG9wdWxhdGVDYXJvdXNlbChjYXJvdXNlbDMpO1xuXG4gXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdjYXJvdXNlbCc+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7Y2Fyb3VzZWwxfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2Nhcm91c2VsMn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtjYXJvdXNlbDN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvY2tMaXN0OyBcblxuZnVuY3Rpb24gcG9wdWxhdGVDYXJvdXNlbChjYXJvdXNlbCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IDQ7IGkrKykge1xuICAgICAgICBjYXJvdXNlbC5wdXNoKDxkaXYgY2xhc3NOYW1lPSdzdG9ja3MnPjxTdG9jayAvPjwvZGl2Pik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhcm91c2VsO1xufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/stockList.jsx\n");

/***/ }),

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _stockList = __webpack_require__(/*! ./components/stockList.jsx */ \"./client/src/components/stockList.jsx\");\n\nvar _stockList2 = _interopRequireDefault(_stockList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_React$Component) {\n    _inherits(App, _React$Component);\n\n    function App(props) {\n        _classCallCheck(this, App);\n\n        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n    }\n\n    _createClass(App, [{\n        key: 'render',\n        value: function render() {\n            return React.createElement(\n                'div',\n                null,\n                React.createElement(\n                    'div',\n                    null,\n                    React.createElement(_stockList2.default, null)\n                ),\n                React.createElement(\n                    'button',\n                    null,\n                    ' transition '\n                )\n            );\n        }\n    }]);\n\n    return App;\n}(React.Component);\n\nReactDOM.render(React.createElement(App, null), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvc3JjL2luZGV4LmpzeD85MzM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdG9ja0xpc3QgZnJvbSAnLi9jb21wb25lbnRzL3N0b2NrTGlzdC5qc3gnO1xuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+IFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFN0b2NrTGlzdCAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24+IHRyYW5zaXRpb24gPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5cblxuXG5cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpOyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBRUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBT0E7Ozs7QUFkQTtBQUNBO0FBc0JBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });