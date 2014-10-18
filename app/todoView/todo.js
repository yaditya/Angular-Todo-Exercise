'use strict';

// Put everything inside single js for this exercise only

angular.module('myApp.todo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/todo', {
		templateUrl: 'todoView/todo.html',
		controller: 'TodoCtrl'
	});
}])

.controller('TodoCtrl', ['$scope', 'TodoListData', function ($scope, TodoListData) {
	TodoListData.fetch().then(function(data) {
		$scope.todos = data;
	});

	$scope.addNewTodo = function () {
		if ($scope.newTodo) {
			// Add to the array list
			$scope.todos.push({ done: false, cleared: false, title: $scope.newTodo });

			// Empty the text field
			$scope.newTodo = '';
		}

		return false;

	};
}])

.factory('TodoListData', function($q, $timeout, $http) {
	var data = {
		fetch: function() {

			var deferred = $q.defer();

			$timeout(function() {
				$http.get('/data/todoList.json').success(function(data) {
					deferred.resolve(data);
				});
			}, 30);

			return deferred.promise;
		}
	}

	return data;
});
