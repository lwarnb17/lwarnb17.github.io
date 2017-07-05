function getJSON(url) {
    return fetch(url)
        .then(function (response) {
        return response.json();
    })
        .catch(function (error) {
        console.log(error);
    });
}


function fetchShips() {
    var url = "//swapi.co/api/starships/";
    getJSON(url).then(function (data) {

        //console.log(data);
        var results = data.results;

        var shipListElement= document.getElementById('shiplist');
        shipListElement.innerHTML = "";

        results.forEach(function(ship){
            //console.log(ship);

            //create elements for list... li and a

            var listItem = document.createElement('li');
            var link = document. createElement('a');

            //set href attribute to the URL of the ship

            link.setAttribute('href', ship.url);
            //set the conents of the link element to the name of the ship

            link.innerHTML = ship.name;
            link.addEventListener('click', function(event){
                event.preventDefault();
                getShipDetails(ship.url);
            });
            //add the link to the list items
            listItem. appendChild(link);
            //and the list item to the list
            shipListElement.appendChild(listItem);


    });
    });
}



//Part 2
//get all of our new list items hint:querySelectorAll

//loop through each item
    //attach a click event listener
        //when clicked the default link behavor should be stopped, and the ship details function should be called...passing the value of href attruibute in


//part 3
//set prev and next links


function getShipDetails(url){
    getJSON(url).then(function(data){
        console.log(data);
        document.querySelector('.name').innerHTML = data.name;
        document.querySelector('.model').innerHTML = data.model;
        document.querySelector('.class').innerHTML = data.starship_class;
        document.querySelector('detailsbox').classList.remove('hidden');
    });
}
fetchShips();



//Breena, Corey, Casey
