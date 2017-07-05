(function init(){
    var franklin
}












function ajaxFromLocalJson() {
    getJSON("/weather.weather.json").then(function (data) {
        console.log(data);
        var location = data["Franklin"]["City"];
        var state = data["Franklin"]['State'];
        var temp_f = date["Franklin"]['High'];

        console.log("Current temperature in " + location + "is: " + temp_f);

        var cur_location = document.getElementById("location");
        var temp = document.getElementById("temp");
        var message = document.getElementById("message");

        cur_location.innerHTML = location + " is: " + temp_f);
    });
}
