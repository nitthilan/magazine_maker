MyAppControllers.controller('magazineSettingCtrl', ['$scope','$http','$timeout',
	function($scope, $http, $timeout) {
		$scope.magazine_settings = {
			title:"Sandhana",
			categories: [],
			topCategories:[], // Max selection of n
			curatorName: "",
			// display themes
			// srticle sizes
		};
		$scope.magazine_title = $scope.magazine_settings.title;
		$scope.globalCategories= [];

		//http://stackoverflow.com/questions/18244027/angular-ui-select2-dynamically-change-tags-attribute-in-options
		$scope.select2Options = {
			'multiple': true,
			maximumInputLength: 10,
			'simple_tags': true,
			'tags': function () {
				return $scope.globalCategories;
			}
		};
		$http.get('curator/categories').success(function(categories) {
			for(var i=0;i<categories.length;i++){
				$scope.globalCategories.push(categories[i]._id);
			}
		});
		$scope.addCategory = function(newCategory){
			$scope.magazine_settings.categories.push(newCategory);
		};
		$scope.deleteCategory = function(newCategory){
			var index = $scope.magazine_settings.categories.indexOf(newCategory);
			if(index != -1){
				$scope.magazine_settings.categories.splice(index,1);
			}
		};
}]);