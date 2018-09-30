(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _type_type_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type/type.component */ "./src/app/type/type.component.ts");
/* harmony import */ var _field_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./field/field.component */ "./src/app/field/field.component.ts");
/* harmony import */ var _rule_rule_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rule/rule.component */ "./src/app/rule/rule.component.ts");
/* harmony import */ var _validator_validator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validator/validator.component */ "./src/app/validator/validator.component.ts");
/* harmony import */ var _model_model_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/model.component */ "./src/app/model/model.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./history/history.component */ "./src/app/history/history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: 'type', component: _type_type_component__WEBPACK_IMPORTED_MODULE_2__["TypeComponent"] },
    { path: 'field', component: _field_field_component__WEBPACK_IMPORTED_MODULE_3__["FieldComponent"] },
    { path: 'rule', component: _rule_rule_component__WEBPACK_IMPORTED_MODULE_4__["RuleComponent"] },
    { path: 'model', component: _model_model_component__WEBPACK_IMPORTED_MODULE_6__["ModelComponent"] },
    { path: 'validator', component: _validator_validator_component__WEBPACK_IMPORTED_MODULE_5__["ValidatorComponent"] },
    { path: 'tickets', component: _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_7__["FeedbackComponent"] },
    { path: 'tickets/history', component: _history_history_component__WEBPACK_IMPORTED_MODULE_8__["HistoryComponent"] },
    { path: '', component: _validator_validator_component__WEBPACK_IMPORTED_MODULE_5__["ValidatorComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" routerLinkActive=\"active\" routerLink=\"/validator\">Dok.IA Rules</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/type\">Type</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/model\">Model</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/field\">Field</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/rule\">Rule</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/validator\">Validator</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/tickets\">Tickets</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n\n  <div class=\"holder\" [hidden]=\"count == 0\">\n\n    <div class=\"loader-wrapper\">\n      <div class=\"loader\">\n        <div class=\"roller\"></div>\n        <div class=\"roller\"></div>\n      </div>\n\n      <div id=\"loader2\" class=\"loader\">\n        <div class=\"roller\"></div>\n        <div class=\"roller\"></div>\n      </div>\n\n      <div id=\"loader3\" class=\"loader\">\n        <div class=\"roller\"></div>\n        <div class=\"roller\"></div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n* Infinite Loader \n*\n* Author: Jonathan Silva\n* Url: https://portfolio.jonathansilva.com.br\n*\n*/\n/* ----- Base ----- */\n.holder {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  bottom: 0px;\n  right: 0px;\n  width: 100%;\n  height: 100%;\n  opacity: 0.5;\n  background-color: #7a7a7a; }\n/* ----- Loader ----- */\n.loader-wrapper {\n  width: 148px;\n  height: 100px;\n  position: absolute !important;\n  margin: -50px 0 0 -74px;\n  left: 50%;\n  top: 60%; }\n.loader {\n  width: 148px;\n  height: 100px;\n  top: 0;\n  left: 0;\n  position: absolute; }\n.loader:after {\n    content: \"\";\n    top: auto;\n    position: absolute;\n    display: block;\n    -webkit-animation: shadow 1.2s infinite linear;\n            animation: shadow 1.2s infinite linear;\n    -moz-animation: shadow 1.2s infinite linear;\n    bottom: 0em;\n    left: 0;\n    height: .25em;\n    width: 1em;\n    border-radius: 50%;\n    opacity: 0.3; }\n.roller,\n.roller:last-child {\n  width: 70px;\n  height: 70px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: rollercoaster 1.2s infinite linear;\n  -webkit-transform: rotate(135deg);\n  -moz-animation: rollercoaster 1.2s infinite linear;\n  -moz-transform: rotate(135deg);\n  animation: rollercoaster 1.2s infinite linear;\n  transform: rotate(135deg); }\n.roller:last-child {\n  left: auto;\n  right: 0;\n  -webkit-transform: rotate(-45deg);\n  -webkit-animation: rollercoaster2 1.2s infinite linear;\n  -moz-transform: rotate(-45deg);\n  -moz-animation: rollercoaster2 1.2s infinite linear;\n  transform: rotate(-45deg);\n  animation: rollercoaster2 1.2s infinite linear; }\n.roller:before,\n.roller:last-child:before {\n  content: \"\";\n  display: block;\n  width: 15px;\n  height: 15px;\n  position: absolute !important;\n  background: #000;\n  opacity: 1 !important;\n  border-radius: 50%; }\n@-webkit-keyframes rollercoaster {\n  0% {\n    -webkit-transform: rotate(135deg); }\n  8% {\n    -webkit-transform: rotate(240deg); }\n  20% {\n    -webkit-transform: rotate(300deg); }\n  40% {\n    -webkit-transform: rotate(380deg); }\n  45% {\n    -webkit-transform: rotate(440deg); }\n  50% {\n    -webkit-transform: rotate(495deg);\n    opacity: 1; }\n  50.1% {\n    -webkit-transform: rotate(495deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform: rotate(495deg);\n    opacity: 0; } }\n@-webkit-keyframes rollercoaster2 {\n  0% {\n    opacity: 0; }\n  49.9% {\n    opacity: 0; }\n  50% {\n    opacity: 1;\n    -webkit-transform: rotate(-45deg); }\n  58% {\n    -webkit-transform: rotate(-160deg); }\n  70% {\n    -webkit-transform: rotate(-240deg); }\n  80% {\n    -webkit-transform: rotate(-300deg); }\n  90% {\n    -webkit-transform: rotate(-340deg); }\n  100% {\n    -webkit-transform: rotate(-405deg); } }\n@-webkit-keyframes shadow {\n  0% {\n    opacity: .3;\n    -webkit-transform: translateX(65px) scale(0.5, 0.5); }\n  8% {\n    -webkit-transform: translateX(30px) scale(2, 2); }\n  13% {\n    -webkit-transform: translateX(0px) scale(1.3, 1.3); }\n  30% {\n    -webkit-transform: translateX(-15px) scale(0.5, 0.5);\n    opacity: 0.1; }\n  50% {\n    -webkit-transform: translateX(60px) scale(1.2, 1.2);\n    opacity: 0.3; }\n  60% {\n    -webkit-transform: translateX(130px) scale(2, 2);\n    opacity: 0.05; }\n  65% {\n    -webkit-transform: translateX(145px) scale(1.2, 1.2); }\n  80% {\n    -webkit-transform: translateX(120px) scale(0.5, 0.5);\n    opacity: 0.1; }\n  90% {\n    -webkit-transform: translateX(80px) scale(0.8, 0.8); }\n  100% {\n    -webkit-transform: translateX(60px);\n    opacity: 0.3; } }\n/* Moz */\n/* No-prefix */\n@keyframes rollercoaster {\n  0% {\n    -webkit-transform: rotate(135deg);\n            transform: rotate(135deg); }\n  8% {\n    -webkit-transform: rotate(240deg);\n            transform: rotate(240deg); }\n  20% {\n    -webkit-transform: rotate(300deg);\n            transform: rotate(300deg); }\n  40% {\n    -webkit-transform: rotate(380deg);\n            transform: rotate(380deg); }\n  45% {\n    -webkit-transform: rotate(440deg);\n            transform: rotate(440deg); }\n  50% {\n    -webkit-transform: rotate(495deg);\n            transform: rotate(495deg);\n    opacity: 1; }\n  50.1% {\n    -webkit-transform: rotate(495deg);\n            transform: rotate(495deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform: rotate(495deg);\n            transform: rotate(495deg);\n    opacity: 0; } }\n@keyframes rollercoaster2 {\n  0% {\n    opacity: 0; }\n  49.9% {\n    opacity: 0; }\n  50% {\n    opacity: 1;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  58% {\n    -webkit-transform: rotate(-160deg);\n            transform: rotate(-160deg); }\n  70% {\n    -webkit-transform: rotate(-240deg);\n            transform: rotate(-240deg); }\n  80% {\n    -webkit-transform: rotate(-300deg);\n            transform: rotate(-300deg); }\n  90% {\n    -webkit-transform: rotate(-340deg);\n            transform: rotate(-340deg); }\n  100% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); } }\n@keyframes shadow {\n  0% {\n    opacity: .3;\n    -webkit-transform: translateX(65px) scale(0.5, 0.5);\n            transform: translateX(65px) scale(0.5, 0.5); }\n  8% {\n    -webkit-transform: translateX(30px) scale(2, 2);\n            transform: translateX(30px) scale(2, 2); }\n  13% {\n    -webkit-transform: translateX(0px) scale(1.3, 1.3);\n            transform: translateX(0px) scale(1.3, 1.3); }\n  30% {\n    -webkit-transform: translateX(-15px) scale(0.5, 0.5);\n            transform: translateX(-15px) scale(0.5, 0.5);\n    opacity: 0.1; }\n  50% {\n    -webkit-transform: translateX(60px) scale(1.2, 1.2);\n            transform: translateX(60px) scale(1.2, 1.2);\n    opacity: 0.3; }\n  60% {\n    -webkit-transform: translateX(130px) scale(2, 2);\n            transform: translateX(130px) scale(2, 2);\n    opacity: 0.05; }\n  65% {\n    -webkit-transform: translateX(145px) scale(1.2, 1.2);\n            transform: translateX(145px) scale(1.2, 1.2); }\n  80% {\n    -webkit-transform: translateX(120px) scale(0.5, 0.5);\n            transform: translateX(120px) scale(0.5, 0.5);\n    opacity: 0.1; }\n  90% {\n    -webkit-transform: translateX(80px) scale(0.8, 0.8);\n            transform: translateX(80px) scale(0.8, 0.8); }\n  100% {\n    -webkit-transform: translateX(60px);\n            transform: translateX(60px);\n    opacity: 0.3; } }\n#loader2:after {\n  -webkit-animation-delay: 0.15s;\n  animation-delay: 0.15s; }\n#loader2 .roller {\n  -webkit-animation-delay: 0.15s;\n  animation-delay: 0.15s; }\n#loader3:after {\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s; }\n#loader3 .roller {\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_interceptor_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/interceptor.module */ "./src/service/interceptor.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(httpStatus, _router) {
        var _this = this;
        this.httpStatus = httpStatus;
        this._router = _router;
        this.title = 'app';
        this.count = 1;
        this.httpStatus.getHttpStatus()
            .subscribe(function (status) {
            _this.HTTPActivity = status;
            if (status)
                _this.count++;
            else
                _this.count--;
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.currentUrl = function () {
        console.log(this._router.url);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_interceptor_module__WEBPACK_IMPORTED_MODULE_2__["HTTPStatus"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _type_type_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type/type.component */ "./src/app/type/type.component.ts");
/* harmony import */ var _field_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./field/field.component */ "./src/app/field/field.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _rule_rule_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rule/rule.component */ "./src/app/rule/rule.component.ts");
/* harmony import */ var _validator_validator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./validator/validator.component */ "./src/app/validator/validator.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_model_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./model/model.component */ "./src/app/model/model.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _service_interceptor_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../service/interceptor.module */ "./src/service/interceptor.module.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./history/history.component */ "./src/app/history/history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var RxJS_Services = [_service_interceptor_module__WEBPACK_IMPORTED_MODULE_13__["HttpsRequestInterceptor"], _service_interceptor_module__WEBPACK_IMPORTED_MODULE_13__["HTTPStatus"]];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _type_type_component__WEBPACK_IMPORTED_MODULE_3__["TypeComponent"],
                _field_field_component__WEBPACK_IMPORTED_MODULE_4__["FieldComponent"],
                _rule_rule_component__WEBPACK_IMPORTED_MODULE_7__["RuleComponent"],
                _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__["FeedbackComponent"],
                _history_history_component__WEBPACK_IMPORTED_MODULE_15__["HistoryComponent"],
                _validator_validator_component__WEBPACK_IMPORTED_MODULE_8__["ValidatorComponent"],
                _model_model_component__WEBPACK_IMPORTED_MODULE_10__["ModelComponent"],
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModalModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_11__["AngularFontAwesomeModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            ],
            providers: [RxJS_Services,
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: _service_interceptor_module__WEBPACK_IMPORTED_MODULE_13__["HttpsRequestInterceptor"],
                    multi: true
                },],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/feedback/feedback.component.css":
/*!*************************************************!*\
  !*** ./src/app/feedback/feedback.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gap-top20 {\n    margin-top: 20px;\n}"

/***/ }),

/***/ "./src/app/feedback/feedback.component.html":
/*!**************************************************!*\
  !*** ./src/app/feedback/feedback.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row gap-top20\">\n        <div class=\"col-2 offset-10\">\n                <input type=\"button\" value=\"History\" class=\"btn btn-dark form-control\" routerLink=\"/tickets/history\">\n        </div>\n    </div>\n\n    <div class=\"row gap-top20\">\n        <div class=\"col-12\">\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <input type=\"button\" value=\"IA\" class=\"btn btn-primary form-control\" (click)=\"viewTableIA()\">\n                </div>\n                <div class=\"col-4\">\n                    <input type=\"button\" value=\"OCR\" class=\"btn btn-primary form-control\" (click)=\"viewOCRTable()\">\n                </div>\n                <div class=\"col-4\">\n                    <input type=\"button\" value=\"Regras\" class=\"btn btn-primary form-control\" (click)=\"viewRegTablRegra()\">\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row gap-top20\">\n        <div class=\"col-12\">\n            <table class=\"table table-horvered table-striped\">\n                <thead>\n                    <tr>\n                        <th>Type</th>\n                        <th>Correct Comment</th>\n                        <th>Wrong Comment</th>\n                        <th>Date</th>\n                        <th>Action</th>\n                    </tr>\n                </thead>\n                <tbody>\n\n                    <ng-container *ngIf=\"viewIA\">\n                        <tr *ngFor=\"let feedback of feedbacksIA\">\n                            <td>IA</td>\n                            <td>{{feedback.comentario_correto}}</td>\n                            <td>{{feedback.comentario_errado}}</td>\n                            <td>{{feedback.dt_consulta}}</td>\n                            <td>\n                                <input type=\"button\" value=\"UPDATE\" class=\"btn btn-primary form-control\" (click)=\"updateStatus(content, feedback.id)\">\n                            </td>\n                        </tr>\n                    </ng-container>\n                    <ng-container *ngIf=\"viewOCR\">\n                        <tr *ngFor=\"let feedback of feedbacksOCR\">\n                            <td>OCR</td>\n                            <td>{{feedback.comentario_correto}}</td>\n                            <td>{{feedback.comentario_errado}}</td>\n                            <td>{{feedback.dt_consulta}}</td>\n                            <td>\n                                <input type=\"button\" value=\"UPDATE\" class=\"btn btn-primary form-control\" (click)=\"updateStatus(content, feedback.id)\">\n                            </td>\n                        </tr>\n                    </ng-container>\n                    <ng-container *ngIf=\"viewRegra\">\n                        <tr *ngFor=\"let feedback of feedbacksRegra\">\n                            <td>REGRA</td>\n                            <td>{{feedback.comentario_correto}}</td>\n                            <td>{{feedback.comentario_errado}}</td>\n                            <td>{{feedback.dt_consulta}}</td>\n                            <td>\n                                <input type=\"button\" value=\"UPDATE\" class=\"btn btn-primary form-control\" (click)=\"updateStatus(content, feedback.id)\">\n                            </td>\n                        </tr>\n                    </ng-container>\n\n                </tbody>\n            </table>\n        </div>\n    </div>\n\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Update Status</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <h5>What do you did?</h5>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"comment\"> -->\n                    <textarea class=\"form-control\" [(ngModel)]=\"comment\" rows=\"10\" id=\"comment\"></textarea>\n                </div>\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-light\" id=\"close\" (click)=\"c('Close click')\">Close</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateFeedback()\">Update Status</button>\n        </div>\n    </ng-template>\n\n</div>"

/***/ }),

/***/ "./src/app/feedback/feedback.component.ts":
/*!************************************************!*\
  !*** ./src/app/feedback/feedback.component.ts ***!
  \************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_feedback_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/feedback.service */ "./src/service/feedback.service.ts");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent(feedbackService, modalService) {
        this.feedbackService = feedbackService;
        this.modalService = modalService;
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        this.feedbacks = new Array();
        this.getAllFeedbacks();
        this.viewIA = true;
        this.viewOCR = false;
        this.viewRegra = false;
        this.comment = "";
    };
    FeedbackComponent.prototype.viewTableIA = function () {
        this.viewIA = !this.viewIA;
        this.viewOCR = false;
        this.viewRegra = false;
    };
    FeedbackComponent.prototype.viewOCRTable = function () {
        this.viewOCR = !this.viewOCR;
        this.viewIA = false;
        this.viewRegra = false;
    };
    FeedbackComponent.prototype.viewRegTablRegra = function () {
        this.viewRegra = !this.viewRegra;
        this.viewIA = false;
        this.viewOCR = false;
    };
    FeedbackComponent.prototype.getAllFeedbacks = function () {
        var _this = this;
        this.feedbackService.getFeedbacksObservable().
            subscribe(function (res) {
            _this.feedbacks = new Array();
            _this.feedbacksIA = new Array();
            _this.feedbacksOCR = new Array();
            _this.feedbacksRegra = new Array();
            _this.feedbacks = res;
            // console.log(this.feedbacks);
            for (var _i = 0, _a = _this.feedbacks; _i < _a.length; _i++) {
                var feedback = _a[_i];
                if (feedback.erro_id == "1") {
                    _this.feedbacksIA.push(feedback);
                }
                else if (feedback.erro_id == "2") {
                    _this.feedbacksOCR.push(feedback);
                }
                else if (feedback.erro_id == "3") {
                    _this.feedbacksRegra.push(feedback);
                }
            }
        });
    };
    FeedbackComponent.prototype.updateStatus = function (content, id) {
        this.id = id;
        this.modalService.open(content, { centered: true, size: 'lg' });
    };
    FeedbackComponent.prototype.updateFeedback = function () {
        // comentario ainda nao esta implantado :(
        var _this = this;
        this.feedbackService.updateStatus(this.id).subscribe(function (res) {
            alert("Updated");
            var close = document.getElementById("close");
            close.click();
            _this.getAllFeedbacks();
        });
    };
    FeedbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-type',
            template: __webpack_require__(/*! ./feedback.component.html */ "./src/app/feedback/feedback.component.html"),
            styles: [__webpack_require__(/*! ./feedback.component.css */ "./src/app/feedback/feedback.component.css")],
            providers: [_service_feedback_service__WEBPACK_IMPORTED_MODULE_1__["FeedbackService"]]
            //   TypeService
        }),
        __metadata("design:paramtypes", [_service_feedback_service__WEBPACK_IMPORTED_MODULE_1__["FeedbackService"],
            _node_modules_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "./src/app/field/field.component.css":
/*!*******************************************!*\
  !*** ./src/app/field/field.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/field/field.component.html":
/*!********************************************!*\
  !*** ./src/app/field/field.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!-- <h4 class=\"card-title\">Type</h4>   -->\n  <div class=\"card m-2\">\n    <div class=\"card-body\">\n      <h4 class=\"card-text\">Cadatro</h4>\n      <div class=\"row m-2\">\n        <div class=\"col-3 text-right\">\n          <h5>Type</h5>\n        </div>\n        <div class=\"col-9\">\n          <select class=\"form-control\" [(ngModel)]=\"field.idType\">\n            <option *ngFor=\"let type of types\" value=\"{{type._id}}\">{{type.description}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"row m-2\">\n        <div class=\"col-3 text-right\">\n          <h5>Model</h5>\n        </div>\n        <div class=\"col-9\">\n          <select class=\"form-control\" [(ngModel)]=\"field.idModel\">\n            <option *ngFor=\"let model of models\" value=\"{{model._id}}\">{{model.description}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"row m-2\" *ngIf=\"verifyIdType(field.idType)\">\n        <div class=\"col-3 text-right\">\n          <h5>Percentage</h5>\n        </div>\n        <div class=\"col-9\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"field.percentage\">\n        </div>\n      </div>\n      <div class=\"row m-2\">\n        <div class=\"col-3 text-right\">\n          <h5>Title</h5>\n        </div>\n        <div class=\"col-9\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"field.title\">\n        </div>\n      </div>\n      <div class=\"row m-2\">\n        <div class=\"col-3 text-right\">\n          <h5>Need Other ID?</h5>\n        </div>\n        <div class=\"col-9\">\n          <select class=\"form-control\" [(ngModel)]=\"field.needOtherId\">\n            <option value=\"false\">NO</option>\n            <option value=\"true\">YES</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"row m-2\" *ngIf=\"verify(field.needOtherId)\">\n        <div class=\"col-3 text-right\">\n          <h5>Other ID</h5>\n        </div>\n        <div class=\"col-9\">\n          <select class=\"form-control\" [(ngModel)]=\"field.otherId\">\n            <option *ngFor=\"let field of fields\" value=\"{{field._id}}\">{{field.title}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"row m-2\">\n        <div class=\"col-3 text-right\">\n          <h5>Dependency</h5>\n        </div>\n        <div class=\"col-9\">\n          <select class=\"form-control\" [(ngModel)]=\"field.dependency\">\n            <option value=\"false\">NO</option>\n            <option value=\"true\">YES</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"row m-2\" *ngIf=\"verify(field.dependency)\">\n        <div class=\"col-3 text-right\">\n          <h5>Dependency ID</h5>\n        </div>\n        <div class=\"col-9\">\n          <select class=\"form-control\" [(ngModel)]=\"field.idDependency\">\n            <option *ngFor=\"let field of fields\" value=\"{{field._id}}\">{{field.title}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"row m-2\">\n        <div class=\"col-6 offset-6 text-right\">\n          <input type=\"button\" value=\"INSERT\" class=\"btn btn-primary form-control\" (click)=\"insertField()\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <hr/>\n\n  <div class=\"card m-2\">\n    <div class=\"card-body\">\n      <h4 class=\"card-text\">List Fields</h4>\n      <hr/>\n      <div class=\"row m-2\">\n        <div class=\"col-12\">\n          <div class=\"table-responsive\">\n            <table class=\"table table-striped table-horvered \">\n              <thead>\n                <tr>\n                  <!-- <th>_id</th> -->\n                  <th>Title</th>\n                  <th>Model</th>\n                  <!-- <th>Need Other ID?</th> -->\n                  <th>Type</th>\n                  <th>Title</th>\n                  <th>Model</th>\n                  <th>Percentage</th>\n                  <!-- <th>Dependency</th> -->\n                  <!-- <th>Dependency ID</th> -->\n                  <th>Edit</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let field of fieldsSelected\">\n                  <!-- <td>{{field._id}}</td> -->\n                  <td>{{field.title}}</td>\n                  <td>{{field.titleModel}}</td>\n                  <!-- <td>{{field.needOtderId}}</td> -->\n                  <td>{{field.titleType}}</td>\n                  <td>{{field.titleId}}</td>\n                  <td>{{field.titleModelId}}</td>\n                  <td>{{field.percentage == 100 || field.percentage == 0 ? '' : field.percentage}}</td>\n                  <!-- <td>{{field.dependency}}</td> -->\n                  <!-- <td>{{field.idDependency}}</td> -->\n                  <td>\n                    <i class=\"fa fa-2x fa-edit click\" style=\"cursor:pointer;\" (click)=\"modifyField(content, field._id)\"></i>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card-body\">\n      <h4 class=\"card-text\">List (Nenhum)\n      </h4>\n      <hr/>\n      <div class=\"row m-2\">\n        <div class=\"col-12\">\n          <div class=\"table-responsive\">\n            <table class=\"table table-striped table-horvered \">\n              <thead>\n                <tr>\n                  <!-- <th>_id</th> -->\n                  <th>Title</th>\n                  <th>Model</th>\n                  <!-- <th>Need Other ID?</th> -->\n                  <th>Type</th>\n                  <!-- <th>Title</th> -->\n                  <!-- <th>Model</th> -->\n                  <!-- <th>Percentage</th> -->\n                  <!-- <th>Dependency</th> -->\n                  <!-- <th>Dependency ID</th> -->\n\n                  <th>Edit</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let field of fieldsNenhum\">\n                  <!-- <td>{{field._id}}</td> -->\n                  <td>{{field.title}}</td>\n                  <td>{{field.titleModel}}</td>\n                  <!-- <td>{{field.needOtderId}}</td> -->\n                  <td>{{field.titleType}}</td>\n                  <!-- <td>{{field.titleId}}</td> -->\n                  <!-- <td>{{field.titleModelId}}</td> -->\n                  <!-- <td>{{field.percentage}}</td> -->\n                  <!-- <td>{{field.dependency}}</td> -->\n                  <!-- <td>{{field.idDependency}}</td> -->\n                  <td>\n                    <i class=\"fa fa-2x fa-edit click\" style=\"cursor:pointer;\" (click)=\"modifyField(content, field._id)\"></i>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Update Field</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"row m-2\">\n            <div class=\"col-3 text-right\">\n              <h5>Type</h5>\n            </div>\n            <div class=\"col-9\">\n              <select class=\"form-control\" [(ngModel)]=\"fieldEdit.idType\">\n                <option *ngFor=\"let type of types\" value=\"{{type._id}}\">{{type.description}}</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row m-2\">\n            <div class=\"col-3 text-right\">\n              <h5>Model</h5>\n            </div>\n            <div class=\"col-9\">\n              <select class=\"form-control\" [(ngModel)]=\"fieldEdit.idModel\">\n                <option *ngFor=\"let model of models\" value=\"{{model._id}}\">{{model.description}}</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row m-2\" *ngIf=\"verifyIdType(fieldEdit.idType)\">\n            <div class=\"col-3 text-right\">\n              <h5>Percentage</h5>\n            </div>\n            <div class=\"col-9\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"fieldEdit.percentage\">\n            </div>\n          </div>\n          <div class=\"row m-2\">\n            <div class=\"col-3 text-right\">\n              <h5>Title</h5>\n            </div>\n            <div class=\"col-9\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"fieldEdit.title\">\n            </div>\n          </div>\n          <div class=\"row m-2\">\n            <div class=\"col-3 text-right\">\n              <h5>Need Other ID?</h5>\n            </div>\n            <div class=\"col-9\">\n              <select class=\"form-control\" [(ngModel)]=\"fieldEdit.needOtherId\">\n                <option value=\"false\">NO</option>\n                <option value=\"true\">YES</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row m-2\" *ngIf=\"verify(fieldEdit.needOtherId)\">\n            <div class=\"col-3 text-right\">\n              <h5>Other ID</h5>\n            </div>\n            <div class=\"col-9\">\n              <select class=\"form-control\" [(ngModel)]=\"fieldEdit.otherId\">\n                <option *ngFor=\"let field of fields\" value=\"{{field._id}}\">{{field.title}}</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row m-2\">\n            <div class=\"col-3 text-right\">\n              <h5>Dependency</h5>\n            </div>\n            <div class=\"col-9\">\n              <select class=\"form-control\" [(ngModel)]=\"fieldEdit.dependency\">\n                <option value=\"false\">NO</option>\n                <option value=\"true\">YES</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row m-2\" *ngIf=\"verify(fieldEdit.dependency)\">\n            <div class=\"col-3 text-right\">\n              <h5>Dependency ID</h5>\n            </div>\n            <div class=\"col-9\">\n              <select class=\"form-control\" [(ngModel)]=\"fieldEdit.idDependency\">\n                <option *ngFor=\"let field of fields\" value=\"{{fieldEdit._id}}\">{{fieldEdit.title}}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-light\" id=\"close\" (click)=\"c('Close click')\">Close</button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateField()\">Update</button>\n    </div>\n  </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/field/field.component.ts":
/*!******************************************!*\
  !*** ./src/app/field/field.component.ts ***!
  \******************************************/
/*! exports provided: FieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldComponent", function() { return FieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_field_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/field.service */ "./src/service/field.service.ts");
/* harmony import */ var _model_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/field */ "./src/model/field.ts");
/* harmony import */ var _service_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/type.service */ "./src/service/type.service.ts");
/* harmony import */ var _service_model_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/model.service */ "./src/service/model.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FieldComponent = /** @class */ (function () {
    function FieldComponent(fieldService, typeService, modelService, modalService) {
        this.fieldService = fieldService;
        this.typeService = typeService;
        this.modelService = modelService;
        this.modalService = modalService;
    }
    FieldComponent.prototype.ngOnInit = function () {
        this.getAllFields();
    };
    FieldComponent.prototype.getAllModels = function () {
        var _this = this;
        if (this.models.length == 0) {
            this.modelService.getModelsObservable().
                subscribe(function (res) {
                _this.models = new Array();
                _this.models = res;
                _this.setModels();
            });
        }
        else {
            this.setModels();
        }
    };
    FieldComponent.prototype.getAllTypes = function () {
        var _this = this;
        if (this.types.length == 0) {
            this.typeService.getTypesObservable().
                subscribe(function (res) {
                _this.types = new Array();
                _this.types = res;
                _this.setFields();
            });
        }
        else {
            this.setTypes();
        }
    };
    FieldComponent.prototype.verifyIdType = function (idType) {
        for (var _i = 0, _a = this.types; _i < _a.length; _i++) {
            var type = _a[_i];
            if (type._id == idType) {
                if (type.description == "Equals") {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    };
    FieldComponent.prototype.verify = function (response) {
        if (String(response) == 'true') {
            return true;
        }
        else {
            return false;
        }
    };
    FieldComponent.prototype.setModels = function () {
        for (var _i = 0, _a = this.fields; _i < _a.length; _i++) {
            var field = _a[_i];
            for (var _b = 0, _c = this.models; _b < _c.length; _b++) {
                var model = _c[_b];
                if (model._id == field.idModel) {
                    field.titleModel = model.description;
                }
            }
        }
        for (var _d = 0, _e = this.fields; _d < _e.length; _d++) {
            var fieldTop = _e[_d];
            for (var _f = 0, _g = this.fields; _f < _g.length; _f++) {
                var field = _g[_f];
                if (field.otherId == fieldTop._id) {
                    for (var _h = 0, _j = this.models; _h < _j.length; _h++) {
                        var model = _j[_h];
                        if (model._id == fieldTop.idModel) {
                            field.titleModelId = model.description;
                        }
                    }
                }
            }
        }
        this.setTypes();
    };
    FieldComponent.prototype.setTypes = function () {
        var count = 0;
        for (var _i = 0, _a = this.fields; _i < _a.length; _i++) {
            var field = _a[_i];
            for (var _b = 0, _c = this.types; _b < _c.length; _b++) {
                var type = _c[_b];
                if (type._id == field.idType) {
                    this.fields[count].titleType = type.description;
                }
            }
            count++;
        }
        this.fieldsNenhum = new Array();
        this.fieldsSelected = new Array();
        for (var _d = 0, _e = this.fields; _d < _e.length; _d++) {
            var field = _e[_d];
            if (field.titleType == "Nenhum") {
                this.fieldsNenhum.push(field);
            }
            else {
                this.fieldsSelected.push(field);
            }
        }
    };
    FieldComponent.prototype.setFields = function () {
        for (var _i = 0, _a = this.fields; _i < _a.length; _i++) {
            var field = _a[_i];
            for (var _b = 0, _c = this.fields; _b < _c.length; _b++) {
                var otherField = _c[_b];
                if (otherField._id == field.otherId) {
                    field.titleId = otherField.title;
                }
            }
        }
        this.getAllModels();
    };
    FieldComponent.prototype.getAllFields = function () {
        var _this = this;
        this.field = new _model_field__WEBPACK_IMPORTED_MODULE_2__["Field"]();
        this.models = new Array();
        this.fields = new Array();
        this.types = new Array();
        this.field.type = "FIELD";
        if (this.fields.length == 0) {
            this.fieldService.getFieldsObservable().
                subscribe(function (res) {
                _this.fields = new Array();
                _this.fields = res;
                _this.getAllTypes();
            });
        }
        else {
            this.setFields();
        }
    };
    FieldComponent.prototype.insertField = function () {
        var _this = this;
        this.fieldService.insertFieldObservable(this.field).subscribe(function (res) {
            alert("Inserido");
            _this.getAllFields();
            _this.field = new _model_field__WEBPACK_IMPORTED_MODULE_2__["Field"]();
            _this.field.type = "FIELD";
        });
    };
    FieldComponent.prototype.updateField = function () {
        var _this = this;
        this.fieldService.updateField(this.fieldEdit)
            .subscribe(function (res) {
            var close = document.getElementById("close");
            close.click();
            _this.getAllFields();
        }, function (err) {
            console.log(err);
        });
    };
    FieldComponent.prototype.modifyField = function (content, _id) {
        var _this = this;
        this.fieldService.getFieldByIdObservable(_id)
            .subscribe(function (field) {
            _this.fieldEdit = new _model_field__WEBPACK_IMPORTED_MODULE_2__["Field"];
            _this.fieldEdit = field;
            _this.modalService.open(content, { centered: true, size: 'lg' });
        });
    };
    FieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-field',
            template: __webpack_require__(/*! ./field.component.html */ "./src/app/field/field.component.html"),
            styles: [__webpack_require__(/*! ./field.component.css */ "./src/app/field/field.component.css")],
            providers: [_service_field_service__WEBPACK_IMPORTED_MODULE_1__["FieldService"], _service_model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"], _service_type_service__WEBPACK_IMPORTED_MODULE_3__["TypeService"]]
        }),
        __metadata("design:paramtypes", [_service_field_service__WEBPACK_IMPORTED_MODULE_1__["FieldService"],
            _service_type_service__WEBPACK_IMPORTED_MODULE_3__["TypeService"],
            _service_model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
    ], FieldComponent);
    return FieldComponent;
}());



