function logout() {
	firebase.auth().signOut().then(function() {
  // Sign-out successful.
	alert("Cerró sesión");
	location.assign("../index.html")
}).catch(function(error) {
  // An error happened.
  var errorCode = error.code;
});
}

//Colocar primeros 10 datos
var database = firebase.database();
var recentRef = database.ref('pets/').limitToLast(10);
recentRef.on("value", function(data) {
   console.log(data.val());
	 var keys = Object.keys(data.val());
	 var values = Object.values(data.val());
	 console.log(values);
	 console.log(keys);
	 for(var i=0;i<keys.length;i++) {
		 var name_retrieve = values[i].Name;
		 var nickname_retrieve = values[i].OwnerNick;
		 var race_retrieve = values[i].Race;
		 var age_retrieve = values[i].Age;
		 var city_retrieve = values[i].City;
		 var sex_retrieve = values[i].Sex;
		 //Div principal
		 var div_results = document.getElementById("results");
		 var post = document.createElement("DIV");
		 post.classList.add("post-results");
		 div_results.appendChild(post);
		 //Div imagen
		 var img_div = document.createElement("DIV");
		 img_div.classList.add("post-small");
		 var img = document.createElement("p");
		 var img_p = document.createTextNode("No disponible");
		 post.appendChild(img_div);
		 img_div.appendChild(img);
		 img.appendChild(img_p);
		 //Div nombre
		 var name_div = document.createElement("DIV");
		 name_div.classList.add("post-small");
		 var name = document.createElement("p");
		 var name_p = document.createTextNode(name_retrieve);
		 post.appendChild(name_div);
		 name_div.appendChild(name);
		 name.appendChild(name_p);
		 //Div username
		var nickname_div = document.createElement("DIV");
		nickname_div.classList.add("post-small-far");
		var nickname = document.createElement("p");
		var nickname_p = document.createTextNode(nickname_retrieve);
		post.appendChild(nickname_div);
		nickname_div.appendChild(nickname);
		nickname.appendChild(nickname_p);
		nickname.addEventListener('click',function() {
			var a = this.innerHTML;
			var query1 = database.ref('users/').orderByChild('Username').equalTo(a);
			query1.on('value',function(data) {
				var re = data.val();
				var nick = re.Username;
			  window.location ="file:///I:/Tecnoinnova/animal_saving/other/index.html?id="+re;
			});
		});
		//Div race
		var race_div = document.createElement("DIV");
		race_div.classList.add("post-small");
		var race = document.createElement("p");
		var race_p = document.createTextNode(race_retrieve);
		post.appendChild(race_div);
		race_div.appendChild(race);
		race.appendChild(race_p);
	 }
	 //Div age
	 var age_div = document.createElement("DIV");
	 age_div.classList.add("post-small-far");
	 var age = document.createElement("p");
	 var age_p = document.createTextNode(age_retrieve);
	 post.appendChild(age_div);
	 age_div.appendChild(age);
	 age.appendChild(age_p);
	 //Div city
	 var city_div = document.createElement("DIV");
	 city_div.classList.add("post-small");
	 var city = document.createElement("p");
	 var city_p = document.createTextNode(city_retrieve);
	 post.appendChild(city_div);
	 city_div.appendChild(city);
	 city.appendChild(city_p);
	 //Div sex
	 var sex_div = document.createElement("DIV");
	 sex_div.classList.add("post-small");
	 var sex = document.createElement("p");
	 var sex_p = document.createTextNode(sex_retrieve);
	 post.appendChild(sex_div);
	 sex_div.appendChild(sex);
	 sex.appendChild(sex_p);
}, function (error) {
   console.log("Error: " + error.code);
});

//
function getParameterByName(name, url) {
if (!url) url = window.location.href;
name = name.replace(/[\[\]]/g, '\\$&');
var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
		results = regex.exec(url);
if (!results) return null;
if (!results[2]) return '';
return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
var pet = getParameterByName("id");
var city = getParameterByName("param2");
var kind = getParameterByName("param3");
var age = getParameterByName("param4");
var user = getParameterByName("param5");

if (pet || city || kind || age || user) {
		var resultados = document.getElementById('search-results');
		resultados.style.display = "block";
		//db
		var database = firebase.database();
		var ref = database.ref('pets');
		var search_pet = document.getElementById('search_pet');
		search_pet.value = pet;

		if (pet) {

			var query = ref.orderByChild("Race").equalTo(pet);
		  query.on("value", function(data) {
				var obj = data.val();
				console.log(data.val())
				var keys = Object.keys(obj);

				var values = Object.values(data.val());
			console.log(keys)
				console.log(values)

				for(var i=0;i<keys.length;i++) {
					var a=values[i];
					var name_retrieve = values[i].Race;
					var name_retrieve = values[i].Name;
		 		 var nickname_retrieve = values[i].OwnerNick;
		 		 var race_retrieve = values[i].Race;
		 		 var age_retrieve = values[i].Age;
		 		 var city_retrieve = values[i].City;
				 var sex_retrieve = values[i].Sex;

					//Div principal
					var div_pets = document.getElementById("the_search_results");
					var post = document.createElement("DIV");
					post.classList.add("post-results");
					div_pets.appendChild(post);
					//Div imagen
		 		 var img_div = document.createElement("DIV");
		 		 img_div.classList.add("post-small");
		 		 var img = document.createElement("p");
		 		 var img_p = document.createTextNode("No disponible");
		 		 post.appendChild(img_div);
		 		 img_div.appendChild(img);
		 		 img.appendChild(img_p);
		 		 //Div nombre
		 		 var name_div = document.createElement("DIV");
		 		 name_div.classList.add("post-small");
		 		 var name = document.createElement("p");
		 		 var name_p = document.createTextNode(name_retrieve);
		 		 post.appendChild(name_div);
		 		 name_div.appendChild(name);
		 		 name.appendChild(name_p);
		 		 //Div username
		 		var nickname_div = document.createElement("DIV");
		 		nickname_div.classList.add("post-small-far");
		 		var nickname = document.createElement("p");
		 		var nickname_p = document.createTextNode(nickname_retrieve);
		 		post.appendChild(nickname_div);
		 		nickname_div.appendChild(nickname);
		 		nickname.appendChild(nickname_p);
		 		//Div race
		 		var race_div = document.createElement("DIV");
		 		race_div.classList.add("post-small");
		 		var race = document.createElement("p");
		 		var race_p = document.createTextNode(race_retrieve);
		 		post.appendChild(race_div);
		 		race_div.appendChild(race);
		 		race.appendChild(race_p);

		 	 //Div age
		 	 var age_div = document.createElement("DIV");
		 	 age_div.classList.add("post-small-far");
		 	 var age = document.createElement("p");
		 	 var age_p = document.createTextNode(age_retrieve);
		 	 post.appendChild(age_div);
		 	 age_div.appendChild(age);
		 	 age.appendChild(age_p);
		 	 //Div city
		 	 var city_div = document.createElement("DIV");
		 	 city_div.classList.add("post-small");
		 	 var city = document.createElement("p");
		 	 var city_p = document.createTextNode(city_retrieve);
		 	 post.appendChild(city_div);
		 	 city_div.appendChild(city);
		 	 city.appendChild(city_p);
			 //Div sex
			var sex_div = document.createElement("DIV");
			sex_div.classList.add("post-small");
			var sex = document.createElement("p");
			var sex_p = document.createTextNode(sex_retrieve);
			post.appendChild(sex_div);
			sex_div.appendChild(sex);
			sex.appendChild(sex_p);
			 }
		 });

		}

}
