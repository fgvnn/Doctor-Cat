function reiniciarCheckbox(){
	console.log("reiniciarCheckbox");
	$('input[type=checkbox]').attr('checked',false);
	$("input[type='checkbox']").checkboxradio("refresh");
	$('#ListaDiagnostico li').remove();
};

function getSintomas(){
	var sin = new Array();
	var i=0;
	$("input[type=checkbox]").each( 
	    function() { 
	    	if(this.checked === true){
		       sin[i] = this.name;
		       i++;
		       console.log(this.name);
	        }
	    } 
	);

	var param="";

	for(i=0;i<sin.length;i++){
		param = param + "sin"+i+"="+sin[i]+"&";
	}

	var url = "http://gvnn.16mb.com/Drcat/json_diagnostico.php?"+param;
	console.log(url);

	$.getJSON(url, function(data) {
		$.each(data, function(index, enf) {
			$('#ListaDiagnostico').append('<li><a href="detalles.html?id=' + enf.idEnfermedad + '">' + enf.nombre +
					'<span class="ui-li-count">' + Math.round(enf.prob) + ' %</span></a></li>');

		});
		$('#ListaDiagnostico').listview('refresh');
	});
}
