class GenericCtlr {
	private metaData: any = {};

	constructor() {
		let ctrl = this;
		//ctrl.template = templateSelector(component.metaData.type);
	}

	templateSelector = function (type: string) {
		switch (type) {
			case 'text':
				return '<input type="text">';
			case 'date':
				return '<input type="date">'
		}
	}
}

export class GenericComponent implements ng.IComponentOptions {
	template: Function;
	controller: any = {};
	transclude: boolean;
	bindings: any = {
		metaData: '<'
	};

	constructor() {
		
	}

	
}