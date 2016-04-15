import { AutoSegmentationData } from '../auto.model';

class AutoSegmentationCtrl {
	segmentationData: AutoSegmentationData;
	constructor() {}
}

export class AutoSegmentationComponent implements ng.IComponentOptions {
	templateUrl: string;
	controller: any = {};
	transclude: boolean;
	bindings: any = {};

	constructor() {
		let component = this;
		component.templateUrl = './app/auto/segmentation/auto.segmentation.template.html';
		component.controller = AutoSegmentationCtrl;
		component.transclude = true;
		component.bindings = {
			segmentationData: '<'
		}
	}
}