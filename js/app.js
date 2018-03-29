function itemInSpot(drag_item,spot)
{
	var oldSpotItem = $(spot).find('img');
	if(oldSpotItem.length>0) {
		oldSpotItem.appendTo('#lista_pilkarzy');
	}
	var item = $('<img />');
	item.attr('src',drag_item.attr('src')).attr('class',drag_item.attr('class')).appendTo(spot).draggable({ revert: 'invalid' });
	drag_item.remove(); 
}
 
$(document).ready(function() {
	$(".pos_atak,.pos_bramka").draggable({ revert: 'invalid'});
	$('#lista_pilkarzy').droppable();
	$("#pozycja_atak1").droppable({ accept: '.pos_atak'})
	$("#pozycja_atak2").droppable({ accept: '.pos_atak'})
	$("#pozycja_atak3").droppable({ accept: '.pos_atak'})

	$("#pozycja_pomoc1").droppable({ accept: '.pos_pomoc'})
	$("#pozycja_pomoc2").droppable({ accept: '.pos_pomoc'})
	$("#pozycja_pomoc3").droppable({ accept: '.pos_pomoc'})
	$("#pozycja_pomoc4").droppable({ accept: '.pos_pomoc'})
	
	$("#pozycja_obrona1").droppable({ accept: '.pos_obrona'})
	$("#pozycja_obrona2").droppable({ accept: '.pos_obrona'})
	$("#pozycja_obrona3").droppable({ accept: '.pos_obrona'})
	
	$('#pozycja_bramka').droppable({ accept: '.pos_bramka'});
	$('#pozycja_obrona1, #pozycja_obrona2, #pozycja_obrona3, #pozycja_pomoc1, #pozycja_pomoc2, #pozycja_pomoc3, #pozycja_pomoc4, #pozycja_atak1,#pozycja_atak2,#pozycja_atak3,#pozycja_bramka,#lista_pilkarzy').bind('drop', function(ev,ui) { itemInSpot(ui.draggable,this); });

	$('.pos_atak').css('zIndex', '999');
	$('.pos_pomoc').css('zIndex', '999');
	$('.pos_obrona').css('zIndex', '999');
	$('.pos_bramka').css('zIndex', '999');
});