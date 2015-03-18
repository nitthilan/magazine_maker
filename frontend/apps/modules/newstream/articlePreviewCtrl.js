MyAppControllers.controller('articlePreviewCtrl', ['$scope','$http','$timeout', '$stateParams',
	function($scope, $http, $timeout, $stateParams) {
		$scope.magazineid = $stateParams.magazineid;
		$scope.magazineSettings = null;
		$http.get('curator/magazineSetting/'+$stateParams.magazineid).success(function(magazineSettings){
			$scope.magazineSettings = magazineSettings;
		});
		$scope.select2Options = {
			allowClear:true
		};

		$scope.articleUrl = null;
		$scope.addArticlePlaceholder = "Article url";
		$scope.articleToBeAdded = null;
		$scope.shouldShowPreview = false;
		$scope.fetchArticle = function(articleUrl){
			$scope.articleUrl = null;
			$scope.addArticlePlaceholder = "Fetching article";
			$scope.articleToBeAdded = null;
			$scope.shouldShowPreview = false;
			$http.get('curator/articles/fetch?articleUrl="'+articleUrl+'"').success(function(article) {
				$scope.articleToBeAdded = article;
				$scope.shouldShowPreview = true;
				$scope.addArticlePlaceholder = "Article fetched";
				$scope.articleToBeAdded.selectedImgPath = $scope.articleToBeAdded.imgPath[0];
				$scope.articleToBeAdded.selectedCustomTags = $scope.articleToBeAdded.tag[0];//.str.split(",");
				$scope.articleToBeAdded.curatorTags = [];
				$scope.articleToBeAdded.curatorNote = null;
				$scope.articleToBeAdded.readTimeTag = "5-10min";
				$scope.articleToBeAdded.articleTypeTag = "article";
				$scope.articleToBeAdded.isFrontPageArticle = true;
				//console.log($scope.articleToBeAdded.tag);
				$timeout(function(){
					$scope.addArticlePlaceholder = "Article url";
				}, 5000);
			}).error(function(err){
				console.log(err);
				$scope.addArticlePlaceholder = "Unable to fetch article";
				$timeout(function(){
					$scope.addArticlePlaceholder = "Article url";
				}, 5000);			
			});			
		};

		$scope.articles = [];
		$scope.addArticle = function(articleToBeAdded){
			var articleModel = {};
			articleModel.title = articleToBeAdded.title;
			articleModel.gist = articleToBeAdded.gist;
			articleModel.curatorNote = articleToBeAdded.curatorNote;
			articleModel.imageUrl = articleToBeAdded.selectedImgPath;
			articleModel.pubDate = articleToBeAdded.date[0];
			articleModel.link = articleToBeAdded.url;
			articleModel.author = articleToBeAdded.author;
			articleModel.categories = articleToBeAdded.curatorTags;
			if(articleToBeAdded.selectedCustomTags) articleModel.categories.concat(articleToBeAdded.selectedCustomTags.split(','));
			if(articleToBeAdded.readTimeTag) articleModel.categories.push(articleToBeAdded.readTimeTag);
			if(articleToBeAdded.articleTypeTag) articleModel.categories.push(articleToBeAdded.articleTypeTag);
			if(articleToBeAdded.isFrontPageArticle) articleModel.categories.push("front_page");
			$http.post('/curator/magazineSetting/'+$stateParams.magazineid+'/pubarticle', {info:articleModel}).success(function(data){
				$http.get('/curator/magazineSetting/'+$stateParams.magazineid+'/pubarticle').success(function(data) { $scope.articles = data;	});
				$scope.articleToBeAdded = null;
				$scope.shouldShowPreview = false;
			}).error(function(err){
				console.log("Error in saving article "+err);
			});
		};
		$scope.deleteArticle = function(article){
			$http.delete('/curator/magazineSetting/'+$stateParams.magazineid+'/pubarticle'+article._id).success(function(data){
				$http.get('/curator/magazineSetting/'+$stateParams.magazineid+'/pubarticle').success(function(data) { $scope.articles = data;	});
			}).error(function(err){
				console.log("Error in saving article "+err);
			});	
		};

		$http.get('/curator/magazineSetting/'+$stateParams.magazineid+'/pubarticle').success(function(data) { $scope.articles = data;	});
}]);