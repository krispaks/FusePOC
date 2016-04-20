'use strict';
import { IAutoService, AutoService } from './auto.service';
import { AutoSegmentationData } from './auto.model';
import { SharedData } from '../shared/shared.model';
import { ISharedService, SharedService } from '../shared/shared.service';

class AutoComponentCtrl {	
	segmentationId: string;
	segmentationData: AutoSegmentationData;
	sharedData: SharedData;

	static $inject = ['autoService', 'sharedService'];
	constructor(private autoService: IAutoService, private sharedService: ISharedService) {
		let ctrl = this;
		ctrl.LoadSegmentationData();
		ctrl.LoadSharedData();
	}

	LoadSegmentationData() {
		let ctrl = this;

		ctrl.autoService.GetSegmentationData(1)
			.then(function (data: any) {
				let segData = new AutoSegmentationData();
				segData.autoData1 = data.data.autoSegmentationData1;
				segData.autoData2 = data.data.autoSegmentationData2;
				segData.autoData3 = data.data.autoSegmentationData3;
				segData.segmentationData1 = data.data.segmentationSpecificData1;
				segData.segmentationData2 = data.data.segmentationSpecificData2;
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

export class AutoComponent implements ng.IComponentOptions {
	templateUrl: string;
	controller: any = {};
	transclude: boolean;
	bindigs: any = {};

	constructor() {
		let component = this;
		component.templateUrl = './app/auto/auto.template.html';
		component.controller = AutoComponentCtrl;
		component.transclude = true;
		component.bindigs = {
			segmentationId: '@'
		};
	}
}