export class GenericDirective implements ng.IDirective
{
	restrict = 'E';
	template = '';
	replace = true;
	scope = {
		metadata: '=',
		data: '='
	};

	constructor() {
	}

	link = (scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: any) => {
		switch (scope.metadata.type) {
			case 'text':
				element.append('<input type="text" value="' + scope.data + '">');
				break;
			case 'date':
				element.append('<input type="date" value="' + scope.data + '">');
				break;
		}
		
	}

	static factory(): ng.IDirectiveFactory {
		const directive = () => new GenericDirective();
		
		directive.$inject = [];
		return directive;
	}
}