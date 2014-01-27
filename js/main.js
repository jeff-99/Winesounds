function get_children(parent_id){
	alert(parent_id);
   	$.getJSON('http://www.winesounds.nl/includes/get_children.php?parent_id='+parent_id , create_div);
};

function create_div(children_list){
	var children = children_list;
	var div = '<div id="bla" class="col-md-12 buttonlist" data-id="'+children[0]['parent_id']+'">';
	$('.applicatie').append(div);
	children.forEach(function(child){
		/* if is laatste ?? */ 
		if (!child['youtube_url']){
			/* create div */
			var button = '<button type="button" class="col-xs-12 col-md-12 btn btn-oldstyle" data-id="'+child['id']+'">'+child['naam']+'</button>';
			$('div[data-id="'+ child['parent_id']+'"]').append(button);
		}
		else{
			/* create youtube embed */
			var embedtest = '<iframe width="640" height="360" src="//www.youtube.com/embed/U1Uq1hQZOWE?list=PLC49FC96BD896501A" frameborder="0" allowfullscreen></iframe>';
			/*var embed = '<iframe width="560" height="315" src="//www.youtube.com/embed/'+child['youtube_url']+'" frameborder="0" allowfullscreen></iframe>';*/
			$('div[data-id="'+ child['parent_id']+'"]').append(embedtest);
		}
		
	});
		
	
};



$(document).ready(function () {
    $('.applicatie').delegate('.btn','click',function(){
        $(this).addClass('active');
        $(this).removeClass('btn');
        var parent_id = $(this).data('id');
        alert(parent_id);
        $(this).siblings().hide('slow');
        
        get_children(parent_id); /* moet nog gemaakt worden */  


  
        
        
    });
    $('#reset').click(function(){
        location.reload();
    });
});

/* voorbeeld */
/*
$.ajax({
    	url: "includes/get_children.php",
    	type: "GET",
    	data: "id="+parent_id,
    	statusCode: {
    		200: function() {
      			alert( "page found" );
    			}
  			},
  	  	success: function(data){
    	}
    });
*/