$(document).ready(function(){
	$('.list-title').click(function(){
		id=$(this).attr('id')
		$('#'+id + ' img').toggleClass('rotated');
	});
});