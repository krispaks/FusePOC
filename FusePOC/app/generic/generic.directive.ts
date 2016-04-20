export class GenericDirective implements ng.IDirective
{
	restrict = 'E';
	template = '';
	replace = true;
	scope = {
		metadata: '=',
		data: '=',
		prop: '@'
	};

	constructor() {
	}

	link = (scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: any) => {
		scope.$watch('metadata', () => {
			element.empty();
			let metadata = scope.metadata.find((metadata) => metadata.prop === scope.prop);
			if (metadata) {
				let data = metadata ? scope.data[metadata.prop] : '';
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