(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["licenses-licenses-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/licenses/licenses-edit/licenses-edit.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/licenses/licenses-edit/licenses-edit.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Add/Edit license</p>\r\n\r\n<mat-card class=\"example-card\">\r\n    <form *ngIf=\"formGroup\" [formGroup]=\"formGroup\">\r\n        <div class=\"example-container\">\r\n\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"SerialNr\" formControlName=\"serialNr\" type=\"text\">\r\n\r\n                <mat-error *ngIf=\"formGroup.get('serialNr').touched && formGroup.get('serialNr').errors && formGroup.get('serialNr').errors.required\">\r\n                    Serial number required!\r\n                </mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"ExpirationDate\" formControlName=\"expirationDate\" type=\"datetime\">\r\n\r\n                <mat-error *ngIf=\"formGroup.get('expirationDate').touched && formGroup.get('expirationDate').errors && formGroup.get('expirationDate').errors.required\">\r\n                    Expiration Date required!\r\n                </mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"ToolID\" formControlName=\"fkTool\" type=\"number\">\r\n\r\n                <mat-error *ngIf=\"formGroup.get('fkTool').touched && formGroup.get('fkTool').errors && formGroup.get('fkTool').errors.required\">\r\n                    ToolID required!\r\n                </mat-error>\r\n            </mat-form-field>\r\n\r\n        </div>\r\n        <div class=\"example-button-row\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"save()\">Save</button>\r\n            <button mat-raised-button color=\"primary\" [routerLink]='routerLink'>Cancel</button>\r\n        </div>\r\n    </form>\r\n</mat-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/licenses/licenses-list/licenses-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/licenses/licenses-list/licenses-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Licenses</h1>\r\n\r\n<p>Many licenses in the list</p>\r\n\r\n<div class=\"example-button-row\">\r\n    <button mat-raised-button [routerLink]='[\"../edit\"]' color=\"primary\">Add</button>\r\n</div>\r\n<br>\r\n\r\n<mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n\r\n\r\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n    <ng-container matColumnDef=\"serialNr\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:21%\"> Serial Number </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.serialNr}} </td>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container matColumnDef=\"expirationDate\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:21%\"> Expiration Date </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.expirationDate}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"fkTool\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:21%\"> Tool ID </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.fkTool}} </td>\r\n    </ng-container>\r\n\r\n\r\n    Action Column\r\n    <ng-container matColumnDef=\"action\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:10%\"> Action </th>\r\n        <td mat-cell *matCellDef=\"let license\">\r\n            <button mat-icon-button matTooltip=\"Edit\" [matTooltipPosition]=\"'after'\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\" [routerLink]=\"['../edit', license.id]\">edit</mat-icon>\r\n            </button>\r\n\r\n            <button mat-icon-button matTooltip=\"Delete\" [matTooltipPosition]=\"'after'\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon \" (click)=\"deleteLicense(license)\">delete</mat-icon>\r\n            </button>\r\n        </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"!license\"></mat-progress-bar>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/licenses/licenses.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/licenses/licenses.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./src/app/licenses/licenses-edit/licenses-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/licenses/licenses-edit/licenses-edit.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpY2Vuc2VzL2xpY2Vuc2VzLWVkaXQvbGljZW5zZXMtZWRpdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/licenses/licenses-edit/licenses-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/licenses/licenses-edit/licenses-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: LicensesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicensesEditComponent", function() { return LicensesEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _licenses_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../licenses.service */ "./src/app/licenses/licenses.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let LicensesEditComponent = class LicensesEditComponent {
    constructor(router, route, licensesService, formBuilder) {
        this.router = router;
        this.route = route;
        this.licensesService = licensesService;
        this.formBuilder = formBuilder;
        this.routerLink = '../list';
        this.isEdit = false;
    }
    ngOnInit() {
        this.licenseID = parseInt(this.route.snapshot.params['id']);
        if (this.licenseID) {
            this.routerLink = '../../list';
            this.licensesService.getLicense(this.licenseID).subscribe(res => {
                this.initForm(res);
                this.isEdit = true;
            });
        }
        else {
            this.initForm({});
        }
    }
    save() {
        Object.keys(this.formGroup.controls).forEach(control => {
            this.formGroup.get(control).markAsTouched();
        });
        if (this.formGroup.valid) {
            let license = this.formGroup.value;
            license.serialNr = license.serialNr;
            if (this.isEdit) {
                license.id = this.licenseID;
                this.licensesService.modifyLicense(license).subscribe(res => {
                    this.router.navigate(['/licenses']);
                });
            }
            else {
                this.licensesService.saveLicense(license).subscribe(res => {
                    this.router.navigate(['/licenses']);
                });
            }
        }
    }
    initForm(license) {
        this.formGroup = this.formBuilder.group({
            serialNr: [license.serialNr, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            expirationDate: [license.expirationDate, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fkTool: [license.fkTool, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
};
LicensesEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _licenses_service__WEBPACK_IMPORTED_MODULE_3__["LicensesService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
];
LicensesEditComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-licenses-edit',
        template: __importDefault(__webpack_require__(/*! raw-loader!./licenses-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/licenses/licenses-edit/licenses-edit.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./licenses-edit.component.css */ "./src/app/licenses/licenses-edit/licenses-edit.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _licenses_service__WEBPACK_IMPORTED_MODULE_3__["LicensesService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
], LicensesEditComponent);



/***/ }),

/***/ "./src/app/licenses/licenses-list/licenses-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/licenses/licenses-list/licenses-list.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpY2Vuc2VzL2xpY2Vuc2VzLWxpc3QvbGljZW5zZXMtbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/licenses/licenses-list/licenses-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/licenses/licenses-list/licenses-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: LicensesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicensesListComponent", function() { return LicensesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _licenses_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../licenses.service */ "./src/app/licenses/licenses.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let LicensesListComponent = class LicensesListComponent {
    constructor(licensesService) {
        this.licensesService = licensesService;
        this.displayedColumns = ['serialNr', 'expirationDate', 'fkTool', 'action'];
        this.isloading = false;
    }
    ngOnInit() {
        this.loadLicenses();
    }
    loadLicenses() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.licensesService.listLicenses().subscribe(res => {
                    this.licenses = res;
                    this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.licenses);
                    this.isloading = true;
                });
            }
            catch (err) {
                console.error(`this is not good: ${err.Message}`);
                this.isloading = false;
            }
        });
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    deleteLicense(license) {
        this.licensesService.deleteLicense(license.id).subscribe(x => {
            this.loadLicenses();
        });
    }
};
LicensesListComponent.ctorParameters = () => [
    { type: _licenses_service__WEBPACK_IMPORTED_MODULE_1__["LicensesService"] }
];
LicensesListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-licenses-list',
        template: __importDefault(__webpack_require__(/*! raw-loader!./licenses-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/licenses/licenses-list/licenses-list.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./licenses-list.component.css */ "./src/app/licenses/licenses-list/licenses-list.component.css")).default]
    }),
    __metadata("design:paramtypes", [_licenses_service__WEBPACK_IMPORTED_MODULE_1__["LicensesService"]])
], LicensesListComponent);



