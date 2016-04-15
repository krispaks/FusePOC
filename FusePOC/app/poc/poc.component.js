define(["require", "exports"], function (require, exports) {
    'use strict';
    var PocComponentCtrl = (function () {
        //// NOTE:KPACA - probably wanna create a service and inject here.
        function PocComponentCtrl($location, $resource) {
            this.$location = $location;
            this.$resource = $resource;
            this.segmentationId = '1';
            var ctrl = this;
            ctrl.GetUserRoutes().then(function (data) {
                ctrl.groups = data;
            });
        }
        PocComponentCtrl.prototype.onLocationChange = function () {
            var ctrl = this;
            ctrl.$location.path("/" + ctrl.location);
        };
        PocComponentCtrl.prototype.GetUserRoutes = function () {
            var ctrl = this;
            var req = ctrl.$resource('api/User/Groups', {}, {
                'query': {
                    method: 'GET',
                    isArray: true
                }
            });
            var res = req.query().$promise;
            return res;
        };
        PocComponentCtrl.$inject = ['$location', '$resource'];
        return PocComponentCtrl;
    })();
    var PocComponent = (function () {
        function PocComponent() {
            this.controller = {};
            this.bindings = {};
            var component = this;
            component.templateUrl = './app/poc/poc.template.html';
            component.controller = PocComponentCtrl;
            component.transclude = true;
        }
        return PocComponent;
    })();
    exports.PocComponent = PocComponent;
});
