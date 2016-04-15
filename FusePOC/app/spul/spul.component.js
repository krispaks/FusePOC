define(["require", "exports", './spul.model', '../shared/shared.model'], function (require, exports, spul_model_1, shared_model_1) {
    'use strict';
    var SpulComponentCtrl = (function () {
        function SpulComponentCtrl(spulService, sharedService) {
            this.spulService = spulService;
            this.sharedService = sharedService;
            var ctrl = this;
            ctrl.LoadSegmentationData();
            ctrl.LoadSharedData();
        }
        SpulComponentCtrl.prototype.LoadSegmentationData = function () {
            var ctrl = this;
            ctrl.spulService.GetSegmentationData(1)
                .then(function (data) {
                var segData = new spul_model_1.SpulSegmentationData();
                segData.spulData1 = data.spulSegmentationData1;
                segData.spulData2 = data.spulSegmentationDate1;
                segData.segmentationData1 = data.segmentationSpecificData1;
                segData.segmentationData2 = data.segmentationSpecificData2;
                ctrl.segmentationData = segData;
            });
        };
        SpulComponentCtrl.prototype.LoadSharedData = function () {
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
        SpulComponentCtrl.$inject = ['spulService', 'sharedService'];
        return SpulComponentCtrl;
    })();
    var SpulComponent = (function () {
        function SpulComponent() {
            this.controller = {};
            this.bindigs = {};
            var component = this;
            component.templateUrl = './app/spul/spul.template.html';
            component.controller = SpulComponentCtrl;
            component.transclude = true;
            component.bindigs = {
                segmentationId: '@'
            };
        }
        return SpulComponent;
    })();
    exports.SpulComponent = SpulComponent;
});