/***/ }),

/***/ "./src/app/history/history.component.css":
/*!***********************************************!*\
  !*** ./src/app/history/history.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gap-top20 {\n    margin-top: 20px;\n}"

/***/ }),

/***/ "./src/app/history/history.component.html":
/*!************************************************!*\
  !*** ./src/app/history/history.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid gap-top20\">\n\n    <div class=\"row gap-top20\">\n        <div class=\"col-12\">\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <input type=\"button\" value=\"IA\" class=\"btn btn-primary form-control\" (click)=\"viewTableIA()\">\n                </div>\n                <div class=\"col-4\">\n                    <input type=\"button\" value=\"OCR\" class=\"btn btn-primary form-control\" (click)=\"viewOCRTable()\">\n                </div>\n                <div class=\"col-4\">\n                    <input type=\"button\" value=\"Regras\" class=\"btn btn-primary form-control\" (click)=\"viewRegTablRegra()\">\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row gap-top20\">\n        <div class=\"col-12\">\n            <table class=\"table table-horvered table-striped\">\n                <thead>\n                    <tr>\n                        <th>Type</th>\n                        <th>Correct Comment</th>\n                        <th>Wrong Comment</th>\n                        <th>Date</th>\n                        <th>Status</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <ng-container *ngIf=\"viewIA\">\n                        <tr *ngFor=\"let feedback of feedbacksIA\">\n                            <td>IA</td>\n                            <td>{{feedback.comentario_correto}}</td>\n                            <td>{{feedback.comentario_errado}}</td>\n                            <td>{{feedback.dt_consulta}}</td>\n                            <td>Solved</td>\n                        </tr>\n                    </ng-container>\n                    <ng-container *ngIf=\"viewOCR\">\n                        <tr *ngFor=\"let feedback of feedbacksOCR\">\n                            <td>OCR</td>\n                            <td>{{feedback.comentario_correto}}</td>\n                            <td>{{feedback.comentario_errado}}</td>\n                            <td>{{feedback.dt_consulta}}</td>\n                            <td>Solved</td>\n                        </tr>\n                    </ng-container>\n                    <ng-container *ngIf=\"viewRegra\">\n                        <tr *ngFor=\"let feedback of feedbacksRegra\">\n                            <td>REGRA</td>\n                            <td>{{feedback.comentario_correto}}</td>\n                            <td>{{feedback.comentario_errado}}</td>\n                            <td>{{feedback.dt_consulta}}</td>\n                            <td>Solved</td>\n                        </tr>\n                    </ng-container>\n\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/history/history.component.ts":
/*!**********************************************!*\
  !*** ./src/app/history/history.component.ts ***!
  \**********************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_feedback_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/feedback.service */ "./src/service/feedback.service.ts");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(feedbackService, modalService) {
        this.feedbackService = feedbackService;
        this.modalService = modalService;
    }
    HistoryComponent.prototype.ngOnInit = function () {
        this.feedbacks = new Array();
        this.getAllFeedbacks();
        this.viewIA = true;
        this.viewOCR = false;
        this.viewRegra = false;
    };
    HistoryComponent.prototype.viewTableIA = function () {
        this.viewIA = !this.viewIA;
        this.viewOCR = false;
        this.viewRegra = false;
    };
    HistoryComponent.prototype.viewOCRTable = function () {
        this.viewOCR = !this.viewOCR;
        this.viewIA = false;
        this.viewRegra = false;
    };
    HistoryComponent.prototype.viewRegTablRegra = function () {
        this.viewRegra = !this.viewRegra;
        this.viewIA = false;
        this.viewOCR = false;
    };
    HistoryComponent.prototype.getAllFeedbacks = function () {
        var _this = this;
        this.feedbackService.getAllFeedbacksSolved().
            subscribe(function (res) {
            _this.feedbacks = new Array();
            _this.feedbacksIA = new Array();
            _this.feedbacksOCR = new Array();
            _this.feedbacksRegra = new Array();
            _this.feedbacks = res;
            // console.log(this.feedbacks);
            for (var _i = 0, _a = _this.feedbacks; _i < _a.length; _i++) {
                var feedback = _a[_i];
                if (feedback.erro_id == "1") {
                    _this.feedbacksIA.push(feedback);
                }
                else if (feedback.erro_id == "2") {
                    _this.feedbacksOCR.push(feedback);
                }
                else if (feedback.erro_id == "3") {
                    _this.feedbacksRegra.push(feedback);
                }
            }
        });
    };
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-type',
            template: __webpack_require__(/*! ./history.component.html */ "./src/app/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.css */ "./src/app/history/history.component.css")],
            providers: [_service_feedback_service__WEBPACK_IMPORTED_MODULE_1__["FeedbackService"]]
            //   TypeService
        }),
        __metadata("design:paramtypes", [_service_feedback_service__WEBPACK_IMPORTED_MODULE_1__["FeedbackService"],
            _node_modules_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/model/model.component.css":
/*!*******************************************!*\
  !*** ./src/app/model/model.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/model/model.component.html":
/*!********************************************!*\
  !*** ./src/app/model/model.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <!-- <h4 class=\"card-title\">Model</h4>   -->\n    <div class=\"card m-2\">\n        <div class=\"card-body\">\n            <h4 class=\"card-text\">Cadatro</h4>\n            <div class=\"row m-2\">\n                <div class=\"col-3 text-right\">\n                    <h5>Description</h5>\n                </div>\n                <div class=\"col-9\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.description\">\n                </div>\n            </div>\n            <div class=\"row m-2\">\n                <div class=\"col-6 offset-6 text-right\">\n                    <input type=\"button\" value=\"INSERT\" class=\"btn btn-primary form-control\" (click)=\"insertModel()\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <hr/>\n    <div class=\"card m-2\">\n        <div class=\"card-body\">\n            <h4 class=\"card-text\">Lista</h4>\n            <hr/>\n            <div class=\"row m-2\">\n                <div class=\"col-12\">\n                    <table class=\"table table-striped table-horvered\">\n                        <thead>\n                            <tr>\n                                <th>_id</th>\n                                <th>Description</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let model of models\">\n                                <td>{{model._id}}</td>\n                                <td>{{model.description}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/model/model.component.ts":
/*!******************************************!*\
  !*** ./src/app/model/model.component.ts ***!
  \******************************************/
/*! exports provided: ModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelComponent", function() { return ModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/model.service */ "./src/service/model.service.ts");
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/model */ "./src/model/model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModelComponent = /** @class */ (function () {
    function ModelComponent(modelService) {
        this.modelService = modelService;
    }
    ModelComponent.prototype.ngOnInit = function () {
        this.model = new _model_model__WEBPACK_IMPORTED_MODULE_2__["Model"]();
        this.getAllModels();
    };
    ModelComponent.prototype.getAllModels = function () {
        var _this = this;
        this.modelService.getModelsObservable().
            subscribe(function (res) {
            _this.models = new Array();
            _this.models = res;
        });
    };
    ModelComponent.prototype.insertModel = function () {
        var _this = this;
        this.modelService.insertModelObservable(this.model).subscribe(function (res) {
            alert("Inserido");
            _this.getAllModels();
        });
    };
    ModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-model',
            template: __webpack_require__(/*! ./model.component.html */ "./src/app/model/model.component.html"),
            styles: [__webpack_require__(/*! ./model.component.css */ "./src/app/model/model.component.css")],
            providers: [_service_model_service__WEBPACK_IMPORTED_MODULE_1__["ModelService"]]
        }),
        __metadata("design:paramtypes", [_service_model_service__WEBPACK_IMPORTED_MODULE_1__["ModelService"]])
    ], ModelComponent);
    return ModelComponent;
}());



