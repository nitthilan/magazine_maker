MyAppControllers.controller('feedbackCtrl', ['$scope','$http','$timeout',
	function($scope, $http, $timeout) {

		$scope.alerts = [];
		var addAlert = function(alert_message) {
			$scope.alerts.push({msg: alert_message});
			$timeout(function(){
				$scope.alerts.splice(0,1);
			}, 5000);
		};

		$scope.newFeedBack = null;
		$scope.showCreateForm = false;

		$scope.showForm = function(){
			$scope.showCreateForm = true;
			$scope.newFeedBack = {
				name:null,
				oneliner:null,
				feedback:null
			};
		};
		$scope.discardForm = function(){
			$scope.newFeedBack = null;
			$scope.showCreateForm = false;			
		};
		
		$scope.createFeedback = function(feedback){
			$http.post('/curator/feedback', {info:feedback}).success(function(data){
				//$http.get('/curator/pubarticles').success(function(data) { $scope.articles = data;	});
				$scope.newFeedBack = null;
				$scope.showCreateForm = false;
				addAlert("Feedback added: "+data.oneliner);
				$http.get('/curator/feedback').success(function(data) {	$scope.allFeedback = data; });
			}).error(function(err){
				console.log("Error in saving "+JSON.stringify(err));
				addAlert("Feedback not added. Try droping a mail");
			});
		};
		$http.get('/curator/feedback').success(function(data) {	$scope.allFeedback = data; });
		
		$scope.vote = function(feedback, isAddVote){
			if(isAddVote) feedback.numVotes++;
			else feedback.numVotes--;
			$http.put('/curator/feedback/'+feedback._id, {info:{numVotes:feedback.numVotes}}).error(function(err) {	addAlert("Feedback vote failed. Drop a mail"); });
		};
}]);