/***/ }),

/***/ "./src/app/licenses/licenses-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/licenses/licenses-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LicensesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicensesRoutingModule", function() { return LicensesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _licenses_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./licenses.component */ "./src/app/licenses/licenses.component.ts");
/* harmony import */ var _licenses_list_licenses_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./licenses-list/licenses-list.component */ "./src/app/licenses/licenses-list/licenses-list.component.ts");
/* harmony import */ var _licenses_edit_licenses_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./licenses-edit/licenses-edit.component */ "./src/app/licenses/licenses-edit/licenses-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





const routes = [
    {
        path: '', component: _licenses_component__WEBPACK_IMPORTED_MODULE_2__["LicensesComponent"],
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: _licenses_list_licenses_list_component__WEBPACK_IMPORTED_MODULE_3__["LicensesListComponent"] },
            { path: 'edit/:id', component: _licenses_edit_licenses_edit_component__WEBPACK_IMPORTED_MODULE_4__["LicensesEditComponent"] },
            { path: 'edit', component: _licenses_edit_licenses_edit_component__WEBPACK_IMPORTED_MODULE_4__["LicensesEditComponent"] },
        ]
    }
];
let LicensesRoutingModule = class LicensesRoutingModule {
};
LicensesRoutingModule.routedComponents = [_licenses_component__WEBPACK_IMPORTED_MODULE_2__["LicensesComponent"], _licenses_list_licenses_list_component__WEBPACK_IMPORTED_MODULE_3__["LicensesListComponent"], _licenses_edit_licenses_edit_component__WEBPACK_IMPORTED_MODULE_4__["LicensesEditComponent"]];
LicensesRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], LicensesRoutingModule);