/***/ }),

/***/ "./src/app/rule/rule.component.css":
/*!*****************************************!*\
  !*** ./src/app/rule/rule.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/rule/rule.component.html":
/*!******************************************!*\
  !*** ./src/app/rule/rule.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <!-- <h4 class=\"card-title\">Rule</h4>   -->\n    <div class=\"card m-2\">\n        <div class=\"card-body\">\n            <h4 class=\"card-text\">Cadatro</h4>\n            <div class=\"row m-2\">\n                <div class=\"col-2 text-right\">\n                    <h5>Description</h5>\n                </div>\n                <div class=\"col-10\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"rule.description\">\n                </div>\n            </div>\n            <div class=\"row m-2\" *ngFor=\"let ruleObject of fieldsSelected; let i = index\">\n                <div class=\"col-2 text-right\">\n                    <h5>Field</h5>\n                </div>\n                <div class=\"col-6\">\n                    <select class=\"form-control\" [(ngModel)]=\"fieldsSelected[i]\">\n                        <option *ngFor=\"let field of fields\" value=\"{{field._id}}\">{{field.title}}</option>\n                    </select>\n                </div>\n                <div class=\"col-2 text-right\" *ngIf=\"(( fieldsSelected.length - 1) | number) == (i | number)\">\n                    <input type=\"button\" value=\"ADD\" class=\"btn btn-primary form-control\" (click)=\"addField()\">\n                </div>\n                <div class=\"col-2 text-right\" *ngIf=\"(( fieldsSelected.length - 1) | number) > 0 && i != 0 && (( fieldsSelected.length - 1) | number) == (i | number)\">\n                    <input type=\"button\" value=\"REMOVE\" class=\"btn btn-danger form-control\" (click)=\"removeField()\">\n                </div>\n            </div>\n            <div class=\"row m-2\">\n                <div class=\"col-6 offset-6 text-right\">\n                    <input type=\"button\" value=\"INSERT\" class=\"btn btn-primary form-control\" (click)=\"insertRule()\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <hr/>\n    <div class=\"card m-2\">\n        <div class=\"card-body\">\n            <h4 class=\"card-text\">List Rules</h4>\n            <hr/>\n            <div class=\"row m-2\">\n                <div class=\"col-12\">\n                    <table class=\"table table-striped table-horvered\">\n                        <thead>\n                            <tr>\n                                <th>Description</th>\n                                <th>_id</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let rule of rules\">\n                                <td>{{rule.description}}</td>\n                                <td>{{rule._id}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/rule/rule.component.ts":
/*!****************************************!*\
  !*** ./src/app/rule/rule.component.ts ***!
  \****************************************/
