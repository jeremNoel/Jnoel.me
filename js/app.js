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
