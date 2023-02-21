(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[208],{1535:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);var react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);var react_leaflet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3532);var react_leaflet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3533);var react_leaflet__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3488);var react_leaflet__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3534);var Components_PageTitleBar_PageTitleBar__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(68);var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(9);var Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(57);function _typeof(e){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(module)})();function _classCallCheck(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(e,t){for(var _=0;_<t.length;_++){var r=t[_];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,_toPropertyKey(r.key),r)}}function _createClass(e,t,_){if(t)_defineProperties(e.prototype,t);if(_)_defineProperties(e,_);Object.defineProperty(e,"prototype",{writable:false});return e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return _typeof(t)==="symbol"?t:String(t)}function _toPrimitive(e,t){if(_typeof(e)!=="object"||e===null)return e;var _=e[Symbol.toPrimitive];if(_!==undefined){var r=_.call(e,t||"default");if(_typeof(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _inherits(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function e(t,_){t.__proto__=_;return t};return _setPrototypeOf(e,t)}function _createSuper(a){var o=_isNativeReflectConstruct();return function e(){var t=_getPrototypeOf(a),_;if(o){var r=_getPrototypeOf(this).constructor;_=Reflect.construct(t,arguments,r)}else{_=t.apply(this,arguments)}return _possibleConstructorReturn(this,_)}}function _possibleConstructorReturn(e,t){if(t&&(_typeof(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return _assertThisInitialized(e)}function _assertThisInitialized(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function _getPrototypeOf(e){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function e(t){return t.__proto__||Object.getPrototypeOf(t)};return _getPrototypeOf(e)}var __signature__=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var LeafletMap=function(_Component){_inherits(LeafletMap,_Component);var _super=_createSuper(LeafletMap);function LeafletMap(){var e;_classCallCheck(this,LeafletMap);e=_super.call(this);e.state={lat:51.505,lng:-.09,zoom:13};return e}_createClass(LeafletMap,[{key:"render",value:function e(){var t=[this.state.lat,this.state.lng];return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"map-wrapper"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_PageTitleBar_PageTitleBar__WEBPACK_IMPORTED_MODULE_5__["a"],{title:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_6__["a"],{id:"sidebar.leafletMaps"}),match:this.props.match}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_7__["a"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["a"],{center:t,zoom:this.state.zoom},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["a"],{attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_3__["a"],{position:t},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_4__["a"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,"A pretty CSS3 popup. ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null)," Easily customizable."))))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]);return LeafletMap}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);var _default=LeafletMap;__webpack_exports__["default"]=_default;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(LeafletMap,"LeafletMap","D:\\reactify-thunk\\src\\routes\\maps\\leaflet-map.js");e.register(_default,"default","D:\\reactify-thunk\\src\\routes\\maps\\leaflet-map.js")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(module)})()}).call(this,__webpack_require__(6)(module))}}]);