/*! exports provided: RuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleComponent", function() { return RuleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_rule_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/rule.service */ "./src/service/rule.service.ts");
/* harmony import */ var _model_rule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/rule */ "./src/model/rule.ts");
/* harmony import */ var _service_field_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/field.service */ "./src/service/field.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RuleComponent = /** @class */ (function () {
    function RuleComponent(ruleService, fieldService) {
        this.ruleService = ruleService;
        this.fieldService = fieldService;
    }
    RuleComponent.prototype.ngOnInit = function () {
        this.rule = new _model_rule__WEBPACK_IMPORTED_MODULE_2__["Rule"]();
        this.rule.type = "RULE";
        this.fieldsSelected = new Array();
        this.fieldsSelected.push("");
        this.getAllRules();
        this.getAllFields();
    };
    RuleComponent.prototype.addField = function () {
        this.fieldsSelected.push("");
    };
    RuleComponent.prototype.removeField = function () {
        this.fieldsSelected.pop();
    };
    RuleComponent.prototype.getAllRules = function () {
        var _this = this;
        this.ruleService.getRulesObservable().
            subscribe(function (res) {
            _this.rules = new Array();
            _this.rules = res;
        });
    };
    RuleComponent.prototype.getAllFields = function () {
        var _this = this;
        this.fieldService.getFieldsObservable().
            subscribe(function (res) {
            _this.fields = new Array();
            _this.fields = res;
        });
    };
    RuleComponent.prototype.insertRule = function () {
        var _this = this;
        var fieldsInsert = new Array();
        for (var _i = 0, _a = this.fieldsSelected; _i < _a.length; _i++) {
            var fieldSel = _a[_i];
            for (var _b = 0, _c = this.fields; _b < _c.length; _b++) {
                var field = _c[_b];
                if (field._id == fieldSel) {
                    fieldsInsert.push(field);
                }
            }
        }
        this.rule.fields = fieldsInsert;
        this.ruleService.insertRuleObservable(this.rule).subscribe(function (res) {
            alert("Inserido");
            _this.getAllRules();
            _this.rule = new _model_rule__WEBPACK_IMPORTED_MODULE_2__["Rule"]();
            _this.rule.type = "RULE";
            _this.fieldsSelected = new Array();
            _this.fieldsSelected.push("");
        });
    };
    RuleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rule',
            template: __webpack_require__(/*! ./rule.component.html */ "./src/app/rule/rule.component.html"),
            styles: [__webpack_require__(/*! ./rule.component.css */ "./src/app/rule/rule.component.css")],
            providers: [_service_rule_service__WEBPACK_IMPORTED_MODULE_1__["RuleService"], _service_field_service__WEBPACK_IMPORTED_MODULE_3__["FieldService"]]
        }),
        __metadata("design:paramtypes", [_service_rule_service__WEBPACK_IMPORTED_MODULE_1__["RuleService"],
            _service_field_service__WEBPACK_IMPORTED_MODULE_3__["FieldService"]])
    ], RuleComponent);
    return RuleComponent;
}());



