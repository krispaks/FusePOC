define(["require", "exports"], function (require, exports) {
    var AutoService = (function () {
        function AutoService($resource) {
            this.$resource = $resource;
        }
        AutoService.prototype.GetSegmentationData = function (id) {
            var ctrl = this;
            var req = ctrl.$resource('api/Test', {}, {
                'query': {
                    method: 'GET',
                    isArray: false
                }
            });
            var res = req.query({ id: id, type: 'auto' }).$promise;
            return res;
        };
        AutoService.$inject = ['$resource'];
        return AutoService;
    })();
    exports.AutoService = AutoService;
});
