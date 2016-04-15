class AutoRoute implements ng.route.IRoute {
    template: string;
    constructor() {
        let route = this;
        route.template = '<auto-dre segmentationId="$ctrl.segmentationId"></auto-dre>';
    }
}

class SpulRoute implements ng.route.IRoute {
    template: string;
    resolve: any;

    constructor() {
        let route = this;
        route.template = '<spul-dre></spul-dre>';

    }
}

class MortgageRoute implements ng.route.IRoute {
    template: string;
    constructor() {
        let route = this;
		route.template = '<mortgage-dre></mortgage-dre>';
    }
}

export class PocConfig {
    'use strict';

    static $inject = ['$routeProvider', '$locationProvider'];

    constructor($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) {
        $routeProvider
			.when('/Auto', new AutoRoute())
			.when('/Spul', new SpulRoute())
			.when('/Mortgage', new MortgageRoute());

        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }
}
