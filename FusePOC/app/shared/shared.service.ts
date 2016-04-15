export interface ISharedService {
	GetSharedData(): ng.IPromise<ng.resource.IResourceArray<ng.resource.IResource<any>>>;
}

export class SharedService implements ISharedService {
	static $inject = ['$resource'];
	constructor(private $resource: ng.resource.IResourceService) {
	}

	GetSharedData(): ng.IPromise<ng.resource.IResourceArray<ng.resource.IResource<any>>> {
		let ctrl = this;
		let req = ctrl.$resource('api/Test/Shared', {}, {
			'query': {
				method: 'GET',
				isArray: false
			}
		});

		let res = req.query().$promise;

		return res;
	}
}