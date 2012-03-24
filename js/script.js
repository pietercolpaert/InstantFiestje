/* Author:

*/

getLokalen();

function showLokalen(data){
    var div = $('<div />');
    div.appendTo($("#content"));
        div.attr("data-role", "controlgroup");
    
    for (var lokaal in data.jeugdwerk){
//        <div data-role="controlgroup">
//<a href="index.html" data-role="button">Yes</a>
//<a href="index.html" data-role="button">No</a>
//<a href="index.html" data-role="button">Maybe</a>
//</div>

        $("<a />").attr("href", "")
        .attr("data-role","button")
        .text(lokaal.organisati)
        .appendTo(div);
        
        
        
    }
}



