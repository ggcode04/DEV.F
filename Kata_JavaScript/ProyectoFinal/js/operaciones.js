var saldo = 1000;
 
	function showContent(id, e) {
		document.getElementById("error").style.display='none';
 
		if (e.checked) {
			document.getElementById(id).style.display = 'block';
		}else{
			document.getElementById(id).style.display = 'none';
		}
	}
 
	function deposito() {
		document.getElementById("error").style.display = 'none';
 
		var valor = parseInt(document.getElementsByName("valor1")[0].value);
		if(!isNaN(valor))
		{
			saldo = saldo + valor;
			document.getElementById("saldo").innerHTML = saldo;
		}
	}
 
	function retiro() {
		document.getElementById("error").style.display = 'none';
 
		var valor = parseInt(document.getElementsByName("valor2")[0].value);
		if(!isNaN(valor))
		{
			if(valor <= saldo)
			{
				saldo = saldo - valor;
				document.getElementById("saldo").innerHTML = saldo;
			}else{
				document.getElementById("error").innerHTML = "La cantidad no puede superar el saldo";
				document.getElementById("error").style.display = 'block';
			}
		}
	}