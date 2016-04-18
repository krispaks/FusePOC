/// <reference path='../typings/browser.d.ts' />
define(["require", "exports", './poc.controller', './poc.config', './poc.component', '../auto/auto.module', '../spul/spul.module', '../shared/shared.component', '../generic/generic.directive', 'angular', 'angular-route', 'angular-resource'], function (require, exports, poc_controller_1, poc_config_1, poc_component_1, auto_module_1, spul_module_1, shared_component_1, generic_directive_1) {
    new auto_module_1.AutoModule();
    new spul_module_1.SpulModule();
    angular.module('PocModule', ['ngRoute',
        'ngResource',
        'AutoModule',
        'SpulModule'])
        .controller('PocModuleCtrl', poc_controller_1.PocModuleCtrl)
        .directive('genericDirective', generic_directive_1.GenericDirective.factory())
        .component('pocComponent', new poc_component_1.PocComponent())
        .component('sharedComp', new shared_component_1.SharedComponent())
        .config(poc_config_1.PocConfig);
});
