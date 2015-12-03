app.service('reservation',function(){
var allReservation = [];
return {
	addReservation : function(name,email,date,city){
		var newReserve = {};
		newReserve.name = name;
		newReserve.email = email;
		newReserve.date = date;
		newReserve.city = city;
		allReservation.push(newReserve);
		return allReservation;
	}
};
});