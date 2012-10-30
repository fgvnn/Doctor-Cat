var sintomas;

/*$('#sintoma').bind('pageinit', function(event) {
	getListaSintomas();
});

function getListaSintomas() {*/
	$.getJSON("http://gvnn.16mb.com/Drcat/json_sintoma.php", function(data) {
		var newhtml = '<fieldset data-role="controlgroup">';
		$.each(data, function(index, sintoma) {
			newhtml += ('<input type="checkbox" name="'+sintoma.idSintoma+'" id="'+sintoma.idSintoma
				+'" class="custom" value="" /><label for="'+sintoma.idSintoma+'">'+sintoma.nombre+'</label>');
		});
		newhtml += '</fieldset>';

		$('#ListaSintomas').html(newhtml).page();
		$("input[type='checkbox']").checkboxradio("refresh");
		$('#sintoma').page();
	});
