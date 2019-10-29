(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["monitoring-monitoring-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/monitoring/monitoring.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/monitoring/monitoring.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "test"

/***/ }),

/***/ "./src/app/monitoring/monitoring.component.css":
/*!*****************************************************!*\
  !*** ./src/app/monitoring/monitoring.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vbml0b3JpbmcvbW9uaXRvcmluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/monitoring/monitoring.component.ts":
/*!****************************************************!*\
  !*** ./src/app/monitoring/monitoring.component.ts ***!
  \****************************************************/
/*! exports provided: MonitoringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitoringComponent", function() { return MonitoringComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MonitoringComponent = /** @class */ (function () {
    function MonitoringComponent() {
    }
    MonitoringComponent.prototype.ngOnInit = function () {
    };
    MonitoringComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-monitoring',
            template: __webpack_require__(/*! raw-loader!./monitoring.component.html */ "./node_modules/raw-loader/index.js!./src/app/monitoring/monitoring.component.html"),
            styles: [__webpack_require__(/*! ./monitoring.component.css */ "./src/app/monitoring/monitoring.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MonitoringComponent);
    return MonitoringComponent;
}());



/***/ }),

/***/ "./src/app/monitoring/monitoring.module.ts":
/*!*************************************************!*\
  !*** ./src/app/monitoring/monitoring.module.ts ***!
  \*************************************************/
/*! exports provided: MonitoringModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitoringModule", function() { return MonitoringModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _monitoring_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./monitoring.component */ "./src/app/monitoring/monitoring.component.ts");
/* harmony import */ var _monitoring_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./monitoring.routing */ "./src/app/monitoring/monitoring.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MonitoringModule = /** @class */ (function () {
    function MonitoringModule() {
    }
    MonitoringModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_monitoring_routing__WEBPACK_IMPORTED_MODULE_5__["MonitoringRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_monitoring_component__WEBPACK_IMPORTED_MODULE_4__["MonitoringComponent"]]
        })
    ], MonitoringModule);
    return MonitoringModule;
}());



/***/ }),

/***/ "./src/app/monitoring/monitoring.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/monitoring/monitoring.routing.ts ***!
  \**************************************************/
/*! exports provided: MonitoringRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitoringRoutes", function() { return MonitoringRoutes; });
/* harmony import */ var _monitoring_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monitoring.component */ "./src/app/monitoring/monitoring.component.ts");

var MonitoringRoutes = [{
        path: '',
        children: [{
                path: 'monitoring',
                component: _monitoring_component__WEBPACK_IMPORTED_MODULE_0__["MonitoringComponent"]
            }]
    }];


/***/ })

}]);
//# sourceMappingURL=monitoring-monitoring-module.js.map