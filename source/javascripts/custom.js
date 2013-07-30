$(document).ready(function(){

	if ($.cookie("loggedin")){
		$(".code-for-ceremony").hide('fast', function(){	
    	$(".removeme-with-auth").hide();
      $(".private-content").show();
    });
	}

	// Ceremony details
	$(".code-for-ceremony form").on("submit", function(e){
	    e.preventDefault();
	 		$.cookie("loggedin", true);
	    if ($(".code-for-ceremony form input[type='text']").val() == "loveandhappiness"){
	        $(".code-for-ceremony").slideUp('fast', function(){	
	        	$(".removeme-with-auth").remove();
		        $(".private-content").slideDown(500, function(){
		        	
		        	$("html, body").stop().animate({
                		scrollTop: $(".ceremony-1" ).offset().top - 170
            		})
		        });
	        });
	    }
	});

	//Pop up for Peiraios
	$("#peiraios").on("click", function(e){
		e.preventDefault();
		$.fancybox.open("<h1>Στοιχεία τραπεζικού λογαριασμού</h1><p>Αριθμός λογαριασμού: 51 3204 7572 811</p><p>IBAN: GR 47 0172 1320 0051 3204 7572 811</p><p>Όνομα δικαιούχου: Αναγνωστάκου Παρασκευή</p>")
		
	});
});
