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
        var a=[];
        entity_index('entity_node',query, {

                success: function(nodes) {
                    for(var i=0;i < nodes.length;i++){
                        a.push(nodes[i].field_patient.und[0].value);
                        console.log(nodes[i].field_patient.und[0].value);

                    }
      
            }
        });
        console.log(a.length);



});