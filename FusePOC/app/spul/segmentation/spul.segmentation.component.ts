import { SpulSegmentationData } from '../spul.model';

class SpulSegmentationCtrl {
	segmentationData: SpulSegmentationData;
	constructor() { }
}

export class SpulSegmentationComponent implements ng.IComponentOptions {
	templateUrl: string;
	controller: any = {};
	transclude: boolean;
	bindings: any = {};

	constructor() {
		let component = this;
		component.templateUrl = './app/spul/segmentation/spul.segmentation.template.html';
		component.controller = SpulSegmentationCtrl;
		component.transclude = true;
		component.bindings = {
			segmentationData: '<'
		}
	}
}