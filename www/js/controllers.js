angular.module('app.controllers', [])

.controller('loginCtrl', function ($scope , $ionicPopup, $state){
	$scope.login = function(data){
	if (data.username == "admin" && data.password == "admin123") 
	{
		var alertPopup = $ionicPopup.alert({
				title: 'Login',
				template: 'Logged in successfully!'
			});	
		$state.go('welcome');
	}
	else{
      var alertPopup = $ionicPopup.alert({
        title: 'Login Error!',
        template: "Credentials Incorrect"
      });
    }
};
})
	

.controller('signupCtrl', ['$scope','$stateParams', function ($scope){

}])

.controller('welcomeCtrl', ['$scope', '$stateParams', function ($scope){

}])