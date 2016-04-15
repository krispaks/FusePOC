'use strict';
import { ISpulService, SpulService } from './spul.service';
import { SpulSegmentationData } from './spul.model';
import { SharedData } from '../shared/shared.model';
import { ISharedService, SharedService } from '../shared/shared.service';

class SpulComponentCtrl {
	segmentationId: string;
	segmentationData: SpulSegmentationData;
	sharedData: SharedData;

	static $inject = ['spulService', 'sharedService'];
	constructor(private spulService: ISpulService, private sharedService: ISharedService) {
		let ctrl = this;
		ctrl.LoadSegmentationData();
		ctrl.LoadSharedData();
	}

	LoadSegmentationData() {
		let ctrl = this;

		ctrl.spulService.GetSegmentationData(1)
			.then(function (data: any) {
				let segData = new SpulSegmentationData();
				segData.spulData1 = data.spulSegmentationData1;
				segData.spulData2 = data.spulSegmentationDate1;
				segData.segmentationData1 = data.segmentationSpecificData1;
				segData.segmentationData2 = data.segmentationSpecificData2;
				ctrl.segmentationData = segData;
			});
	}

	LoadSharedData() {
		let ctrl = this;

		ctrl.sharedService.GetSharedData()
			.then(function (data: any) {
				let sharedData = new SharedData();
				sharedData.sharedData1 = data.sharedData1;
				sharedData.sharedData2 = data.sharedData2;
				sharedData.sharedDate1 = data.sharedDate1;
				ctrl.sharedData = sharedData;
			});
	}
}

export class SpulComponent implements ng.IComponentOptions {
	templateUrl: string;
	controller: any = {};
	transclude: boolean;
	bindigs: any = {};

	constructor() {
		let component = this;
		component.templateUrl = './app/spul/spul.template.html';
		component.controller = SpulComponentCtrl;
		component.transclude = true;
		component.bindigs = {
			segmentationId: '@'
		};
	}
}