/***/ }),

/***/ "./src/app/type/type.component.css":
/*!*****************************************!*\
  !*** ./src/app/type/type.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/type/type.component.html":
/*!******************************************!*\
  !*** ./src/app/type/type.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <!-- <h4 class=\"card-title\">Type</h4>   -->\n    <div class=\"card m-2\">\n        <div class=\"card-body\">\n            <h4 class=\"card-text\">Cadatro</h4>\n            <div class=\"row m-2\">\n                <div class=\"col-3 text-right\">\n                    <h5>Description</h5>\n                </div>\n                <div class=\"col-9\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"type.description\">\n                </div>\n            </div>\n            <div class=\"row m-2\">\n                <div class=\"col-3 text-right\">\n                    <h5>Command</h5>\n                </div>\n                <div class=\"col-9\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"type.command\">\n                </div>\n            </div>\n            <div class=\"row m-2\">\n                <div class=\"col-6 offset-6 text-right\">\n                    <input type=\"button\" value=\"INSERT\" class=\"btn btn-primary form-control\" (click)=\"insertType()\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <hr/>\n    <div class=\"card m-2\">\n        <div class=\"card-body\">\n            <h4 class=\"card-text\">Lista</h4>\n            <hr/>\n            <div class=\"row m-2\">\n                <div class=\"col-12\">\n                    <table class=\"table table-striped table-horvered\">\n                        <thead>\n                            <tr>\n                                <th>_id</th>\n                                <th>Description</th>\n                                <th>Command</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let type of types\">\n                                <td>{{type._id}}</td>\n                                <td>{{type.description}}</td>\n                                <td>{{type.command}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/type/type.component.ts":
/*!****************************************!*\
  !*** ./src/app/type/type.component.ts ***!
  \****************************************/
