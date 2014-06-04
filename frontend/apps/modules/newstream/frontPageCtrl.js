MyAppControllers.controller('frontPageCtrl', ['$scope','$http','$timeout',
	function($scope, $http, $timeout) {
		$scope.magazine_title = "Sandhana";
		$scope.articles = [];
		$scope.categories = [];
		$http.get('curator/articles/query?isLike=false&isRead=false&readLater=false&categories=nonchannel').success(function(articles) {
			$scope.articles = articles;
		});
		$http.get('curator/categories').success(function(articles) {
			$scope.categories = articles;
		});
}]);