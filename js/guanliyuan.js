app.controller("guanliyuanController",["$scope","$location","$routeParams","$http","$httpParamSerializerJQLike","$timeout",function($scope,$location,$routeParams,$http,$httpParamSerializerJQLike,$timeout){
//	 //显示角色详细信息
//          function showDetail(flag, a) {
//              var detailDiv = a.parentNode.getElementsByTagName("div")[0];
//              if (flag) {
//                  detailDiv.style.display = "block";
//              }
//              else
//                  detailDiv.style.display = "none";
//          }
//          //重置密码
//          function resetPwd() {
//              alert("请至少选择一条数据！");
//              //document.getElementById("operate_result_info").style.display = "block";
//          }
//          //删除
//          function deleteAdmin() {
//              var r = window.confirm("确定要删除此管理员吗？");
//              document.getElementById("operate_result_info").style.display = "block";
//          }
//          //全选
//          function selectAdmins(inputObj) {
//              var inputArray = document.getElementById("datalist").getElementsByTagName("input");
//              for (var i = 1; i < inputArray.length; i++) {
//                  if (inputArray[i].type == "checkbox") {
//                      inputArray[i].checked = inputObj.checked;
//                  }
//              }
//          }
//	 
     $scope.adds=function(){
     	$location.url("/admin_add")
     }
      $scope.changes=function(){
     	$location.url("/admin_modi")
     }
	
}]);