/*! exports provided: TypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeComponent", function() { return TypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_type_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/type.service */ "./src/service/type.service.ts");
/* harmony import */ var _model_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/type */ "./src/model/type.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TypeComponent = /** @class */ (function () {
    function TypeComponent(typeService) {
        this.typeService = typeService;
    }
    TypeComponent.prototype.ngOnInit = function () {
        this.type = new _model_type__WEBPACK_IMPORTED_MODULE_2__["Type"]();
        this.getAllTypes();
    };
    TypeComponent.prototype.getAllTypes = function () {
        var _this = this;
        this.typeService.getTypesObservable().
            subscribe(function (res) {
            _this.types = new Array();
            _this.types = res;
        });
    };
    TypeComponent.prototype.insertType = function () {
        var _this = this;
        this.typeService.insertTypeObservable(this.type).subscribe(function (res) {
            alert("Inserido");
            _this.getAllTypes();
        });
    };
    TypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-type',
            template: __webpack_require__(/*! ./type.component.html */ "./src/app/type/type.component.html"),
            styles: [__webpack_require__(/*! ./type.component.css */ "./src/app/type/type.component.css")],
            providers: [_service_type_service__WEBPACK_IMPORTED_MODULE_1__["TypeService"]]
        }),
        __metadata("design:paramtypes", [_service_type_service__WEBPACK_IMPORTED_MODULE_1__["TypeService"]])
    ], TypeComponent);
    return TypeComponent;
}());



/***/ }),

/***/ "./src/app/validator/validator.component.css":
/*!***************************************************!*\
  !*** ./src/app/validator/validator.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dark-modal .modal-content {\n    background-color: #292b2c;\n    color: white;\n  }\n  .dark-modal .close {\n    color: white;\n  }\n  .light-blue-backdrop {\n    background-color: #5cb3fd;\n  }"

/***/ }),

