class GenericCtlr {
	metaData: any = {
		prop: 'name',
		required: true,
		validate: true,
		type: 'text'
	};

	constructor() {
		let ctrl: any = this;
	}

	$onInit = function () {

	};

	$postLink = function () {
		let ctrl: any = this;
		alert('test');
	};
}

export class GenericComponent implements ng.IComponentOptions {
	template: string;
	controller: any = {};
	transclude: boolean;
	bindings: any = {};

	constructor() {
		const component = this;
		component.template = '<div>Test</div>';
		component.controller = GenericCtlr;
		component.transclude = true;
		component.bindings = {
			metaData: '<'
		};
	}
}