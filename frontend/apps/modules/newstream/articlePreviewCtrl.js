MyAppControllers.controller('articlePreviewCtrl', ['$scope','$http','$timeout',
	function($scope, $http, $timeout) {
		$scope.select2Options = {
			allowClear:true
		};
		$scope.magazine_title = "Sandhana";
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
			$http.post('/curator/pubarticles', {info:articleModel}).success(function(data){
				$http.get('/curator/pubarticles').success(function(data) { $scope.articles = data;	});
				$scope.articleToBeAdded = null;
				$scope.shouldShowPreview = false;
			}).error(function(err){
				console.log("Error in saving article "+err);
			});
		};
		$scope.deleteArticle = function(article){
			$http.delete('/curator/pubarticles/'+article._id).success(function(data){
				$http.get('/curator/pubarticles').success(function(data) { $scope.articles = data;	});
			}).error(function(err){
				console.log("Error in saving article "+err);
			});	
		};
		$scope.categories = [];
		$http.get('curator/categories').success(function(articles) {
			$scope.categories = articles;
		});
		$http.get('/curator/pubarticles').success(function(data) { $scope.articles = data;	});
}]);