/***/ "./src/app/validator/validator.component.html":
/*!****************************************************!*\
  !*** ./src/app/validator/validator.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"card m-2\">\n    <div class=\"card-body\">\n      <h4 class=\"card-text\">Select</h4>\n      <hr/>\n      <div class=\"row m-2\">\n        <div class=\"col-12\">\n          <table class=\"table table-striped table-horvered\">\n            <thead>\n              <tr>\n                <th>Description</th>\n                <!-- <th>_id</th> -->\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let rule of rules; let i = index\">\n                <td>{{rule.description}}</td>\n                <!-- <td>{{rule._id}}</td> -->\n                <td>\n                  <input type=\"button\" value=\"TEST\" class=\"btn btn-primary form-control\" (click)=\"addValidator(i)\">\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card m-2\">\n    <div class=\"card-body\">\n      <h4 class=\"card-text\">Lista</h4>\n      <div class=\"row m-2\">\n        <div class=\"col-12\">\n          <div class=\"table-responsive\">\n            <table class=\"table table-horvered table-striped \">\n              <thead>\n                <tr>\n                  <th>Titile</th>\n                  <th>Model</th>\n                  <th>Value</th>\n                  <th>Type</th>\n                  <th>Other ID</th>\n                  <th>Model ID</th>\n                  <th>Percentage</th>\n                  <th>Percentage Obtained</th>\n                  <th>Result</th>\n                  <th></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let field of rule.fields; let i = index;\" [ngClass]=\"[field.result == 'true' ? 'table-success' : '']\">\n                  <td class=\"success\">{{field.title}}</td>\n\n                  <td>{{field.titleModel}}</td>\n                  <td>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"field.value\">\n                  </td>\n                  <td>{{field.titleType}}</td>\n                  <td>{{field.titleId}}</td>\n                  <td>{{field.titleModelId}}</td>\n                  <td>{{field.percentage == 100 || field.percentage == 0 || field.percentage == undefined ? '' : field.percentage + '%'}}</td>\n                  <td>{{field.percentageResult == undefined || field.percentageResult == 0 ? '' : field.percentageResult + '%'}}</td>\n                  <td>{{field.result}}</td>\n                  <td>\n                    <i *ngIf=\"field.result == 'true' && field.value != '' && field.value != undefined && field.titleType != 'Nenhum'\" class=\"fa fa-2x fa-check\"></i>\n                    <i *ngIf=\"field.result == 'false' && field.value != '' && field.value != undefined && field.titleType != 'Nenhum'\" class=\"fa fa-2x fa-times\"></i>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n      <div class=\"row m-2\">\n        <div class=\"col-6 offset-3\">\n          <input type=\"button\" class=\"btn btn-primary form-control\" value=\"VALIDATOR\" (click)=\"validator()\" />\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- COLOCAR MODAL -->\n</div>"

/***/ }),

/***/ "./src/app/validator/validator.component.ts":
/*!**************************************************!*\
  !*** ./src/app/validator/validator.component.ts ***!
  \**************************************************/
/*! exports provided: ValidatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatorComponent", function() { return ValidatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/input */ "./src/model/input.ts");
/* harmony import */ var _service_rule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/rule.service */ "./src/service/rule.service.ts");
/* harmony import */ var _model_rule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/rule */ "./src/model/rule.ts");
/* harmony import */ var _service_field_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/field.service */ "./src/service/field.service.ts");
/* harmony import */ var _service_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/type.service */ "./src/service/type.service.ts");
/* harmony import */ var _service_model_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/model.service */ "./src/service/model.service.ts");
/* harmony import */ var _model_document__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/document */ "./src/model/document.ts");
/* harmony import */ var _service_validator_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/validator.service */ "./src/service/validator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { ValidatorService } from '../../service/validator.service';








var ValidatorComponent = /** @class */ (function () {
    function ValidatorComponent(
    // private validatorService : ValidatorService,
    ruleService, fieldService, typeService, modelService, validatorService) {
        this.ruleService = ruleService;
        this.fieldService = fieldService;
        this.typeService = typeService;
        this.modelService = modelService;
        this.validatorService = validatorService;
    }
    ValidatorComponent.prototype.ngOnInit = function () {
        this.rule = new _model_rule__WEBPACK_IMPORTED_MODULE_3__["Rule"]();
        this.getAllRules();
    };
    ValidatorComponent.prototype.addValidator = function (index) {
        var count = 0;
        for (var _i = 0, _a = this.rules; _i < _a.length; _i++) {
            var rule = _a[_i];
            if (count == index) {
                this.rule = rule;
            }
            count++;
        }
        this.models = new Array();
        this.fields = new Array();
        this.types = new Array();
        this.getAllModels();
        this.getAllTypes();
        this.getAllFields();
    };
    ValidatorComponent.prototype.getAllModels = function () {
        var _this = this;
        if (this.models.length == 0) {
            this.modelService.getModelsObservable().
                subscribe(function (res) {
                _this.models = new Array();
                _this.models = res;
                _this.setModels();
            });
        }
        else {
            this.setModels();
        }
    };
    ValidatorComponent.prototype.getAllTypes = function () {
        var _this = this;
        if (this.types.length == 0) {
            this.typeService.getTypesObservable().
                subscribe(function (res) {
                _this.types = new Array();
                _this.types = res;
                _this.setTypes();
            });
        }
        else {
            this.setTypes();
        }
    };
    ValidatorComponent.prototype.setModels = function () {
        for (var _i = 0, _a = this.rule.fields; _i < _a.length; _i++) {
            var field = _a[_i];
            for (var _b = 0, _c = this.models; _b < _c.length; _b++) {
                var model = _c[_b];
                if (model._id == field.idModel) {
                    field.titleModel = model.description;
                }
            }
        }
        for (var _d = 0, _e = this.rule.fields; _d < _e.length; _d++) {
            var fieldTop = _e[_d];
            for (var _f = 0, _g = this.rule.fields; _f < _g.length; _f++) {
                var field = _g[_f];
                if (field.otherId == fieldTop._id) {
                    for (var _h = 0, _j = this.models; _h < _j.length; _h++) {
                        var model = _j[_h];
                        if (model._id == fieldTop.idModel) {
                            field.titleModelId = model.description;
                        }
                    }
                }
            }
        }
    };
    ValidatorComponent.prototype.setTypes = function () {
        var count = 0;
        for (var _i = 0, _a = this.rule.fields; _i < _a.length; _i++) {
            var field = _a[_i];
            for (var _b = 0, _c = this.types; _b < _c.length; _b++) {
                var type = _c[_b];
                if (type._id == field.idType) {
                    this.rule.fields[count].titleType = type.description;
                }
            }
            count++;
        }
    };
    ValidatorComponent.prototype.setFields = function () {
        for (var _i = 0, _a = this.rule.fields; _i < _a.length; _i++) {
            var field = _a[_i];
            for (var _b = 0, _c = this.fields; _b < _c.length; _b++) {
                var otherField = _c[_b];
                if (otherField._id == field.otherId) {
                    field.titleId = otherField.title;
                }
            }
        }
    };
    ValidatorComponent.prototype.getAllFields = function () {
        var _this = this;
        if (this.fields.length == 0) {
            this.fieldService.getFieldsObservable().
                subscribe(function (res) {
                _this.fields = new Array();
                _this.fields = res;
                _this.setFields();
            });
        }
        else {
            this.setFields();
        }
    };
    ValidatorComponent.prototype.validator = function () {
        var _this = this;
        var inputs = new Array();
        for (var _i = 0, _a = this.rule.fields; _i < _a.length; _i++) {
            var field = _a[_i];
            var input = new _model_input__WEBPACK_IMPORTED_MODULE_1__["Input"]();
            input.idField = field._id;
            input.value = field.value;
            inputs.push(input);
        }
        var document = new _model_document__WEBPACK_IMPORTED_MODULE_7__["Document"]();
        document.inputs = inputs;
        document.idRule = this.rule._id;
        this.validatorService.insertValidatorObservable(document).subscribe(function (res) {
            var result = Array();
            result = res;
            var count = 0;
            for (var _i = 0, _a = _this.rule.fields; _i < _a.length; _i++) {
                var fields = _a[_i];
                var res_1 = "";
                var percentageResult = "";
                for (var _b = 0, result_1 = result; _b < result_1.length; _b++) {
                    var rst = result_1[_b];
                    if (fields._id == rst.idField) {
                        res_1 = String(rst.result);
                        percentageResult = String(rst.percentageResult);
                    }
                }
                _this.rule.fields[count].result = res_1;
                _this.rule.fields[count].percentageResult = Math.round(Number(percentageResult));
                count++;
            }
        });
    };
    ValidatorComponent.prototype.getAllRules = function () {
        var _this = this;
        this.ruleService.getRulesObservable().
            subscribe(function (res) {
            _this.rules = new Array();
            _this.rules = res;
        });
    };
    ValidatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-validator',
            template: __webpack_require__(/*! ./validator.component.html */ "./src/app/validator/validator.component.html"),
            styles: [__webpack_require__(/*! ./validator.component.css */ "./src/app/validator/validator.component.css")],
            providers: [_service_rule_service__WEBPACK_IMPORTED_MODULE_2__["RuleService"]]
        }),
        __metadata("design:paramtypes", [_service_rule_service__WEBPACK_IMPORTED_MODULE_2__["RuleService"],
            _service_field_service__WEBPACK_IMPORTED_MODULE_4__["FieldService"],
            _service_type_service__WEBPACK_IMPORTED_MODULE_5__["TypeService"],
            _service_model_service__WEBPACK_IMPORTED_MODULE_6__["ModelService"],
            _service_validator_service__WEBPACK_IMPORTED_MODULE_8__["ValidatorService"]])
    ], ValidatorComponent);
    return ValidatorComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    apiUrl: 'https://dokia-rules.mybluemix.net/api',
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/model/document.ts":
/*!*******************************!*\
  !*** ./src/model/document.ts ***!
  \*******************************/
