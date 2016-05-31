$(document).ready(function() {
  $('#fullpage').fullpage({
    sectionsColor : ['#9E9E9E', '#F3EEBA', '#D1C79F', '#FFF8DC'],
    css3: true,
    scrollBar:true
  });

jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});



  var app = angular.module('myApp', []);

  app.controller('MainCtrl', function($scope){

  $scope.projects = [
                  {
                  "name": "PREMIER TEST",
                  "version": "PREMIER TEST DE VERSION",
                  "images": "img/logo.jpg"
                  },
                  {
                  "name": "SECOND TEST",
                  "version": "SECOND TEST DE VERSION",
                  "images": "img/logo.jpg"
                  },
                  {
                  "name": "TROISIEME TEST",
                  "version": "TROISIEME TEST DE VERSION",
                  "images": "img/logo.jpg"
                  },
                  {
                  "name": "QUATRIEME TEST",
                  "version": "QUATRIEME TEST DE VERSION",
                  "images": "img/logo.jpg"
                  },
                  {
                  "name": "CINQUIEME TEST",
                  "version": "CINQUIEME TEST DE VERSION",
                  "images": "img/logo.jpg"
                }
            ];
});
