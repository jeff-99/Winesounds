function get_children(parent_id){
   	$.getJSON('http://www.winesounds.nl/includes/get_children.php?parent_id='+parent_id , create_div);
};

function create_div(children_list){
	var children = children_list;
	var div = '<div class="col-md-12 buttonlist" data-id="'+children[0]['parent_id']+'">';
	$('.applicatie').append(div);
	children.forEach(function(child){
		/* if is laatste ?? */ 
		if (!child['youtube_url']){
			/* create div */
			var button = '<button type="button" class="col-xs-12 col-md-12 btn btn-oldstyle nice" data-id="'+child['id']+'">'+child['naam']+'</button>';
			$('div[data-id="'+ child['parent_id']+'"]').append(button);
		}
		else{
			/* create youtube embed */
			var embed = '<iframe width="853" height="480" src="//www.youtube.com/embed/'+child['youtube_url']+'" frameborder="0" loop="1" allowfullscreen></iframe>';
			$('#video').append(embed);
		}
		
	});	
};

function initialize(){
	$('.applicatie').append(function(){
		$.getJSON('http://www.winesounds.nl/includes/get_children.php?parent_id=1', create_div);
	});
};




$(document).ready(function () {
    initialize();
    $('.applicatie').delegate('.btn','click',function(){
        $(this).addClass('active');
        $(this).removeClass('btn');
        var parent_id = $(this).data('id');
        $(this).siblings().hide('slow');
        
        get_children(parent_id); /* moet nog gemaakt worden */       
        
    });
    
    /* app menu options */
    $('#reset').click(function(){
        location.reload();
    });
    
    $('#back').click(function(){
    	if($('.applicatie').children().length > 1 ){ 
    		$('.applicatie div:last-child').remove();
	    	$('.applicatie div:last-child button').addClass('btn');
	    	$('.applicatie div:last-child button').removeClass('active');
	    	$('.applicatie div:last-child button').siblings().show('slow');
	    	$('#video').empty();
    	}
    	
    });
    
    /* mobile app options */
   $('#reset1').click(function(){
        location.reload();
    });
    
    $('#back1').click(function(){
    	if($('.applicatie').children().length > 1 ){ 
    		$('.applicatie div:last-child').remove();
	    	$('.applicatie div:last-child button').addClass('btn');
	    	$('.applicatie div:last-child button').removeClass('active');
	    	$('.applicatie div:last-child button').siblings().show('slow');
	    	$('#video').empty();
    	}
    	
    });
    
    /*
    $('#share').share({
    	button_text: 'Delen',
    	icon: ""
    	http://carrot.github.io/share-button/ 
    });
    */
   
    $.backstretch('/img/background2.jpg');
    addthis.layers({
			    'theme' : 'dark',
			    'share' : {
			      'position' : 'right',
			      'numPreferredServices' : 5
			    }   
			  });
});