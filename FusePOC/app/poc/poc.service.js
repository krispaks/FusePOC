define(["require", "exports"], function (require, exports) {
    var POCService = (function () {
        function POCService($resource) {
            this.$resource = $resource;
        }
        POCService.prototype.GetSegmentationData = function (type) {
            var ctrl = this;
            var req = ctrl.$resource('api/Test', {}, {
                'query': {
                    method: 'GET',
                    isArray: false
                }
            });
            var res = req.query({ id: 1, type: type }).$promise;
            return res;
        };
        POCService.$inject = ['$resource'];
        return POCService;
    })();
    exports.POCService = POCService;
});
