document.onkeydown = function (e){
    if ( e.code == "Enter"){
        var v = document.getElementsByClassName("search-bar")[0].value;
        location = encodeURI("https://www.google.com/search?q=" + v);
    }
}