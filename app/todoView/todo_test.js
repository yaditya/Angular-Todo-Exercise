'use strict';

describe('myApp.todo module', function() {

	beforeEach(module('myApp.todo'));

	describe('todo controller', function(){

		var scope, service, todoCtrl;

		beforeEach(inject(function($controller, $rootScope) {
			scope = $rootScope.$new();

			todoCtrl = $controller('TodoCtrl', { $scope: scope });
		}));

		it('should define the controller', function () {
			expect(todoCtrl).toBeDefined();
		});

	});
});
