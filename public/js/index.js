
function create_textarea() {
	$(document).ready(function(){
			$("<textarea name='question' maxlength='512' style='color:red;' placeholder='Вариант ответа' rows='1' cols='30px' class='q-text'></textarea><br>").insertBefore(".uk-form-controls");	
	});
}

jQuery.noConflict()(function ($) {

	$(".AddComment").click(function () {
create_textarea();
});
})

setTimeout(function() { create_textarea(); }, 1000)
setTimeout(function() { create_textarea(); }, 2000)