define(["require", "exports"], function (require, exports) {
    var SharedService = (function () {
        function SharedService($resource) {
            this.$resource = $resource;
        }
        SharedService.prototype.GetSharedData = function () {
            var ctrl = this;
            var req = ctrl.$resource('api/Test/Shared', {}, {
                'query': {
                    method: 'GET',
                    isArray: false
                }
            });
            var res = req.query().$promise;
            return res;
        };
        SharedService.$inject = ['$resource'];
        return SharedService;
    })();
    exports.SharedService = SharedService;
});
