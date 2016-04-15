define(["require", "exports"], function (require, exports) {
    var SpulService = (function () {
        function SpulService($resource) {
            this.$resource = $resource;
        }
        SpulService.prototype.GetSegmentationData = function (id) {
            var ctrl = this;
            var req = ctrl.$resource('api/Test', {}, {
                'query': {
                    method: 'GET',
                    isArray: false
                }
            });
            var res = req.query({ id: id, type: 'spul' }).$promise;
            return res;
        };
        SpulService.$inject = ['$resource'];
        return SpulService;
    })();
    exports.SpulService = SpulService;
});
