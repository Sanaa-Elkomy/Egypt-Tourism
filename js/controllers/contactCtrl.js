app.controller('contactCtrl', function($scope) {
        $scope.send = function(isValid)
        {
        	if(isValid)
        	{
        		alert('successful submit');
        	}
        };
    });