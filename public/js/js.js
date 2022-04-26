var i=0;
$(document).ready(function() {
    $('.add_part').click(function (e) {
                        $('#form').append("<input  type='radio' checked name='type[" + ++i + "]' value='1' /><label>- Заказать</label><input type='radio' name='type[" + i + "]' value='2' /><label>- Узнать цену</label><br/>");
                        e.preventDefault;
                        });
                  });