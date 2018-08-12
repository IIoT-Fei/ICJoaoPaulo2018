function _GET(name)
{
    var url   = window.location.search.replace("?", "");
    var itens = url.split("&");
    
    for(n in itens)
    {
        if( itens[n].match(name) )
        {
            return decodeURIComponent(itens[n].replace(name+"=", ""));
        }
    }
    return null;
    
}

function buscaAmbiente(str) {
	switch (true) {
		case /local/.test(str):
			return ("/meus-5-minutos/folder/" + folder + "/sitepage.json");
			break;
		case /qa01/.test(str):
			return ("http://edg4.qa01.globoi.com/meus-5-minutos/folder/" + folder + "/sitepage.json");
			break;
		case /globo.com/.test(str):
			return ("http://meus5minutos.globo.com/folder/" + folder + "/sitepage.json");
			break;
		default:
			return "";
			break; 
	} 
}


function buscaSitePage()
{
    
    folder = _GET('folder_id');
 	ambiente = window.location;
 	url = "";
 	if (folder != null){

 		url = buscaAmbiente(ambiente);
        if (url != ""){
            document.write('<script type="text/javascript" src="'+ url +'"></script>')
        }
	}
}

function trocaSitePage(data)
{
	sitepage = data.sitepage;
	if (sitepage != null){
		OAS_sitepage = sitepage;
	}
}
// DEVEMOS CHAMAS ESTA FUNCAO DEPOIS DE BUSCAR O SITEPAGE NO TEMPLATE E
// ANTES DE ADICIONAR AS PUBLICIDADES E EM DETERMINADOS CASOS PODEMOS RETIRAR A CHAMADA DAQUI
buscaSitePage();
