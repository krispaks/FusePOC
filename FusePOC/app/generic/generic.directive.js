define(["require", "exports"], function (require, exports) {
    var GenericDirective = (function () {
        function GenericDirective() {
            this.restrict = 'E';
            this.template = '';
            this.replace = true;
            this.scope = {
                metadata: '=',
                data: '=',
                prop: '@'
            };
            this.link = function (scope, element, attrs, ctrl) {
                var metadata = scope.metadata.find(function (metadata) { return metadata.prop === scope.prop; });
                var data = metadata ? scope.data[metadata.prop] : '';
                switch (metadata.type) {
                    case 'text':
                        element.append('<input type="text" value="' + data + '">');
                        break;
                    case 'date':
                        element.append('<input type="date" value="' + data + '">');
                        break;
                }
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
