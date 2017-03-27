app.controller("role_modiController",["$scope","$location","$routeParams","$http","$httpParamSerializerJQLike","$timeout",function($scope,$location,$routeParams,$http,$httpParamSerializerJQLike,$timeout){
//	  //保存成功的提示消息
//          function showResult() {
//              showResultDiv(true);
//              window.setTimeout("showResultDiv(false);", 3000);
//          }
//          function showResultDiv(flag) {
//              var divResult = document.getElementById("save_result_info");
//              if (flag)
//                  divResult.style.display = "block";
//              else
//                  divResult.style.display = "none";
//          }
   
	 //console.log(lis.length);
//	 var len=lis.length;
//	 var have="";
//	 for(var i=0;i<len;i++){
//	 	 var input=$(lis[i]).find("input");
//	 	 if($(input).prop("checked")){
//	 	 	 have+='、'+$(input).parent().text();
//	 	 }
//	 	
//	 }
//	  have=have.substring(1);

    
	 $scope.showResult=function(){
	 	    var list=JSON.parse(localStorage.getItem("list"));
			 // console.log(list);
				var nameText=$(".input_info").find(".username").val();
				var lis=$("#uls").find("li");
	      var len = lis.length;
				var have="";
				for(var i =0;i<len;i++){
					var input = $(lis[i]).find("input");
					if($(input).prop("checked")){
						have+='、'+$(input).parent().text(); 
					}
				}
				have=have.substring(1)
					//alert(have)
//				list.user=nameText;
//				list.have=have;
          var obj={
          	"user":nameText,
        	"have":have
          }
				//console.log(list)
				localStorage.setItem("list",JSON.stringify(obj))
				$location.url("/jiaose")
				
	 }
	 
		$scope.goOut=function(){
			$location.url("/jiaose")
		}
}]);

