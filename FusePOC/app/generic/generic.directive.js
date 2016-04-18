define(["require", "exports"], function (require, exports) {
    var GenericDirective = (function () {
        function GenericDirective() {
            this.restrict = 'E';
            this.template = '<div></div>';
            this.replate = true;
            this.scope = {
                metadata: '=',
                data: '='
            };
            this.link = function (scope, element, attrs, ctrl) {
                switch (scope.metadata.type) {
                    case 'text':
                        element.append('<input type="text" value="' + scope.data + '">');
                        break;
                    case 'date':
                        element.append('<input type="date" value="' + scope.data + '">');
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
