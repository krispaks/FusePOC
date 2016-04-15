define(["require", "exports"], function (require, exports) {
    var SpulSegmentationCtrl = (function () {
        function SpulSegmentationCtrl() {
        }
        return SpulSegmentationCtrl;
    })();
    var SpulSegmentationComponent = (function () {
        function SpulSegmentationComponent() {
            this.controller = {};
            this.bindings = {};
            var component = this;
            component.templateUrl = './app/spul/segmentation/spul.segmentation.template.html';
            component.controller = SpulSegmentationCtrl;
            component.transclude = true;
            component.bindings = {
                segmentationData: '<'
            };
        }
        return SpulSegmentationComponent;
    })();
    exports.SpulSegmentationComponent = SpulSegmentationComponent;
});
