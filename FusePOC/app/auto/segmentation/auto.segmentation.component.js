define(["require", "exports"], function (require, exports) {
    var AutoSegmentationCtrl = (function () {
        function AutoSegmentationCtrl() {
        }
        return AutoSegmentationCtrl;
    })();
    var AutoSegmentationComponent = (function () {
        function AutoSegmentationComponent() {
            this.controller = {};
            this.bindings = {};
            var component = this;
            component.templateUrl = './app/auto/segmentation/auto.segmentation.template.html';
            component.controller = AutoSegmentationCtrl;
            component.transclude = true;
            component.bindings = {
                segmentationData: '<'
            };
        }
        return AutoSegmentationComponent;
    })();
    exports.AutoSegmentationComponent = AutoSegmentationComponent;
});
