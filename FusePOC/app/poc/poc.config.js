define(["require", "exports"], function (require, exports) {
    var AutoRoute = (function () {
        function AutoRoute() {
            var route = this;
            route.template = '<auto-dre segmentationId="$ctrl.segmentationId"></auto-dre>';
        }
        return AutoRoute;
    })();
    var SpulRoute = (function () {
        function SpulRoute() {
            var route = this;
            route.template = '<spul-dre></spul-dre>';
        }
        return SpulRoute;
    })();
    var MortgageRoute = (function () {
        function MortgageRoute() {
            var route = this;
            route.template = '<mortgage-dre></mortgage-dre>';
        }
        return MortgageRoute;
    })();
    var PocConfig = (function () {
        function PocConfig($routeProvider, $locationProvider) {
            $routeProvider
                .when('/Auto', new AutoRoute())
                .when('/Spul', new SpulRoute())
                .when('/Mortgage', new MortgageRoute());
            $locationProvider.html5Mode(true);
            $locationProvider.hashPrefix('!');
        }
        PocConfig.$inject = ['$routeProvider', '$locationProvider'];
        return PocConfig;
    })();
    exports.PocConfig = PocConfig;
});
