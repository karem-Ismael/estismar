(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[179],{1604:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);(function(module){__webpack_require__.d(__webpack_exports__,"default",function(){return TodoListWidget});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);var react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(211);var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(719);var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(98);var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(106);var react_addons_update__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(41);var react_addons_update__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react_addons_update__WEBPACK_IMPORTED_MODULE_5__);var classnames__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(12);var classnames__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(73);var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(1785);var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(1848);var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(1850);var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(1849);var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(1912);var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(1879);var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(61);var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_14__);var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(1948);var Api__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(89);var Util_IntlMessages__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(9);var Components_RctSectionLoader_RctSectionLoader__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(407);var _material_ui_core__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(156);function _typeof(e){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(module)})();function ownKeys(_,e){var t=Object.keys(_);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(_);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(_,e).enumerable})),t.push.apply(t,a)}return t}function _objectSpread(_){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(t),!0).forEach(function(e){_defineProperty(_,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(e){Object.defineProperty(_,e,Object.getOwnPropertyDescriptor(t,e))})}return _}function _defineProperty(e,_,t){_=_toPropertyKey(_);if(_ in e){Object.defineProperty(e,_,{value:t,enumerable:true,configurable:true,writable:true})}else{e[_]=t}return e}function _classCallCheck(e,_){if(!(e instanceof _)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(e,_){for(var t=0;t<_.length;t++){var a=_[t];a.enumerable=a.enumerable||false;a.configurable=true;if("value"in a)a.writable=true;Object.defineProperty(e,_toPropertyKey(a.key),a)}}function _createClass(e,_,t){if(_)_defineProperties(e.prototype,_);if(t)_defineProperties(e,t);Object.defineProperty(e,"prototype",{writable:false});return e}function _toPropertyKey(e){var _=_toPrimitive(e,"string");return _typeof(_)==="symbol"?_:String(_)}function _toPrimitive(e,_){if(_typeof(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==undefined){var a=t.call(e,_||"default");if(_typeof(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(_==="string"?String:Number)(e)}function _inherits(e,_){if(typeof _!=="function"&&_!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(_&&_.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});if(_)_setPrototypeOf(e,_)}function _setPrototypeOf(e,_){_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function e(_,t){_.__proto__=t;return _};return _setPrototypeOf(e,_)}function _createSuper(r){var o=_isNativeReflectConstruct();return function e(){var _=_getPrototypeOf(r),t;if(o){var a=_getPrototypeOf(this).constructor;t=Reflect.construct(_,arguments,a)}else{t=_.apply(this,arguments)}return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,_){if(_&&(_typeof(_)==="object"||typeof _==="function")){return _}else if(_!==void 0){throw new TypeError("Derived constructors may only return object or undefined")}return _assertThisInitialized(e)}function _assertThisInitialized(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(e){return false}}function _getPrototypeOf(e){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function e(_){return _.__proto__||Object.getPrototypeOf(_)};return _getPrototypeOf(e)}var __signature__=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var TodoListWidget=function(_Component){_inherits(TodoListWidget,_Component);var _super=_createSuper(TodoListWidget);function TodoListWidget(){var a;_classCallCheck(this,TodoListWidget);for(var e=arguments.length,_=new Array(e),t=0;t<e;t++){_[t]=arguments[t]}a=_super.call.apply(_super,[this].concat(_));a.state={toDoListData:null,sectionReload:false,addNewTodoDialog:false,newTodo:{todoTitle:"",time:null,date:""},snackbar:false,snackbarMessage:""};a.handleClose=function(){a.setState({addNewTodoDialog:false})};a.addNewTodo=function(){if(a.state.newTodo.todoTitle!==""&&a.state.newTodo.date){var e=a.state.toDoListData;var _={title:a.state.newTodo.todoTitle,date:a.state.newTodo.date,completed:false};a.setState({sectionReload:true,addNewTodoDialog:false});var t=_assertThisInitialized(a);setTimeout(function(){e.push(_);t.setState({toDoListData:e,addNewTodoDialog:false,sectionReload:false,snackbar:true,snackbarMessage:"Todo Added Successfully!"})},1500)}};return a}_createClass(TodoListWidget,[{key:"componentDidMount",value:function e(){this.getTodo()}},{key:"getTodo",value:function e(){var _=this;this.setState({sectionReload:true});Api__WEBPACK_IMPORTED_MODULE_16__["a"].get("todo.js").then(function(e){_.setState({toDoListData:e.data,sectionReload:false})}).catch(function(e){_.setState({toDoListData:null,sectionReload:false})})}},{key:"onDeleteTask",value:function e(_,t){_.stopPropagation();this.setState({sectionReload:true});var a=this.state.toDoListData;var r=a.indexOf(t);var o=this;setTimeout(function(){a.splice(r,1);o.setState({toDoListData:a,sectionReload:false,snackbar:true,snackbarMessage:"Todo Deleted Successfully"})},1500)}},{key:"handleChange",value:function e(_,t){var a=this.state.toDoListData.indexOf(t);var r=react_addons_update__WEBPACK_IMPORTED_MODULE_5___default()(this.state,{toDoListData:_defineProperty({},a,{completed:{$set:_}})});this.setState({sectionReload:true});var o=this;setTimeout(function(){o.setState({toDoListData:r.toDoListData,sectionReload:false,snackbar:true,snackbarMessage:"Todo Updated"})},1500)}},{key:"opnAddNewTodoDialog",value:function e(){this.setState({addNewTodoDialog:true})}},{key:"render",value:function e(){var a=this;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"],null,this.state.sectionReload&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_RctSectionLoader_RctSectionLoader__WEBPACK_IMPORTED_MODULE_18__["a"],null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_14__["Scrollbars"],{className:"rct-scroll",autoHeight:true,autoHeightMin:100,autoHeightMax:420,autoHide:true},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["a"],{className:"p-0"},this.state.toDoListData&&this.state.toDoListData.map(function(t,e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["a"],{className:"border-bottom",button:true,key:e,onClick:function e(){return a.handleChange(!t.completed,t)}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_6___default()("d-flex justify-content-between align-items-center w-100",{strike:t.completed})},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"d-flex align-items-center clearfix"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"float-left"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_1__["a"],{className:"mb-0",control:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_2__["a"],{checked:t.completed,color:"primary",onChange:function e(_){return a.handleChange(_.target.checked,t)}})})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"float-left"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"mb-0"},t.title),t.date&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"d-block fs-12 text-muted"},t.date))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"hover-action"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["a"],{variant:"round",size:"small",className:"btn-danger text-white",onClick:function e(_){return a.onDeleteTask(_,t)}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"zmdi zmdi-delete"})))))}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"d-flex p-3"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["a"],{variant:"contained",color:"primary",className:"text-white",onClick:function e(){return a.opnAddNewTodoDialog()}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_17__["a"],{id:"widgets.addNew"}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__["a"],{open:this.state.addNewTodoDialog,onClose:this.handleClose,"aria-labelledby":"form-dialog-title"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_13__["a"],{id:"form-dialog-title"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_17__["a"],{id:"components.addNewTasks"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__["a"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_12__["a"],null,"Add New Todo, Add Todo Title And Select Time For Todo."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["a"],{margin:"dense",id:"name",onChange:function e(_){return a.setState({newTodo:_objectSpread(_objectSpread({},a.state.newTodo),{},{todoTitle:_.target.value})})},label:"Todo Title",type:"text",fullWidth:true,value:this.state.newTodo.todoTitle}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["a"],{id:"date",label:"Schedule Date",type:"date",InputLabelProps:{shrink:true},fullWidth:true,onChange:function e(_){return a.setState({newTodo:_objectSpread(_objectSpread({},a.state.newTodo),{},{date:_.target.value})})}})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_10__["a"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["a"],{variant:"contained",onClick:this.handleClose,className:"btn-danger text-white"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_17__["a"],{id:"button.cancel"}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["a"],{variant:"contained",onClick:this.addNewTodo,color:"primary",className:"text-white"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_IntlMessages__WEBPACK_IMPORTED_MODULE_17__["a"],{id:"button.add"}))))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_15__["a"],{anchorOrigin:{vertical:"top",horizontal:"center"},open:this.state.snackbar,onClose:function e(){return a.setState({snackbar:false})},autoHideDuration:2e3,snackbarcontentprops:{"aria-describedby":"message-id"},message:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{id:"message-id"},this.state.snackbarMessage)}))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]);return TodoListWidget}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(TodoListWidget,"TodoListWidget","D:\\reactify-thunk\\src\\components\\Widgets\\ToDoList.js")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(module)})()}).call(this,__webpack_require__(6)(module))}}]);