MyAppControllers.controller('frontPageCtrl', ['$scope','$http','$timeout', '$stateParams',
	function($scope, $http, $timeout, $stateParams) {
		//console.log("stateParams "+JSON.stringify($stateParams));
		$scope.emptyString="                                                                                                                 ";
		$scope.magazineSettings = null;
		$http.get('curator/magazineSetting/'+$stateParams.magazineid).success(function(magazineSettings){
			$scope.magazineSettings = magazineSettings;
		});
		$scope.articles = [];
		$scope.categories = [];
		var restUrl = '/curator/magazineSetting/'+$stateParams.magazineid+'/pubarticle';
		if($stateParams.categories){
			restUrl = restUrl +'?categories='+$stateParams.categories;
		}
		$http.get(restUrl)
		.success(function(articles) {
			$scope.articles = articles;
		});
}]);