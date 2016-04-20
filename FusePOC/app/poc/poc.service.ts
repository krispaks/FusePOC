export interface IPOCService {
	GetSegmentationData(type: string): ng.IPromise<ng.resource.IResourceArray<ng.resource.IResource<any>>>;
}
export class POCService implements IPOCService {

	static $inject = ['$resource'];

	constructor(private $resource: ng.resource.IResourceService) {
	}

	GetSegmentationData(type: string): ng.IPromise<ng.resource.IResourceArray<ng.resource.IResource<any>>> {
		let ctrl = this;
		let req = ctrl.$resource('api/Test', {}, {
			'query': {
				method: 'GET',
				isArray: false
			}
		});

		let res = req.query({id: 1, type: type}).$promise;

		return res;
	}
}