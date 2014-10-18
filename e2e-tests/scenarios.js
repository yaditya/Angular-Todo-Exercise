'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

	browser.get('index.html');

	it('should automatically redirect to /todo when location hash/fragment is empty', function() {
		expect(browser.getLocationAbsUrl()).toMatch("/todo");
	});


	describe('todo', function() {

		beforeEach(function() {
			browser.get('index.html#/todo');
		});

		it('should render todo when user navigates to /todo', function() {
			expect(element.all(by.css('[ng-view] h1')).first().getText()).toMatch(/ResMed Todo List App/);
		});

  });
});
