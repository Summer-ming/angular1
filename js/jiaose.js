app.controller("jiaoseController",["$scope","$rootScope","$location","$routeParams","$http","$httpParamSerializerJQLike","$timeout",function($scope,$rootScope,$location,$routeParams,$http,$httpParamSerializerJQLike,$timeout){
//  function deleteRole() {
//      var r = window.confirm("确定要删除此角色吗？");
//      $("#operate_result_info").style.display = "block";

//  }
       var users=[
        {
        	"userID":"1",
        	"user":"闻卓",
        	"have":"角色管理、管理员管理、资费管理"
        },
        {
        	"userID":"2",
        	"user":"闻卓1",
        	"have":"角色管理、管理员管理、资费管理、账务账号"
        },
        {
        	"userID":"3",
        	"user":"闻卓2",
        	"have":"角色管理、管理员管理、资费管理"
        },
        {
        	"userID":"4",
        	"user":"闻卓3",
        	"have":"角色管理、管理员管理"
        }
    
    ];
    if(localStorage.getItem("users")){
    	//console.log(localStorage.getItem("users"))
    	$rootScope.users=JSON.parse(localStorage.getItem("users"))
    }
    else{
   	 	$rootScope.users=users;   	
    }

    //console.log($rootScope.users)
    $scope.deleteRole=function(index){
    //alert(index)
    	alert("确定要删除此项吗？")
    	//console.log(typeof $rootScope.users);
 	   var userss=$rootScope.users;
 	   //console.log(userss[index])
       userss.splice(index,1);
       localStorage.setItem("users",JSON.stringify(userss));
    }
    //var lists=JSON.parse(localStorage.getItem("lists"));
    //console.log(lists);
    var lists;
    lists=JSON.parse(localStorage.getItem("list"))
	console.log(lists);
	 $scope.change=function(index){
    	$location.url("/role_modi")
    	var userss=$rootScope.users;
    	lists=userss[index];
    	//console.log(typeof list);
    	localStorage.setItem("list",JSON.stringify(lists));
    	
        console.log(lists);
    	//lists=list
     
    }
	
	$scope.add=function(){
    	$location.url("/role_add")
   } 
}]);


