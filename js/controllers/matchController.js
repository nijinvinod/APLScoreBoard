var matchCtrl = {};

matchCtrl.init = function($scope){
	$scope.subView  = 'newMatch';
	$scope.startMatch = function(){
		$scope.subView = 'scorecard';
	};
}
