import { SharedData } from './shared.model';

class SharedCtrl {
	sharedData: SharedData;
}

export class SharedComponent {
	templateUrl: string;
	controller: any = {};
	transclude: boolean;
	bindings: any = {};

	constructor() {
		let component = this;
		component.templateUrl = './app/shared/shared.template.html';
		component.controller = SharedCtrl;
		component.transclude = true;
		component.bindings = {
			sharedData: '<'
		}
	}
}