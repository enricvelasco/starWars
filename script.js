/*
	A partir del servei https://swapi.dev/ pots agafar les dades dels pesonatges de StarWars. Al servei http://facetheforce.today/ pots trobar les imatges.
	L'usuari posará un nom al input i has de tornar el primer resutat pEx: poso Luke i clico buscar -> has de tornar les dades de luke skywalker + la seva imatge.
	Les funcions per pintar el HTML les tens fetes (es provable que les hagis de modificar, pasra parametres etc...).
	Fes servir el métode "fetch" per recuperar les dades.
	Tens algunes urls d'exemple i un primer cas amb Boba Fett.

	A "textValue" tens el valor del text introduit per l'usuari.

	Ves poc a poc. Primer fes que funcioni la busqueda del nom i quan ho tinguis funcionant fes que pinti la imatge
*/


// API: https://swapi.dev/
// DOCUMENTACIO: https://swapi.dev/documentation
// IMAGES API: http://facetheforce.today/

const peopleBasicUrl = 'http://swapi.dev/api/people/';

const peopleSearchUrl = 'https://swapi.dev/api/people/?search=boba';

const imageBasicUrl = 'http://facetheforce.today/images/boba.jpg';

function paintTextName () {
	const element = document.getElementById("character-text");
	element.innerHTML = "Boba Fett";
};

function paintImage () {
	document.getElementById("character-image").src = "http://facetheforce.today/images/boba.jpg";
};

/*---- INICIO ----*/

function searchCharacter () {
	const textValue = document.getElementById('character-input').value;

	paintTextName();
	paintImage();
};


// cridar la funció desde aquí fà que s'executi automaticament cada cop que refresques. Si la treus veuras que has de clickar a Search perque fagi algo
searchCharacter();