'use strict';

class PocComponentCtrl {
	location: string;
	groups: Array<string>;
	segmentationId: string = '1';
	static $inject = ['$location', '$resource'];

	//// NOTE:KPACA - probably wanna create a service and inject here.

	constructor(private $location: ng.ILocationService, private $resource: ng.resource.IResourceService) {
		let ctrl = this;
		ctrl.GetUserRoutes().then(function (data: any) {
			ctrl.groups = data;
		});
	}

	onLocationChange() {
		let ctrl = this;
		ctrl.$location.path("/" + ctrl.location);
	}

	private GetUserRoutes(): ng.IPromise<ng.resource.IResourceArray<ng.resource.IResource<any>>>
	{
		let ctrl = this;
		let req = ctrl.$resource('api/User/Groups', {}, {
			'query': {
				method: 'GET',
				isArray: true
			}
		});

		let res = req.query().$promise;

		return res;
	}
}

export class PocComponent implements ng.IComponentOptions {
	templateUrl: string;
	controller: any = {};
	transclude: boolean;
	bindings: any = {};

	constructor() {
		let component = this;
		component.templateUrl = './app/poc/poc.template.html';
		component.controller = PocComponentCtrl;
		component.transclude = true;
	}
}