export interface ISpulService {
	GetSegmentationData(id: number): ng.IPromise<ng.resource.IResourceArray<ng.resource.IResource<any>>>;
}

export class SpulService implements ISpulService {
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

		let res = req.query({ id: id , type: 'spul'}).$promise;

		return res;
	}
}