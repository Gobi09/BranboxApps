var apps=angular.module('starter', ['ionic', 'ngRoute', 'starter.controllers', 'starter.services'])
.run(function($http) {

    localStorage.setItem("cartCount", 0);
    localStorage.setItem("businessId", 1);
    localStorage.removeItem("cartCount");
    localStorage.removeItem("tokenNumber");
    var db = window.openDatabase("branboxnew", "1.0", "branbox New", 200 * 1024 * 1024);
        db.transaction(function(tx){
            tx.executeSql('DROP TABLE IF EXISTS orderitems');
            tx.executeSql('DROP TABLE IF EXISTS orderingredients');
             tx.executeSql('DROP TABLE IF EXISTS orderitemingredients');
                tx.executeSql('CREATE TABLE IF NOT EXISTS orderitems (id INTEGER PRIMARY KEY AUTOINCREMENT,businessId INTEGER ,menuId INTEGER, subMenuId INTEGER,itemId INTEGER,userId INTEGER, itemName TEXT, image TEXT, price TEXT, subTotal TEXT, quantity TEXT,tax TEXT,offers TEXT,orderType TEXT)');
                tx.executeSql('CREATE TABLE IF NOT EXISTS orderingredients (id INTEGER PRIMARY KEY AUTOINCREMENT,businessId INTEGER ,menuId INTEGER, subMenuId INTEGER,itemId INTEGER, ingId INTEGER, ingredientsYN TEXT, extras TEXT)'); 
                tx.executeSql('CREATE TABLE IF NOT EXISTS orderitemingredients (id INTEGER PRIMARY KEY AUTOINCREMENT,itemStorageId INTEGER, businessId INTEGER ,menuId INTEGER, subMenuId INTEGER,itemId INTEGER, ingId INTEGER, ingredientsYN TEXT, extras TEXT)');                                   
              
          });
    })

.config(['$routeProvider','$stateProvider',
         function($routeProvider,$stateProvider) {

 
  $routeProvider
    // .when('/dashboard',
    //     {
    //         templateUrl: 'templates/dashboard.html',
    //         controller: 'DashCtrl'
    //     })
   .when('/menu',
        {
            templateUrl: 'templates/menu.html',
            controller: 'MenuController'
        })
   .when('/subMenu/=:id',
        {
            templateUrl: 'templates/subMenu.html',
            controller: 'SubMenuController'
        })
   .when('/items/=:menuId=:subMenuId',
        {
            templateUrl: 'templates/items.html',
            controller: 'SubMenuItemController'
        })
   .when('/addTocartpage',
        {
            templateUrl: 'templates/addItemTocart.html',
            controller: 'AddToCartCtrl'
        })
    .when('/contactForm',
        {
            templateUrl: 'templates/contactForm.html',
            controller: 'contactCtrl'
        })
    .when('/location',
        {
            templateUrl: 'templates/location.html',
            controller: 'locationCtrl'
        })
    .when('/myAccount',
        {
            templateUrl: 'templates/myAccount.html',
            
        })
    .when('/login',
        {
            templateUrl: 'templates/login.html',
            controller: 'authentication'
        })

    .when('/register',
        {
            templateUrl: 'templates/register.html',
            controller: 'registerForm'
        })
    .when('/latestOffers',
        {
            templateUrl: 'templates/latestOffer.html',
            controller: 'latestOfferController'
        })
    
    .when('/gallery',
        {
            templateUrl: 'templates/gallery.html',
            controller: 'gallery'
        })
    .when('/aboutUs',
        {
            templateUrl: 'templates/aboutUs.html',
            controller: 'aboutUs'
        })
    .when('/aboutGallery',
        {
            templateUrl: 'templates/aboutGallery.html',
            //controller: 'aboutUs'
        })
    .when('/timeDelivery',
        {
            templateUrl: 'templates/timeDelivery.html',
            controller: 'timeDelivery'
        })
    .when('/message',
        {
            templateUrl: 'templates/message.html',
            //controller: 'registerForm'
        })
    .when('/tableBooking',
        {
            templateUrl: 'templates/tableBooking.html',
            //controller: 'registerForm'
        })
    .otherwise('/menu');

}]);

