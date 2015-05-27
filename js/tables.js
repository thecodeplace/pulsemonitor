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
       // var data = {"1", "4", "9"};

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
        //var newdata;
        entity_index('entity_node',query, {

                success: function(nodes) {
                    length = nodes.length;
                    newdata = new Array(length);
                    for(var i=0;i < nodes.length;i++){
                        console.log(nodes[i].field_patient.und[0].value);
                        var newdata = nodes[i].field_patient.und[0].value;
                        console.log(newdata);
                        data.push(newdata);
                    }
                    console.log(data.length);
                    var uniques = data.unique();
                    console.log(uniques.length);
            }
        });
        
        



});