/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var api_url = "http://data.appsforghent.be/";

function getLokalen(){
    $.ajax({
        url: api_url+"poi/jeugdwerk.json",
        success: function(data){
            showLokalen(data)
        }
       
    })
    
    
    
}
