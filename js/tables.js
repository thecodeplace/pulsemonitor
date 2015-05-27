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

        var length;
        var newdata;
        entity_index('entity_node',query, {

                success: function(nodes) {
                    length = nodes.length;
                    newdata = new Array(length);
                    for(var i=0;i < nodes.length;i++){
                        newdata[i] = String(nodes[i]);
                        console(newdata[i]);
                        console.log(nodes[i].field_patient.und[0].value);
                    }
            }
        });
        console.log(newdata);



});