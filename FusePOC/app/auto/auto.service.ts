export interface IAutoService {
	GetSegmentationData(id: number): ng.IPromise<ng.resource.IResourceArray<ng.resource.IResource<any>>>;
}

export class AutoService implements IAutoService {
	static $inject = ['$resource'];

	constructor(private $resource: ng.resource.IResourceService) {
	}

	GetSegmentationData(id: number): ng.IPromise<ng.resource.IResourceArray<ng.resource.IResource<any>>> {
		let ctrl = this;
		let req = ctrl.$resource('api/Test', {}, {
			'query': {
				method: 'GET',
				isArray: false
			}
		});

		let res = req.query({id: id, type: 'auto'}).$promise;

		return res;
	}
}