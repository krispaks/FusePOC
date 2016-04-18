define(["require", "exports"], function (require, exports) {
    var GenericCtlr = (function () {
        function GenericCtlr() {
            this.metaData = {
                prop: 'name',
                required: true,
                validate: true,
                type: 'text'
            };
            this.$onInit = function () {
            };
            this.$postLink = function () {
                var ctrl = this;
                alert('test');
            };
            var ctrl = this;
        }
        return GenericCtlr;
    })();
    var GenericComponent = (function () {
        function GenericComponent() {
            this.controller = {};
            this.bindings = {};
            var component = this;
            component.template = '<div>Test</div>';
            component.controller = GenericCtlr;
            component.transclude = true;
            component.bindings = {
                metaData: '<'
            };
        }
        return GenericComponent;
    })();
    exports.GenericComponent = GenericComponent;
});
