(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[123],{1614:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);(function(module){__webpack_require__.d(__webpack_exports__,"default",function(){return ProjectManagement});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);var react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);var reactstrap__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(238);var reactstrap__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1482);var reactstrap__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2334);var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1497);var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(118);var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(61);var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_6__);var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(81);var Api__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(89);var Components_RctCard__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(45);var Components_RctSectionLoader_RctSectionLoader__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(407);var Helpers_helpers__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(67);var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(9);function _typeof(e){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(module)})();function _defineProperty(e,_,t){_=_toPropertyKey(_);if(_ in e){Object.defineProperty(e,_,{value:t,enumerable:true,configurable:true,writable:true})}else{e[_]=t}return e}function _classCallCheck(e,_){if(!(e instanceof _)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(e,_){for(var t=0;t<_.length;t++){var a=_[t];a.enumerable=a.enumerable||false;a.configurable=true;if("value"in a)a.writable=true;Object.defineProperty(e,_toPropertyKey(a.key),a)}}function _createClass(e,_,t){if(_)_defineProperties(e.prototype,_);if(t)_defineProperties(e,t);Object.defineProperty(e,"prototype",{writable:false});return e}function _toPropertyKey(e){var _=_toPrimitive(e,"string");return _typeof(_)==="symbol"?_:String(_)}function _toPrimitive(e,_){if(_typeof(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==undefined){var a=t.call(e,_||"default");if(_typeof(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(_==="string"?String:Number)(e)}function _inherits(e,_){if(typeof _!=="function"&&_!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(_&&_.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(_)_setPrototypeOf(e,_)}function _setPrototypeOf(e,_){_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function e(_,t){_.__proto__=t;return _};return _setPrototypeOf(e,_)}function _createSuper(r){var n=_isNativeReflectConstruct();return function e(){var _=_getPrototypeOf(r),t;if(n){var a=_getPrototypeOf(this).constructor;t=Reflect.construct(_,arguments,a)}else{t=_.apply(this,arguments)}return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,_){if(_&&(_typeof(_)==="object"||typeof _==="function")){return _}else if(_!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return _assertThisInitialized(e)}function _assertThisInitialized(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function _getPrototypeOf(e){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function e(_){return _.__proto__||Object.getPrototypeOf(_)};return _getPrototypeOf(e)}var __signature__=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var ProjectItem=function(_Component){_inherits(ProjectItem,_Component);var _super=_createSuper(ProjectItem);function ProjectItem(e){var _;_classCallCheck(this,ProjectItem);_=_super.call(this,e);_.state={collapse:false};return _}_createClass(ProjectItem,[{key:"OnCollapseProject",value:function e(){this.setState({collapse:!this.state.collapse})}},{key:"render",value:function e(){var _=this;var t=this.props.data;var a=this.state.collapse;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",null,t.name),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",null,Object(Helpers_helpers__WEBPACK_IMPORTED_MODULE_11__["c"])(t.date,"DD MMM YYYY")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["a"],{color:t.progress.color,className:"mt-10 w-90",value:t.progress.value}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"mb-0 fs-12 text-muted"},t.status)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",{className:"d-flex justify-content-between"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"team-avatar w-100"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"mb-0 list-inline"},t.team.map(function(e,_){var t;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{className:"list-inline-item",key:_},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7__["a"],{id:"tooltip-top",title:e.name,placement:"top"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_4__["a"],(t={alt:"user 4",src:e.avatar},_defineProperty(t,"alt","avatar"),_defineProperty(t,"className","rounded-circle"),t))))}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["a"],{onClick:function e(){return _.OnCollapseProject()}},a?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"material-icons"},"remove_circle"):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"material-icons"},"add_circle")))),a&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",{colSpan:"4"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["a"],{isOpen:a},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"p-10"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_12__["a"],{id:"widgets.description"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,t.description))))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]);return ProjectItem}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);var ProjectManagement=function(_Component2){_inherits(ProjectManagement,_Component2);var _super2=_createSuper(ProjectManagement);function ProjectManagement(e){var _;_classCallCheck(this,ProjectManagement);_=_super2.call(this,e);_.state={projectListData:null,sectionReload:false};return _}_createClass(ProjectManagement,[{key:"componentDidMount",value:function e(){this.getProjectData()}},{key:"getProjectData",value:function e(){var _=this;this.setState({sectionReload:true});Api__WEBPACK_IMPORTED_MODULE_8__["a"].get("ProjectData.js").then(function(e){_.setState({projectListData:e.data,sectionReload:false})}).catch(function(e){_.setState({projectListData:null,sectionReload:false})})}},{key:"render",value:function e(){var _=this.state.projectListData;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"project-managemnet-wrapper"},this.state.sectionReload&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctSectionLoader_RctSectionLoader__WEBPACK_IMPORTED_MODULE_10__["a"],null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_6__["Scrollbars"],{className:"rct-scroll",autoHeight:true,autoHeightMin:100,autoHeightMax:620,autoHide:true},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["a"],{hover:true,className:"mb-0",responsive:true},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_12__["a"],{id:"components.projectName"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_12__["a"],{id:"widgets.deadline"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_12__["a"],{id:"widgets.status"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_12__["a"],{id:"widgets.team"})))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody",null,_&&_.map(function(e,_){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectItem,{key:_,data:e})})))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctCard__WEBPACK_IMPORTED_MODULE_9__["c"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"fs-12 text-base"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"mr-15 zmdi zmdi-refresh"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_12__["a"],{id:"widgets.updated10Minago"}))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]);return ProjectManagement}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(ProjectItem,"ProjectItem","D:\\reactify-thunk\\src\\components\\Widgets\\ProjectManagement.js");e.register(ProjectManagement,"ProjectManagement","D:\\reactify-thunk\\src\\components\\Widgets\\ProjectManagement.js")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(module)})()}).call(this,__webpack_require__(6)(module))},2334:function(e,_,t){"use strict";var M=t(2);var D=t(20);var a=t(0);var m=t.n(a);var r=t(1);var n=t.n(r);var o=t(12);var b=t.n(o);var v=t(8);var C=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"];var c={className:n.a.string,cssModule:n.a.object,size:n.a.string,bordered:n.a.bool,borderless:n.a.bool,striped:n.a.bool,dark:n.a.bool,hover:n.a.bool,responsive:n.a.oneOfType([n.a.bool,n.a.string]),tag:v["o"],responsiveTag:v["o"],innerRef:n.a.oneOfType([n.a.func,n.a.string,n.a.object])};var l={tag:"table",responsiveTag:"div"};var s=function e(_){var t=_.className,a=_.cssModule,r=_.size,n=_.bordered,o=_.borderless,c=_.striped,l=_.dark,s=_.hover,i=_.responsive,u=_.tag,E=_.responsiveTag,f=_.innerRef,P=Object(D["a"])(_,C);var d=Object(v["k"])(b()(t,"table",r?"table-"+r:false,n?"table-bordered":false,o?"table-borderless":false,c?"table-striped":false,l?"table-dark":false,s?"table-hover":false),a);var p=m.a.createElement(u,Object(M["a"])({},P,{ref:f,className:d}));if(i){var O=Object(v["k"])(i===true?"table-responsive":"table-responsive-"+i,a);return m.a.createElement(E,{className:O},p)}return p};s.propTypes=c;s.defaultProps=l;_["a"]=s}}]);