let http = new XMLHttpRequest();
http.open("GET", 'https://api.republicofdevs.com/api/v1/zipcodes', true);
http.setRequestHeader('Content-type', 'text/html; charset=UTF-8');
http.onreadystatechange = function() {
    if (http.readyState == 4) {
        if (http.status == 200){
            OkCallback(JSON.parse(http.responseText));
        }
        else
            ErrorCallback(http);
    }
};
http.onerror = OkCallback;
http.send(text);