/*! exports provided: Document */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Document", function() { return Document; });
var Document = /** @class */ (function () {
    function Document() {
    }
    return Document;
}());



/***/ }),

/***/ "./src/model/field.ts":
/*!****************************!*\
  !*** ./src/model/field.ts ***!
  \****************************/
/*! exports provided: Field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
var Field = /** @class */ (function () {
    function Field() {
    }
    return Field;
}());



/***/ }),

/***/ "./src/model/input.ts":
/*!****************************!*\
  !*** ./src/model/input.ts ***!
  \****************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
var Input = /** @class */ (function () {
    function Input() {
    }
    return Input;
}());



/***/ }),

/***/ "./src/model/model.ts":
/*!****************************!*\
  !*** ./src/model/model.ts ***!
  \****************************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
var Model = /** @class */ (function () {
    function Model() {
    }
    return Model;
}());



/***/ }),

/***/ "./src/model/rule.ts":
/*!***************************!*\
  !*** ./src/model/rule.ts ***!
  \***************************/
/*! exports provided: Rule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rule", function() { return Rule; });
var Rule = /** @class */ (function () {
    function Rule() {
    }
    return Rule;
}());



/***/ }),

/***/ "./src/model/type.ts":
/*!***************************!*\
  !*** ./src/model/type.ts ***!
  \***************************/
/*! exports provided: Type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return Type; });
var Type = /** @class */ (function () {
    function Type() {
    }
    return Type;
}());



/***/ }),

/***/ "./src/service/feedback.service.ts":
/*!*****************************************!*\
  !*** ./src/service/feedback.service.ts ***!
  \*****************************************/
/*! exports provided: FeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackService", function() { return FeedbackService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedbackService = /** @class */ (function () {
    function FeedbackService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        this.feedbackURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/feedback';
    }
    FeedbackService.prototype.getFeedbacksObservable = function () {
        return this.http.get(this.feedbackURL);
    };
    FeedbackService.prototype.getAllFeedbacksSolved = function () {
        return this.http.get(this.feedbackURL + "/solved");
    };
    FeedbackService.prototype.updateStatus = function (id) {
        return this.http.post(this.feedbackURL + "/" + id, {});
    };
    FeedbackService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FeedbackService);
    return FeedbackService;
}());



/***/ }),

/***/ "./src/service/field.service.ts":
/*!**************************************!*\
  !*** ./src/service/field.service.ts ***!
  \**************************************/
/*! exports provided: FieldService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldService", function() { return FieldService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FieldService = /** @class */ (function () {
    function FieldService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        this.fieldURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/field';
    }
    FieldService.prototype.getFieldsObservable = function () {
        return this.http.get(this.fieldURL);
    };
    FieldService.prototype.getFieldByIdObservable = function (_id) {
        return this.http.get(this.fieldURL + "/byId/" + _id);
    };
    FieldService.prototype.updateField = function (field) {
        return this.http.post(this.fieldURL + "/update", field, {
            headers: this.headers
        });
    };
    FieldService.prototype.insertFieldObservable = function (field) {
        return this.http.post(this.fieldURL, field, {
            headers: this.headers
        });
    };
    FieldService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FieldService);
    return FieldService;
}());



/***/ }),

/***/ "./src/service/interceptor.module.ts":
/*!*******************************************!*\
  !*** ./src/service/interceptor.module.ts ***!
  \*******************************************/
/*! exports provided: HTTPStatus, HttpsRequestInterceptor, Interceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPStatus", function() { return HTTPStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpsRequestInterceptor", function() { return HttpsRequestInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interceptor", function() { return Interceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HTTPStatus = /** @class */ (function () {
    function HTTPStatus() {
        this.requestInFlight$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    HTTPStatus.prototype.setHttpStatus = function (inFlight) {
        this.requestInFlight$.next(inFlight);
    };
    HTTPStatus.prototype.getHttpStatus = function () {
        return this.requestInFlight$.asObservable();
    };
    HTTPStatus = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], HTTPStatus);
    return HTTPStatus;
}());

var HttpsRequestInterceptor = /** @class */ (function () {
    function HttpsRequestInterceptor(status) {
        this.status = status;
    }
    HttpsRequestInterceptor.prototype.getFromLocal = function (key) {
        return localStorage.getItem(key);
    };
    HttpsRequestInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var result = req.url.includes("/api/");
        if (result)
            this.status.setHttpStatus(true);
        var dupReq = req.clone({});
        return next.handle(dupReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) {
            return event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            var result = req.url.includes("/api/");
            if (result)
                _this.status.setHttpStatus(false);
        }));
    };
    HttpsRequestInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [HTTPStatus])
    ], HttpsRequestInterceptor);
    return HttpsRequestInterceptor;
}());

var Interceptor = /** @class */ (function () {
    function Interceptor() {
    }
    Interceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                    useClass: HttpsRequestInterceptor,
                    multi: true,
                },
            ],
        })
    ], Interceptor);
    return Interceptor;
}());



/***/ }),

/***/ "./src/service/model.service.ts":
/*!**************************************!*\
  !*** ./src/service/model.service.ts ***!
  \**************************************/
/*! exports provided: ModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelService", function() { return ModelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModelService = /** @class */ (function () {
    function ModelService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        this.modelURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/model';
    }
    ModelService.prototype.getModelsObservable = function () {
        return this.http.get(this.modelURL);
    };
    ModelService.prototype.insertModelObservable = function (model) {
        return this.http.post(this.modelURL, model);
    };
    ModelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ModelService);
    return ModelService;
}());



/***/ }),

/***/ "./src/service/rule.service.ts":
/*!*************************************!*\
  !*** ./src/service/rule.service.ts ***!
  \*************************************/
/*! exports provided: RuleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleService", function() { return RuleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RuleService = /** @class */ (function () {
    function RuleService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        this.ruleURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/rule';
    }
    RuleService.prototype.getRulesObservable = function () {
        return this.http.get(this.ruleURL);
    };
    RuleService.prototype.insertRuleObservable = function (rule) {
        return this.http.post(this.ruleURL, rule);
    };
    RuleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RuleService);
    return RuleService;
}());



/***/ }),

/***/ "./src/service/type.service.ts":
/*!*************************************!*\
  !*** ./src/service/type.service.ts ***!
  \*************************************/
/*! exports provided: TypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeService", function() { return TypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TypeService = /** @class */ (function () {
    function TypeService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        this.typeURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/type';
    }
    TypeService.prototype.getTypesObservable = function () {
        return this.http.get(this.typeURL);
    };
    TypeService.prototype.insertTypeObservable = function (type) {
        return this.http.post(this.typeURL, type);
    };
    TypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TypeService);
    return TypeService;
}());



/***/ }),

/***/ "./src/service/validator.service.ts":
/*!******************************************!*\
  !*** ./src/service/validator.service.ts ***!
  \******************************************/
/*! exports provided: ValidatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatorService", function() { return ValidatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { input } from '../model/input';
var ValidatorService = /** @class */ (function () {
    function ValidatorService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        this.validatorURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/validator';
    }
    //   getvalidatorsObservable(): Observable<Object> {
    //     return this.http.get<validator[]>(this.validatorURL)
    //   }
    ValidatorService.prototype.insertValidatorObservable = function (document) {
        return this.http.post(this.validatorURL, document);
    };
    ValidatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ValidatorService);
    return ValidatorService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/matheuscatossi/Documents/IBM/eclipse-workspace/validator-java/front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map