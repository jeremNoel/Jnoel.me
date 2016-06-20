$(document).ready(function() {
  $('#fullpage').fullpage({
    sectionsColor : ['#9E9E9E', '#FEA837', '#D95B43', '#E4844A'],
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
                  "name": "Airbnb",
                  "description": "Une des premières maquette réalisée dans le cadre de notre apprentissage à l'intégration",
                  "technos": "HTML5 CSS3",
                  "images": "img/airbnb.png",
                  "github" : "https://github.com/jeremNoel/airbnb"
                  },
                  {
                  "name": "Ariette Delatre",
                  "description": "Réalisation d'un site au complet avec comme thême 'site de luxe' ",
                  "technos": "HTML5 CSS3 uniquement",
                  "images": "img/delatre.png",
                  "github" : "https://github.com/jeremNoel/ariette"
                  },
                  {
                  "name": "Irving farm",
                  "description": "Réalisation de notre toute première maquette, non fini, mais ça donne idée du avant/après",
                  "technos": "HTML5 CSS3",
                  "images": "img/irving.png",
                  "github" : "https://github.com/jeremNoel/irvingfarm"
                  },
                  {
                  "name": "Jnoel.me",
                  "description": "Projet personnel : mon site internet, que vous pouvez-voir en direct",
                  "technos": "HTML5 CSS3 AngularJS JQuery/Fullpage.js",
                  "images": "img/logo.jpg",
                  "github" : "https://github.com/jeremNoel/Jnoel.me"
                  }
            ];
});
