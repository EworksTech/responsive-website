$(document).ready(function() {
  	
	var frames = [$("#home-intro"),$("#quem-somos"),$("#o-que-fazemos"),$("#entre-em-contato")];
	
	// Cache the Window object
	$window = $(window);
	$trace = $("#trace");
	
	// Cache the Y offset and the speed of each sprite
	$('[data-type]').each(function() {	
		$(this).data('offsetY', parseInt($(this).attr('data-offsetY')));
		$(this).data('Xposition', $(this).attr('data-Xposition'));
		$(this).data('speed', $(this).attr('data-speed'));
	});
	
	$('#home-intro .reveal').click(function(){
	// $('#home-intro .parallax-bg').css('background-image', 'url(../img/who_screen_kids.jpg)');
		$('#home-intro .parallax-bg').fadeOut('fast', function() {
		     $('#home-intro .parallax-bg').css('background-image', 'url(../img/who.jpg)')
		         .fadeIn('fast');
		});
	//	$('#home-intro .parallax-bg').fadeTo('slow', 0.3, function(){
	//	}).fadeTo('slow', 1);
	});
	
	// For each element that has a data-type attribute
	$('.frame').each(function(){
	
	    
		
		// Store some variables based on where we are
		
		var $self = $(this);
		var offsetCoords = $self.offset();
		var topOffset = offsetCoords.top;
		
		
		// When the window is scrolled...
	    $(window).scroll(function() {
				
				
				
				//if ( ($window.scrollTop() + $window.height()) > (topOffset) && ( (topOffset + $self.height()) > $window.scrollTop() ) ) {
					
					
					// Check for other sprites in this section	
					$('[data-type="background"]', $self).each(function() {
						
						
						
						if ( ($window.scrollTop() + $window.height()) > (topOffset) && ( (topOffset + $self.height()) > $window.scrollTop() ) ) {
						// If this section is in view
						
							// Scroll the background at var speed
							// the yPos is a negative value because we're scrolling it UP!								
							var yPos = -($window.scrollTop() / $(this).data('speed')); 
							
							// If this element has a Y offset then add it on
							if ($(this).data('offsetY')) {
								yPos += $(this).data('offsetY');
							}
							
							// Put together our final background position
							var coords = '50% '+ yPos + 'px';
			
							// Move the background
							$(this).css({ backgroundPosition: coords });
							
						}
					
					}); 
					
					$('[data-type="bubble"]', $self).each(function() {
						
						var yPos = -($window.scrollTop() / $(this).data('speed')); 
							
							if ($(this).data('offsetY')) {
								yPos += $(this).data('offsetY');
							}
							
							$(this).css({ top: yPos });	
					
					
					});
				
				//}
				
								
				$(frames).each(function(i,obj){
					
					var offsetobj = $(this).offset();
					
					 
					var scrollposition = ($(document).height() * $window.scrollTop()) / ($(document).height() - $window.height()) - 20;
					
					
					if(offsetobj.top <= scrollposition  && offsetobj.top + 20 + $(this).height() >= scrollposition ){						
					
						$('a','.nav').eq(i).parent().toggleClass("active",true);										
					
					} else {						
					
						$('a','.nav').eq(i).parent().toggleClass("active",false);					
					
					}
					
					
				});
				
		}); // window scroll
			
	});	// each data-type
	
	//-----------------------
	
	$('a','.nav').on('click', function(){
				
		$('html,body').scrollTo($(this).data("scrollto"), $(this).data("scrollto"));			
		
	});
	
	$('.form').focus(function(){
		$('#formAlert').html('');
	});
	
});

function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!regex.test(email)) {
     return false;
  }else{
     return true;
  }
}
