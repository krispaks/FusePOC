export class GenericDirectiveCtrl {
	
}

export class GenericDirective implements ng.IDirective
{
	bindToController: any = {
		metadata: '=',
		data: '=',
		prop: '@'
	};
	restrict: string = 'E';
	template: string = '';
	replace: boolean = true;
	controller = function () {};
	controllerAs: string = 'ctrl';
	require = ['genericDirective'];
	scope: any = {};

	constructor() {
	}

	link = (scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: any) => {
		scope.$watch('ctrl.metadata', () => {
			element.empty();
			let metadata = ctrl[0].metadata.find((metadata) => metadata.prop === ctrl[0].prop);
			if (metadata) {
				let data = metadata ? ctrl[0].data[metadata.prop] : '';
				switch (metadata.type) {
					case 'text':
						element.append('<input type="text" value="' + data + '">');
						break;
					case 'date':
						element.append('<input type="date" value="' + data + '">');
						break;
				}
			}		
		});
	}

	static factory(): ng.IDirectiveFactory {
		const directive = () => new GenericDirective();
		
		directive.$inject = [];
		return directive;
	}
}