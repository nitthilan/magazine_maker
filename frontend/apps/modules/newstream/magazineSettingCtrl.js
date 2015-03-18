MyAppControllers.controller('magazineSettingCtrl', ['$scope','$http','$timeout','$stateParams',
	function($scope, $http, $timeout, $stateParams) {

		$scope.magazineid = $stateParams.magazineid;
	
		var getCategories = function(){
			return $scope.allCategories;
		};
		$scope.categoriesSelect2Options = {
			'multiple': true,
			'simple_tags': true,
			'tags': getCategories
		};
		$http.get('/curator/categories').success(function(data) {
			$scope.allCategories = [];
			for (index = 0; index < data.length; ++index) {
				$scope.allCategories.push(data[index]._id);
			}
		});

		$http.get('curator/magazineSetting/'+$stateParams.magazineid).success(function(magazineSettings){
			$scope.newMagazine = magazineSettings;
		});

		$scope.updateMagazine = function(newMagazine){
			$http.put('/curator/magazineSetting/'+$stateParams.magazineid, {info:newMagazine}).success(function(data){
				addAlert("Magazine update successful");
			}).error(function(err){
				console.log("Error in saving article "+JSON.stringify(err));
				addAlert("Update failed. Make sure title is unique", null, null);
			});
		};


		$scope.alerts = [];
		var addAlert = function(alert_message, alert_link, alert_link_msg) {
			$scope.alerts.push({msg: alert_message, link: alert_link, link_msg:alert_link_msg});
			$timeout(function(){
				$scope.alerts.splice(0,1);
			}, 5000);
		};
}]);