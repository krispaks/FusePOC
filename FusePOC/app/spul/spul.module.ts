import { SpulComponent } from './spul.component';
import { SpulService } from './spul.service';
import { SpulSegmentationComponent } from './segmentation/spul.segmentation.component';
import { SharedService } from '../shared/shared.service';

class SpulModuleCtrl {
	constructor() { }
}

export class SpulModule {
	constructor() {
		angular.module('SpulModule', [])
			.controller('SpulModuleCtrl', SpulModuleCtrl)
			.factory('spulService', ($resource) => new SpulService($resource))
			.factory('sharedService', ($resource) => new SharedService($resource))
			.component('spulDre', new SpulComponent())
			.component('spulSegmentation', new SpulSegmentationComponent());	
	}
}
