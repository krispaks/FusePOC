define(["require", "exports", './auto.component', './auto.service', './segmentation/auto.segmentation.component', '../shared/shared.service'], function (require, exports, auto_component_1, auto_service_1, auto_segmentation_component_1, shared_service_1) {
    var AutoModuleCtrl = (function () {
        function AutoModuleCtrl() {
        }
        return AutoModuleCtrl;
    })();
    var AutoModule = (function () {
        function AutoModule() {
            angular.module('AutoModule', [])
                .controller('AutoModuleCtrl', AutoModuleCtrl)
                .factory('autoService', function ($resource) { return new auto_service_1.AutoService($resource); })
                .factory('sharedService', function ($resource) { return new shared_service_1.SharedService($resource); })
                .component('autoDre', new auto_component_1.AutoComponent())
                .component('autoSegmentation', new auto_segmentation_component_1.AutoSegmentationComponent());
        }
        return AutoModule;
    })();
    exports.AutoModule = AutoModule;
});
