MyAppControllers.controller('homeCtrl', ['$scope','$http','$timeout','$filter','$q',
	function($scope, $http, $timeout, $filter, $q) {
		$scope.magazineList = [{
			"title":"Sports Illustrated",
			"about":"Sports! Sports! Sports!",
			"curatorName":"M Arvind",
			"articles":[{"_id":"53872c5750293f5c068aef41","title":"Uncommon common sense in entrepreneurs | LinkedIn","gist":"Common sense is not so commonly seen in first time entrepreneurs. Smart intelligent people when do dumb things, it is big put off. Over the time & again we have seen that business fundamental and its","curatorNote":null,"imageUrl":"http://m.c.lnkd.licdn.com/mpr/mpr/p/6/005/063/21f/1321d91.jpg","link":"http://www.linkedin.com/today/post/article/20140526122402-1626296-uncommon-common-sense-in-entrepreneurs","author":"linkedin","__v":0,"meta":{"numClicks":0},"categories":["technology"],"pubDate":"2014-05-29T12:46:48.604Z"},{"_id":"53873e6f50293f5c068aef44","title":"Learning Angularjs","gist":"Learn the basics of Angular.js","curatorNote":null,"imageUrl":"https://pbs.twimg.com/profile_images/2149314222/square.png","link":"http://campus.codeschool.com/courses/shaping-up-with-angular-js/intro","author":"Code School","__v":0,"meta":{"numClicks":0},"categories":[],"pubDate":"2014-05-29T14:02:58.361Z"},{"_id":"53873f0650293f5c068aef45","title":"A First Drive - YouTube","gist":"Fully autonomous driving has always been the goal of our project, because we think this could improve road safety and help lots of people who can't drive. We...","curatorNote":null,"imageUrl":"https://i1.ytimg.com/vi/CqSDWoAhvLU/maxresdefault.jpg","link":"https://www.youtube.com/watch?v=CqSDWoAhvLU","author":"YouTube","__v":0,"meta":{"numClicks":0},"categories":[],"pubDate":"2014-05-29T14:07:01.363Z"},{"_id":"53872c5750293f5c068aef41","title":"Uncommon common sense in entrepreneurs | LinkedIn","gist":"Common sense is not so commonly seen in first time entrepreneurs. Smart intelligent people when do dumb things, it is big put off. Over the time & again we have seen that business fundamental and its","curatorNote":null,"imageUrl":"http://m.c.lnkd.licdn.com/mpr/mpr/p/6/005/063/21f/1321d91.jpg","link":"http://www.linkedin.com/today/post/article/20140526122402-1626296-uncommon-common-sense-in-entrepreneurs","author":"linkedin","__v":0,"meta":{"numClicks":0},"categories":["technology"],"pubDate":"2014-05-29T12:46:48.604Z"},{"_id":"53873e6f50293f5c068aef44","title":"Learning Angularjs","gist":"Learn the basics of Angular.js","curatorNote":null,"imageUrl":"https://pbs.twimg.com/profile_images/2149314222/square.png","link":"http://campus.codeschool.com/courses/shaping-up-with-angular-js/intro","author":"Code School","__v":0,"meta":{"numClicks":0},"categories":[],"pubDate":"2014-05-29T14:02:58.361Z"},{"_id":"53873f0650293f5c068aef45","title":"A First Drive - YouTube","gist":"Fully autonomous driving has always been the goal of our project, because we think this could improve road safety and help lots of people who can't drive. We...","curatorNote":null,"imageUrl":"https://i1.ytimg.com/vi/CqSDWoAhvLU/maxresdefault.jpg","link":"https://www.youtube.com/watch?v=CqSDWoAhvLU","author":"YouTube","__v":0,"meta":{"numClicks":0},"categories":[],"pubDate":"2014-05-29T14:07:01.363Z"}]
		},
		{
			"title":"Technology Unlimited",
			"about":"recent trends and interesting articles",
			"curatorName":"Arun M",
			"articles":[{"_id":"53872c5750293f5c068aef41","title":"Uncommon common sense in entrepreneurs | LinkedIn","gist":"Common sense is not so commonly seen in first time entrepreneurs. Smart intelligent people when do dumb things, it is big put off. Over the time & again we have seen that business fundamental and its","curatorNote":null,"imageUrl":"http://m.c.lnkd.licdn.com/mpr/mpr/p/6/005/063/21f/1321d91.jpg","link":"http://www.linkedin.com/today/post/article/20140526122402-1626296-uncommon-common-sense-in-entrepreneurs","author":"linkedin","__v":0,"meta":{"numClicks":0},"categories":["technology"],"pubDate":"2014-05-29T12:46:48.604Z"},{"_id":"53873e6f50293f5c068aef44","title":"Learning Angularjs","gist":"Learn the basics of Angular.js","curatorNote":null,"imageUrl":"https://pbs.twimg.com/profile_images/2149314222/square.png","link":"http://campus.codeschool.com/courses/shaping-up-with-angular-js/intro","author":"Code School","__v":0,"meta":{"numClicks":0},"categories":[],"pubDate":"2014-05-29T14:02:58.361Z"},{"_id":"53873f0650293f5c068aef45","title":"A First Drive - YouTube","gist":"Fully autonomous driving has always been the goal of our project, because we think this could improve road safety and help lots of people who can't drive. We...","curatorNote":null,"imageUrl":"https://i1.ytimg.com/vi/CqSDWoAhvLU/maxresdefault.jpg","link":"https://www.youtube.com/watch?v=CqSDWoAhvLU","author":"YouTube","__v":0,"meta":{"numClicks":0},"categories":[],"pubDate":"2014-05-29T14:07:01.363Z"},{"_id":"53872c5750293f5c068aef41","title":"Uncommon common sense in entrepreneurs | LinkedIn","gist":"Common sense is not so commonly seen in first time entrepreneurs. Smart intelligent people when do dumb things, it is big put off. Over the time & again we have seen that business fundamental and its","curatorNote":null,"imageUrl":"http://m.c.lnkd.licdn.com/mpr/mpr/p/6/005/063/21f/1321d91.jpg","link":"http://www.linkedin.com/today/post/article/20140526122402-1626296-uncommon-common-sense-in-entrepreneurs","author":"linkedin","__v":0,"meta":{"numClicks":0},"categories":["technology"],"pubDate":"2014-05-29T12:46:48.604Z"},{"_id":"53873e6f50293f5c068aef44","title":"Learning Angularjs","gist":"Learn the basics of Angular.js","curatorNote":null,"imageUrl":"https://pbs.twimg.com/profile_images/2149314222/square.png","link":"http://campus.codeschool.com/courses/shaping-up-with-angular-js/intro","author":"Code School","__v":0,"meta":{"numClicks":0},"categories":[],"pubDate":"2014-05-29T14:02:58.361Z"},{"_id":"53873f0650293f5c068aef45","title":"A First Drive - YouTube","gist":"Fully autonomous driving has always been the goal of our project, because we think this could improve road safety and help lots of people who can't drive. We...","curatorNote":null,"imageUrl":"https://i1.ytimg.com/vi/CqSDWoAhvLU/maxresdefault.jpg","link":"https://www.youtube.com/watch?v=CqSDWoAhvLU","author":"YouTube","__v":0,"meta":{"numClicks":0},"categories":[],"pubDate":"2014-05-29T14:07:01.363Z"}]
		},
		{
			"title":"Nitthilan Times",
			"about":"personal collection of article curated over the week",
			"curatorName":"Nitthilan K J",
			"articles":[{"_id":"53872c5750293f5c068aef41","title":"Uncommon common sense in entrepreneurs | LinkedIn","gist":"Common sense is not so commonly seen in first time entrepreneurs. Smart intelligent people when do dumb things, it is big put off. Over the time & again we have seen that business fundamental and its","curatorNote":null,"imageUrl":"http://m.c.lnkd.licdn.com/mpr/mpr/p/6/005/063/21f/1321d91.jpg","link":"http://www.linkedin.com/today/post/article/20140526122402-1626296-uncommon-common-sense-in-entrepreneurs","author":"linkedin","__v":0,"meta":{"numClicks":0},"categories":["technology"],"pubDate":"2014-05-29T12:46:48.604Z"},{"_id":"53873e6f50293f5c068aef44","title":"Learning Angularjs","gist":"Learn the basics of Angular.js","curatorNote":null,"imageUrl":"https://pbs.twimg.com/profile_images/2149314222/square.png","link":"http://campus.codeschool.com/courses/shaping-up-with-angular-js/intro","author":"Code School","__v":0,"meta":{"numClicks":0},"categories":[],"pubDate":"2014-05-29T14:02:58.361Z"},{"_id":"53873f0650293f5c068aef45","title":"A First Drive - YouTube","gist":"Fully autonomous driving has always been the goal of our project, because we think this could improve road safety and help lots of people who can't drive. We...","curatorNote":null,"imageUrl":"https://i1.ytimg.com/vi/CqSDWoAhvLU/maxresdefault.jpg","link":"https://www.youtube.com/watch?v=CqSDWoAhvLU","author":"YouTube","__v":0,"meta":{"numClicks":0},"categories":[],"pubDate":"2014-05-29T14:07:01.363Z"},{"_id":"53872c5750293f5c068aef41","title":"Uncommon common sense in entrepreneurs | LinkedIn","gist":"Common sense is not so commonly seen in first time entrepreneurs. Smart intelligent people when do dumb things, it is big put off. Over the time & again we have seen that business fundamental and its","curatorNote":null,"imageUrl":"http://m.c.lnkd.licdn.com/mpr/mpr/p/6/005/063/21f/1321d91.jpg","link":"http://www.linkedin.com/today/post/article/20140526122402-1626296-uncommon-common-sense-in-entrepreneurs","author":"linkedin","__v":0,"meta":{"numClicks":0},"categories":["technology"],"pubDate":"2014-05-29T12:46:48.604Z"},{"_id":"53873e6f50293f5c068aef44","title":"Learning Angularjs","gist":"Learn the basics of Angular.js","curatorNote":null,"imageUrl":"https://pbs.twimg.com/profile_images/2149314222/square.png","link":"http://campus.codeschool.com/courses/shaping-up-with-angular-js/intro","author":"Code School","__v":0,"meta":{"numClicks":0},"categories":[],"pubDate":"2014-05-29T14:02:58.361Z"},{"_id":"53873f0650293f5c068aef45","title":"A First Drive - YouTube","gist":"Fully autonomous driving has always been the goal of our project, because we think this could improve road safety and help lots of people who can't drive. We...","curatorNote":null,"imageUrl":"https://i1.ytimg.com/vi/CqSDWoAhvLU/maxresdefault.jpg","link":"https://www.youtube.com/watch?v=CqSDWoAhvLU","author":"YouTube","__v":0,"meta":{"numClicks":0},"categories":[],"pubDate":"2014-05-29T14:07:01.363Z"}]
		}];
		$scope.newMagazine = null;
		$scope.newUser = null;
		$scope.loggedInUser = null;
		$scope.showCreateForm = false;
		$scope.showLoginForm = false;
		$scope.isUserLoggedIn = false;
		// Validate whether a session already exists and set the flags accordingly
		$http.get('/api/auth').success(function(user){
			$scope.isUserLoggedIn = true;
			$scope.loggedInUser = user;
		}).error(function(err){
			$scope.isUserLoggedIn = false;
			$scope.loggedInUser = null;
		});

		$scope.showCreateFormFn = function(){
			$scope.showCreateForm = true;
			$scope.discardLoginFormFn();
			$scope.newMagazine = {
				title:null,
				about:null,
				curatorName:null,
				categories:[],
				topCategories:[],
				maxArticlesPerPage:null,
				creatorId:$scope.loggedInUser._id
			};
			console.log($scope.newMagazine);
		};
		$scope.discardCreateFormFn = function(){
			$scope.newMagazine = null;
			$scope.showCreateForm = false;
		};

		$scope.createMagazine = function(newMagazine){
			newMagazine.creatorId = $scope.loggedInUser._id;
			console.log($scope.loggedInUser);
			console.log(newMagazine);
			$http.post('/curator/magazineSetting', {info:newMagazine}).success(function(data){
				//$http.get('/curator/pubarticles').success(function(data) { $scope.articles = data;	});
				$scope.newMagazine = null;
				$scope.showCreateForm = false;
				addAlert("Magazine is ready : ", "#/"+data._id.toString() ,data.title);
			}).error(function(err){
				console.log("Error in saving article "+JSON.stringify(err));
				addAlert("Cannot create article. Make sure title is unique", null, null);
			});
		};


		$scope.showLoginFormFn = function(){
			$scope.discardCreateFormFn();
			$scope.showLoginForm = true;

			$scope.newUser = {
				email:null,
				password:null,
			};
		};
		$scope.discardLoginFormFn = function(){
			$scope.newUser = null;
			$scope.showLoginForm = false;
		};

		$scope.createUser = function(newUser){
			$http.post('api/user', {info:newUser}).success(function(data){
				addAlert("User Created: "+newUser.email+" Try logiging in", null, null);
				$scope.discardLoginFormFn();
			}).error(function(err){
				console.log("Email already exist. Try logging in "+JSON.stringify(err));
				addAlert("Email already exist. Try logging in", null, null);
				$scope.newUser = null;
			});
		};
		$scope.login = function(newUser){
			$http.post('api/login', {info:newUser}).success(function(data){
				addAlert("Login Successful "+newUser.email, null, null);
				$scope.discardLoginFormFn();
				$scope.loggedInUser = data;
				$scope.isUserLoggedIn = true;
			}).error(function(err){
				console.log("Incorrect password. Try again "+JSON.stringify(err));
				addAlert("Incorrect password. Try again", null, null);
				$scope.newUser = null;
			});
		};
		$scope.logout = function(){
			$http.get('api/logout').success(function(data){
				addAlert("Logout Successful", null, null);
				$scope.discardLoginFormFn();
				$scope.discardCreateFormFn();
				$scope.loggedInUser = null;
				$scope.isUserLoggedIn = false;
			}).error(function(err){
				console.log("Logout failed "+JSON.stringify(err));
				addAlert("Logout failed", null, null);
			});
		};

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

		$scope.alerts = [];
		var addAlert = function(alert_message, alert_link, alert_link_msg) {
			$scope.alerts.push({msg: alert_message, link: alert_link, link_msg:alert_link_msg});
			$timeout(function(){
				$scope.alerts.splice(0,1);
			}, 10000);
		};
}]);


/*
		$scope.loadCategories = function(query) {
			//console.log(" Filter logs "+JSON.stringify($scope.allCategories)+" "+query);
			return $scope.getCategories(query, $scope.allCategories);//;
		};
		$scope.loadTopCategories = function(query) {
			//console.log(" Filter logs "+JSON.stringify($scope.allCategories)+" "+query);
			return $scope.getCategories(query, $scope.newMagazine.categories);//;
		};

		$scope.allCategories = [];
		$http.get('curator/categories').success(function(categories) {
			$scope.allCategories = categories;
		});

		$scope.getCategories = function(query, categories) {
			var deferred = $q.defer();

			$timeout(function() {
				// since this fn executes async in a future turn of the event loop, we need to wrap
				// our code into an $apply call so that the model changes are properly observed.
				//deferred.notify('About to greet ' + name + '.');
				deferred.resolve($filter('filter')(categories, query, false));
				//deferred.reject('Greeting ' + name + ' is not allowed.');
			}, 100);

			return deferred.promise;
		};
*/
