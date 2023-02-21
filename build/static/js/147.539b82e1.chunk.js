(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[147],{1668:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);var react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9);var Components_RctCard__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(45);function _typeof(e){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(module)})();function _classCallCheck(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,_toPropertyKey(n.key),n)}}function _createClass(e,t,r){if(t)_defineProperties(e.prototype,t);if(r)_defineProperties(e,r);Object.defineProperty(e,"prototype",{writable:false});return e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return _typeof(t)==="symbol"?t:String(t)}function _toPrimitive(e,t){if(_typeof(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==undefined){var n=r.call(e,t||"default");if(_typeof(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _inherits(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function e(t,r){t.__proto__=r;return t};return _setPrototypeOf(e,t)}function _createSuper(o){var _=_isNativeReflectConstruct();return function e(){var t=_getPrototypeOf(o),r;if(_){var n=_getPrototypeOf(this).constructor;r=Reflect.construct(t,arguments,n)}else{r=t.apply(this,arguments)}return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(e,t){if(t&&(_typeof(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return _assertThisInitialized(e)}function _assertThisInitialized(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function _getPrototypeOf(e){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function e(t){return t.__proto__||Object.getPrototypeOf(t)};return _getPrototypeOf(e)}var __signature__=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};function checkTime(e){if(e<10){e="0"+e}return e}var CurrentTimeLocation=function(_Component){_inherits(CurrentTimeLocation,_Component);var _super=_createSuper(CurrentTimeLocation);function CurrentTimeLocation(){var e;_classCallCheck(this,CurrentTimeLocation);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++){r[n]=arguments[n]}e=_super.call.apply(_super,[this].concat(r));e.state={currentTime:{hours:"",minutes:"",seconds:""}};return e}_createClass(CurrentTimeLocation,[{key:"UNSAFE_componentWillMount",value:function e(){var t=this;this.timer=setInterval(function(){t.startTime()},500)}},{key:"componentWillUnmount",value:function e(){clearInterval(this.timer)}},{key:"startTime",value:function e(){var t=new Date;var r=t.getHours();var n=t.getMinutes();var o=t.getSeconds();n=checkTime(n);o=checkTime(o);var _={hours:r,minutes:n,seconds:o};this.setState({currentTime:_})}},{key:"render",value:function e(){var t=this.state.currentTime,r=t.hours,n=t.minutes,o=t.seconds;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"current-widget bg-info"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_2__["b"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"d-flex justify-content-between"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"align-items-start"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",{className:"mb-10"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_1__["a"],{id:"widgets.currentTime"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",{className:"mb-0"},"".concat(r," : ").concat(n," : ").concat(o))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"align-items-end"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"zmdi zmdi-time"})))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]);return CurrentTimeLocation}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);var _default=CurrentTimeLocation;__webpack_exports__["default"]=_default;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(checkTime,"checkTime","D:\\reactify-thunk\\src\\components\\Widgets\\CurrentTimeLocation.js");e.register(CurrentTimeLocation,"CurrentTimeLocation","D:\\reactify-thunk\\src\\components\\Widgets\\CurrentTimeLocation.js");e.register(_default,"default","D:\\reactify-thunk\\src\\components\\Widgets\\CurrentTimeLocation.js")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(module)})()}).call(this,__webpack_require__(6)(module))}}]);