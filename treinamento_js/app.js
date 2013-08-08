//comentários 
	
	/* 

	comentários em bloco 

	*/
	

	//declarando variáveis
	var teste = "01";
	
	teste2 = 2;
	
	lista = new Array("fellyph", "duilio", "leonardo", "danilo")


	//criar obj
	var obj = {};
	//var obj = new Object();


	var sobrenome = "cintra";
	
	obj.nome = "Fellyph";
	obj.sobrenome = sobrenome;
	obj.idade = "29";

	obj.dizNome = function(){
		if(this.nome){
			alert(this.nome);
		}else{
			alert("fulano");
		}		
	}
	//a nivel de teste
	
	function soma(a,b){
		c = a+b;
		return c;
	}

	minhaSoma = soma(3,5);

	nome = "Fellyph"
	nome = nome.toUpperCase();

	function procuraDU(){
		alert("alerta")
		document.querySelector("#du").style.color = "black";
	}

	var duilio = document.getElementById("du")
	duilio.addEventListener("click",procuraDU,false);

	//converte = 1;
	//converte = converte.toString();
