$.get("/exemple", function(data, status){	
	$.each(data, function(i, item) {
		console.log(item)
	}); 
});
 
$(document).on('click', '#yourButton', function(data) {
	console.log(data)  
});
