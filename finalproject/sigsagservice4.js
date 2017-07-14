function getJSON(url) {
    return fetch(url)
        .then(function (response) {
        return response.json();
    })
        .catch(function (error) {
        console.log(error);
    });
}
function gallery2(){
    getJSON("sigsagservice.json").then(function( data ){
        console.log('test');
        console.log(data);
        var items= [];
        var services2Element = document.getElementById("gallery");

        data.gallery.forEach( function(val){
            console.log(val);

            var listItem = document.createElement('li');
            var img = document.createElement('img');
            var link = document. createElement('a');


            link.setAttribute('href', val.url);
            img.setAttribute('src', val.img);
            link.innerHTML = val.link;

            listItem. appendChild(img);
            listItem. appendChild(link);
            services2Element.appendChild(listItem);
        });
    })
}









