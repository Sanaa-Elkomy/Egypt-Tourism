	  // create the module and name it app
      // also include ngRoute for all our routing needs
    var app = angular.module('app', ['ngRoute']);

    // configure our routes
    app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'partials/home.html',
                controller  : 'homeCtrl'
            })

            .when('/home', {
                templateUrl : 'partials/home.html',
                controller  : 'homeCtrl'
            })

            // route for the pricing page
            .when('/pricing', {
                templateUrl : 'partials/pricing.html',
                controller  : 'priceCtrl'
            })

             // route for the booking page
            .when('/booking', {
                templateUrl : 'partials/booking.html',
                controller  : 'bookingCtrl'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'partials/contact.html',
                controller  : 'contactCtrl'
            })

            // route for the error page
            .when('/404', {
                templateUrl : 'partials/404.html',
                controller  : ''
            })

            .otherwise({ redirectTo: '/404' });
    });

   