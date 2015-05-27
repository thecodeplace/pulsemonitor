$(document).ready(function() {
    console.log("Tables");
    Drupal.settings.site_path = "http://www.thecodeplace.com/pulsemonitor_drup"; // http://www.example.com
        
        // Set the Service Resource endpoint path.
        Drupal.settings.endpoint = "api";
        
        // Perform a System Connect call.
        var query = {
            parameters: {
                'type': 'article'
            }
        };
        var numbers = new Array();
        Array.prototype.contains = function(v) {
    for(var i = 0; i < this.length; i++) {
        if(this[i] === v) return true;
    }
    return false;
};

Array.prototype.unique = function() {
    var arr = [];
    for(var i = 0; i < this.length; i++) {
        if(!arr.contains(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr; 
}

        var length;
        entity_index('entity_node',query, {

                success: function(nodes) {
                    for(var i=0;i < nodes.length;i++){
                        
                        length = numbers.push(nodes[i].field_patient.und[0].value);
                        
                    }
            }
        });
        console.log(numbers.length);
        var uniques = numbers.unique();
        console.log(uniques);


});