angular.module('starter.services', [])

// .factory('Chats', function() {
//   // Might use a resource here that returns a JSON array

//   // Some fake testing data
//   var chats = [{
//     id: 0,
//     name: 'Ben Sparrow',
//     lastText: 'You on your way?',
//     face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
//   }, {
//     id: 1,
//     name: 'Max Lynx',
//     lastText: 'Hey, it\'s me',
//     face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
//   }, {
//     id: 2,
//     name: 'Adam Bradleyson',
//     lastText: 'I should buy a boat',
//     face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
//   }, {
//     id: 3,
//     name: 'Perry Governor',
//     lastText: 'Look at my mukluks!',
//     face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
//   }, {
//     id: 4,
//     name: 'Mike Harrington',
//     lastText: 'This is wicked good ice cream.',
//     face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
//   }];

//   return {
//     all: function() {
//       return chats;
//     },
//     remove: function(chat) {
//       chats.splice(chats.indexOf(chat), 1);
//     },
//     get: function(chatId) {
//       for (var i = 0; i < chats.length; i++) {
//         if (chats[i].id === parseInt(chatId)) {
//           return chats[i];
//         }
//       }
//       return null;
//     }
//   };
// })
.service('alertmsg', function($http,$q) {

     this.notify =function(from, align, icon, type, animIn, animOut,message){
                $.growl({
                    icon: icon,
                    message: message,
                    url: ''
                },{
                        element: 'body',
                        type: "inverse",
                        allow_dismiss: true,
                        placement: {
                                from: from,
                                align: align
                        },
                        offset: {
                            x: 20,
                            y: 85
                        },
                        spacing: 10,
                        z_index: 1031,
                        delay: 3000,
                        timer: 500,
                        url_target: '_blank',
                        mouse_over: false,
                        animate: {
                                enter: animIn,
                                exit: animOut
                        },
                        icon_type: 'class',
                        template: '<div data-growl="container" class="alert" role="alert">' +
                                        '<button type="button" class="close" data-growl="dismiss">' +
                                            '<span aria-hidden="true">&times;</span>' +
                                            '<span class="sr-only">Close</span>' +
                                        '</button>' +
                                        '<span data-growl="icon"></span>' +
                                        '<span data-growl="title"></span>' +
                                        '<span data-growl="message"></span>' +
                                        '<a href="#" data-growl="url"></a>' +
                                    '</div>'
                });
            };

      return {
        getToken :function()
         {

            var email=localStorage.getItem("email");
        var id=localStorage.getItem("id");
        var businessId=localStorage.getItem("businessId");
       var  data={id:id,bId:businessId,email:email};
      // console.log(data);
          var businessId=1;
           $http.post('http://www.appnlogic.com/branboxAppAdmin/branboxAdminUi/ajaxGetToken.php',data, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
            .success(function (json) {
             // alert(json);
             return json;
              //return  1; 
               //console.log(json);
                //json.rows;
               // var deferred = $q.defer();
               //  deferred.resolve(json.rows);
               //  console.log( deferred.promise);
               //  return deferred.promise;
               console.log(json);
                    //alert("alert");
              }).error(function(){  
                  return 0;
              });
        }
      }
         this.Offers =function()
         {
          //alert("gobi");
          var offers=[];
          var businessId=1;
            $http.post('http://www.appnlogic.com/branboxAppAdmin/branboxAdminUi/ajaxOffers.php',{bussId:businessId}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
            .success(function (json) {
              // offers.push(json.rows);
                
                var deferred = $q.defer();
                deferred.resolve(json.rows);
                return deferred.promise;

              }).error(function(){  
            alert("server Error");
          });
         }

  })

.service('getToken', function($http,$q) {


    

  })
