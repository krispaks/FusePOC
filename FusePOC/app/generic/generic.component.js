define(["require", "exports"], function (require, exports) {
    var GenericCtlr = (function () {
        function GenericCtlr() {
            this.metaData = {};
            this.templateSelector = function (type) {
                switch (type) {
                    case 'text':
                        return '<input type="text">';
                    case 'date':
                        return '<input type="date">';
                }
            };
            var ctrl = this;
            //ctrl.template = templateSelector(component.metaData.type);
        }
        return GenericCtlr;
    })();
    var GenericComponent = (function () {
        function GenericComponent() {
            this.controller = {};
            this.bindings = {
                metaData: '<'
            };
        }
        return GenericComponent;
    })();
    exports.GenericComponent = GenericComponent;
});
