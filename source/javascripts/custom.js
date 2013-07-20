$(document).ready(function(){

	// Ceremony details
	$(".code-for-ceremony form").on("submit", function(e){
	    e.preventDefault();
	    
	    if ($(".code-for-ceremony form input[type='text']").val() == "12345"){
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
		$.fancybox.open("<h1>Στοιχεία τραπεζικού λογαριασμού</h1><p>Αριθμός λογαριασμού: 321321322121332121</p><p>IBAN: 32132132132132321321321</p><p>Όνομα δικαιούχου: Αναγνωστάκου Παρασκευή</p>")
		
	});
});
