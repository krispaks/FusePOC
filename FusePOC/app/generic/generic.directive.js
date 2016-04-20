define(["require", "exports"], function (require, exports) {
    var GenericDirectiveCtrl = (function () {
        function GenericDirectiveCtrl() {
        }
        return GenericDirectiveCtrl;
    })();
    exports.GenericDirectiveCtrl = GenericDirectiveCtrl;
    var GenericDirective = (function () {
        function GenericDirective() {
            this.bindToController = {
                metadata: '=',
                data: '=',
                prop: '@'
            };
            this.restrict = 'E';
            this.template = '';
            this.replace = true;
            this.controller = function () { };
            this.controllerAs = 'ctrl';
            this.require = ['genericDirective'];
            this.scope = {};
            this.link = function (scope, element, attrs, ctrl) {
                scope.$watch('ctrl.metadata', function () {
                    element.empty();
                    var metadata = ctrl[0].metadata.find(function (metadata) { return metadata.prop === ctrl[0].prop; });
                    if (metadata) {
                        var data = metadata ? ctrl[0].data[metadata.prop] : '';
                        switch (metadata.type) {
                            case 'text':
                                element.append('<input type="text" value="' + data + '">');
                                break;
                            case 'date':
                                element.append('<input type="date" value="' + data + '">');
                                break;
                        }
                    }
                });
            };
        }
        GenericDirective.factory = function () {
            var directive = function () { return new GenericDirective(); };
            directive.$inject = [];
            return directive;
        };
        return GenericDirective;
    })();
    exports.GenericDirective = GenericDirective;
});
