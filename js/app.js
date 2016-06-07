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
                  "description": "PREMIER TEST DE description",
                  "technos": "html/css",
                  "images": "img/logo.jpg"
                  },
                  {
                  "name": "SECOND TEST",
                  "description": "SECOND TEST DE description",
                  "technos": "html/css",
                  "images": "img/logo.jpg"
                  },
                  {
                  "name": "TROISIEME TEST",
                  "description": "TROISIEME TEST DE description",
                  "technos": "html/css",
                  "images": "img/logo.jpg"
                  },
                  {
                  "name": "QUATRIEME TEST",
                  "description": "QUATRIEME TEST DE description",
                  "technos": "html/css",
                  "images": "img/logo.jpg"
                  },
                  {
                  "name": "CINQUIEME TEST",
                  "description": "CINQUIEME TEST DE description",
                  "technos": "html/css",
                  "images": "img/logo.jpg"
                }
            ];
});
