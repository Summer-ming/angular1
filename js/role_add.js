app.controller("role_addController",["$scope","$rootScope","$location","$routeParams","$http","$httpParamSerializerJQLike","$timeout",function($scope,$rootScope,$location,$routeParams,$http,$httpParamSerializerJQLike,$timeout){
	
	$scope.showResult=function(){
        var user=$(".input_info").find(".username").val();
		var lis = $("#lists").find("li");
		var len = lis.length;
		var have="";
		for(var i =0;i<len;i++){
			var input = $(lis[i]).find("input");
			if($(input).prop("checked")){
				have+="、"+$(input).parent().text(); 
			}
		}
		have=have.substring(1)
		//alert(have)
		var users=$rootScope.users;
		console.log(users)
		var len=users.length;
		for(var j=0;j<len;j++){
			if(users[j].user==user){
				console.log(user);
				console.log("重名了");
				break;
			}else if(users[j]!=user&&j==len-1){
				var obj={
					"user":user,
        	        "have":have
				}
				users.push(obj);
				$rootScope.users=users;
				localStorage.setItem("users",JSON.stringify($rootScope.users))
			}
			
		}
		
		//console.log(users)
		$location.url("/jiaose")
	}
	$scope.goOut=function(){
		$location.url("/jiaose")
	}
	 
	
}]);
