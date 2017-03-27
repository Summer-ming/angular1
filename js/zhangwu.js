app.controller("zhangwuController",["$scope","$location","$routeParams","$http","$httpParamSerializerJQLike","$timeout",function($scope,$location,$routeParams,$http,$httpParamSerializerJQLike,$timeout){
//	 //删除
//          function deleteAccount() {
//              var r = window.confirm("确定要删除此账务账号吗？\r\n删除后将不能恢复，且会删除其下属的所有业务账号。");
//              document.getElementById("operate_result_info").style.display = "block";
//          }
//          //开通或暂停
//          function setState() {
//              var r = window.confirm("确定要开通此账务账号吗？");
//              document.getElementById("operate_result_info").style.display = "block";
//          }
	 $scope.add=function(){
	 	$location.url("/account_add")
	 }
	 $scope.change=function(){
	 	$location.url("/account_modi")
	 }
}]);

