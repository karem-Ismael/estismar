(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[61],{1587:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);(function(module){__webpack_require__.d(__webpack_exports__,"default",function(){return MenuComponent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);var react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(644);var _component_SimpleMenu__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3272);var _component_SelectedMenu_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3273);var _component_MaxHeightMenu_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3274);var _component_ChangeTransition_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3276);var Components_PageTitleBar_PageTitleBar__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(68);var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(9);var Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(57);function _typeof(e){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(module)})();function _classCallCheck(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(e,t){for(var _=0;_<t.length;_++){var r=t[_];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,_toPropertyKey(r.key),r)}}function _createClass(e,t,_){if(t)_defineProperties(e.prototype,t);if(_)_defineProperties(e,_);Object.defineProperty(e,"prototype",{writable:false});return e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return _typeof(t)==="symbol"?t:String(t)}function _toPrimitive(e,t){if(_typeof(e)!=="object"||e===null)return e;var _=e[Symbol.toPrimitive];if(_!==undefined){var r=_.call(e,t||"default");if(_typeof(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _inherits(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function e(t,_){t.__proto__=_;return t};return _setPrototypeOf(e,t)}function _createSuper(n){var o=_isNativeReflectConstruct();return function e(){var t=_getPrototypeOf(n),_;if(o){var r=_getPrototypeOf(this).constructor;_=Reflect.construct(t,arguments,r)}else{_=t.apply(this,arguments)}return _possibleConstructorReturn(this,_)}}function _possibleConstructorReturn(e,t){if(t&&(_typeof(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return _assertThisInitialized(e)}function _assertThisInitialized(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function _getPrototypeOf(e){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function e(t){return t.__proto__||Object.getPrototypeOf(t)};return _getPrototypeOf(e)}var __signature__=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var MenuComponent=function(_React$Component){_inherits(MenuComponent,_React$Component);var _super=_createSuper(MenuComponent);function MenuComponent(){_classCallCheck(this,MenuComponent);return _super.apply(this,arguments)}_createClass(MenuComponent,[{key:"render",value:function e(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"menu-paper-wrapper"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_PageTitleBar_PageTitleBar__WEBPACK_IMPORTED_MODULE_6__["a"],{title:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_7__["a"],{id:"sidebar.menu"}),match:this.props.match}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_8__["a"],{colClasses:"col-sm-6 col-md-6 col-xl-3",heading:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_7__["a"],{id:"widgets.simpleMenus"})},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_SimpleMenu__WEBPACK_IMPORTED_MODULE_2__["a"],null)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_8__["a"],{colClasses:"col-sm-6 col-md-6 col-xl-3",heading:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_7__["a"],{id:"widgets.selectedMenu"})},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_SelectedMenu_js__WEBPACK_IMPORTED_MODULE_3__["a"],null)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_8__["a"],{colClasses:"col-sm-6 col-md-6 col-xl-3",heading:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_7__["a"],{id:"widgets.maxHeightMenu"})},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_MaxHeightMenu_js__WEBPACK_IMPORTED_MODULE_4__["a"],null)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_8__["a"],{colClasses:"col-sm-6 col-md-6 col-xl-3",heading:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_7__["a"],{id:"widgets.changeTransition"})},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_ChangeTransition_js__WEBPACK_IMPORTED_MODULE_5__["a"],null))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCollapsibleCard_RctCollapsibleCard__WEBPACK_IMPORTED_MODULE_8__["a"],{heading:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_7__["a"],{id:"widgets.paper"})},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"list-inline d-flex align-items-center justify-content-around flex-wrap"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__["a"],{elevation:10,className:"mb-10 m-10 size-120 bg-primary"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__["a"],{elevation:8,className:"mb-10 m-10 size-100 bg-success"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__["a"],{elevation:6,className:"mb-10 m-10 size-80 bg-warning"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__["a"],{elevation:4,className:"mb-10 m-10 size-60 bg-danger"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__["a"],{elevation:2,className:"mb-10 m-10 size-40 bg-info"})))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]);return MenuComponent}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(MenuComponent,"MenuComponent","D:\\reactify-thunk\\src\\routes\\components\\menu\\index.js")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(module)})()}).call(this,__webpack_require__(6)(module))},1816:function(e,t,_){"use strict";var P=_(13);var r=_(32);var y=_(2);var O=_(0);var n=_.n(O);var M=_(15);var o=_(21);var m=_(106);var a=function e(t){return{root:Object(y["a"])({},t.typography.body1,Object(r["a"])({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},t.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(y["a"])({},t.typography.body2,{minHeight:"auto"})}};var i=O["forwardRef"](function e(t,_){var r=t.classes,n=t.className,o=t.component,a=o===void 0?"li":o,i=t.disableGutters,l=i===void 0?false:i,u=t.ListItemClasses,c=t.role,s=c===void 0?"menuitem":c,f=t.selected,p=t.tabIndex,E=Object(P["a"])(t,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);var d;if(!t.disabled){d=p!==undefined?p:-1}return O["createElement"](m["a"],Object(y["a"])({button:true,role:s,tabIndex:d,component:a,selected:f,disableGutters:l,classes:Object(y["a"])({dense:r.dense},u),className:Object(M["default"])(r.root,n,f&&r.selected,!l&&r.gutters),ref:_},E))});false?undefined:void 0;t["a"]=Object(o["a"])(a,{name:"MuiMenuItem"})(i)},3272:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",function(){return SimpleMenu});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);var react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3462);var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1816);var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(73);function _typeof(e){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(module)})();function _classCallCheck(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(e,t){for(var _=0;_<t.length;_++){var r=t[_];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,_toPropertyKey(r.key),r)}}function _createClass(e,t,_){if(t)_defineProperties(e.prototype,t);if(_)_defineProperties(e,_);Object.defineProperty(e,"prototype",{writable:false});return e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return _typeof(t)==="symbol"?t:String(t)}function _toPrimitive(e,t){if(_typeof(e)!=="object"||e===null)return e;var _=e[Symbol.toPrimitive];if(_!==undefined){var r=_.call(e,t||"default");if(_typeof(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _inherits(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function e(t,_){t.__proto__=_;return t};return _setPrototypeOf(e,t)}function _createSuper(n){var o=_isNativeReflectConstruct();return function e(){var t=_getPrototypeOf(n),_;if(o){var r=_getPrototypeOf(this).constructor;_=Reflect.construct(t,arguments,r)}else{_=t.apply(this,arguments)}return _possibleConstructorReturn(this,_)}}function _possibleConstructorReturn(e,t){if(t&&(_typeof(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return _assertThisInitialized(e)}function _assertThisInitialized(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function _getPrototypeOf(e){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function e(t){return t.__proto__||Object.getPrototypeOf(t)};return _getPrototypeOf(e)}var __signature__=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var SimpleMenu=function(_React$Component){_inherits(SimpleMenu,_React$Component);var _super=_createSuper(SimpleMenu);function SimpleMenu(){var _;_classCallCheck(this,SimpleMenu);for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}_=_super.call.apply(_super,[this].concat(t));_.state={anchorEl:null,selectedIndex:1};_.button=undefined;_.handleClickListItem=function(e){_.setState({anchorEl:e.currentTarget})};_.handleMenuItemClick=function(e,t){_.setState({selectedIndex:t,anchorEl:null})};_.handleClose=function(){_.setState({anchorEl:null})};_.handleClick=function(e){_.setState({anchorEl:e.currentTarget})};return _}_createClass(SimpleMenu,[{key:"render",value:function e(){var t=this.state.anchorEl;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["a"],{variant:"contained",color:"primary",className:"text-white","aria-owns":t?"simple-menu":null,"aria-haspopup":"true",onClick:this.handleClick},"Open Menu"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1__["a"],{id:"simple-menu",anchorEl:t,open:Boolean(t),onClose:this.handleClose},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__["a"],{onClick:this.handleClose},"Profile"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__["a"],{onClick:this.handleClose},"My account"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__["a"],{onClick:this.handleClose},"Logout")))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]);return SimpleMenu}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(SimpleMenu,"SimpleMenu","D:\\reactify-thunk\\src\\routes\\components\\menu\\component\\SimpleMenu.js")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(module)})()}).call(this,__webpack_require__(6)(module))},3273:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",function(){return SelectedMenu});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);var react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(98);var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(106);var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(918);var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3462);var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1816);function _typeof(e){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(module)})();function _classCallCheck(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(e,t){for(var _=0;_<t.length;_++){var r=t[_];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,_toPropertyKey(r.key),r)}}function _createClass(e,t,_){if(t)_defineProperties(e.prototype,t);if(_)_defineProperties(e,_);Object.defineProperty(e,"prototype",{writable:false});return e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return _typeof(t)==="symbol"?t:String(t)}function _toPrimitive(e,t){if(_typeof(e)!=="object"||e===null)return e;var _=e[Symbol.toPrimitive];if(_!==undefined){var r=_.call(e,t||"default");if(_typeof(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _inherits(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function e(t,_){t.__proto__=_;return t};return _setPrototypeOf(e,t)}function _createSuper(n){var o=_isNativeReflectConstruct();return function e(){var t=_getPrototypeOf(n),_;if(o){var r=_getPrototypeOf(this).constructor;_=Reflect.construct(t,arguments,r)}else{_=t.apply(this,arguments)}return _possibleConstructorReturn(this,_)}}function _possibleConstructorReturn(e,t){if(t&&(_typeof(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return _assertThisInitialized(e)}function _assertThisInitialized(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function _getPrototypeOf(e){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function e(t){return t.__proto__||Object.getPrototypeOf(t)};return _getPrototypeOf(e)}var __signature__=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var options=["Show some love to @material-ui/core","Show all notification content","Hide sensitive notification content","Hide all notification content"];var SelectedMenu=function(_React$Component){_inherits(SelectedMenu,_React$Component);var _super=_createSuper(SelectedMenu);function SelectedMenu(){var _;_classCallCheck(this,SelectedMenu);for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}_=_super.call.apply(_super,[this].concat(t));_.state={anchorEl:null,selectedIndex:1};_.button=undefined;_.handleClickListItem=function(e){_.setState({anchorEl:e.currentTarget})};_.handleMenuItemClick=function(e,t){_.setState({selectedIndex:t,anchorEl:null})};_.handleClose=function(){_.setState({anchorEl:null})};return _}_createClass(SelectedMenu,[{key:"render",value:function e(){var r=this;var t=this.state.anchorEl;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_1__["a"],{component:"nav"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__["a"],{button:true,"aria-haspopup":"true","aria-controls":"lock-menu","aria-label":"When device is locked",onClick:this.handleClickListItem},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_3__["a"],{primary:"When device is locked",secondary:options[this.state.selectedIndex]}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__["a"],{id:"lock-menu",anchorEl:t,open:Boolean(t),onClose:this.handleClose},options.map(function(e,_){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__["a"],{key:e,disabled:_===0,selected:_===r.state.selectedIndex,onClick:function e(t){return r.handleMenuItemClick(t,_)}},e)})))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]);return SelectedMenu}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(options,"options","D:\\reactify-thunk\\src\\routes\\components\\menu\\component\\SelectedMenu.js");e.register(SelectedMenu,"SelectedMenu","D:\\reactify-thunk\\src\\routes\\components\\menu\\component\\SelectedMenu.js")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(module)})()}).call(this,__webpack_require__(6)(module))},3274:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",function(){return MAxHeightMenu});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);var react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(118);var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3462);var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1816);var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3275);var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_4__);function _typeof(e){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(module)})();function _classCallCheck(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(e,t){for(var _=0;_<t.length;_++){var r=t[_];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,_toPropertyKey(r.key),r)}}function _createClass(e,t,_){if(t)_defineProperties(e.prototype,t);if(_)_defineProperties(e,_);Object.defineProperty(e,"prototype",{writable:false});return e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return _typeof(t)==="symbol"?t:String(t)}function _toPrimitive(e,t){if(_typeof(e)!=="object"||e===null)return e;var _=e[Symbol.toPrimitive];if(_!==undefined){var r=_.call(e,t||"default");if(_typeof(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _inherits(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function e(t,_){t.__proto__=_;return t};return _setPrototypeOf(e,t)}function _createSuper(n){var o=_isNativeReflectConstruct();return function e(){var t=_getPrototypeOf(n),_;if(o){var r=_getPrototypeOf(this).constructor;_=Reflect.construct(t,arguments,r)}else{_=t.apply(this,arguments)}return _possibleConstructorReturn(this,_)}}function _possibleConstructorReturn(e,t){if(t&&(_typeof(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return _assertThisInitialized(e)}function _assertThisInitialized(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function _getPrototypeOf(e){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function e(t){return t.__proto__||Object.getPrototypeOf(t)};return _getPrototypeOf(e)}var __signature__=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var options=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"];var ITEM_HEIGHT=48;var MAxHeightMenu=function(_React$Component){_inherits(MAxHeightMenu,_React$Component);var _super=_createSuper(MAxHeightMenu);function MAxHeightMenu(){var t;_classCallCheck(this,MAxHeightMenu);for(var e=arguments.length,_=new Array(e),r=0;r<e;r++){_[r]=arguments[r]}t=_super.call.apply(_super,[this].concat(_));t.state={anchorEl:null};t.handleClick=function(e){t.setState({anchorEl:e.currentTarget})};t.handleClose=function(){t.setState({anchorEl:null})};return t}_createClass(MAxHeightMenu,[{key:"render",value:function e(){var t=this;var _=this.state.anchorEl;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__["a"],{"aria-label":"More","aria-owns":_?"long-menu":null,"aria-haspopup":"true",onClick:this.handleClick},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_4___default.a,null)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2__["a"],{id:"long-menu",anchorEl:this.state.anchorEl,open:Boolean(_),onClose:this.handleClose,PaperProps:{style:{maxHeight:ITEM_HEIGHT*4.5,width:200}}},options.map(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__["a"],{key:e,selected:e==="Pyxis",onClick:t.handleClose},e)})))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]);return MAxHeightMenu}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(options,"options","D:\\reactify-thunk\\src\\routes\\components\\menu\\component\\MaxHeightMenu.js");e.register(ITEM_HEIGHT,"ITEM_HEIGHT","D:\\reactify-thunk\\src\\routes\\components\\menu\\component\\MaxHeightMenu.js");e.register(MAxHeightMenu,"MAxHeightMenu","D:\\reactify-thunk\\src\\routes\\components\\menu\\component\\MaxHeightMenu.js")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(module)})()}).call(this,__webpack_require__(6)(module))},3275:function(e,t,_){"use strict";var r=_(26);var n=_(47);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var o=n(_(0));var a=r(_(309));var i=(0,a.default)(o.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");t.default=i},3276:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",function(){return ChangeTransition});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);var react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(73);var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3462);var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1816);function _typeof(e){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(module)})();function _classCallCheck(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(e,t){for(var _=0;_<t.length;_++){var r=t[_];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,_toPropertyKey(r.key),r)}}function _createClass(e,t,_){if(t)_defineProperties(e.prototype,t);if(_)_defineProperties(e,_);Object.defineProperty(e,"prototype",{writable:false});return e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return _typeof(t)==="symbol"?t:String(t)}function _toPrimitive(e,t){if(_typeof(e)!=="object"||e===null)return e;var _=e[Symbol.toPrimitive];if(_!==undefined){var r=_.call(e,t||"default");if(_typeof(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _inherits(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(t)_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function e(t,_){t.__proto__=_;return t};return _setPrototypeOf(e,t)}function _createSuper(n){var o=_isNativeReflectConstruct();return function e(){var t=_getPrototypeOf(n),_;if(o){var r=_getPrototypeOf(this).constructor;_=Reflect.construct(t,arguments,r)}else{_=t.apply(this,arguments)}return _possibleConstructorReturn(this,_)}}function _possibleConstructorReturn(e,t){if(t&&(_typeof(t)==="object"||typeof t==="function")){return t}else if(t!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return _assertThisInitialized(e)}function _assertThisInitialized(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function _getPrototypeOf(e){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function e(t){return t.__proto__||Object.getPrototypeOf(t)};return _getPrototypeOf(e)}var __signature__=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var ChangeTransition=function(_React$Component){_inherits(ChangeTransition,_React$Component);var _super=_createSuper(ChangeTransition);function ChangeTransition(){var t;_classCallCheck(this,ChangeTransition);for(var e=arguments.length,_=new Array(e),r=0;r<e;r++){_[r]=arguments[r]}t=_super.call.apply(_super,[this].concat(_));t.state={anchorEl:null};t.handleClick=function(e){t.setState({anchorEl:e.currentTarget})};t.handleClose=function(){t.setState({anchorEl:null})};return t}_createClass(ChangeTransition,[{key:"render",value:function e(){var t=this.state.anchorEl;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["a"],{variant:"contained","aria-owns":t?"fade-menu":null,"aria-haspopup":"true",onClick:this.handleClick,className:"btn-danger text-white"},"Open with fade transition"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2__["a"],{id:"fade-menu",anchorEl:t,open:Boolean(t),onClose:this.handleClose},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__["a"],{onClick:this.handleClose},"Profile"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__["a"],{onClick:this.handleClose},"My account"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__["a"],{onClick:this.handleClose},"Logout")))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]);return ChangeTransition}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(ChangeTransition,"ChangeTransition","D:\\reactify-thunk\\src\\routes\\components\\menu\\component\\ChangeTransition.js")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(module)})()}).call(this,__webpack_require__(6)(module))}}]);