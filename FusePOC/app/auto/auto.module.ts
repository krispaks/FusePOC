import { AutoComponent } from './auto.component';
import { AutoService } from './auto.service';
import { AutoSegmentationComponent } from './segmentation/auto.segmentation.component';
import { SharedService } from '../shared/shared.service';
import { SharedComponent } from '../shared/shared.component';

class AutoModuleCtrl {
	constructor() { }
}

export class AutoModule {
	constructor() {
		angular.module('AutoModule', [])
			.controller('AutoModuleCtrl', AutoModuleCtrl)
			.factory('autoService', ($resource) => new AutoService($resource))
			.factory('sharedService', ($resource) => new SharedService($resource))
			.component('autoDre', new AutoComponent())
			.component('autoSegmentation', new AutoSegmentationComponent());
	}
}