/***/ }),

/***/ "./src/app/licenses/licenses.component.css":
/*!*************************************************!*\
  !*** ./src/app/licenses/licenses.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpY2Vuc2VzL2xpY2Vuc2VzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/licenses/licenses.component.ts":
/*!************************************************!*\
  !*** ./src/app/licenses/licenses.component.ts ***!
  \************************************************/
/*! exports provided: LicensesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicensesComponent", function() { return LicensesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let LicensesComponent = class LicensesComponent {
    constructor() { }
    ngOnInit() {
    }
};
LicensesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-licenses',
        template: __importDefault(__webpack_require__(/*! raw-loader!./licenses.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/licenses/licenses.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./licenses.component.css */ "./src/app/licenses/licenses.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], LicensesComponent);



/***/ }),

/***/ "./src/app/licenses/licenses.module.ts":
/*!*********************************************!*\
  !*** ./src/app/licenses/licenses.module.ts ***!
  \*********************************************/
/*! exports provided: LicensesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicensesModule", function() { return LicensesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/angular-material.module */ "./src/app/shared/angular-material.module.ts");
/* harmony import */ var _licenses_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./licenses-routing.module */ "./src/app/licenses/licenses-routing.module.ts");
/* harmony import */ var _licenses_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./licenses.service */ "./src/app/licenses/licenses.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let LicensesModule = class LicensesModule {
};
LicensesModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_licenses_routing_module__WEBPACK_IMPORTED_MODULE_5__["LicensesRoutingModule"].routedComponents],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _licenses_routing_module__WEBPACK_IMPORTED_MODULE_5__["LicensesRoutingModule"],
            _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ],
        providers: [_licenses_service__WEBPACK_IMPORTED_MODULE_6__["LicensesService"]],
    })
], LicensesModule);



/***/ }),

/***/ "./src/app/licenses/licenses.service.ts":
/*!**********************************************!*\
  !*** ./src/app/licenses/licenses.service.ts ***!
  \**********************************************/
/*! exports provided: LicensesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicensesService", function() { return LicensesService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _core_services_application_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/application.service */ "./src/app/core/services/application.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let LicensesService = class LicensesService {
    constructor(http, applicationService) {
        this.http = http;
        this.applicationService = applicationService;
    }
    getLicense(id) {
        return this.http.get(`${this.applicationService.baseUrl}api/Licenses/${id}`);
    }
    listLicenses() {
        return this.http.get(`${this.applicationService.baseUrl}api/Licenses`);
    }
    saveLicense(license) {
        return this.http.post(`${this.applicationService.baseUrl}api/Licenses`, license);
    }
    modifyLicense(license) {
        return this.http.put(`${this.applicationService.baseUrl}api/Licenses/${license.id}`, license);
    }
    deleteLicense(id) {
        return this.http.delete(`${this.applicationService.baseUrl}api/Licenses/${id}`);
    }
};
LicensesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
    { type: _core_services_application_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationService"] }
];
LicensesService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
        _core_services_application_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationService"]])
], LicensesService);



/***/ })

}]);
//# sourceMappingURL=licenses-licenses-module.js.map