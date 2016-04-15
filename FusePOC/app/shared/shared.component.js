define(["require", "exports"], function (require, exports) {
    var SharedCtrl = (function () {
        function SharedCtrl() {
        }
        return SharedCtrl;
    })();
    var SharedComponent = (function () {
        function SharedComponent() {
            this.controller = {};
            this.bindings = {};
            var component = this;
            component.templateUrl = './app/shared/shared.template.html';
            component.controller = SharedCtrl;
            component.transclude = true;
            component.bindings = {
                sharedData: '<'
            };
        }
        return SharedComponent;
    })();
    exports.SharedComponent = SharedComponent;
});
