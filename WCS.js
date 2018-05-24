var clicked = 0;
$(document).ready(function(){
	// $(window).bind('scroll',function(e){
	// 		parallaxScroll();
	// });

  //alert("working");

	$('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });


	// $('img,a,.line,#information_div').css('display','none');
	// $('.line').css('width','10px');
	// $('.background').css('opacity','1');
	//
	// $('#feather > img').fadeIn();
	// // var $bottom = $('#feather > img').bottom();
	//
	//
	//  $('#feather > img').animate({bottom:'350px',left:'-250px',},1200,function(){
	//  	$('#feather > img').animate({bottom:'200px',left:'200px'},1200,function(){
	//  		$('#feather > img').animate({bottom:'50px', left:'-200px'},1200,function(){
	//  			$('#feather > img').animate({bottom:'0px',left:'0px'},1200,function(){
	//  				$('#feather > img').delay(500).fadeOut(2000);
  //  					$('#biglogo > img').fadeIn(1500);
	//  					$('.background').delay(1600).animate({opacity:'0.85'},1000);
	//  					$('.links > a').delay(1800).fadeIn(2000);
	//  					$('.line').delay(2600).fadeIn(500,function() {
	//  						$(this).animate({width:'450px'},1000,"swing");
	//  					});
	//  					$('#information_div').delay(3000).fadeIn(2000);
	//  					$('#WCS').delay(3100).fadeIn(2000);
	// 					$('img,a').fadeIn();
	// 					$('#feather').fadeOut();
	//  			});
	//  		});
	//  	});
	//  });

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});

		$.extend(true, $.magnificPopup.defaults, {
		    iframe: {
		        patterns: {
		           youtube: {
		              index: 'youtube.com/',
		              id: 'v=',
		              src: 'http://www.youtube.com/embed/%id%?autoplay=1'
		          }
		        }
		    }
		});



	$("#benefits").mouseover(function(){
			$(".line").animate({
				width:'75px',
				left:'-165px'
			});
		});
	$("#FAQs").mouseover(function(){
			$(".line").animate({
				width:'70px',
				left:'-60px'
			});
		});
	$("#Order").mouseover(function(){
			$(".line").animate({
				width:'80px',
				left:'45px'
			});
		});
	$("#Contact").mouseover(function(){
			$(".line").animate({
				width:'100px',
				left:'158px'
			});
		});
	$("#navbar").mouseleave(function(){
			$(".line").animate({
				width:'450px',
				left:'0px'
			});
			$('.line').css('background-color','#ffffff');
		});

	$('.links > a').mouseover(function(){
		$(this).css('color','rgb(14, 187, 115)');
		$('.line').css('background-color','rgb(14, 187, 115)');
	});
	$('.links > a').mouseleave(function(){
		$(this).css('color','#ffffff');
		$('.line').css('background-color','#ffffff');
	});

	$('#orderhover').mouseenter(function(){
		$('#orderbutton').css({
			'border':'none',
			'backgroundColor':'#6dcd7a',
			'height':'62px',
			'width':'127px'
		});
		$('#orderbutton > p').css({
			'color':'#fff',
			'font-size':'1.3em'
		});
	}).mouseleave(function(){
		$('#orderbutton').css({
			'border':'2px solid #ffffff',
			'backgroundColor':'transparent',
			'height':'60px',
			'width':'125px'
		});
		$('#orderbutton > p').css({
			'color':'#ffffff',
			'font-size':'1.25em'
		});
	});

function repair(){
	$('#assemble,#transport').css('top', 80 + 'px');
		$('#repair').css('top', 0+'px');
}
function assemble(){
	$('#repair,#transport').css('top', 80 + 'px');
		$('#assemble').css('top', 0+'px');
}
function transport(){
	$('#repair,#assemble').css('top', 80 + 'px');
	$('#transport').css('top', 0+'px');
}


$('.aboutpanel').mouseover(function(){
	var clicked = 1;
	$('.aboutpanel').css('border','none');
	$('.aboutpanel').css('top', 30 + 'px');
	$(this).css('border','4px solid rgb(79,185,112)');
	$(this).css('top',0+'px');
	if($(this).is('#ap1')){
		assemble();
		return false;
	}
	if($(this).is('#ap2')){
		repair();
		return false;
	}
	if($(this).is('#ap3')){
		transport();
		return false;
	}
});
$('.aboutpanel').mouseleave(function(){
	$('.aboutpanel').css('border','none');
	$('.aboutpanel').css('top', 30+'px')
	$(this).css('border','4px solid rgba(255, 255, 255, 0)');
});




// function parallaxScroll(){
//     var scrolled = $(window).scrollTop();
// 	$a=scrolled;
//
// 	if($a<3000){
//  		$('#About_section').css('bottom',-3000+scrolled+'px');
//  	}
// 	if($a>3000 && $a<4505){
// 		$('#FAQ_section').css('bottom',-9000+(scrolled*2)+'px');
// 	}
//
// }
	/*$('.links > a').mouseover(function() {
		$('.links > a').css({
				'animation':'colorfade 1s 1 both',
				'@-webkit-animation':'colorfade 1s 1 both',
				'@-moz-animation':'colorfade 1s 1 both'
			});
	});
	$('#navbar').mouseleave(function() {
		$('.links > a').css({
				'animation':'colorfadeout 1s 1 both',
				'@-webkit-animation':'colorfadeout 1s 1 both',
				'@-moz-animation':'colorfadeout 1s 1 both'
			});
			}); */



});
