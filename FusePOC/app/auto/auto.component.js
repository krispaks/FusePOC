define(["require", "exports", './auto.model', '../shared/shared.model'], function (require, exports, auto_model_1, shared_model_1) {
    'use strict';
    var AutoComponentCtrl = (function () {
        function AutoComponentCtrl(autoService, sharedService) {
            this.autoService = autoService;
            this.sharedService = sharedService;
            var ctrl = this;
            ctrl.LoadSegmentationData();
            ctrl.LoadSharedData();
        }
        AutoComponentCtrl.prototype.LoadSegmentationData = function () {
            var ctrl = this;
            ctrl.autoService.GetSegmentationData(1)
                .then(function (data) {
                var segData = new auto_model_1.AutoSegmentationData();
                segData.autoData1 = data.autoSegmentationData1;
                segData.autoData2 = data.autoSegmentationData2;
                segData.segmentationData1 = data.segmentationSpecificData1;
                segData.segmentationData2 = data.segmentationSpecificData2;
                ctrl.segmentationData = segData;
            });
        };
        AutoComponentCtrl.prototype.LoadSharedData = function () {
            var ctrl = this;
            ctrl.sharedService.GetSharedData()
                .then(function (data) {
                var sharedData = new shared_model_1.SharedData();
                sharedData.sharedData1 = data.sharedData1;
                sharedData.sharedData2 = data.sharedData2;
                sharedData.sharedDate1 = data.sharedDate1;
                ctrl.sharedData = sharedData;
            });
        };
        AutoComponentCtrl.$inject = ['autoService', 'sharedService'];
        return AutoComponentCtrl;
    })();
    var AutoComponent = (function () {
        function AutoComponent() {
            this.controller = {};
            this.bindigs = {};
            var component = this;
            component.templateUrl = './app/auto/auto.template.html';
            component.controller = AutoComponentCtrl;
            component.transclude = true;
            component.bindigs = {
                segmentationId: '@'
            };
        }
        return AutoComponent;
    })();
    exports.AutoComponent = AutoComponent;
});
