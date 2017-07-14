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
            var name = document.createElement('h2');

            link.setAttribute('href', val.link);
            img.setAttribute('src', val.imgSrc);
            link.innerHTML = val.name;

            listItem.appendChild(img);
            listItem.appendChild(link);
            services2Element.appendChild(listItem);
        });
    })
}









