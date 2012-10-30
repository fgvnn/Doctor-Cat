$('#paginaDetalles').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON('http://gvnn.16mb.com/Drcat/json_detalle.php?id='+id, mostrarEnfermedad);
});

function mostrarEnfermedad(data){
	$.each(data, function(index, enf) {
		console.log('nombre '+enf.nombre);
		$('#nombre').html(enf.nombre);
		$('#tratamiento').html(enf.tratamiento);
	});

}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}