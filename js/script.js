/* Author:

*/

getLokalen();

function showLokalen(data){
    var div = $('#lijstje');
    for (var lokaal in data.jeugdwerk){

        $("<a />").attr("href", "")
        .attr("data-role","button")
        .text(lokaal.organisati)
        .appendTo(div);
        
        
        
    }
}



