(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[207],{1534:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);(function(module){__webpack_require__.d(__webpack_exports__,"default",function(){return GoogleMapComponent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);var react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);var google_map_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3460);var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1);var prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9);var Components_PageTitleBar_PageTitleBar__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(68);var Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(57);function _typeof(e){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(module)})();function _classCallCheck(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||false;o.configurable=true;if("value"in o)o.writable=true;Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _createClass(e,t,r){if(t)_defineProperties(e.prototype,t);if(r)_defineProperties(e,r);Object.defineProperty(e,"prototype",{writable:false});return e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return _typeof(t)==="symbol"?t:String(t)}function _toPrimitive(e,t){if(_typeof(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==undefined){var o=r.call(e,t||"default");if(_typeof(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _inherits(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function e(t,r){t.__proto__=r;return t};return _setPrototypeOf(e,t)}function _createSuper(_){var n=_isNativeReflectConstruct();return function e(){var t=_getPrototypeOf(_),r;if(n){var o=_getPrototypeOf(this).constructor;r=Reflect.construct(t,arguments,o)}else{r=t.apply(this,arguments)}return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(e,t){if(t&&(_typeof(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return _assertThisInitialized(e)}function _assertThisInitialized(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function _getPrototypeOf(e){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function e(t){return t.__proto__||Object.getPrototypeOf(t)};return _getPrototypeOf(e)}var __signature__=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var GoogleMapComponent=function(_Component){_inherits(GoogleMapComponent,_Component);var _super=_createSuper(GoogleMapComponent);function GoogleMapComponent(){_classCallCheck(this,GoogleMapComponent);return _super.apply(this,arguments)}_createClass(GoogleMapComponent,[{key:"renderMarkers",value:function e(t,r){new r.Marker({position:{lat:51.5074,lng:.1278},map:t,title:"London"})}},{key:"render",value:function e(){var _=this;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"map-wrapper"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_PageTitleBar_PageTitleBar__WEBPACK_IMPORTED_MODULE_4__["a"],{title:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["a"],{id:"sidebar.googleMaps"}),match:this.props.match}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_5__["a"],{heading:"Google Maps"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(google_map_react__WEBPACK_IMPORTED_MODULE_1__["a"],{bootstrapURLKeys:{key:"AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk"},yesIWantToUseGoogleMapApiInternals:true,center:this.props.center,zoom:this.props.zoom,style:{position:"relative",width:"100%",height:400},onGoogleApiLoaded:function e(t){var r=t.map,o=t.maps;return _.renderMarkers(r,o)}})))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]);return GoogleMapComponent}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);GoogleMapComponent.propTypes={center:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,zoom:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,greatPlaceCoords:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any};GoogleMapComponent.defaultProps={center:[51.5074,.1278],zoom:9,greatPlaceCoords:{lat:51.5074,lng:.1278}};(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(GoogleMapComponent,"GoogleMapComponent","D:\\reactify-thunk\\src\\routes\\maps\\google-map.js")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(module)})()}).call(this,__webpack_require__(6)(module))}}]);