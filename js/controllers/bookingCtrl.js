 app.controller('bookingCtrl', function($scope,reservation) {

 	$scope.name = "";
 	$scope.email = "";
 	$scope.date = "";
 	$scope.city = "";
 	
 	$scope.allCities = ["Alexandria","Assiut","Aswan","Behera","Beni-Suef","Cairo","Daqahlia"
 	,"El-Arish","Fayum","Gharbia","Girga","Gizeh","Ismailia","Kena","Menufia","Minia","Port Said"
 	,"Qaliubia","Sharqia","Sinai","Suez"];
	
	$scope.addReservation = function()
	{
		$scope.allReservation = reservation.addReservation($scope.name,$scope.email,$scope.date,$scope.city);
	};

	$scope.deleteReservation = function(item)
	{
		var index = $scope.allReservation.indexOf(item);
  		$scope.allReservation.splice(index, 1);     
	};

	$scope.openPopup = function(item)
	{
		$scope.selectedItem ={};
		$scope.selectedItem.name = item.name;
		$scope.selectedItem.email = item.email;
		$scope.selectedItem.date = item.date;
		$scope.selectedItem.city = item.city;
		
		$scope.selectedItem.cityIndex = $scope.allCities[$scope.selectedItem.city];
		console.log($scope.selectedItem.city);
  	  $("#myModal").modal('show');
	};

	// $scope.updateReservation = function()
	 
		
    });
