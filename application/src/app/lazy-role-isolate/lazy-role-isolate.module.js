"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ngx_permissions_1 = require("ngx-permissions");
var lazy_isolate_role_routing_module_1 = require("./lazy-isolate-role-routing.module");
var lazy_role_isolate_test_component_1 = require("./lazy-role-isolate-test/lazy-role-isolate-test.component");
var LazyRoleIsolateModule = /** @class */ (function () {
    function LazyRoleIsolateModule() {
    }
    LazyRoleIsolateModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                lazy_isolate_role_routing_module_1.LazyIsolateRolesRoutingModule,
                ngx_permissions_1.NgxPermissionsModule.forChild({
                    permissionsIsolate: true,
                    rolesIsolate: true
                })
            ],
            declarations: [
                lazy_role_isolate_test_component_1.LazyRoleIsolateTestComponent
            ]
        })
    ], LazyRoleIsolateModule);
    return LazyRoleIsolateModule;
}());
exports.LazyRoleIsolateModule = LazyRoleIsolateModule;