function makeTimer() { 
	// var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
	var endTime = new Date("22 December 2019 08:00:00 GMT+03:00");			
		endTime = (Date.parse(endTime) / 1000);

	var now = new Date();
	now = (Date.parse(now) / 1000);

	var timeLeft = endTime - now;

	var days = Math.floor(timeLeft / 86400); 
	var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
	var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
	var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

	if (hours < "10") { hours = "0" + hours; }
	if (minutes < "10") { minutes = "0" + minutes; }
	if (seconds < "10") { seconds = "0" + seconds; }

	$("#days").html("<span class='number'>" + days + "</span><span class='title'>يوم</span>");
	$("#hours").html("<span class='number'>" + hours + "</span><span class='title'>ساعة</span>");
	$("#minutes").html("<span class='number'>" + minutes + "</span><span class='title'>دقيقة</span>");
	$("#seconds").html("<span class='number'>" + seconds + "</span><span class='title'>ثانية</span>");		 
} 
setInterval(function() { makeTimer(); }, 1000);



$(window).scroll(function() {
    if ($(this).scrollTop() >= 250) { 
		$(".scroll-to-top").addClass("show");
		$(".mobile-header").addClass("fixed-top");
		$(".logo").addClass("d-none");
		$(".logo-sm").removeClass("d-none");
		if(window.matchMedia('(min-width: 767px)').matches){ 
			$('.nav-top').addClass("top");  
		}
    } else { 
		$(".scroll-to-top").removeClass("show");
        $('.nav-top').removeClass("top");  
		$(".logo").removeClass("d-none");
		$(".logo-sm").addClass("d-none");
    }  
}); 



// back to top 
$(".scroll-to-top").click( function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '1000');
});  
