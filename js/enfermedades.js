

/*$('#sintoma').bind('pageinit', function(event) {
	getListaSintomas();
});

function getListaSintomas() {*/
	$.getJSON("http://gvnn.16mb.com/Drcat/json_enfermedad.php", function(data) {
		$('#ListaEnfermedades li').remove();
		$.each(data, function(index, enfermedad) {
			$('#ListaEnfermedades').append('<li><a href="detalles.html?id='+enfermedad.idEnfermedad+'"><h4>'+enfermedad.nombre+'</h4></li>');
		});

		$('#ListaEnfermedades').listview('refresh');
	});
