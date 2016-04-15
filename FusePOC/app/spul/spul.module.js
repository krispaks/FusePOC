define(["require", "exports", './spul.component', './spul.service', './segmentation/spul.segmentation.component', '../shared/shared.service'], function (require, exports, spul_component_1, spul_service_1, spul_segmentation_component_1, shared_service_1) {
    var SpulModuleCtrl = (function () {
        function SpulModuleCtrl() {
        }
        return SpulModuleCtrl;
    })();
    var SpulModule = (function () {
        function SpulModule() {
            angular.module('SpulModule', [])
                .controller('SpulModuleCtrl', SpulModuleCtrl)
                .factory('spulService', function ($resource) { return new spul_service_1.SpulService($resource); })
                .factory('sharedService', function ($resource) { return new shared_service_1.SharedService($resource); })
                .component('spulDre', new spul_component_1.SpulComponent())
                .component('spulSegmentation', new spul_segmentation_component_1.SpulSegmentationComponent());
        }
        return SpulModule;
    })();
    exports.SpulModule = SpulModule;
});
