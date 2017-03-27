var app=angular.module("myApp",["ngRoute"]);
app.controller("myCtrl",function($scope){
	
	$scope.guanliBtn=function(){
		$("#guanli").slideToggle()
	};
	$scope.shiwuBtn=function(){
		$("#shiwu").slideToggle()
	};
	$scope.gerenBtn=function(){
		$("#geren").slideToggle()
	}
	
})