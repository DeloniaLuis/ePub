/*!
 * @copyright Copyright (c) 2017 Luis Ornés and contributors
 * @license   Licensed under Delonia license
 *            See GIT REPO
 * @version   0.0.2
 */

 //Eventos de Href-->
	 //llamada desde una clase externa
	$(document).on('click', "a", function() 
	{

		var string = $(this).attr("href");	//Lo colo en una variable por si hay que operar el atributo
		showLearningGuide(string);

	});

	/*llamada desde una clase interna
	$('a').click( function(e) {e.preventDefault(); 
	{
		
		//$(this).attr("href")		  		//Retrieve href attribute
		var string = $(this).attr("href");	//Lo colo en una variable por si hay que operar el atributo
		//showLearningGuide(string);
		alert("Hola");

		e.stopImmediatePropagation(); 		//Detiene la pagina a irse a la ruta href
		e.preventDefault();			  		//Para otros navegadores
	
	}return false; } );*/

//Funciones

	var iFrameCount = 0;
	var guideStyle  = 2;
	//0 Iframe
	//1 New Tab
	//2 New Window
	var iframe;

	function showLearningGuide(url) 
	{
		if(!guideStyle)				{ createIframe(url) 	}
		else if (guideStyle == 1)	{ openInNewTab(url)		}
		else 						{ openInNewWindows(url) }
	}
	
    function openInNewTab(url)
	{
		var win = window.open(url, '_blank');
		win.focus();
	}
	
	function openInNewWindows(url)
	{
		window.open(url, "Nombre", "height=200,width=200");
	}

	function createIframe(url) 
	{
		if(!iFrameCount)
		{
			iframe = document.createElement('iframe');
			iframe.src = url;
			document.body.appendChild(iframe);

			iFrameCount++;
		}
		else	//Change iFrame URL
		{
			iframe.src = url;
		}
	};